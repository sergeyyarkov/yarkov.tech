import { Component } from 'solid-js';
import { DateFormatter } from '@utils/date';
import './ArticleItem.scss';

export type ArticleItemProps = {
	data: ArticleType;
};

export const ArticleItem: Component<ArticleItemProps> = (props) => {
	return (
		<article class="article-item">
			<a href={`/${new Date(props.data.published_at).toLocaleDateString('en-CA')}/${props.data.slug}`}>
				<h3>{props.data.title}</h3>
				<p>
					<time datetime={props.data.published_at.toString()}>{DateFormatter.format(new Date(props.data.published_at))}</time>
				</p>
			</a>
		</article>
	);
};
