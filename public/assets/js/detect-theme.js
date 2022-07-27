/**
 * This script is used to determine the theme of the site.
 * The theme value is taken from localstorage, otherwise from the operating system.
 * It is very important to include this script before loading the CSS
 * and body markup to prevent FOUC (Flash of unstyled content).
 */

const getTheme = () => {
	const local = localStorage.getItem('theme');
	if (local && (local === 'dark' || local === 'light')) return local;
	const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
	return isDark ? 'dark' : 'light';
};

window.theme = getTheme();
document.documentElement.setAttribute('data-theme', window.theme);

/* Sync with OS theme */
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
	window.theme = isDark ? 'dark' : 'light';
	localStorage.setItem('theme', window.theme);
	document.documentElement.setAttribute('data-theme', window.theme);
});
