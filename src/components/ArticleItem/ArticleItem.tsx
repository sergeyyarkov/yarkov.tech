import type { Component } from "solid-js";
import { createDateFormatter, createRelativeArticleUrl } from "@root/utils";
import { DEFAULT_LANGUAGE, URL_BLOG_PREFIX } from "@root/constants";
import "./ArticleItem.scss";
import type { Language } from "@/directus-schema";

export type ArticleItemProps = {
	id: number;
	title: string;
	pubDate: string;
	pageLang: string;
	articleLang: string | Language;
	slug: string;
};

const ArticleItem: Component<ArticleItemProps> = (props) => {
	const articleLang =
		typeof props.articleLang === "object" ? props.articleLang.code.split("-")[0] : DEFAULT_LANGUAGE;

	const href = createRelativeArticleUrl(
		{ pubDate: props.pubDate, slug: props.slug, articleLang },
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
