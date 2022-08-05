import { isEmail } from "@utils/string";

export const validateEmail = (field: HTMLInputElement) => (isEmail(field.value) ? false : "Заполните поле в формате e-mail.");
