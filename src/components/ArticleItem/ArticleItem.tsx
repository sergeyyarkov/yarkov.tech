/* eslint-disable solid/reactivity */
import type { Component } from "solid-js";
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
	return (
		<article class="article-item">
			<a
				href={`${hrefLangPrefix}/blog/${new Date(props.data.published_at).toLocaleDateString("en-CA")}/${
					props.data.slug
				}/`}
			>
				<div class="flex">
					<h3>{props.data.title}</h3>
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
