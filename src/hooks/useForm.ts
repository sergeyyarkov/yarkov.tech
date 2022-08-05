import type { Accessor } from "solid-js";

import { createStore, SetStoreFunction } from "solid-js/store";

type HTMLElementsType = HTMLInputElement | HTMLTextAreaElement;
type CustomValidatorType = (element: HTMLElementsType) => string | false;
type FieldConfigType = { element: HTMLElementsType; validators: Array<CustomValidatorType> };
type FormSubmitFnType = (ref: HTMLFormElement, accessor: Accessor<(form: HTMLFormElement) => unknown>) => void;
type ValidateFnType = (ref: HTMLElementsType, accessor: Accessor<Array<CustomValidatorType>>) => void;
type СheckValidFnType = (config: FieldConfigType, setErrors: SetStoreFunction<Record<string, unknown>>, errorClass: string) => void;

const checkValid: СheckValidFnType = (fieldConfig, setErrors, errorClass) => {
	const { element, validators = [] } = fieldConfig;

	element.setCustomValidity("");
	element.checkValidity();
	let message = element.validationMessage;

	/* Run custom validators */
	if (Array.isArray(validators)) {
		if (!message) {
			for (const validator of validators) {
				if (typeof validator === "function") {
					const text = validator(element);
					if (text) {
						element.setCustomValidity(text);
						break;
					}
				}
			}
			message = element.validationMessage;
		}
	}

	/* Set errors if message exists and class to input element */
	if (message) {
		errorClass && element.classList.toggle(errorClass, true);
		setErrors({ [element.name]: message });
	}
};

export const useForm = ({ errorClass }) => {
	const [errors, setErrors] = createStore<{ [key: string]: string | undefined }>({});
	const fields = {};

	const validate: ValidateFnType = (ref, accessor) => {
		const validators = accessor();
		let config: FieldConfigType;
		fields[ref.name] = config = { element: ref, validators };
		ref.onblur = () => checkValid(config, setErrors, errorClass);
		ref.oninput = () => {
			if (!errors[ref.name]) return;
			setErrors({ [ref.name]: undefined });
			errorClass && ref.classList.toggle(errorClass, false);
		};
	};

	const formSubmit: FormSubmitFnType = (ref, accessor) => {
		const callback = accessor();
		ref.setAttribute("novalidate", "");
		ref.onsubmit = (e) => {
			e.preventDefault();
			let isError = false;

			/* Validate all fields of form */
			for (const key in fields) {
				const field = fields[key] as FieldConfigType;
				checkValid(field, setErrors, errorClass);
				if (!isError && field.element.validationMessage) {
					field.element.focus();
					isError = true;
				}
			}

			if (typeof callback === "function") !isError && callback(ref);
		};
	};

	return { validate, formSubmit, errors };
};
