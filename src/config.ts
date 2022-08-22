export const DEFAULT_LANGUAGE: LanguageKeys = "ru";

/* Show banner about website development */
export const IS_SITE_UNDER_CONSTRUCTION = true;

export const SITE_METADATA: SiteMetadataType = {
	title: "Sergey Yarkov",
	name: "yarkov.tech",
	author: "Sergey Yarkov",
	themeColor: "#1e2327",
	contacts: {
		email: "serzh.yarkov@gmail.com",
		githubUrl: "https://github.com/sergeyyarkov",
		telegramUrl: "https://t.me/sergeyyarkov",
	},
	nav: [
		{ key: "navigation.articles", url: "/articles/" },
		{ key: "navigation.projects", url: "/projects/" },
		{ key: "navigation.about", url: "/about/" },
		{ key: "navigation.contacts", url: "/contacts/" },
	],
	projects: [
		{
			icon: "book",
			name: "yarkov.tech",
			year: "2022",
			description: {
				ru: "Мой персональный веб-сайт где находятся информация обо мне и список различных статей и туториалов...",
				en: "My personal website where you can find information about me and a list of various articles and tutorials...",
			},
			sourceUrl: "https://github.com/sergeyyarkov/yarkov.tech",
			demoUrl: "https://yarkov.tech",
			articleUrl: undefined,
		},
		{
			icon: "triangle_filled",
			name: "devthread",
			year: "2021",
			description: {
				ru: "Статический веб-сайт для публикации различных статей, разработанный при помощи Gatsby.js и NetlifyCMS",
				en: "Static website for publishing various articles, developed with Gatsby.js and NetlifyCMS",
			},
			sourceUrl: "https://github.com/sergeyyarkov/devthread.ru",
			demoUrl: "https://devthread.yarkov.tech",
			articleUrl: undefined,
		},
		{
			icon: "round-school",
			name: "educt",
			year: "2022",
			description: {
				ru: "Система управления обучением (LMS) для публикации ваших курсов, лекций, уроков",
				en: "Learning Management System (LMS) to publish your courses, lectures, lessons",
			},
			sourceUrl: "https://github.com/sergeyyarkov/educt",
			demoUrl: "https://educt.yarkov.tech",
			articleUrl: undefined,
		},
		{
			icon: "round-shop-two",
			name: "digital-store",
			year: "2019",
			description: {
				ru: "Настраиваемый интернет-магазин с панелью управления для продажи цифровых товаров",
				en: "Customizable online store with control panel for selling digital goods",
			},
			sourceUrl: "https://github.com/sergeyyarkov/digital-store/tree/digital-store-docker",
			demoUrl: "https://digital-store.herokuapp.com",
			articleUrl: undefined,
		},
		{
			icon: "chat",
			name: "react-chat-app",
			year: "2021",
			description: {
				ru: "Клиент-серверное веб приложение чата разработанное при помощи Node.js и Socket.io",
				en: "Client-server web chat application developed with Node.js and Socket.io",
			},
			sourceUrl: "https://github.com/sergeyyarkov/react-chat-app",
			demoUrl: undefined,
			articleUrl: undefined,
		},
		{
			icon: "nodejs",
			name: "node-docker-example",
			year: "2022",
			description: {
				ru: "Пример использования Docker для развертывания Node.js приложения",
				en: "An example of using Docker to deploy a Node.js application",
			},
			sourceUrl: "https://github.com/sergeyyarkov/node-docker-example",
			demoUrl: "https://website-simple-blog.herokuapp.com",
			articleUrl: undefined,
		},
		{
			icon: "chip",
			name: "memory-led-game",
			year: "2022",
			description: {
				ru: 'Аналог популярной игры "Саймон говорит" на AVR микроконтроллере',
				en: 'Analogue of the popular game "Simon says" on the AVR microcontroller',
			},
			sourceUrl: "https://github.com/sergeyyarkov/attiny24a_memory-led-game",
			demoUrl: undefined,
			articleUrl: undefined,
		},
	],
	skills: [
		{
			title: {
				ru: "Программирование",
				en: "Programming",
			},
			list: [
				{ icon: "nodejs", name: "Javascript/Typescript" },
				{ icon: "language-c", name: "C Language" },
				{ icon: "mysql", name: "SQL" },
				{ icon: "graphql", name: "GraphQL" },
				{ icon: "avr", name: "AVR instruction set" },
			],
		},
		{
			title: {
				ru: "Фреймворки",
				en: "Frameworks",
			},
			list: [
				{ icon: "adonisjs", name: "Adonis.js" },
				{ icon: "expressjs", name: "Express.js" },
				{ icon: "socket-io", name: "Socket.io" },
				{ icon: "astro_filled", name: "Astro" },
				{ icon: "reactjs", name: "React.js" },
				{ icon: "gatsbyjs", name: "Gatsby.js" },
			],
		},
		{
			title: {
				ru: "Инструменты",
				en: "Tools",
			},
			list: [
				{ icon: "nodejs", name: "Node.js" },
				{ icon: "docker", name: "Docker" },
				{ icon: "git-branch", name: "Git/gitflow" },
				{ icon: "sass", name: "SASS" },
				{ icon: "webpack", name: "Webpack" },
				{ icon: "vite", name: "Vite.js" },
			],
		},
		{
			title: {
				ru: "Базы данных",
				en: "Databases",
			},
			list: [
				{ icon: "postgresql", name: "PostgreSQL" },
				{ icon: "mongodb", name: "MongoDB" },
				{ icon: "redis", name: "Redis" },
			],
		},
		{
			title: {
				ru: "Языки",
				en: "Languages",
			},
			list: [{ name: "Russian (native)" }, { name: "English (B1)" }],
		},
	],
};
