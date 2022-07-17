import './NavToggle.scss';
import { Component, createSignal, createEffect } from 'solid-js';

export const NavToggle: Component = () => {
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
		<button id="nav-toggle" class="header__button" onClick={toggleNav} type="button" aria-pressed={isNavShown() ? 'true' : 'false'}>
			<span />
			<span />
			<span />
		</button>
	);
};
