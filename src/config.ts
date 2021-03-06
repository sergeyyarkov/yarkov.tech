export const SITE_SETTINGS = {
	defaultTheme: 'dark',
};

export const SITE_METADATA = {
	title: 'Sergey Yarkov',
	name: 'yarkov.tech',
	author: 'Sergey Yarkov',
	description:
		'Здесь я публикую статьи и туториалы на различные IT темы, а также рассказываю о своих проектах которые я сделал за последние несколько лет.',
	contacts: {
		email: 'serzh.yarkov@gmail.com',
		githubUrl: 'https://github.com/sergeyyarkov',
		telegramUrl: 'https://t.me/sergeyyarkov',
	},
	nav: [
		{ name: 'Статьи', url: '/articles' },
		{ name: 'Проекты', url: '/projects' },
		{ name: 'Обо мне', url: '/about' },
		{ name: 'Контакты', url: '/contacts' },
	],
	projects: [
		{
			icon: 'nodejs',
			name: 'yarkov.tech',
			year: '2022',
			description: 'Мой персональный веб-сайт где находятся информация обо мне и список различных статей, туториалов...',
			sourceUrl: 'https://github.com/sergeyyarkov/yarkov.tech',
			demoUrl: 'https://yarkov.tech',
			articleUrl: undefined,
		},
		{
			icon: 'triangle_filled',
			name: 'devthread',
			year: '2021',
			description: 'Статический веб-сайт для публикации различных статей, разработанный при помощи Gatsby.js и NetlifyCMS',
			sourceUrl: 'https://github.com/sergeyyarkov/devthread.ru',
			demoUrl: 'https://devthread.netlify.app',
			articleUrl: undefined,
		},
		{
			icon: 'round-school',
			name: 'educt',
			year: '2022',
			description: 'Система управления обучением (LMS) для публикации ваших курсов, лекций, уроков',
			sourceUrl: 'https://github.com/sergeyyarkov/educt',
			demoUrl: 'https://client-educt-lms.netlify.app',
			articleUrl: undefined,
		},
		{
			icon: 'round-shop-two',
			name: 'digital-store',
			year: '2019',
			description: 'Настраиваемый интернет-магазин с панелью управления для продажи цифровых товаров',
			sourceUrl: 'https://github.com/sergeyyarkov/digital-store/tree/digital-store-docker',
			demoUrl: 'https://digital-store.herokuapp.com',
			articleUrl: undefined,
		},
		{
			icon: 'chat',
			name: 'react-chat-app',
			year: '2021',
			description: 'Клиент-серверное веб приложение чата разработанное при помощи Node.js и Socket.io',
			sourceUrl: 'https://github.com/sergeyyarkov/react-chat-app',
			demoUrl: undefined,
			articleUrl: undefined,
		},
		{
			icon: 'nodejs',
			name: 'node-docker-example',
			year: '2022',
			description: 'Пример использования Docker для развертывания Node.js приложения',
			sourceUrl: 'https://github.com/sergeyyarkov/node-docker-example',
			demoUrl: 'https://website-simple-blog.herokuapp.com',
			articleUrl: undefined,
		},
		{
			icon: 'chip',
			name: 'memory-led-game',
			year: '2022',
			description: 'Аналог популярной игры “Саймон говорит” на AVR микроконтроллере',
			sourceUrl: 'https://github.com/sergeyyarkov/attiny24a_memory-led-game',
			demoUrl: undefined,
			articleUrl: undefined,
		},
	],
	skills: [
		{
			title: 'Программирование',
			list: [
				{ icon: 'nodejs', name: 'Javascript/Typescript' },
				{ icon: 'language-c', name: 'C Language' },
				{ icon: 'mysql', name: 'SQL' },
				{ icon: 'graphql', name: 'GraphQL' },
				{ icon: 'avr', name: 'AVR instruction set' },
			],
		},
		{
			title: 'Фреймворки',
			list: [
				{ icon: 'adonisjs', name: 'Adonis.js' },
				{ icon: 'expressjs', name: 'Express.js' },
				{ icon: 'socket-io', name: 'Socket.io' },
				{ icon: 'astro_filled', name: 'Astro' },
				{ icon: 'reactjs', name: 'React.js' },
				{ icon: 'gatsbyjs', name: 'Gatsby.js' },
			],
		},
		{
			title: 'Инструменты',
			list: [
				{ icon: 'nodejs', name: 'Node.js' },
				{ icon: 'docker', name: 'Docker' },
				{ icon: 'git-branch', name: 'Git/gitflow' },
				{ icon: 'sass', name: 'SASS' },
				{ icon: 'webpack', name: 'Webpack' },
				{ icon: 'vite', name: 'Vite.js' },
			],
		},
		{
			title: 'Базы данных',
			list: [
				{ icon: 'postgresql', name: 'PostgreSQL' },
				{ icon: 'mongodb', name: 'MongoDB' },
				{ icon: 'redis', name: 'Redis' },
			],
		},
		{
			title: 'Языки',
			list: [
				{ icon: undefined, name: 'Русский (родной)' },
				{ icon: undefined, name: 'Английский (B1)' },
			],
		},
	],
};
