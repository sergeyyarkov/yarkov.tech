import { Component } from "solid-js";

import { createSignal, createEffect, For } from "solid-js";
import { search, selectedTags } from "@stores/searchStore";
import { findArticlesBySearch, findArticlesByTags, sortArtcilesByDate } from "@utils/articles";
import { ArticleItem } from "@components/ArticleItem";
import SearchInput from "@components/SearchInput";
import TagsList from "@components/TagsList";
import "./ArticlesList.scss";

type UiStringsType = {
	"input.search": string;
	"articles.empty": string;
};

type ArticlesListProps = {
	data: {
		articles: ArticleBlockType;
		tags: string[];
	};
	lang: string;
	i18n: UiStringsType;
};

const ArticlesList: Component<ArticlesListProps> = (props) => {
	// eslint-disable-next-line solid/reactivity
	const [articles, setArticles] = createSignal<ArticleBlockType>(props.data.articles);

	/**
	 * Sort articles by year in descending order
	 */
	const sortYears = (articles: ArticleBlockType) => {
		return Object.keys(articles)
			.map(Number)
			.sort((a, b) => b - a);
	};

	const isEmpty = () => Object.keys(articles()).length === 0;
	const getLength = () => Object.values(articles()).flat().length;

	createEffect(() => {
		let filtered = props.data.articles;

		/**
		 * Find articles by title
		 */
		if (search()) {
			filtered = findArticlesBySearch(search().trim(), filtered);
			setArticles(filtered);
		}

		/**
		 * Find articles by selected tags
		 */
		if (selectedTags().length !== 0) {
			filtered = findArticlesByTags(selectedTags(), filtered);
			setArticles(filtered);

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
		<>
			<SearchInput count={getLength()} placeholder={props.i18n["input.search"]} />
			<TagsList data={props.data.tags} />
			<div class="articles-list">
				{isEmpty() ? (
					<div class="articles-list__empty">
						<p>{props.i18n["articles.empty"]}</p>
					</div>
				) : (
					<For
						each={sortYears(articles())}
						children={(year) => {
							return (
								<div class="articles-list__wrapper">
									<h2>{year}</h2>
									<For each={sortArtcilesByDate(articles()[year])} children={(article) => <ArticleItem lang={props.lang} data={article} />} />
								</div>
							);
						}}
					/>
				)}
			</div>
		</>
	);
};

export default ArticlesList;
