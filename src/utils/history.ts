export const extendHistoryState = (state: object, url?: URL | string | undefined): void => {
	const { history } = window;
	const updated = Object.assign({}, history.state, state);

	history.replaceState(updated, "", url);
};

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
