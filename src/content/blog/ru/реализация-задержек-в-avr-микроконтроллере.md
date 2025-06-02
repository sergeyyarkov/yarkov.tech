---
author: Сергей Ярков
title: Реализация задержек в AVR микроконтроллере
description: Очень часто в программах приходится выполнять задержку. Например
  при реализации какого либо протокола необходимо в точности выдерживать
  тайминги, или же необходимо выполнять какую либо логику раз в несколько часов
  или дней. В этой статье рассмотрены несколько способов реализации задержек.
tags:
  - AVR
  - Tutorial
  - Microcontrollers
pubDate: 2023-10-15T16:28:52.587Z
updatedDate: 2023-10-15T16:28:52.601Z
---

# Способы реализации

Существует два способа как можно реализовать задержку - это использовать аппаратные таймеры микроконтроллера или использовать простой цикл который выполняется определенное количество тактов. Преимущество использования аппаратного таймера микроконтроллера перед обычным программным циклом заключается в неблокирующем выполнении программы за счет того что работа таймера-счетчика не зависит от выполнения основной программы. Но иногда нужно использовать задержку всего в несколько микросекунд, что особо не повлияет на работу программы в некоторых случаях, тогда можно посмотреть в сторону простых циклов. Будет рассмотрен вариант и с длительной задержкой в несколько часов или дней. Программы будут представлены на языке Си и Ассемблера для микроконтроллера AVR ATtiny45V. В качестве основной программы будет моргающий светодиод который переключается раз в 0.5 секунд.

## Используем цикл

Для реализации этого способа задержки для начала нужно посчитать кол-во тактов процессора для выполнения задержки в N секунд и затем сделать цикл. Например для МК с частотой в 8 MHz один такт будет равен `1/8 = 0.125uS`. Значит чтобы рассчитать кол-во тактов например в 0.5 секунд то это будет `(0.5 × 1,000,000) × 8 = 4,000,000` тактов, т.е половина от частоты МК.

Реализация цикла задержки на ассемблере:

```asmatmel
.MACRO	delay16
	ldi		delay8_r, LOW(@0 * F_CPU / 4 - 3)			; 1
	ldi		delay16_r, HIGH(@0 * F_CPU / 4 - 3)		; 1
	rcall	DELAY16_LOOP													; 3
.ENDMACRO

DELAY16_LOOP:
	subi	delay8_r, 1			                      ; 1
	sbci	delay16_r, 0		                      ; 1
	brcc	DELAY16_LOOP		                      ; 1 = false, 2 = true
	ret							                            ; 4
```

