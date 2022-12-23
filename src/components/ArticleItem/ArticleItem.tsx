/* eslint-disable solid/reactivity */
import { Component, createEffect } from "solid-js";
import { createDateFormatter } from "@utils/date";
import "./ArticleItem.scss";
import { DEFAULT_LANGUAGE } from "@root/config";

export type ArticleItemProps = {
	data: ArticleType;
	lang: string;
};

export const ArticleItem: Component<ArticleItemProps> = (props) => {
	const isNonDefaultLanguage = props.data.lang && props.data.lang !== props.lang;
	const hrefLangPrefix = props.data.lang && props.data.lang !== DEFAULT_LANGUAGE ? `/${props.data.lang}` : "";
	const href = `${hrefLangPrefix}/blog/${new Date(props.data.published_at).toISOString().split("T")[0]}/${
		props.data.slug
	}/`;

	return (
		<article itemprop="blogPosts" itemscope itemtype="http://schema.org/BlogPosting" class="article-item">
			<a href={href}>
				<div class="flex">
					<h3 itemprop="headline">{props.data.title}</h3>
					{isNonDefaultLanguage && <sup>{props.data.lang.toLocaleUpperCase()}</sup>}
				</div>
				<p>
					<time datetime={props.data.published_at.toString()}>
						{createDateFormatter(props.lang).format(new Date(props.data.published_at))}
					</time>
				</p>
			</a>
		</article>
	);
};
