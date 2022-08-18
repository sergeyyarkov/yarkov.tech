import type { Component, JSX } from "solid-js";

import { createSignal } from "solid-js";
import { createStore } from "solid-js/store";
import { useForm } from "@hooks/index";
import { encode } from "@utils/url";
import Button from "@components/Button";
import validations from "./validations";
import Submitted from "./Submitted";
import Error from "./Error";
import "./ContactForm.scss";

type UiStringsType = {
	"form.contactSuccess": string;
	"form.contactError": string;
	"input.nameField": string;
	"input.subjectField": string;
	"input.messageField": string;
	"btn.send": string;
	"btn.sending": string;
	"error.invalidEmail": string;
};

const ErrorMessage: Component<{ message: string }> = (props) => <span class="error-message">{props.message}</span>;

const ContactForm: Component<{ i18n: UiStringsType }> = (props) => {
	const { formSubmit, validate, errors } = useForm({ errorClass: "error-input" });
	const [isSubmitted, setIsSubmitted] = createSignal<boolean>(false);
	const [isLoading, setIsLoading] = createSignal<boolean>(false);
	const [isError, setIsError] = createSignal<boolean>(false);
	const [state, setState] = createStore<ContactFieldsType>({ name: "", email: "", subject: "", message: "", "bot-field": "" });

	const { validateEmail } = validations;

	const reset = (form: HTMLFormElement) => {
		for (const key in state) {
			form.elements[key].value = "";
			setState({ [key]: "" });
		}
	};

	const sendMessage = async (form: HTMLFormElement) => {
		try {
			setIsLoading(true);
			fetch("/", {
				method: "POST",
				headers: { "Content-Type": "application/x-www-form-urlencoded" },
				body: encode({
					"form-name": "contact",
					...state,
				}),
			});
		} catch (error) {
			setIsError(true);
			console.error(error);
		} finally {
			setIsLoading(false);
			setIsSubmitted(true);
			reset(form);
		}
	};

	const onChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
		const key = e.currentTarget.name;
		const value = e.currentTarget.value;

		if (!Object.hasOwn(state, key)) return;
		setState({ [key]: value });
	};

	return (
		<form use:formSubmit={sendMessage} class="contact-form" name="contact" method="post" data-netlify="true">
			<div hidden>
				Don't fill this out if you're human
				<input onInput={onChange} name="bot-field" />
			</div>
			<div class="flex">
				<div>
					<input
						onInput={onChange}
						use:validate
						name="name"
						placeholder={props.i18n["input.nameField"]}
						type="text"
						maxLength="20"
						autocomplete="off"
						required
					/>
					{errors.name && <ErrorMessage message={errors.name} />}
				</div>
				<div>
					<input
						onInput={onChange}
						use:validate={[validateEmail(props.i18n["error.invalidEmail"])]}
						name="email"
						placeholder="example@email.com"
						autocomplete="off"
						type="text"
						required
					/>
					{errors.email && <ErrorMessage message={errors.email} />}
				</div>
			</div>
			<input
				value={state.subject}
				onInput={onChange}
				use:validate
				name="subject"
				placeholder={props.i18n["input.subjectField"]}
				type="text"
				autocomplete="off"
				required
			/>
			{errors.subject && <ErrorMessage message={errors.subject} />}
			<textarea
				onInput={onChange}
				use:validate
				name="message"
				placeholder={props.i18n["input.messageField"]}
				id="message"
				autocomplete="off"
				cols={30}
				rows={10}
				required
			/>
			{errors.message && <ErrorMessage message={errors.message} />}
			<div class="form-footer">
				{!isError() && !isSubmitted() && (
					<Button isLoading={isLoading()} loadingText={props.i18n["btn.sending"]} type="submit">
						{props.i18n["btn.send"]}
					</Button>
				)}
				{!isError() && isSubmitted() && <Submitted text={props.i18n["form.contactSuccess"]} />}
				{isError() && isSubmitted() && <Error text={props.i18n["form.contactError"]} />}
			</div>
		</form>
	);
};

export default ContactForm;
