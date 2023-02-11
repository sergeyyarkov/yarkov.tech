export const deleteParamFromUrl = (param: string): string => {
	const params = new URLSearchParams(window.location.search);
	params.delete(param);

	const url = !params.toString() ? window.location.pathname : "?" + params.toString();

	return url;
};

export const setParamToUrl = (param: string, value: string): string => {
	const params = new URLSearchParams(window.location.search);
	params.set(param, value);

	return params.toString();
};
