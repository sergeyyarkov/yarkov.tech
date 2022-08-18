import type { Component } from "solid-js";

const Submitted: Component<{ text: string }> = (props) => {
	return <div class="form-result">&#10004;&#65039; {props.text}</div>;
};

export default Submitted;
