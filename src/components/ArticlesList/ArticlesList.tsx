import type { Component } from "solid-js";
import { createSignal, createEffect, For } from "solid-js";
import { search, selectedTags, setCount } from "@stores/searchStore";
import SearchInput from "./SearchInput";
import TagsList from "./TagsList";
import ArticleItem from "@components/ArticleItem";
import "./ArticlesList.scss";
import { ArticleQuery } from "@/src/graphql/graphql";

type UiStringsType = { "articles.empty": string; "input.search": string };

type ArticlesBlockType = Record<string, ArticleQuery["article"][0]["translations"]>;

type ArticlesListProps = {
	articles: ArticlesBlockType;
	tags: string[];
	pageLang: string;
	i18n: UiStringsType;
};

const ArticlesList: Component<ArticlesListProps> = (props) => {
	const [articles, setArticles] = createSignal<ArticlesBlockType>(props.articles);

	const isEmpty = () => Object.keys(articles()).length === 0;

	const sortByYears = (articles: ArticlesBlockType) => {
		return Object.keys(articles)
			.map(Number)
			.sort((a, b) => b - a);
	};

	const searchArticles = ({
		params: { search, tags },
	}: {
		params: { search: string; tags?: string[] };
	}): ArticlesBlockType => {
		const filter = (
			cb: (
				articles: ArticleQuery["article"][0]["translations"]
			) => ArticleQuery["article"][0]["translations"]
		) => {
			return Object.fromEntries(
				Object.keys(props.articles)
					.map((year) => [year, cb(props.articles[year])])
					.filter((articles) => articles[1]?.length !== 0)
			);
		};

		return filter((articles) => {
			let filtered = articles?.filter(
				(a) => a && a.title.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase())
			);
			if (tags && tags.length > 0) {
				filtered = filtered?.filter((a) =>
					tags.some((t) => {
						return a?.tags?.map((t) => t?.tag_id?.title).includes(t);
					})
				);
			}
			return filtered;
		});
	};

	createEffect(() => {
		const filtered = searchArticles({ params: { search: search(), tags: selectedTags() } });
		setArticles(filtered);
		setCount(Object.values(filtered).flat().length);
	});

	return (
		<>
			<SearchInput i18n={{ "input.search": props.i18n["input.search"] }} />
			<TagsList tags={props.tags} />
			<div itemscope itemtype="http://schema.org/Blog" class="articles-list">
				{!isEmpty() ? (
					<For each={sortByYears(articles())}>
						{(year) => (
							<div class="articles-list__wrapper">
								<h2>{year}</h2>
								<For each={articles()[year]}>
									{(a) =>
										a && (
											<ArticleItem
												slug={a.slug}
												title={a.title}
												languages_code={a.languages_code}
												pub_date={a.pub_date}
												pageLang={props.pageLang}
											/>
										)
									}
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
		</>
	);
};

export default ArticlesList;
