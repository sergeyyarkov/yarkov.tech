import type { Component, JSX } from "solid-js";

import "./Spinner.scss";

type SpinnerProps = JSX.HTMLAttributes<HTMLDivElement>;

const Spinner: Component<SpinnerProps> = (props) => {
	return <div class="spinner" {...props} />;
};

export default Spinner;
