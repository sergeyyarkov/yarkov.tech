import { Component, JSX } from 'solid-js';

export type PageContentComposition = {
  Heading?: Component;
};

export const PageContent: Component<{ children: JSX.Element }> &
  PageContentComposition = (props) => {
  return <section>{props.children}</section>;
};
