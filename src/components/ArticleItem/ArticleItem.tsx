import type { Component } from "solid-js";
import { createRelativeArticleUrl, createDateFormatter } from "@root/utils";
import { DEFAULT_LANGUAGE, URL_BLOG_PREFIX } from "@root/constants";
import "./ArticleItem.scss";
import { Article_Translations } from "@/src/graphql/graphql";

export type ArticleItemProps = {
	title: Article_Translations["title"];
	pub_date: Article_Translations["pub_date"];
	slug: Article_Translations["slug"];
	languages_code: Article_Translations["languages_code"];
	pageLang: string;
};

const ArticleItem: Component<ArticleItemProps> = (props) => {
	const { title, pub_date: pubDate, slug, languages_code, pageLang } = props;
	const articleLang = languages_code?.code.split("-")[0] || DEFAULT_LANGUAGE;

	const href = createRelativeArticleUrl({ pubDate, slug, articleLang }, URL_BLOG_PREFIX);

	return (
		<article
			itemprop="blogPosts"
			itemscope
			itemtype="http://schema.org/BlogPosting"
			class="article-item"
		>
			<a href={href}>
				<div class="flex">
					<h3 itemprop="headline">{title}</h3>
					{articleLang !== pageLang && <sup>{articleLang.toLocaleUpperCase()}</sup>}
				</div>
				<p>
					<time datetime={pubDate}>{createDateFormatter(pageLang).format(new Date(pubDate))}</time>
				</p>
			</a>
		</article>
	);
};

export default ArticleItem;
