import type { ParentComponent, JSX } from "solid-js";

import { splitProps } from "solid-js";
import Spinner from "@components/Spinner";
import "./Button.scss";

type ButtonProps = {
	isLoading?: boolean | undefined;
	loadingText?: string | undefined;
} & JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ParentComponent<ButtonProps> = (props) => {
	const [local, attrs] = splitProps(props, ["children", "isLoading", "loadingText"]);
	return (
		<button disabled={local.isLoading} class={`btn`} data-loading={local.isLoading} {...attrs}>
			{local.isLoading && <Spinner />}
			{local.isLoading ? local.loadingText || "Loading..." : local.children}
		</button>
	);
};

export default Button;
