import type { Component } from 'solid-js';
import type { ArticleBlockType } from '@root/types';

import { createSignal, createEffect, For } from 'solid-js';
import { search, selectedTags } from '@stores/searchStore';
import { ArticleItem } from '../ArticleItem';
import * as utils from '@utils/articles';
import './ArticlesList.scss';

type ArticlesListProps = {
	data: ArticleBlockType;
	emptyPlaceholder?: string | undefined;
};

const ArticlesList: Component<ArticlesListProps> = (props) => {
	const [articles, setArticles] = createSignal<ArticleBlockType>(props.data);

	/**
	 * Sort articles by year in descending order
	 */
	const sortYears = (articles: ArticleBlockType) => {
		return Object.keys(articles)
			.map(Number)
			.sort((a, b) => b - a);
	};

	const isEmpty = () => Object.keys(articles()).length === 0;

	createEffect(() => {
		const { state } = window.history;
		let filtered = props.data;

		/**
		 * Find articles by title
		 */
		if (state.search || search()) {
			filtered = utils.findArticlesBySearch(search(), filtered);
			setArticles(filtered);
		}

		/**
		 * Find articles by selected tags
		 */
		if (selectedTags().length !== 0) {
			filtered = utils.findArticlesByTags(selectedTags(), filtered);
			setArticles(filtered);

			return;
		}

		filtered = utils.findArticlesBySearch(search(), props.data);
		setArticles(filtered);
	});

	return (
		<div class="articles-list">
			{isEmpty() && (
				<div class="articles-list__empty">
					<p>{props.emptyPlaceholder || 'No articles found...'}</p>
				</div>
			)}
			<For
				each={sortYears(articles())}
				children={(year) => {
					return (
						<div class="articles-list__wrapper">
							<h2>{year}</h2>
							<For each={utils.sortArtcilesByDate(articles()[year])} children={(article) => <ArticleItem data={article} />} />
						</div>
					);
				}}
			/>
		</div>
	);
};

export default ArticlesList;
