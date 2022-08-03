import type { ParentComponent, JSX } from 'solid-js';

import { splitProps } from 'solid-js';
import './Button.scss';

type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: ParentComponent<ButtonProps> = (props) => {
	const [local, attrs] = splitProps(props, ['children']);
	return (
		<button class={`btn`} {...attrs}>
			{local.children}
		</button>
	);
};

export default Button;
