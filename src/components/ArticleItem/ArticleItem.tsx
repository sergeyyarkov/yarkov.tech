import type { Component } from "solid-js";
import { createDateFormatter, createRelativeArticleUrl } from "@root/utils";
import { URL_BLOG_PREFIX } from "@root/constants";
import "./ArticleItem.scss";

export type ArticleItemProps = {
	id: number;
	title: string;
	pubDate: string;
	pageLang: string;
	articleLang: string;
	slug: string;
};

const ArticleItem: Component<ArticleItemProps> = (props) => {
	const articleLang = props.articleLang;

	const href = createRelativeArticleUrl(
		{ pubDate: props.pubDate, slug: props.slug, articleLang: props.articleLang },
		URL_BLOG_PREFIX
	);

	return (
		<article
			itemprop="blogPosts"
			itemscope
			itemtype="http://schema.org/BlogPosting"
			class="article-item"
		>
			<a href={href}>
				<div class="flex">
					<h3 itemprop="headline">{props.title}</h3>
					{articleLang !== props.pageLang && <sup>{articleLang.toLocaleUpperCase()}</sup>}
				</div>
				<p>
					<time datetime={props.pubDate}>
						{createDateFormatter(props.pageLang).format(new Date(props.pubDate))}
					</time>
				</p>
			</a>
		</article>
	);
};

export default ArticleItem;
