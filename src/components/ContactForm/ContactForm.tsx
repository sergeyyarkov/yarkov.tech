import type { Component } from 'solid-js';
import './ContactForm.scss';

type InputFieldsType = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

const ContactForm: Component = () => {
	return (
		<form class="contact-form" name="contact" method="post" data-netlify="true">
			<div>
				<input name="name" placeholder="Ваше имя" type="text" />
				<input name="email" placeholder="example@email.com" type="text" />
			</div>
			<input name="subject" placeholder="Тема сообщения" type="text" />
			<textarea name="message" placeholder="Ваше сообщение..." id="message" cols={30} rows={10} />
			<div>
				<button type="submit">Отправить</button>
			</div>
		</form>
	);
};

export default ContactForm;
