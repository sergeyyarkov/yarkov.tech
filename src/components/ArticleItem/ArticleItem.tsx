import './ArticleItem.scss';
import { Component } from 'solid-js';
import type { IArticle } from '@root/interfaces';
import { DateFormatter } from '@utils/date';

export type ArticleItemProps = {
  data: IArticle;
};

export const ArticleItem: Component<ArticleItemProps> = ({ data }) => (
  <article class='article-item'>
    <a href='#'>
      <h3>{data.title}</h3>
      <p>
        <time datetime={data.published_at.toString()}>
          {DateFormatter.format(new Date(data.published_at))}
        </time>
      </p>
    </a>
  </article>
);
