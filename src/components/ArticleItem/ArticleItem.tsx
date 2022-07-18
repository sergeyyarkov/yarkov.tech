import type { ArticleType } from '@root/types';

import './ArticleItem.scss';
import { Component } from 'solid-js';
import { DateFormatter } from '@utils/date';

export type ArticleItemProps = {
	data: ArticleType;
};

export const ArticleItem: Component<ArticleItemProps> = (props) => {
	return (
		<article class="article-item">
			<a href="#">
				<h3>{props.data.title}</h3>
				<p>
					<time datetime={props.data.published_at.toString()}>{DateFormatter.format(new Date(props.data.published_at))}</time>
				</p>
			</a>
		</article>
	);
};
