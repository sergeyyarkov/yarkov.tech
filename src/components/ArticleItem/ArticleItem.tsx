import type { Component } from "solid-js";
import { createDateFormatter, createRelativeArticleUrl } from "@root/utils";
import { URL_BLOG_PREFIX } from "@root/constants";
import "./ArticleItem.scss";

export type ArticleItemProps = {
	id: number;
	title: string;
	pubDate: Date;
	pageLang: string;
};

const ArticleItem: Component<ArticleItemProps> = (props) => {
	const articleLang = "ru";
	// const href = createRelativeArticleUrl(
	// 	{ id: props.id, title: props.title, pubDate: props.pubDate },
	// 	URL_BLOG_PREFIX
	// );

	return (
		<article
			itemprop="blogPosts"
			itemscope
			itemtype="http://schema.org/BlogPosting"
			class="article-item"
		>
			<a href={""}>
				<div class="flex">
					<h3 itemprop="headline">{props.title}</h3>
					{articleLang !== props.pageLang && <sup>{articleLang.toLocaleUpperCase()}</sup>}
				</div>
				<p>
					<time datetime={`props.pubDate.toISOString()`}>
						{/* {createDateFormatter(props.pageLang).format(props.pubDate)} */}
					</time>
				</p>
			</a>
		</article>
	);
};

export default ArticleItem;
