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
    "\n\t\tquery LatestAppealByClientIpQuery($client_ip: String!, $limit: Int!) {\n\t\t\tappeal(filter: { client_ip: { _eq: $client_ip } }, sort: [\"-date_created\"], limit: $limit) {\n\t\t\t\tclient_ip\n\t\t\t\tdate_created\n\t\t\t}\n\t\t}\n\t": typeof types.LatestAppealByClientIpQueryDocument,
    "\n\t\tmutation CreateAppealQuery(\n\t\t\t$name: String!\n\t\t\t$email: String!\n\t\t\t$subject: String!\n\t\t\t$message: String!\n\t\t\t$client_ip: String!\n\t\t) {\n\t\t\tcreate_appeal_item(\n\t\t\t\tdata: { name: $name, email: $email, subject: $subject, message: $message, client_ip: $client_ip }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t": typeof types.CreateAppealQueryDocument,
    "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.ArticleDocument,
    "\n\t\tquery RecentArticle($limit: Int!) {\n\t\t\tarticle(limit: $limit, sort: [\"-translations.pub_date\"]) {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.RecentArticleDocument,
    "\n\t\tquery Article_translations($slug: String!) {\n\t\t\tarticle_translations(filter: { slug: { _eq: $slug } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttags {\n\t\t\t\t\ttag_id {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tslug\n\t\t\t\tcontent\n\t\t\t\tauthor {\n\t\t\t\t\tfirst_name\n\t\t\t\t\tlast_name\n\t\t\t\t}\n\t\t\t\tpub_date\n\t\t\t\tviews\n\t\t\t\tlanguages_code {\n\t\t\t\t\tcode\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tcover_image {\n\t\t\t\t\ttitle\n\t\t\t\t\ttype\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t\tarticle_id {\n\t\t\t\t\ttranslations {\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\t\tcode\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t\tpub_date\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.Article_TranslationsDocument,
    "\n\t\tmutation Update_article_translations_item($id: ID!, $views: Int!) {\n\t\t\tupdate_article_translations_item(id: $id, data: { views: $views }) {\n\t\t\t\tviews\n\t\t\t}\n\t\t}\n\t": typeof types.Update_Article_Translations_ItemDocument,
    "\n\t\tquery AboutMeQuery($pageLang: String!) {\n\t\t\tglobal_translations(filter: { languages_code: { code: { _contains: $pageLang } } }) {\n\t\t\t\tabout\n\t\t\t}\n\t\t}\n\t": typeof types.AboutMeQueryDocument,
    "\n\t\tquery ContactsQuery {\n\t\t\tglobal {\n\t\t\t\temail\n\t\t\t\tgithub\n\t\t\t\ttelegram\n\t\t\t}\n\t\t}\n\t": typeof types.ContactsQueryDocument,
    "\n\t\tquery SiteSettingsQuery {\n\t\t\tglobal {\n\t\t\t\tym_counter\n\t\t\t\trecent_articles_limit\n\t\t\t}\n\t\t}\n\t": typeof types.SiteSettingsQueryDocument,
    "\n\t\tquery Project_translations($pageLang: String!) {\n\t\t\tproject_translations(filter: { languages_code: { code: { _contains: $pageLang } } }, sort: [\"-year\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tyear\n\t\t\t\tdescription\n\t\t\t\tsource_url\n\t\t\t\tdemo_url\n\t\t\t\tarticle_url\n\t\t\t\ticon {\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": typeof types.Project_TranslationsDocument,
    "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t": typeof types.TagDocument,
};
const documents: Documents = {
    "\n\t\tquery LatestAppealByClientIpQuery($client_ip: String!, $limit: Int!) {\n\t\t\tappeal(filter: { client_ip: { _eq: $client_ip } }, sort: [\"-date_created\"], limit: $limit) {\n\t\t\t\tclient_ip\n\t\t\t\tdate_created\n\t\t\t}\n\t\t}\n\t": types.LatestAppealByClientIpQueryDocument,
    "\n\t\tmutation CreateAppealQuery(\n\t\t\t$name: String!\n\t\t\t$email: String!\n\t\t\t$subject: String!\n\t\t\t$message: String!\n\t\t\t$client_ip: String!\n\t\t) {\n\t\t\tcreate_appeal_item(\n\t\t\t\tdata: { name: $name, email: $email, subject: $subject, message: $message, client_ip: $client_ip }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t": types.CreateAppealQueryDocument,
    "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.ArticleDocument,
    "\n\t\tquery RecentArticle($limit: Int!) {\n\t\t\tarticle(limit: $limit, sort: [\"-translations.pub_date\"]) {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.RecentArticleDocument,
    "\n\t\tquery Article_translations($slug: String!) {\n\t\t\tarticle_translations(filter: { slug: { _eq: $slug } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttags {\n\t\t\t\t\ttag_id {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tslug\n\t\t\t\tcontent\n\t\t\t\tauthor {\n\t\t\t\t\tfirst_name\n\t\t\t\t\tlast_name\n\t\t\t\t}\n\t\t\t\tpub_date\n\t\t\t\tviews\n\t\t\t\tlanguages_code {\n\t\t\t\t\tcode\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tcover_image {\n\t\t\t\t\ttitle\n\t\t\t\t\ttype\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t\tarticle_id {\n\t\t\t\t\ttranslations {\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\t\tcode\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t\tpub_date\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.Article_TranslationsDocument,
    "\n\t\tmutation Update_article_translations_item($id: ID!, $views: Int!) {\n\t\t\tupdate_article_translations_item(id: $id, data: { views: $views }) {\n\t\t\t\tviews\n\t\t\t}\n\t\t}\n\t": types.Update_Article_Translations_ItemDocument,
    "\n\t\tquery AboutMeQuery($pageLang: String!) {\n\t\t\tglobal_translations(filter: { languages_code: { code: { _contains: $pageLang } } }) {\n\t\t\t\tabout\n\t\t\t}\n\t\t}\n\t": types.AboutMeQueryDocument,
    "\n\t\tquery ContactsQuery {\n\t\t\tglobal {\n\t\t\t\temail\n\t\t\t\tgithub\n\t\t\t\ttelegram\n\t\t\t}\n\t\t}\n\t": types.ContactsQueryDocument,
    "\n\t\tquery SiteSettingsQuery {\n\t\t\tglobal {\n\t\t\t\tym_counter\n\t\t\t\trecent_articles_limit\n\t\t\t}\n\t\t}\n\t": types.SiteSettingsQueryDocument,
    "\n\t\tquery Project_translations($pageLang: String!) {\n\t\t\tproject_translations(filter: { languages_code: { code: { _contains: $pageLang } } }, sort: [\"-year\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tyear\n\t\t\t\tdescription\n\t\t\t\tsource_url\n\t\t\t\tdemo_url\n\t\t\t\tarticle_url\n\t\t\t\ticon {\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t": types.Project_TranslationsDocument,
    "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t": types.TagDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery LatestAppealByClientIpQuery($client_ip: String!, $limit: Int!) {\n\t\t\tappeal(filter: { client_ip: { _eq: $client_ip } }, sort: [\"-date_created\"], limit: $limit) {\n\t\t\t\tclient_ip\n\t\t\t\tdate_created\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').LatestAppealByClientIpQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tmutation CreateAppealQuery(\n\t\t\t$name: String!\n\t\t\t$email: String!\n\t\t\t$subject: String!\n\t\t\t$message: String!\n\t\t\t$client_ip: String!\n\t\t) {\n\t\t\tcreate_appeal_item(\n\t\t\t\tdata: { name: $name, email: $email, subject: $subject, message: $message, client_ip: $client_ip }\n\t\t\t) {\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').CreateAppealQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Article {\n\t\t\tarticle {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\tid\n\t\t\t\t\ttitle\n\t\t\t\t\ttags {\n\t\t\t\t\t\ttag_id {\n\t\t\t\t\t\t\ttitle\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tdescription\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t\tname\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').ArticleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery RecentArticle($limit: Int!) {\n\t\t\tarticle(limit: $limit, sort: [\"-translations.pub_date\"]) {\n\t\t\t\ttranslations(filter: { status: { _eq: \"published\" } }) {\n\t\t\t\t\ttitle\n\t\t\t\t\tslug\n\t\t\t\t\tpub_date\n\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\tcode\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').RecentArticleDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Article_translations($slug: String!) {\n\t\t\tarticle_translations(filter: { slug: { _eq: $slug } }) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\ttags {\n\t\t\t\t\ttag_id {\n\t\t\t\t\t\ttitle\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\tdescription\n\t\t\t\tslug\n\t\t\t\tcontent\n\t\t\t\tauthor {\n\t\t\t\t\tfirst_name\n\t\t\t\t\tlast_name\n\t\t\t\t}\n\t\t\t\tpub_date\n\t\t\t\tviews\n\t\t\t\tlanguages_code {\n\t\t\t\t\tcode\n\t\t\t\t\tname\n\t\t\t\t}\n\t\t\t\tcover_image {\n\t\t\t\t\ttitle\n\t\t\t\t\ttype\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t\tarticle_id {\n\t\t\t\t\ttranslations {\n\t\t\t\t\t\tslug\n\t\t\t\t\t\tlanguages_code {\n\t\t\t\t\t\t\tcode\n\t\t\t\t\t\t\tname\n\t\t\t\t\t\t}\n\t\t\t\t\t\tpub_date\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').Article_TranslationsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tmutation Update_article_translations_item($id: ID!, $views: Int!) {\n\t\t\tupdate_article_translations_item(id: $id, data: { views: $views }) {\n\t\t\t\tviews\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').Update_Article_Translations_ItemDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery AboutMeQuery($pageLang: String!) {\n\t\t\tglobal_translations(filter: { languages_code: { code: { _contains: $pageLang } } }) {\n\t\t\t\tabout\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').AboutMeQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery ContactsQuery {\n\t\t\tglobal {\n\t\t\t\temail\n\t\t\t\tgithub\n\t\t\t\ttelegram\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').ContactsQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery SiteSettingsQuery {\n\t\t\tglobal {\n\t\t\t\tym_counter\n\t\t\t\trecent_articles_limit\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').SiteSettingsQueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Project_translations($pageLang: String!) {\n\t\t\tproject_translations(filter: { languages_code: { code: { _contains: $pageLang } } }, sort: [\"-year\"]) {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t\tyear\n\t\t\t\tdescription\n\t\t\t\tsource_url\n\t\t\t\tdemo_url\n\t\t\t\tarticle_url\n\t\t\t\ticon {\n\t\t\t\t\tfilename_disk\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').Project_TranslationsDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\t\tquery Tag {\n\t\t\ttag {\n\t\t\t\tid\n\t\t\t\ttitle\n\t\t\t}\n\t\t}\n\t"): typeof import('./graphql').TagDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
