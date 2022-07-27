import type { Component } from 'solid-js';

import { createSignal, createEffect, For } from 'solid-js';
import { search, selectedTags } from '@stores/searchStore';
import { ArticleItem } from '@components/ArticleItem';
import * as utils from '@utils/articles';
import './ArticlesList.scss';
import SearchInput from '../SearchInput';
import TagsList from '../TagsList';

type ArticlesListProps = {
	data: {
		articles: ArticleBlockType;
		tags: string[];
	};
	emptyPlaceholder?: string | undefined;
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
			<SearchInput count={getLength()} placeholder="поиск по названию или описанию..." />
			<TagsList data={props.data.tags} />
			<div class="articles-list">
				{isEmpty() ? (
					<div class="articles-list__empty">
						<p>{props.emptyPlaceholder || 'No articles found...'}</p>
					</div>
				) : (
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
				)}
			</div>
		</>
	);
};

export default ArticlesList;
