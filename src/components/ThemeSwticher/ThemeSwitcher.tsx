import type { Component, JSX } from 'solid-js';

import { SITE_SETTINGS } from '@root/config';
import { createSignal, onMount, Switch, Match } from 'solid-js';
import './ThemeSwitcher.scss';

const MoonIcon: Component = () => (
	<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M10.4998 10.3311C9.39883 9.22975 8.64906 7.82674 8.34521 6.29939C8.04136 4.77203 8.19707 3.18889 8.79266 1.75C7.09451 2.08429 5.53468 2.91752 4.31266 4.14313C0.895781 7.56 0.895781 13.1005 4.31266 16.5174C7.73041 19.9351 13.27 19.9342 16.6878 16.5174C17.9131 15.2955 18.7462 13.736 19.0809 12.0382C17.642 12.6337 16.0589 12.7894 14.5316 12.4855C13.0042 12.1817 11.6012 11.432 10.4998 10.3311Z"
			fill="#010409"
		/>
	</svg>
);

const SunIcon: Component = () => (
	<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M6.12062 10.5C6.12062 12.9159 8.08587 14.8811 10.5017 14.8811C12.9176 14.8811 14.8829 12.9159 14.8829 10.5C14.8829 8.08413 12.9176 6.11888 10.5017 6.11888C8.08587 6.11888 6.12062 8.08413 6.12062 10.5ZM9.625 16.625H11.375V19.25H9.625V16.625ZM9.625 1.75H11.375V4.375H9.625V1.75ZM1.75 9.625H4.375V11.375H1.75V9.625ZM16.625 9.625H19.25V11.375H16.625V9.625ZM4.93238 17.3057L3.69513 16.0685L5.551 14.2126L6.78825 15.4499L4.93238 17.3057ZM14.2118 5.551L16.0685 3.69425L17.3057 4.9315L15.449 6.78825L14.2118 5.551ZM5.551 6.78912L3.69513 4.93238L4.93325 3.69513L6.78825 5.55187L5.551 6.78912ZM17.3057 16.0685L16.0685 17.3057L14.2118 15.449L15.449 14.2118L17.3057 16.0685Z"
			fill="black"
		/>
	</svg>
);

const ThemeSwitcher: Component = () => {
	const [theme, setTheme] = createSignal<ThemeModeType>(SITE_SETTINGS.defaultTheme);
	const [isReady, setIsReady] = createSignal<boolean>(false);

	const toggleTheme: JSX.EventHandler<HTMLButtonElement, MouseEvent> = (e) => {
		const newTheme = theme() === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
	};

	onMount(() => {
		setIsReady(true);
		if (window.theme) {
			setTheme(window.theme);
			/* Update theme state on changing OS the,e */
			window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
				const theme = isDark ? 'dark' : 'light';
				setTheme(theme);
			});
		}
	});

	return (
		<button onClick={toggleTheme} class={isReady() ? 'theme-switcher ready' : 'theme-switcher'}>
			<Switch
				children={
					<>
						<Match when={theme() === 'light'} children={<MoonIcon />} />
						<Match when={theme() === 'dark'} children={<SunIcon />} />
					</>
				}
			/>
		</button>
	);
};

export default ThemeSwitcher;
