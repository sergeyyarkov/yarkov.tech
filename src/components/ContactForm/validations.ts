import { isEmail } from "@utils/string";

export default {
	validateEmail: (error: string) => {
		return (field: HTMLInputElement) => (isEmail(field.value) ? false : error);
	},
};
