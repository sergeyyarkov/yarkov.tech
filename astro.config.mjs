import { defineConfig } from "astro/config";

/**
 * Integrations
 */
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import image from "@astrojs/image";
import netlifyCMS from "astro-netlify-cms";

/**
 * Rehype plugins
 */
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

/**
 * Other required modules
 */
import { h } from "hastscript";
import { toString } from "hast-util-to-string";
import { escape } from "html-escaper";
import languages from "./src/i18n/languages";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES, SITE_METADATA } from "./src/constants";

const createAnchorLabel = (heading) => {
	const node = h("span.anchor-label", escape(heading));
	if (node.properties) node.properties["is:raw"] = true;
	return node;
};

// https://astro.build/config
export default defineConfig({
	site: "https://yarkov.tech",
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: DEFAULT_LANGUAGE,
				locales: Object.fromEntries(Object.keys(languages).map((key) => [key, key])),
			},
		}),
		solidJs(),
		netlifyCMS({
			adminPath: "/cms",
			config: {
				editor: {
					preview: false,
				},
				display_url: "https://yarkov.tech",
				i18n: {
					locales: SUPPORTED_LANGUAGES,
					default_locale: DEFAULT_LANGUAGE,
					structure: "multiple_folders",
				},
				locale: DEFAULT_LANGUAGE,
				backend: {
					name: "test-repo",
					branch: "version-2.0.0",
				},
				media_folder: "public/media",
				public_folder: "/media",
				collections: [
					/**
					 * Articles
					 */
					{
						name: "articles",
						label: "Публикации",
						label_singular: "публикацию",
						description:
							"Технические статьи, туториалы и различные справочные материалы которые связаны с IT тематикой",
						folder: "src/content/blog",
						slug: "{{slug}}",
						create: true,
						delete: true,
						i18n: true,
						fields: [
							{
								name: "coverImage",
								widget: "image",
								label: "Постер",
								required: false,
								i18n: true,
							},
							{
								name: "draft",
								label: "В черновике",
								widget: "boolean",
								hint: "Опубликована ли статья",
								i18n: true,
								required: false,
							},
							{
								name: "author",
								widget: "relation",
								value_field: "{{firstName}} {{lastName}}",
								search_fields: ["firstName", "lastName"],
								collection: "authors",
								label: "Автор",
								i18n: true,
							},
							{
								name: "title",
								widget: "string",
								label: "Заголовок",
								i18n: true,
							},
							{
								name: "description",
								widget: "string",
								label: "Описание",
								i18n: true,
							},
							{
								name: "tags",
								widget: "relation",
								label: "Тэги",
								collection: "tags",
								multiple: true,
								value_field: "title",
								search_fields: ["title"],
								i18n: true,
							},
							{
								name: "pubDate",
								widget: "datetime",
								label: "Дата публикации",
								picker_utc: true,
								i18n: true,
							},
							{
								name: "updatedDate",
								widget: "datetime",
								label: "Дата обновления",
								picker_utc: true,
								i18n: true,
							},
							{
								name: "body",
								widget: "markdown",
								label: "Содержание",
								i18n: true,
							},
						],
					},
					/**
					 * Tags
					 */
					{
						name: "tags",
						label: "Тэги",
						label_singular: "тэг",
						description: "Используются для тегирования контента",
						folder: "src/content/tags",
						create: true,
						delete: true,
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Название",
								required: true,
							},
						],
					},
					/**
					 * Authors
					 */
					{
						name: "authors",
						label: "Авторы",
						label_singular: "автора",
						description: "На странице статьи отображается имя автора",
						slug: "{{firstName}}-{{lastName}}",
						folder: "src/content/authors",
						create: true,
						delete: true,
						i18n: true,
						fields: [
							{
								label: "Имя",
								name: "firstName",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								label: "Фамилия",
								name: "lastName",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								label: "Об авторе",
								name: "body",
								widget: "markdown",
								required: false,
								i18n: true,
							},
						],
					},
					/**
					 * Projects
					 */
					{
						name: "projects",
						label: "Проекты",
						label_singular: "проект",
						description: "Основные проекты, которые были разработаны в выложены в открытый доступ",
						folder: "src/content/projects",
						create: true,
						delete: true,
						i18n: true,
						fields: [
							{
								name: "icon",
								label: "Иконка",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								name: "title",
								label: "Название",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								name: "year",
								label: "В каком году разработал",
								widget: "number",
								required: true,
								i18n: true,
							},
							{
								name: "description",
								label: "Описание",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								name: "sourceUrl",
								label: "Ссылка на исходник",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								name: "demoUrl",
								label: "Ссылка на демонстрацию",
								widget: "string",
								required: false,
								i18n: true,
							},
							{
								name: "articleUrl",
								label: "Ссылка на статью",
								widget: "string",
								required: false,
								i18n: true,
							},
						],
					},
					/**
					 * Skills
					 */
					{
						name: "skills",
						label: "Навыки",
						label_singular: "навык",
						folder: "src/content/skills",
						create: true,
						delete: true,
						description: "Навыки отображаются на странице Обо мне",
						i18n: true,
						fields: [
							{
								name: "title",
								label: "Категория",
								widget: "string",
								required: true,
								i18n: true,
							},
							{
								name: "list",
								label: "Записи",
								required: true,
								widget: "list",
								allow_add: true,
								min: 1,
								i18n: true,
								fields: [
									{ name: "icon", label: "Иконка", widget: "string", i18n: true, required: false },
									{ name: "title", label: "Название", widget: "string", i18n: true },
								],
							},
						],
					},
					/**
					 * Settings
					 */
					{
						name: "settings",
						label: "Настройки",
						files: [
							{
								name: "siteconfig",
								label: "Настройки веб-сайта",
								file: "siteconfig.json",
								fields: [
									{
										label: "Глобальный заголовок",
										name: "globalTitle",
										widget: "string",
										hint: "Отображется во вкладке браузера.",
									},
									{
										label: "В разработке",
										name: "isSiteUnderConstruction",
										widget: "boolean",
										required: false,
										default: false,
										hint: "Отображает баннер на всех старницах о том, что веб-сайт находится в разработке",
									},
									{
										label: "Статьи",
										name: "articles",
										widget: "object",
										fields: [
											{
												name: "recentLimit",
												label: "Лимит на отображение",
												widget: "number",
												hint: "Кол-во публикаций на гл.странице",
												default: 5,
											},
										],
									},
								],
							},
						],
					},
				],
			},
		}),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
	],
	markdown: {
		syntaxHighlight: "prism",
		rehypePlugins: [
			rehypeSlug,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						class: "anchor-link",
					},
					behavior: "after",
					group: ({ tagName }) =>
						h(`div.heading-wrapper.level-${tagName}`, {
							tabIndex: -1,
						}),
					content: (heading) => [
						h(
							`span.anchor-icon`,
							undefined,
							h(
								"svg",
								{
									width: 18,
									height: 18,
									version: 1.1,
									viewBox: "0 0 16 16",
									xlmns: "http://www.w3.org/2000/svg",
									ariaHidden: "true",
									"data-filter": "none",
								},
								h("path", {
									fillRule: "evenodd",
									fill: "currentcolor",
									d: "M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z",
								})
							)
						),
						createAnchorLabel(toString(heading)),
					],
				},
			],
		],
	},
	trailingSlash: "ignore",
});
