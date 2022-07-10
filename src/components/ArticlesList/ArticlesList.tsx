import './ArticlesList.scss';
import { Component, createSignal } from 'solid-js';
import { PageHeading } from '@components/PageHeading';
import { IArticle } from '@root/interfaces';
import * as utils from '@root/utils/articles';
import { ArticleItem } from '../ArticleItem';

export type ArticlesListProps = {
  data: IArticle[];
  tags: string[];
};

export const ArticlesList: Component<ArticlesListProps> = ({ data, tags }) => {
  const [articles, setArticles] = createSignal(
    utils.filterArticlesByYear(data)
  );

  return (
    <section class='articles container'>
      <PageHeading
        heading='Статьи'
        description='Технические статьи, туториалы и различные справочные материалы которые
          связаны с IT тематикой находятся здесь.'
      />
      <div class='articles-search'>
        <svg
          width='25'
          height='24'
          viewBox='0 0 25 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M10.6026 3.60001C11.8798 3.59993 13.1316 3.94283 14.2172 4.5901C15.3028 5.23736 16.179 6.16331 16.7472 7.26368C17.3154 8.36405 17.5531 9.59517 17.4334 10.8184C17.3137 12.0417 16.8415 13.2085 16.0699 14.1876L21.2427 19.164C21.4085 19.3248 21.5053 19.5399 21.5135 19.7662C21.5218 19.9926 21.4411 20.2137 21.2874 20.3853C21.1337 20.5569 20.9184 20.6665 20.6845 20.6921C20.4505 20.7178 20.2151 20.6576 20.0253 20.5236L19.9205 20.436L14.7476 15.4596C13.8802 16.0922 12.8687 16.5172 11.7968 16.6994C10.7248 16.8815 9.62324 16.8157 8.58298 16.5074C7.54272 16.199 6.59366 15.6569 5.81422 14.9259C5.03478 14.1949 4.44733 13.296 4.10042 12.3034C3.7535 11.3108 3.65708 10.2531 3.81911 9.21757C3.98114 8.18204 4.39698 7.19847 5.03226 6.34812C5.66755 5.49778 6.50404 4.80506 7.47263 4.32721C8.44122 3.84936 9.51411 3.60009 10.6026 3.60001V3.60001ZM10.6026 5.40001C9.27934 5.40001 8.01025 5.90572 7.07454 6.80589C6.13884 7.70607 5.61316 8.92697 5.61316 10.2C5.61316 11.473 6.13884 12.6939 7.07454 13.5941C8.01025 14.4943 9.27934 15 10.6026 15C11.9259 15 13.195 14.4943 14.1307 13.5941C15.0664 12.6939 15.5921 11.473 15.5921 10.2C15.5921 8.92697 15.0664 7.70607 14.1307 6.80589C13.195 5.90572 11.9259 5.40001 10.6026 5.40001Z'></path>
        </svg>
        <input type='text' placeholder='поиск по названию или описанию...' />
        <span>{data.length}</span>
      </div>
      <div class='articles-tags'>
        <nav>
          <ul>
            {tags.map((tag) => (
              <li data-tag={tag.toLocaleLowerCase()}>{tag}</li>
            ))}
          </ul>
        </nav>
      </div>
      <div class='articles-list'>
        {Object.keys(articles())
          .map(Number)
          .sort((a, b) => b - a)
          .map((year) => (
            <div class='articles-list__wrapper'>
              <h2>{year}</h2>
              {utils.sortArtcilesByDate(articles()[year]).map((article) => (
                <ArticleItem data={article} />
              ))}
            </div>
          ))}
      </div>
    </section>
  );
};
