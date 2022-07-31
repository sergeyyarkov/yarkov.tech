/**
 * This script will load the properly code highlithing theme based on user theme
 * It is important to insert it after detecting a user theme
 * and assigning the `window.theme` property
 */

if (window.theme) {
	/* the {theme} in the path will be dynamically changed */
	const PATH = `assets/css/code-highlight-{theme}.min.css`;
	const $head = document.getElementsByTagName('head')[0];
	const getPath = (theme) => PATH.replace(`{theme}`, theme);
	const createLink = (theme, media) => {
		const $link = document.createElement('link');
		$link.rel = 'stylesheet';
		$link.type = 'text/css';
		$link.href = getPath(theme);
		$link.media = media;
		return $link;
	};

	/* init links to load them first */
	const $light = createLink('light', 'none');
	const $dark = createLink('dark', 'none');

	const toggleMedia = (theme) => {
		switch (theme) {
			case 'light':
				$light.media = 'all';
				$dark.media = 'none';
				break;
			case 'dark':
				$light.media = 'none';
				$dark.media = 'all';
				break;
			default:
				break;
		}
	};

	toggleMedia(window.theme);
	$head.appendChild($light);
	$head.appendChild($dark);

	window.addEventListener('onthemetoggled', ({ detail: newTheme }) => toggleMedia(newTheme));
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', ({ matches: isDark }) => {
		return isDark ? toggleMedia('dark') : toggleMedia('light');
	});
}
