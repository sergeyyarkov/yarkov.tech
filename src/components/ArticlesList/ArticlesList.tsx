import type { Component } from "solid-js";
import { createSignal, createEffect, For } from "solid-js";
import { search, selectedTags } from "@stores/searchStore";
import ArticleItem from "@components/ArticleItem";
import "./ArticlesList.scss";

type UiStringsType = { "articles.empty": string };

type ArticleType = {
	id: string;
	title: string;
	pubDate: Date;
};

type ArticlesType = Record<string, ArticleType[]>;

type ArticlesListProps = {
	data: { articles: ArticlesType; pageLang: string };
	i18n: UiStringsType;
};

const ArticlesList: Component<ArticlesListProps> = (props) => {
	const [articles, setArticles] = createSignal<ArticlesType>(props.data.articles);

	/**
	 * Sort articles by year in descending order
	 */
	const sortYears = (articles: ArticlesType) => {
		return Object.keys(articles)
			.map(Number)
			.sort((a, b) => b - a);
	};

	const isEmpty = () => Object.keys(articles()).length === 0;
	const getLength = () => Object.values(articles()).flat().length;

	createEffect(() => {
		// const filtered = Object.values(articles()).flat(1)
	});

	createEffect(() => {
		let filtered = props.data.articles;

		/**
		 * Find articles by title
		 */
		if (search()) {
			// filtered = findArticlesBySearch(search().trim(), filtered);
			// setArticles(filtered);
			console.log(search());
		}

		/**
		 * Find articles by selected tags
		 */
		if (selectedTags().length !== 0) {
			// filtered = findArticlesByTags(selectedTags(), filtered);
			// setArticles(filtered);

			return;
		}

		/**
		 * Set filtered variable as default value
		 */
		if (!search() && selectedTags().length === 0) {
			filtered = props.data.articles;
			setArticles(filtered);
		}
	});

	return (
		<div itemscope itemtype="http://schema.org/Blog" class="articles-list">
			{!isEmpty() ? (
				<For each={sortYears(articles())}>
					{(year) => (
						<div class="articles-list__wrapper">
							<h2>{year}</h2>
							<For each={articles()[year]}>
								{(a) => (
									<ArticleItem
										id={a.id}
										title={a.title}
										pubDate={a.pubDate}
										pageLang={props.data.pageLang}
									/>
								)}
							</For>
						</div>
					)}
				</For>
			) : (
				<div class="articles-list__empty">
					<p>{props.i18n["articles.empty"]}</p>
				</div>
			)}
		</div>
	);
};

export default ArticlesList;
