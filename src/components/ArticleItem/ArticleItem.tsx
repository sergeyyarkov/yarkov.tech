import type { Component } from "solid-js";
import { createRelativeArticleUrl, createDateFormatter } from "@root/utils";
import { DEFAULT_LANGUAGE, URL_BLOG_PREFIX } from "@root/constants";
import "./ArticleItem.scss";
import type { ArticleTranslation } from "@/directus-schema";

export type ArticleItemProps = {
	data: ArticleTranslation;
	pageLang: string;
};

const ArticleItem: Component<ArticleItemProps> = (props) => {
	const {
		data: { title, pub_date: pubDate, slug, languages_code },
		pageLang,
	} = props;
	const articleLang =
		typeof languages_code === "object" ? languages_code.code.split("-")[0] : DEFAULT_LANGUAGE;

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
