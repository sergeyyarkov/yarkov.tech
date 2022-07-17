import { Component } from 'solid-js';
import styles from './PageHeading.module.scss';

export type PageHeadingProps = {
  heading: string;
  description?: string | undefined;
};

export const PageHeading: Component<PageHeadingProps> = (props) => {
  return (
    <header>
      <h1
        class={styles.PageHeading}
        style={!props.description && 'margin-bottom: 2.5rem;'}>
        {props.heading}
      </h1>
      {props.description && <p class={styles.PageDescription}>{props.description}</p>}
    </header>
  );
};
