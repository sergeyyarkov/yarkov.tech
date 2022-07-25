import type { Component } from 'solid-js';

import { createSignal, createEffect } from 'solid-js';
import './NavToggle.scss';

const MenuIcon: Component = () => (
	<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M21 6V8H3V6H21ZM3 18H21V16H3V18ZM3 13H21V11H3V13Z" fill="black" />
	</svg>
);

const CloseIcon: Component = () => (
	<svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M12.0002 13.0605L17.4692 18.531L18.5312 17.4705L13.0607 12L18.5312 6.53099L17.4707 5.46899L12.0002 10.9395L6.5312 5.46899L5.4707 6.53099L10.9397 12L5.4707 17.469L6.5312 18.531L12.0002 13.0605Z"
			fill="black"
		/>
	</svg>
);

const NavToggle: Component = () => {
	const [isNavShown, setIsNavShown] = createSignal<boolean>(false);

	const toggleNav = () => setIsNavShown(!isNavShown());

	createEffect(() => {
		const body = document.body;

		if (isNavShown()) {
			body.setAttribute('data-is-mobile-open', 'true');
			return;
		}

		body.removeAttribute('data-is-mobile-open');
	});

	return (
		<button class="nav-toggle" onClick={toggleNav} type="button" aria-pressed={isNavShown()} aria-label="Menu">
			{isNavShown() ? <CloseIcon /> : <MenuIcon />}
		</button>
	);
};

export default NavToggle;