Каждая инструкция в микроконтроллере выполняется за определенное кол-во тактов (комментарии в коде выше). Например инструкция `ldi` выполняется за один такт, а инструкция `brcc` выполняется за два такта - когда условие верно и за один такт когда условие неверно. На кол-во тактов так же влияет и разрядность программного счетчика (см. [AVR Instruction Set](http://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf)).

### Пояснения к программе

В данной реализации используется макрос `delay16` который загружает кол-во тактов в два 8-ми битных регистра которые помечены как младший и старший. Затем вызывается подпрограмма выполнения цикла. Зачем нужно в расчете тактов делить полученное число на 4? Посмотрите на подпрограмму `DELAY16_LOOP` которая выполняет декрементирование 16-ти битного числа, вы увидите что одна итерация цикла занимает 4 такта. От полученного числа отнимаем 3 для компенсации времени.

В итоге максимальная задержка которая может получиться при работе МК в 8 MHz вызвав этот макрос равняется `65535/8 * 4 = 32767.5uS` что не совсем подходит для мигания светодиодом. Что бы сделать задержку дольше, можно использовать 24 бита для хранения кол-ва тактов. Тогда максимальная задержка составит `16,777,216/8 * 5 = 10.48сек`. В итоге получается такая программа с переключающимся светодиодом раз в 0.5 секунд:

```asmatmel
.EQU	F_CPU			      = 8 ; MHz

.DEF	t1			        = r16
.DEF	t2			        = r17
.DEF	delay24_r		    = r18
.DEF	delay16_r		    = r19
.DEF	delay8_r		    = r20

.EQU	LED_DDR			    = DDRB
.EQU	LED_PORT		    = PORTB
.EQU	LED_PIN_DATA		= PINB
.EQU	LED_PIN			    = PB0

.MACRO	delay24
    ldi		delay8_r, LOW(@0 * F_CPU / 5 - 3)
    ldi		delay16_r, HIGH(@0 * F_CPU / 5 - 3)
    ldi		delay24_r, BYTE3(@0 * F_CPU / 5 - 3)
    rcall	DELAY24_LOOP
.ENDMACRO

.CSEG

.ORG 	0x00
    rjmp		RESET_vect

RESET_vect:
    ldi		t1, LOW(RAMEND)
    out		SPL, t1

INIT:
    ldi		t1, (1<<LED_PIN)
    out		LED_DDR, t1
    clr		t1
    out		LED_PORT, t1

LOOP:
    nop
    delay24	500000
    nop
    rcall	LED_TOGGLE
    rjmp	LOOP

LED_TOGGLE:
    push	t1
    push	t2
    in		t1, LED_PIN_DATA
    ldi		t2, (1<<LED_PIN)
    eor		t1, t2
    out		LED_PORT, t1
    pop		t2
    pop		t1
    ret

DELAY24_LOOP:
    subi	delay8_r, 1
    sbci	delay16_r, 0
    sbci	delay24_r, 0
    brcc	DELAY24_LOOP
    ret
```

Выполнить компиляцию:

```bash
avrasm2 -fI ./main.asm
```

Если использовать 32 бита для хранения кол-ва тактов то максимальная задержка уже составит 3221 секунда! Также вместо регистров общего назначения можно использовать ячейки, определенные в оперативной памяти (SRAM).

Чтобы проверить точно ли выполняется задержка, воспользуемся симулятором который встроен в IDE MPLAB X. Перед этим необходимо настроить частоту работы МК в конфигурации проекта:

<figure>
	<img src="/media/mplabx-ide-sim-option.png" alt="Выбор частоты выполнения инструкций для симулятора">
	<figcaption>Выбор частоты выполнения инструкций для симулятора</figcaption>
</figure>

Установим точки останова на холостые операции `nop` до и после вызова макроса и выполним отладку:

![Отладка программы](/media/screen-1.png)

До вызова инструкции `nop` прошло 8 тактов или 1 микросекунда. Очищаем Stopwatch и нажимаем кнопку продолжения программы (F5):

![Отладка программы](/media/screen-2.png)

Можно видеть что после выхода из подпрограммы `DELAY24_LOOP` прошло ровно 500 миллисекунд.

Для языка Си все будет довольно просто. Библиотека [AVR Libc](https://www.nongnu.org/avr-libc/) поставляется с набором утилит которые упрощают программирование. Поэтому нам достаточно указать частоту МК и вызвать определенную функцию. Эта функция как раз из рассчитает нужное кол-во тактов процессора и выполнит цикл.

Код основной программы на языке Си:

```c
#define F_CPU 8000000

#include <avr/io.h>
#include <util/delay.h>

#define PIN_LED PB0

int main(void) {
  DDRB |= _BV(PIN_LED);
  PORTB = 0x00;
  for(;;) {
    _delay_ms(500);
    PORTB ^= _BV(PIN_LED);
  }
  return 0;
}
```

Выполнить компиляцию:

```c
avr-gcc -Wall -mmcu=attiny45 -Os main.c
avr-objcopy -j .text -j .data -O ihex a.out main.hex
```

## Используем таймеры

Что если программе не нужно затрачивать процессорное время на выполнение цикла задержки? Как отмечалось ранее работа таймера-счетчика не зависит от выполнения программы. Счетчик может инкрементироваться хоть раз в секунду при работе процессора с частотой в 8MHz. Существует несколько способов как сделать задержку используя 8-ми или 16-ти битные таймеры. Я опишу некоторые из них.

### 8-ми битный таймер с предделителем 16384

Для микроконтроллера ATtiny45V имеются только 8-ми битные таймеры, причем у одного из них (TIMER1) имеется делитель частоты на 16384 что очень удобно:

<figure>
	<img src="/media/screen-3.png" alt="Таблица выбора предделителя для таймера-счетчика 1">
	<figcaption>Таблица выбора предделителя для таймера-счетчика 1</figcaption>
</figure>

Будем использовать таймер в CTC (Clear on Timer Compare match) режиме. Итоговая частота работы таймера-счетчика будет равна: `8MHz/16384 = 488.28Hz`. Один тик таймера будет равняться `1/488.28 = 2048uS`. Значит для 0.5 секунд значение счетчика будет равняться `0.5×488.38 = 244.14` тиков что достаточно для 8-бит. Будем записывать число в регистр сравнения `OCRn` и генерировать прерывание при совпадении.

Программа на ассемблере:

```asmatmel
.DEF	t1			      = r16
.DEF	t2			      = r17

.EQU	LED_DDR			  = DDRB
.EQU	LED_PORT		  = PORTB
.EQU	LED_PIN_DATA	= PINB
.EQU	LED_PIN			  = PB0

.CSEG

.ORG 	0x00
    rjmp	RESET_vect

.ORG	0x03
    rjmp	TIMER1_COMPA

RESET_vect:
    ldi		t1, LOW(RAMEND)
    out		SPL, t1

INIT:
    ldi		t1, (1<<LED_PIN)
    out		DDRB, t1
    clr		t1
    out		LED_PORT, t1

    ; ========= Setup 8-bit timer-1 in CTC mode with 16384 prescaler =============
    ; CPU Clock Freq = 8MHz
    ; Freq(t) = 8MHz / 16384 = 488.28125 Hz
    ; Tick = 1 / Freq(t) = 1 / 488.28125 = 2048uS (0.002048 sec)
    ; Ticks = 0.5 sec / 0.002048 sec = 244
    ; ============================================================================
    ldi		t1, (1<<CTC1) | (1<<CS13) | (1<<CS12) | (1<<CS11) | (1<<CS10)
    out		TCCR1, t1							    ; setup timer
    clr 	t1								        ; clear timer counter register
    out		TCNT1, t1
    ldi		t1, 244								    ; 0.5 sec
    out		OCR1A, t1
    out 	OCR1C, t1							    ; for clearing timer on compare match
    ldi		t1, (1<<OCIE1A)						; enable output compare A interrupt
    out		TIMSK, t1

    sei

LOOP:
    nop
    rjmp	LOOP

LED_TOGGLE:
    push	t1
    push	t2
    in		t1, LED_PIN_DATA
    ldi		t2, (1<<LED_PIN)
    eor		t1, t2
    out		LED_PORT, t1
    pop		t2
    pop		t1
    ret

TIMER1_COMPA:
    push	t1
    in		t1, SREG
    rcall	LED_TOGGLE
    out		SREG, t1
    pop		t1
    reti
```

Программа на языке Си:

```c
#define F_CPU 8000000

#include <avr/interrupt.h>
#include <avr/io.h>

#define LED_DDR DDRB
#define LED_PORT PORTB
#define LED_PIN_DATA PINB
#define LED_PIN PB0

/*
 * Timer Counter 1
 * Mode: CTC
 * Prescaler: 16384
 */
void setup_tc1(void) {
  TCCR1 |= _BV(CTC1) | _BV(CS13) | _BV(CS12) | _BV(CS11) | _BV(CS10);
  TCNT1 = 0x00;
  OCR1A = 244;
  OCR1C = 244;
  TIMSK |= _BV(OCIE1A);
}

void setup_ports(void) {
  DDRB |= _BV(LED_PIN);
  PORTB = 0x00;
}

/*
 * Interrupt every 0.5 sec
 */
ISR(TIMER1_COMPA_vect) {
  LED_PORT ^= _BV(LED_PIN);
}

void system_init(void) {
  setup_ports();
  setup_tc1();
  sei();
}

int main(void) {
  system_init();
  for (;;) {
    asm("nop");
  }
  return 0;
}
```

### 8-ми битный таймер с предделителем 1024

Что если доступен предделитель частоты только на 1024? Тогда регистр для сравнения `OCRn` будет равняться 3906, что не подходит для 8-ми битного регистра. Как вариант можно считать количество переполнений таймера. `3906.25/255 = 15` переполнений.

Программа на ассемблере:

```asmatmel
.DEF	t1 			        = r16
.DEF	t2 			        = r17
.DEF	tc1_ovf_cnt		  = r18

.EQU	LED_DDR			    = DDRB
.EQU	LED_PORT		    = PORTB
.EQU	LED_PIN_DATA		= PINB
.EQU	LED_PIN			    = PB0

.EQU	TC1_OVF_COMPARE_VAL 	= 15

.CSEG

.ORG 	0x00
    rjmp		RESET_vect

.ORG	0x04
    rjmp		TIMER1_OVF

RESET_vect:
    ldi		t1, LOW(RAMEND)
    out		SPL, t1

INIT:
    ldi		t1, (1<<LED_PIN)
    out		DDRB, t1
    clr		t1
    out		LED_PORT, t1

    ; ========= Setup 8-bit timer-1 in Normal mode with 1024 prescaler =======================
    ; CPU Clock Freq = 8MHz
    ; Freq(t) = 8MHz / 1024 = 7812.5 Hz
    ; Tick = 1 / Freq(t) = 1 / 7812.5 = 128uS (0.000128 sec)
    ; Ticks = 0.5 sec / 0.000128 sec = 3906.25
		; Overflows count = 3906 / 255 = 15
    ; ======================================================================================
    ldi		t1, (1<<CS13) | (1<<CS11) | (1<<CS10)
    out		TCCR1, t1						; setup timer
    clr 	t1							    ; clear timer counter register
    out		TCNT1, t1
    ldi		t1, (1<<TOIE1)			; enable overflow interrupt
    out		TIMSK, t1
    sei

LOOP:
    nop
    rjmp	LOOP

LED_TOGGLE:
    push	t1
    push	t2
    in		t1, LED_PIN_DATA
    ldi		t2, (1<<LED_PIN)
    eor		t1, t2
    out		LED_PORT, t1
    pop		t2
    pop		t1
    ret

TIMER1_OVF:
    push	t1
    in		t1, SREG
    inc		tc1_ovf_cnt
    cpi		tc1_ovf_cnt, TC1_OVF_COMPARE_VAL
    brne	PC+3
    rcall	LED_TOGGLE
    clr		tc1_ovf_cnt						; clear timer overflow counter register
    out		SREG, t1
    pop		t1
    reti
```

Программа на языке Си:

```c
#define F_CPU 8000000

#include <avr/interrupt.h>
#include <avr/io.h>

#define TC1_OVF_COMPARE_VAL 15

#define LED_DDR DDRB
#define LED_PORT PORTB
#define LED_PIN_DATA PINB
#define LED_PIN PB0

static volatile uint8_t tc1_ovf_cnt = 0;

/*
 * Timer Counter 1
 * Mode: Normal
 * Prescaler: 1024
 */
void setup_tc1(void) {
  TCCR1 |= _BV(CS13) | _BV(CS11) | _BV(CS10);
  TCNT1 = 0x00;
  TIMSK |= _BV(TOIE1);
}

void setup_ports(void) {
  DDRB |= _BV(LED_PIN);
  PORTB = 0x00;
}

ISR(TIMER1_OVF_vect) {
  tc1_ovf_cnt++;
  if (tc1_ovf_cnt == TC1_OVF_COMPARE_VAL) {
    LED_PORT ^= _BV(LED_PIN);
    tc1_ovf_cnt = 0;
  }
}

void system_init(void) {
  setup_ports();
  setup_tc1();
  sei();
}

int main(void) {
  system_init();
  for (;;) {
    asm("nop");
  }
  return 0;
}
```

### Длительная задержка

Бывают случаи когда нужно выполнять какую либо логику раз в несколько часов или дней. Решением является завести глобальную переменную где будем хранить количество прошедших секунд с момента начала отсчета таймера, а в прерывании переполнения таймера будем уже сравнивать значение счетчика с заданным числом. Следующая программа переключает светодиод раз в 6 часов.

```asmatmel
.DEF	t1 			        = r16
.DEF	t2 			        = r17
.DEF	tc1_ovf_cnt		  = r18

.EQU	LED_DDR			    = DDRB
.EQU	LED_PORT		    = PORTB
.EQU	LED_PIN_DATA		= PINB
.EQU	LED_PIN			    = PB0

.EQU	TC1_OVF_COMPARE_VAL 	= 30

.DSEG
.ORG	SRAM_START

ellapsed_seconds: .BYTE 2

.CSEG

.ORG 	0x00
    rjmp		RESET_vect

.ORG	0x04
    rjmp		TIMER1_OVF

RESET_vect:
    ldi		t1, LOW(RAMEND)
    out		SPL, t1

INIT:
    ldi		t1, (1<<LED_PIN)
    out		DDRB, t1
    clr		t1
    out		LED_PORT, t1

		sts		ellapsed_seconds, t1
		sts		ellapsed_seconds+1, t1

    ; ========= Setup 8-bit timer-1 in Normal mode with 1024 prescaler =======================
    ; CPU Clock Freq = 8MHz
    ; Freq(t) = 8MHz / 1024 = 7812.5 Hz
    ; Tick = 1 / Freq(t) = 1 / 7812.5 = 128uS (0.000128 sec)
    ; Ticks = 1 sec / 0.000128 sec = 7812,5
		; Overflows count = 7812 / 255 = 30
    ; ======================================================================================
    ldi		t1, (1<<CS13) | (1<<CS11) | (1<<CS10)
    out		TCCR1, t1						; setup timer
    clr 	t1							    ; clear timer counter register
    out		TCNT1, t1
    ldi		t1, (1<<TOIE1)			; enable overflow interrupt
    out		TIMSK, t1
    sei

LOOP:
    nop
    rjmp	LOOP

LED_TOGGLE:
    push	t1
    push	t2
    in		t1, LED_PIN_DATA
    ldi		t2, (1<<LED_PIN)
    eor		t1, t2
    out		LED_PORT, t1
    pop		t2
    pop		t1
    ret

TIMER1_OVF:
    push	t1
    in		t1, SREG
    inc		tc1_ovf_cnt
    cpi		tc1_ovf_cnt, TC1_OVF_COMPARE_VAL
    brne	_TIMER1_OVF_EXIT

		clr		tc1_ovf_cnt												; clear timer overflow counter register

		lds 	r24,ellapsed_seconds
    lds 	r25,ellapsed_seconds+1
    adiw 	r24, 1
		sts 	ellapsed_seconds+1, r25
    sts 	ellapsed_seconds, r24

		cpi		r24, LOW(21600)
		sbci	r25, HIGH(21600)
		brne	_TIMER1_OVF_EXIT
   	rcall	LED_TOGGLE
		clr		r25
		sts		ellapsed_seconds, r25							; clear ellapsed seconds
		sts		ellapsed_seconds+1, r25						; -----------------------

_TIMER1_OVF_EXIT:
		out		SREG, t1
    pop		t1
    reti
```

Программа на языке Си:

```c
#include <avr/interrupt.h>
#include <avr/io.h>

#define TC1_OVF_COMPARE_VAL 30

#define LED_DDR DDRB
#define LED_PORT PORTB
#define LED_PIN_DATA PINB
#define LED_PIN PB0

static volatile uint8_t tc1_ovf_cnt = 0;
static volatile uint16_t ellapsed_seconds = 0;

/*
 * Timer Counter 1
 * Mode: Normal
 * Prescaler: 1024
 */
void setup_tc1(void) {
  TCCR1 |= _BV(CS13) | _BV(CS11) | _BV(CS10);
  TCNT1 = 0x00;
  TIMSK |= _BV(TOIE1);
}

void setup_ports(void) {
  DDRB |= _BV(LED_PIN);
  PORTB = 0x00;
}

ISR(TIMER1_OVF_vect) {
  tc1_ovf_cnt++;

  if (tc1_ovf_cnt == TC1_OVF_COMPARE_VAL) {
    tc1_ovf_cnt = 0;
    ellapsed_seconds++;

    /* Every 6 hours */
    if (ellapsed_seconds == 21600) {
      LED_PORT ^= _BV(LED_PIN);
      ellapsed_seconds = 0;
    }
  }
}

void system_init(void) {
  setup_ports();
  setup_tc1();
  sei();
}

int main(void) {
  system_init();
  for (;;) {
    asm("nop");
  }
  return 0;
}
```

# Заключение

Рассмотрены два основных способа реализации задержки используя таймеры и циклы. Выяснили что используя таймер-счетчик можно сделать задержку, которая не будет блокировать основной поток выполнения программы. Для длительных задержек, где необходимо отслеживать прошедшее время в секундах или часах, можно использовать глобальные переменные.

# Полезные материалы

- [AVR Instruction Set](https://ww1.microchip.com/downloads/en/devicedoc/atmel-0856-avr-instruction-set-manual.pdf)
- [AVR130: Setup and Use of AVR Timers](https://ww1.microchip.com/downloads/en/Appnotes/Atmel-2505-Setup-and-Use-of-AVR-Timers_ApplicationNote_AVR130.pdf)
- [AVR Delay Loop Calculator](http://darcy.rsgc.on.ca/ACES/TEI4M/AVRdelay.html)
- [AVR Timer Calculator](https://eleccelerator.com/avr-timer-calculator/)
