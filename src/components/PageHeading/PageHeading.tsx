import { Component } from 'solid-js';
import styles from './PageHeading.module.scss';

export type PageHeadingProps = {
  heading: string;
  description?: string | undefined;
};

export const PageHeading: Component<PageHeadingProps> = ({
  heading,
  description,
}) => {
  return (
    <header>
      <h1
        class={styles.PageHeading}
        style={!description && 'margin-bottom: 2.5rem;'}>
        {heading}
      </h1>
      {description && <p class={styles.PageDescription}>{description}</p>}
    </header>
  );
};
