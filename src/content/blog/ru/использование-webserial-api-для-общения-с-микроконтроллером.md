---
coverImage: /media/serial-port.jpg
draft: false
author: Сергей Ярков
title: Использование WebSerial API для общения с микроконтроллером
description: Речь пойдет о том, что такое WebSerial API, как его можно
  использовать в браузере для чтения и записи данных в последовательное
  устройство и где его можно применить.
tags:
  - JavaScript
  - AVR
  - WebSerial API
  - Tutorial
pubDate: 2022-11-04T21:00:00.000Z
updatedDate: 2023-02-13T16:34:23.326Z
---
# Что вы узнаете

По итогу вы узнаете, как отправлять и принимать данные от устройства с последовательным портом в браузере, разработаете демонстрационное веб-приложение, которое отправляет команды в микроконтроллер с последовательным портом и напишите прошивку для микроконтроллера [AVR128DA48](http://ww1.microchip.com/downloads/en/DeviceDoc/40002183A.pdf) для обработки этих команд. Готовый вариант проекта можно посмотреть [здесь](https://web-serial-example.netlify.app/), исходники загружены в [репозиторий](https://github.com/sergeyyarkov/avr128da48_web-serial-example) на GitHub.

# Что это и где применяется

WebSerial API - это браузерный API, который предоставляет возможность к чтению и записи данных в последовательное устройство. Использование этого API довольно простое, нужно лишь написать несколько строк кода, чтобы получить или отправить ваши данные. К тому же имеется подробная [документация](https://wicg.github.io/serial/), где имеются примеры использования этого API.

Благодаря этому API, открываются новые возможности. Например, вы можете перепрошивать ваш микроконтроллер прямо из браузера, что звучит весьма интересно (но перед этим вам необходимо написать bootloader), или же просто выводить информацию с датчиков на веб страницу. Вариантов применения неограниченно, все зависит только от вашей фантазии.

Еще существуют и высокоуровневые API для доступа к таким устройствам как геймпад или камера. Я оставлю эту ссылку на [эту](https://web.dev/devices-introduction/) статью, где рассказывается про список этих API.

# Поддержка браузеров

На момент написания статьи (2022 год) полноценная поддержка этого API доступна лишь в браузерах на базе Chromium. Полную таблицу можно посмотреть на сайте [Can I Use](https://caniuse.com/web-serial).

На Android поддержка может быть осуществлена на базе [WebUSB API](https://wicg.github.io/webusb/) и [полифилла Serial API](https://github.com/google/web-serial-polyfill).

# Краткий экскурс про UART

Перед работой с последовательным портом, неплохо было бы знать основы протокола передачи данных UART, если вы с ним уже знакомы, можете пропустить эту часть.

**UART** - расшифровывается как (Universal Asynchronous Receiver Transmitter) - универсальный асинхронный приемопередатчик, который определяет протокол для приема и передачи данных между двумя устройствами. **Универсальность** означает, что мы можем настраивать параметры, включая скорость передачи данных. **Асинхронность** же означает, что у нас нет синхронизирующего сигнала между передатчиком и приёмником. Существует также и синхронная версия передачи данных с общим тактовым сигналом, которая может передавать данные намного быстрее, но она используется редко. Для связи двух устройств используются лишь две линии, которые обозначаются как RX (**receiver**) и TX (**transmitter**).

<figure>

<img alt="Схема подключения двух UART устройств" width="550" height="300" src="/media/uart-connection.jpg" loading="lazy" decoding="async">

<figcaption>Схема подключения двух UART устройств</figcaption>

</figure>

UART передает данные последовательно по одному биту в одном из трех режимов:

* односторонний режим - данные отправляются только в одном направлении, от передатчика к приемнику
* полудуплексный режим - устройства могут передавать и принимать данные по очереди
* полнодуплексный режим - устройства могут передавать и принимать данные одновременно

Так как в этом проекте предполагается использование асинхронной версии UART, то соответственно необходимо устанавливать **одинаковую** скорость передачи битов в секунду (`baud rate`, `bps`) на двух устройствах. Наиболее распространенные скорости являются: **4800, 9600, 19.2 К, 57.6К и 115.2К.**

Данные передаются в виде так называемых `пакетов`, где каждый пакет содержит в себе:

* стартовый и стоповый биты - стартовый бит сигнализирует о поступлении битов данных, стоповый соответственно о конце данных.
* биты данных - пользовательские данные, которые поступают сразу после стартового бита, может содержаться от 5 до 8 битов.
* бит четности - необязательный бит, который идет после битов данных и перед стоповым битом и используется для обнаружения ошибок.

<figure>
	<img src="/media/uart-packet.jpg" width="700" height="300" alt="Структура UART пакета" format="webp">
	<figcaption>Структура UART пакета</figcaption>
</figure>

Я думаю этой информации вполне достаточно для того, чтобы понимать, что из себя представляет UART. Если вы хотите более подробно изучить этот интерфейс, то в интернете существует множество статей на эту тему.

# Преобразователь интерфейсов

Поскольку скорее всего вы будете подключать микроконтроллер к USB порту компьютера, вам необходим некий переводчик между двумя интерфейсами для отправки и получения данных, так как USB и UART совершенно разные протоколы передачи данных. Таких преобразователей существует множество, вот одни из них: [CH340](https://pdf1.alldatasheet.com/datasheet-pdf/view/1132602/WCH/CH340.html), [CP2102](https://pdf1.alldatasheet.com/datasheet-pdf/view/201067/SILABS/CP2102.html) или [FT232](https://pdf1.alldatasheet.com/datasheet-pdf/view/197629/FTDI/FT232BL.html). Если вы используете отладочную плату Arduino UNO, то у вас уже используется один из этих преобразователей на вашей плате.

<figure>
<img src="/media/arduino-uart-converter.png" width="470" height="320" alt="Преобразователь интерфейсов CH340G на плате Arduino UNO" format="webp"><figcaption>
 Преобразователь интерфейсов CH340G на плате Arduino UNO
 </figcaption>
</figure>

Если же на вашей отладочной плате не оказалось этого преобразователя интерфейсов, то вы можете приобрести модуль в любом магазине, цена на него обычно не превышает $5.

# Разработка прошивки для микроконтроллера

Как я упомянул ранее, прошивка будет написана для микроконтроллера AVR128DA48. На самом деле неважно какой микроконтроллер вы используете, вам достаточно нужно уметь отправлять и принимать данные используя UART периферию вашего микроконтроллера.

Суть программы будет очень проста: необходимо написать некий ***обработчик команд*** который будет принимать на вход строку (например `led_toggle`) и вызывать необходимую функцию, которая будет выполнять какое-то действие, в данном случае переключать светодиод.

Постановка задачи ясна, теперь рассмотрим реализацию данной программы. Я буду использовать среду разработки MPLAB X IDE и язык C для написания прошивки.

## Необходимые константы

Для начала для всего проекта определим список констант, создав файл `constants.h`:

```c
#ifndef CONSTANTS_H
#define	CONSTANTS_H

#define F_CPU           4000000UL
#define BAUD_RATE       9600
#define BUFFER_SIZE     20
#define EOT             0x04

#endif	/* CONSTANTS_H */
```

* `F_CPU` - тактовая частота микроконтроллера
* `BAUD_RATE` - скорость передачи данных UART
* `BUFFER_SIZE` - размер буфера, куда будем складывать поступающие данные
* `EOT` - End-of-Transmission, ASCII символ конца передачи данных

## Инициализация USART

Создадим заголовочный файл `usart.h` и определим несколько функций для инициализации USART, отправки символа и отправки строки.

```c
#include "constants.h"

#ifndef USART_H
#define	USART_H
#define USART1_BAUD_RATE(BAUD_RATE) ((float)(64 * F_CPU / (16 * (float)BAUD_RATE)) + 0.5)

#include <avr/io.h>
#include <stdio.h>
#include <string.h>

void USART1_Initialize(void);
void USART1_SendChar(char c);
void USART1_SendString(char *str);

#endif	/* USART_H */
```

Макрос `USART1_BAUD_RATE` вычисляет значение, которое необходимо записать в регистр `USARTn.BAUD` для установки скорости передачи данных. Формула взята из [документации](https://ww1.microchip.com/downloads/aemDocuments/documents/MCU08/ProductDocuments/DataSheets/AVR128DA28-32-48-64-Data-Sheet-40002183C.pdf) к микроконтроллеру (глава 25.3.2.2.1, таблица 25-1).

Реализуем функцию инициализации USART в файле `usart.c`:

```c
void USART1_Initialize(void) {
  /* set baud rate */
  USART1.BAUD = (uint16_t) (USART1_BAUD_RATE(BAUD_RATE));

  /* set char size in a frame to 8 bit */
  USART1.CTRLC = USART_CHSIZE0_bm | USART_CHSIZE1_bm;

  /* config pins for TX and RX */
  PORTC.DIRSET = PIN0_bm;
  PORTC.DIRCLR = PIN1_bm;

  /* enable reveice complete interrupt */
  USART1.CTRLA = USART_RXCIE_bm;

  /* enable transmitter and receiver */
  USART1.CTRLB = USART_TXEN_bm | USART_RXEN_bm;
}
```

Для полнодуплексного режима инициализация асинхронной версии USART происходит следующим образом:

* Конфигурация скорости передачи данных путем записывания значения в регистр `USARTn.BAUD`
* Конфигурация размера `фрейма`, в нашем случае это 8 бит.
* Конфигурация пина `TX` на выход и пина `RX` на вход.
* Включение прерывания на то, когда закончился прием данных (когда пришел один пакет).
* Включение приемника и передатчика.

Теперь, рассмотрим функции отправки данных:

```c
void USART1_SendChar(char c) {
  while (!(USART1.STATUS & USART_DREIF_bm));

  USART1.TXDATAL = c;
}

void USART1_SendString(char *str) {
  for (size_t i = 0; i < strlen(str); i++) {
    USART1_SendChar(str[i]);
  }
}
```

Для того чтобы отправить данные, необходимо записать в регистр `USARTn.TXDATAL` один байт, но перед этим нужно убедиться, что предыдущая передача была завершена путем проверки регистра `USARTn.STATUS`. Как указано в документации, бит `DREIF` (Data Register Empty Flag) является установленным, если данные в TX буфере **отсутствуют**. Соответственно можно сделать пустой цикл который будет выполняться пока у нас есть данные в TX буфере.

Функция отправки строки является некой оберткой, которая будет вызывать функцию отправки одного символа.

## Обработчик команд

Как видно из постановки задачи, на вход нам поступает некая строка, которая говорит о том, какое действие должно выполниться.

Определим заголовочный файл `command.h` и напишем туда следующее:

```c
#ifndef COMMAND_H
#define	COMMAND_H

#include <avr/io.h>
#include <string.h>

#define COMMAND_SIZE 5
#define COMMAND_MAX_NAME_LENGTH 20

struct Command {
  void *addr;
  char name[COMMAND_MAX_NAME_LENGTH];
};

uint8_t command_define(void *fp, char name[COMMAND_MAX_NAME_LENGTH]);
uint8_t command_process(char *cmd_name);
void command_list(void);

#endif	/* COMMAND_H */
```

Для решения этой задачи я предлагаю создавать массив структур, где в каждой структуре будет содержаться указатель на функцию которую нам нужно выполнить, и название самой команды.

* `command_define` будет создавать новую структуру в массиве.
* `command_process` будет вызывать соответствующую функцию по имени команды.
* `command_list` будет отправлять по UART информацию о существующих командах.

Реализовать задуманное можно следующим образом создав файл `command.c`:

```c
#include "command.h"
#include "usart.h"

struct Command commands[COMMAND_SIZE];
uint8_t cmd_idx = 0;

uint8_t command_define(void *fp, char name[COMMAND_MAX_NAME_LENGTH]) {
  size_t name_length = strlen(name);
  if (name_length > COMMAND_MAX_NAME_LENGTH) {
    return 0;
  }

  if (cmd_idx > COMMAND_SIZE) {
    cmd_idx = 0;
  }

  struct Command command;
  command.addr = fp;
  strcpy(command.name, name);
  commands[cmd_idx++] = command;
  return 1;
}

uint8_t command_process(char *cmd_name) {
  uint8_t i = 0;

  do {
    if (strcmp(cmd_name, commands[i].name) == 0) {
      int (*execute)();
      execute = commands[i].addr;
      execute();
      USART1_SendString("[LOG]: Command completed successfully with code \"0\".\n");
      USART1_SendChar(EOT);
      return 0;
    }
  } while (i++ < COMMAND_SIZE);

  USART1_SendString("[LOG]: Invalid command name!\n");
  USART1_SendChar(EOT);

  return 1;
}

void command_list(void) {
  USART1_SendString("[LOG]: List of available commands:\n");
  for (uint8_t i = 0; i < COMMAND_SIZE; i++) {
    if (commands[i].addr) {
      USART1_SendChar((i + 1) + '0');
      USART1_SendString(". ");
      USART1_SendString(commands[i].name);
      USART1_SendChar('\n');
    }
  }
}
```

Важно отметить, что после отправки данных, необходимо отослать символ `EOT`, который будет говорить о том, что передача закончена, это поможет в будущем в разработке веб-приложения.

## Прием данных

Последнее, что необходимо сделать, это принимать команды по USART и отправлять их обработчику. Для этого можно использовать прерывание:

```c
char buffer[BUFFER_SIZE];
volatile uint8_t buff_idx = 0;

ISR(USART1_RXC_vect) {
  if (buff_idx > BUFFER_SIZE) buff_idx = 0;
  buffer[buff_idx] = USART1.RXDATAL;
  buff_idx++;
}
```

После срабатывания прерывания `USART1_RXC_vect`, в регистре `USART1.RXDATAL` появляются данные (один байт). Этот байт мы должны записать в свой буфер с фиксированным размером. Еще есть другой вариант принятия данных не используя прерывание. Для этого достаточно проверять бит `RXCIF` (USART Receive Complete Interrupt Flag) в регистре `USARTn.STATUS`. Этот бит является установленным, когда в приемном буфере присутствуют данные.

Для того того чтобы обработать входящие команды, в главном цикле можно проверять буфер на наличие символа `\n`, этот символ будет означать конец названия команды:

```c
while (1) {
	if (buff_idx >= 1) {
	  if (buffer[buff_idx - 1] == '\n') {
	    buffer[buff_idx - 1] = '\0';
	    command_process(buffer);
	    buff_idx = 0;
	  }
	}
}
```

После нахождения этого символа, можно передать буфер обработчику, затем сбросить индекс буфера в ноль. В итоге файл `main.c` будет выглядеть следующим образом:

```c
#include <avr/io.h>
#include <avr/interrupt.h>
#include <string.h>
#include "constants.h"
#include "command.h"
#include "usart.h"

char buffer[BUFFER_SIZE];
volatile uint8_t buff_idx = 0;

void led_toggle(void);
void hello_world(void);

ISR(USART1_RXC_vect) {
  if (buff_idx > BUFFER_SIZE) buff_idx = 0;
  buffer[buff_idx] = USART1.RXDATAL;
  buff_idx++;
}

void MCU_Init_Ports(void) {
  /* led pin PC6 to output */
  PORTC.DIRSET = PIN6_bm;
}

int main(void) {
  MCU_Init_Ports();
  USART1_Initialize();
  sei();

  command_define(led_toggle, "led_toggle");
  command_define(hello_world, "hello");
  command_define(command_list, "list");

  while (1) {
    if (buff_idx >= 1) {
      if (buffer[buff_idx - 1] == '\n') {
        buffer[buff_idx - 1] = '\0';
        command_process(buffer);
        buff_idx = 0;
      }
    }
  }
}

void led_toggle(void) {
  PORTC.OUTTGL = PIN6_bm;
}

void hello_world(void) {
  USART1_SendString("Hello world!\n");
}
```

Обязательно после инициализации портов микроконтроллера и USART нужно включить глобальные прерывания, вызвав функцию `sei`

С помощью функции `command_define` мы можем определить, по какой переданной команде по USART запускать функцию:

* `led_toggle` будет переключать светодиод.
* `hello_world` выводить сообщение “Hello world”.
* `command_list` будет показывать список имеющихся команд.

## Демонстрация работы

Теперь собрав и загрузив прошивку в ваш микроконтроллер, можно проверить работоспособность. Я буду использовать программу `CuteCom` для открытия последовательного порта, вы можете использовать любую другую подобную.

Выберете ваше устройство из списка (в моем случае это `/dev/ttyACM1`) и установите следующие настройки:

* Скорость: **9600** бод
* Количество битов: **8**
* Четность: **None**
* Стоповые биты: **1**

<figure>
	<img
		src="/media/uart-connect-settings.png"
		width="700"
		height="400"
		alt="Настройки для открытия последовательного порта"
		format="webp"
    fit="fill"
	>
	<figcaption>Настройки для открытия последовательного порта</figcaption>
</figure>

Теперь после открытия порта можно отправлять команды, не забудьте установить возврат каретки как `LF`, т.к наша прошивка распознает окончание команды только по этому символу.

<figure>
	<img
		src="/media/webserial-demo-1.png"
		width="700"
		height="400"
		alt="Пример отправки команды “hello”"
		format="webp"
    fit="fill"
	>
	<figcaption>Пример отправки команды “hello”</figcaption>
</figure>

# Разработка веб-приложения

Веб-приложение будет состоять всего из нескольких элементов: поле для ввода, куда мы сможем писать наши команды, кнопки для открытия и закрытия последовательного порта, статус соединения. Готовый вариант можно посмотреть [здесь](https://web-serial-example.netlify.app/).

## Создание разметки HTML и стилей

Разметка HTML будет выглядеть следующим образом:

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Web Serial API Example</title>
		<link href="./style.css" rel="stylesheet" />
		<script defer src="./app.js"></script>
	</head>
	<body>
		<div id="app">
			<div>
				<button id="connect">Connect</button>
				<button id="disconnect">Disconnect</button>
			</div>
			<form id="terminal_form" action="#">
				<label for="input">Enter command name:</label><br />
				<div>
					<input id="input" name="input" placeholder="e.g led_toggle" type="text" disabled />
					<button name="send" type="submit" disabled>Send</button>
				</div>
			</form>
			<textarea id="serial_log" placeholder=">" readonly></textarea>
			<div id="port_info">
				<div>
					<p id="status">not connected</p>
				</div>
				<div>
					<span>vendorId: <span id="vendor_id">-</span>&nbsp;|</span>
					<span>deviceId: <span id="product_id">-</span></span>
				</div>
			</div>
		</div>
	</body>
</html>
```

Добавим немного стилей создав файл `style.css`:

```css
:root {
	--border-color: #c9d1d9;
	--border-color-hover: #6e7681;
	--font-family: monospace;
}

*,
*:before,
*:after {
	box-sizing: inherit;
}

#app {
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 600px;
	row-gap: 5px;
}

html,
body {
	box-sizing: border-box;
	font-size: 16px;
}

body {
	display: flex;
	justify-content: center;
	margin-top: 2rem;
	font-family: var(--font-family);
}

p {
	padding: 0;
	margin: 5px;
}

input,
textarea {
	font-family: var(--font-family);
	padding: 5px 15px;
	border-radius: 4px;
	width: 100%;
	border: 1px solid var(--border-color);
}

textarea {
	resize: vertical;
	min-height: 200px;
	line-height: 1.4;
	font-size: 16px;
	outline: none;
	font-size: 12px;
}

label {
	font-size: 14px;
	font-style: italic;
}

button {
	cursor: pointer;
	background: none;
	font-family: var(--font-family);
	border: 1px solid var(--border-color);
	border-radius: 4px;
	padding: 5px 15px;
}

button:hover:not(:disabled) {
	border: 1px solid var(--border-color-hover);
}

#terminal_form div {
	display: flex;
	justify-content: space-between;
	gap: 5px;
	margin-bottom: 5px;
	margin-top: 5px;
}

#port_info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	font-size: 14px;
}

#port_info #status {
	text-transform: uppercase;
}
```

## Создание класса SerialPortHandler

Логика работы с последовательным портом будет реализована в этом классе, который будет небольшой оберткой для удобного использования WebSerial API, он будет иметь всего 5 методов и несколько свойств.

Определим этот класс в файле `app.js`:

```jsx
class SerialPortHandler {
	constructor(options, onConnect, onDisconnect) {
		this.encoder = new TextEncoder();
		this.decoder = new TextDecoder();
		this.onConnect = onConnect;
		this.onDisconnect = onDisconnect;
		this.options = options;
		this.port = null;
		this.isOpened = false;
		this.#setupListeners();
	}

	async open() {}

	async close() {}

	async write(data) {}

	async read() {}

	#setupListeners() {}
}
```

* [`TextEncoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) является классом, который кодирует строку в массив без знаковых 8-ми битных целых чисел [`Uint8Array`](https://webidl.spec.whatwg.org/#idl-Uint8Array).
* [`TextDecoder`](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder#examples) наоборот, декодирует в строку. Экземпляры этих классов нам понадобятся, т.к мы будет оперировать данными с типом `Uint8Array`.
* Функции `onConnect` и `onDisconnect` будут вызываться при подключении или отключении устройства.
* Свойство [`options`](https://wicg.github.io/serial/#serialoptions-dictionary) содержит необходимые параметры, которые будут использоваться для передачи и приема данных.
* Свойство [`port`](https://wicg.github.io/serial/#serialport-interface) - объект, который будет содержать методы для работы с портом и информацию об устройстве после установки соединения.
* Функция `setupListeners` просто будет добавлять обработчики событий.

Далее рассматривается реализация этих методов.

## Открытие последовательного порта

Для открытия последовательного порта для начала необходимо вызвать метод [`requestPort`](https://wicg.github.io/serial/#requestport-method), который откроет специальное окно со списком устройств. Также необходимо, чтобы пользователь сам активировал вызов этого окна, иначе будет ошибка. Это как раз можно сделать по событию нажатия кнопки.

```jsx
async open() {
  try {
    const port = await navigator.serial.requestPort();
    await port.open(this.options);

    this.port = port;
    this.isOpened = true;

    return this.port.getInfo();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

В функцию `requestPort` в качестве параметра можно передать необязательный параметр фильтр, который ограничит список выбираемых портов в соответствии с USB идентификатором:

```jsx
const port = await navigator.serial.requestPort({
	filters: [{ usbVendorId: 0x7522 }],
});
```

Список USB идентификаторов можно посмотреть на [этом](https://devicehunt.com/all-usb-vendors) сайте.

<figure>
	<img
		src="/media/webserial-connect.png"
		width="700"
		height="400"
		alt="Выбор устройства через специальное окно"
		format="webp"
                fit="fill"
	>
	<figcaption>Выбор устройства через специальное окно</figcaption>
</figure>

После того как пользователь выбрал устройство, метод `requestPort` возвращает [`port`](https://wicg.github.io/serial/#serialport-interface), который можно открыть передав туда [параметры](https://wicg.github.io/serial/#serialoptions-dictionary):

* `baudRate` : скорость передачи данных.
* `dataBits` : количество бит данных во фрейме (7 или 8).
* `stopBits` : количество стоповых битов в конце пакета (1 или 2).
* `parity` : режим четности ( `none` , `even` или `odd` ).
* `bufferSize` : размер буферов чтения и записи, которые должны быть созданы.
* `flowControl` : режим управления потоком ( `none` или `hardware` ).

Свойство `baudRate` является единственным обязательным параметром, остальные же являются необязательными и имеют [значения по умолчанию](https://wicg.github.io/serial/#serialoptions-dictionary).

В конце наш метод возвращает [информацию](https://wicg.github.io/serial/#dom-serialportinfo) о подключенном устройстве используя метод [`getInfo`](https://wicg.github.io/serial/#dom-serialport-getinfo).

## Чтение данных

Отмечу, что WebSerial API является асинхронным, что позволяет предотвращать блокировку пользовательского интерфейса во время принятия данных.

Еще важно знать, что WebSerial API использует потоки [Stream API](https://streams.spec.whatwg.org/). При потоковой передаче данные разбиваются на `фрагменты` `(chunks)`, это позволяет обрабатывать данные без полного ожидания их поступления.

Получение данных можно реализовать следующим образом:

```jsx
async read() {
  while (this.port.readable) {
    const reader = this.port.readable.getReader();
    let chunks = '';

    try {
      while (true) {
        const { value, done } = await reader.read();
        const decoded = this.decoder.decode(value);

        chunks += decoded;

        if (done || decoded.includes(EOT)) {
          console.log('Reading done.');
          reader.releaseLock();
          break;
        }
      }
      return chunks;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      reader.releaseLock();
    }
  }
}
```

Когда пользователь подключился к устройству, `this.port` будет иметь такие свойства как `writable` и `readable`, которые являются экземплярами классов [WritableStream](https://streams.spec.whatwg.org/#writablestream) и [ReadableStream](https://streams.spec.whatwg.org/#readablestream). Они нам понадобятся для чтения и записи данных.

Внешний цикл `while` предназначен для проверки ошибок, такие как проверка четности. При возникновении фатальной ошибки, свойство `readable` станет `null`.

Метод [`getReader`](https://streams.spec.whatwg.org/#rs-get-reader) создает [читатель](https://streams.spec.whatwg.org/#reader), который даст возможность получать данные фрагментами. Доступный для чтения поток одновременно имеет не более одного читателя, соответственно после этого поток является **[заблокированным](https://streams.spec.whatwg.org/#lock)**, но читатель остается **активным**.

Внутренний цикл `while` читает данные используя метод `read` у читателя. Этот метод возвращает свойство `value`, который имеет данные c типом `UInt8Array`, и свойство `done`, которое станет `true`, если последовательное устройство больше не передает никаких данных. Далее мы декодируем данные в строку и записываем в переменную `chunks`. Так же идет проверка на наличие символа `EOT` (End-of-Transmission), который означает конец передачи данных. Определите этот символ в начале файла `app.js` как глобальную переменную:

```jsx
var EOT = "\u0004";
```

После конца приема данных необходимо разблокировать поток, вызвав метод `releaseLock` для того чтобы сделать читателя неактивным.

## Запись данных

Для того чтобы отправить данные в последовательное устройство, необходимо создать [писателя](https://streams.spec.whatwg.org/#writer), который предоставит возможность отправлять фрагменты в записывающий поток:

```jsx
async write(data) {
    const writer = this.port.writable.getWriter();
    const encoded = this.encoder.encode(data);
    await writer.write(encoded);
    writer.releaseLock();
  }
```

Перед отправкой нужно закодировать вашу строку в данные с типом `UInt8Array`. После создания писателя записывающий поток так же является заблокированным, соответственно после записи необходимо этот поток разблокировать используя тот же метод `releaseLock`.

## Закрытие порта

Для закрытия порта, когда коммуникация с устройством больше не требуется можно использовать метод [`close`](https://wicg.github.io/serial/#dom-serialport-close):

```jsx
async close() {
  await this.port.close();
  this.isOpened = false;
}
```

Порт невозможно закрыть когда записывающий или читающий поток является заблокированным.

## Обработка событий

API дает возможность подписываться на события, когда подключается доверенное устройство или когда оно отключается:

```jsx
#setupListeners() {
  navigator.serial.addEventListener('connect', this.onConnect);
  navigator.serial.addEventListener('disconnect', this.onDisconnect);
}
```

## Использование созданного класса

Теперь можно написать front-end часть веб-приложения используя наш созданный класс `SerialPortHandler`:

```jsx
class Application {
	constructor(root) {
		if (!("serial" in navigator)) {
			console.error("Web Serial API is not supported in your browser.");
			return;
		}

		this.serialPortHandler = new SerialPortHandler(
			{ baudRate: 9600 },
			() => console.log("Device connected."),
			() => {
				console.log("Device disconnected.");
				this.#disconnectHandler();
			}
		);

		/**
		 * DOM Elements
		 */
		this.$root = root;
		this.$connectButton = this.$root.querySelector("#connect");
		this.$disconnectButton = this.$root.querySelector("#disconnect");
		this.$terminalForm = this.$root.querySelector("#terminal_form");
		this.$serialLog = this.$root.querySelector("#serial_log");
		this.$status = this.$root.querySelector("#status");
		this.$vendorId = this.$root.querySelector("#vendor_id");
		this.$productId = this.$root.querySelector("#product_id");

		this.#setupEvents();
	}

	/**
	 * Handlers for connecting, disconnecting and sending a command
	 */
	#setupEvents() {
		this.$connectButton.addEventListener("click", this.#connectHandler.bind(this));
		this.$disconnectButton.addEventListener("click", this.#disconnectHandler.bind(this));
		this.$terminalForm.addEventListener("submit", this.#submitHandler.bind(this));
	}

	/**
	 * Open serial port and notify user of connection status
	 * @returns {Promise<void>}
	 */
	async #connectHandler() {
		try {
			if (this.serialPortHandler.isOpened) return;
			const info = await this.serialPortHandler.open();
			console.log("Port opened: ", info);
			this.$terminalForm.elements.input.removeAttribute("disabled");
			this.$terminalForm.elements.send.removeAttribute("disabled");
			this.$vendorId.textContent = "0x" + info.usbVendorId.toString(16);
			this.$productId.textContent = "0x" + info.usbProductId.toString(16);
			this.$status.textContent = "CONNECTED";
		} catch (error) {
			this.$status.textContent = "ERROR";
		}
	}

	/**
	 * Closes the serial port and updates the connection status.
	 * @returns {Promise<void>}
	 */
	async #disconnectHandler() {
		if (!this.serialPortHandler.isOpened) return;
		await this.serialPortHandler.close();
		this.$terminalForm.elements.input.setAttribute("disabled", "true");
		this.$terminalForm.elements.send.setAttribute("disabled", "true");
		this.$vendorId.textContent = "-";
		this.$productId.textContent = "-";
		this.$status.textContent = "NOT CONNECTED";
	}

	/**
	 * Writes data to the serial port and reads the response
	 * @param {SubmitEvent} e - Form submit event
	 */
	async #submitHandler(e) {
		e.preventDefault();
		const $form = e.target;
		const data = $form.elements.input.value;
		$form.reset();
		if (this.serialPortHandler.isOpened && data) {
			this.$serialLog.innerHTML += ">" + data + "\n";
			await this.serialPortHandler.write(data + "\n");
			const message = await this.serialPortHandler.read();
			this.$serialLog.textContent += message.replaceAll(EOT, "");
			console.log("Message received: \n" + message);
		}
		this.$serialLog.scrollTo(0, this.$serialLog.scrollHeight);
	}
}
```

В основном здесь происходит работа с обновлением интерфейса и я думаю не стоит подробно разъяснять логику, отмечу только ключевые моменты:

В конструкторе этого класса можно определить, поддерживает ли браузер WebSerial API, проверив ключ `serial` в объекте `navigator` и если нет, то пишем ошибку в консоль. Объект `this.serialPortHandler` будет являться экземпляром нашего созданного класса `SerialPortHandler`, в качестве аргументов передаем скорость **9600** и функции, которые будут являться обработчиками событий подключения и отключения устройства. Далее ищем необходимые DOM элементы и добавляем на некоторые из них прослушиватель событий.

Метод `#submitHandler` предназначен для отправки команд и принятия результата выполнения команды. При использовании метода `write` обязательно нужно в конце добавить символ `\n`, так программа в микроконтроллере узнает, где заканчивается название команды.

Инициализируйте приложение в конце файла `app.js`:

```js
new Application(document.getElementById("app"));
```

## Проверка работы веб-приложения

Теперь можно отсылать команды микроконтроллеру:

<figure>
	<img
		src="/media/webserial-demo-2.png"
		width="550"
		height="300"
		alt="Готовый результат веб-приложения"
		format="webp"
	>
	<figcaption>Готовый результат веб-приложения</figcaption>
</figure>

Ради забавы можно помигать светодиодом:

```js
const app = new Application(document.getElementById("app"));

setInterval(async () => {
	if (app.serialPortHandler.isOpened) {
		await app.serialPortHandler.write("led_toggle" + "\n");
		const message = await app.serialPortHandler.read();
		console.log(message);
	}
}, 500);
```

<figure>
  <img src="/media/webserial-demo-3.gif" loading="lazy" alt="мигание светодиодом" />
  <figcaption>Мигание светодиодом</figcaption>
</figure>

# Заключение

Разработав веб-приложение мы убедились, что использование WebSerial API довольно простое. Надеюсь, что эта статья пригодится вам и поможет в разработке вашего проекта.

# Полезные материалы

* [Статус поддержки браузеров Can I use](https://caniuse.com/web-serial)
* [Документация к WebSerial API](https://wicg.github.io/serial/)
* [Подробное руководство по Stream API](https://web.dev/streams/)
* [Список USB идентификаторов](https://devicehunt.com/all-usb-vendors)
* [Доступ к различным устройствам из браузера](https://web.dev/devices-introduction/)