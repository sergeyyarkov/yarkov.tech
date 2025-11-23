/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.ArticleDocument,
    "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t": typeof types.TagDocument,
};
const documents: Documents = {
    "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.ArticleDocument,
    "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t": types.TagDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').ArticleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').TagDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
