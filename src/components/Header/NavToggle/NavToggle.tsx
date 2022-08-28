import type { Component } from "solid-js";

import { createSignal, createEffect } from "solid-js";
import "./NavToggle.scss";

const MenuIcon: Component = () => (
	<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">
		<path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z" />
	</svg>
);

const CloseIcon: Component = () => (
	<svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="24px" height="24px">
		<path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
	</svg>
);

const NavToggle: Component = () => {
	const [isNavShown, setIsNavShown] = createSignal<boolean>(false);

	const toggleNav = () => setIsNavShown(!isNavShown());

	createEffect(() => {
		const body = document.body;

		if (isNavShown()) {
			body.setAttribute("data-is-mobile-open", "true");
			return;
		}

		body.removeAttribute("data-is-mobile-open");
	});

	return (
		<button class="nav-toggle" onClick={toggleNav} type="button" aria-pressed={isNavShown()} aria-label="Menu">
			{isNavShown() ? <CloseIcon /> : <MenuIcon />}
		</button>
	);
};

export default NavToggle;
