import type { Component } from "solid-js";
import { createDateFormatter } from "@utils/date";
import "./ArticleItem.scss";

export type ArticleItemProps = {
	data: ArticleType;
	lang: string;
};

export const ArticleItem: Component<ArticleItemProps> = (props) => {
	// eslint-disable-next-line solid/reactivity
	const DateFormatter = createDateFormatter(props.lang);
	return (
		<article class="article-item">
			<a href={`/blog/${new Date(props.data.published_at).toLocaleDateString("en-CA")}/${props.data.slug}/`}>
				<h3>{props.data.title}</h3>
				<p>
					<time datetime={props.data.published_at.toString()}>{DateFormatter.format(new Date(props.data.published_at))}</time>
				</p>
			</a>
		</article>
	);
};
