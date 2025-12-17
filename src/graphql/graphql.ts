/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** ISO8601 Date values */
  Date: { input: any; output: any; }
  /** BigInt value */
  GraphQLBigInt: { input: any; output: any; }
  /** A Float or a String */
  GraphQLStringOrFloat: { input: any; output: any; }
  /** Hashed string values */
  Hash: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export enum EventEnum {
  Create = 'create',
  Delete = 'delete',
  Update = 'update'
}

export type Mutation = {
  __typename?: 'Mutation';
  create_article_item?: Maybe<Article>;
  create_article_items: Array<Article>;
  create_article_tag_item?: Maybe<Article_Tag>;
  create_article_tag_items: Array<Article_Tag>;
  create_article_translations_item?: Maybe<Article_Translations>;
  create_article_translations_items: Array<Article_Translations>;
  create_article_translations_tag_item?: Maybe<Article_Translations_Tag>;
  create_article_translations_tag_items: Array<Article_Translations_Tag>;
  create_global_translations_item?: Maybe<Global_Translations>;
  create_global_translations_items: Array<Global_Translations>;
  create_home_page_translations_item?: Maybe<Home_Page_Translations>;
  create_home_page_translations_items: Array<Home_Page_Translations>;
  create_languages_item?: Maybe<Languages>;
  create_languages_items: Array<Languages>;
  create_project_item?: Maybe<Project>;
  create_project_items: Array<Project>;
  create_project_translations_item?: Maybe<Project_Translations>;
  create_project_translations_items: Array<Project_Translations>;
  create_tag_item?: Maybe<Tag>;
  create_tag_items: Array<Tag>;
  delete_article_item?: Maybe<Delete_One>;
  delete_article_items?: Maybe<Delete_Many>;
  delete_article_tag_item?: Maybe<Delete_One>;
  delete_article_tag_items?: Maybe<Delete_Many>;
  delete_article_translations_item?: Maybe<Delete_One>;
  delete_article_translations_items?: Maybe<Delete_Many>;
  delete_article_translations_tag_item?: Maybe<Delete_One>;
  delete_article_translations_tag_items?: Maybe<Delete_Many>;
  delete_global_translations_item?: Maybe<Delete_One>;
  delete_global_translations_items?: Maybe<Delete_Many>;
  delete_home_page_translations_item?: Maybe<Delete_One>;
  delete_home_page_translations_items?: Maybe<Delete_Many>;
  delete_languages_item?: Maybe<Delete_One>;
  delete_languages_items?: Maybe<Delete_Many>;
  delete_project_item?: Maybe<Delete_One>;
  delete_project_items?: Maybe<Delete_Many>;
  delete_project_translations_item?: Maybe<Delete_One>;
  delete_project_translations_items?: Maybe<Delete_Many>;
  delete_tag_item?: Maybe<Delete_One>;
  delete_tag_items?: Maybe<Delete_Many>;
  update_article_batch: Array<Article>;
  update_article_item?: Maybe<Article>;
  update_article_items: Array<Article>;
  update_article_tag_batch: Array<Article_Tag>;
  update_article_tag_item?: Maybe<Article_Tag>;
  update_article_tag_items: Array<Article_Tag>;
  update_article_translations_batch: Array<Article_Translations>;
  update_article_translations_item?: Maybe<Article_Translations>;
  update_article_translations_items: Array<Article_Translations>;
  update_article_translations_tag_batch: Array<Article_Translations_Tag>;
  update_article_translations_tag_item?: Maybe<Article_Translations_Tag>;
  update_article_translations_tag_items: Array<Article_Translations_Tag>;
  update_global?: Maybe<Global>;
  update_global_translations_batch: Array<Global_Translations>;
  update_global_translations_item?: Maybe<Global_Translations>;
  update_global_translations_items: Array<Global_Translations>;
  update_home_page?: Maybe<Home_Page>;
  update_home_page_translations_batch: Array<Home_Page_Translations>;
  update_home_page_translations_item?: Maybe<Home_Page_Translations>;
  update_home_page_translations_items: Array<Home_Page_Translations>;
  update_languages_batch: Array<Languages>;
  update_languages_item?: Maybe<Languages>;
  update_languages_items: Array<Languages>;
  update_project_batch: Array<Project>;
  update_project_item?: Maybe<Project>;
  update_project_items: Array<Project>;
  update_project_translations_batch: Array<Project_Translations>;
  update_project_translations_item?: Maybe<Project_Translations>;
  update_project_translations_items: Array<Project_Translations>;
  update_tag_batch: Array<Tag>;
  update_tag_item?: Maybe<Tag>;
  update_tag_items: Array<Tag>;
};


export type MutationCreate_Article_ItemArgs = {
  data: Create_Article_Input;
};


export type MutationCreate_Article_ItemsArgs = {
  data?: InputMaybe<Array<Create_Article_Input>>;
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Article_Tag_ItemArgs = {
  data: Create_Article_Tag_Input;
};


export type MutationCreate_Article_Tag_ItemsArgs = {
  data?: InputMaybe<Array<Create_Article_Tag_Input>>;
  filter?: InputMaybe<Article_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Article_Translations_ItemArgs = {
  data: Create_Article_Translations_Input;
};


export type MutationCreate_Article_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Article_Translations_Input>>;
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Article_Translations_Tag_ItemArgs = {
  data: Create_Article_Translations_Tag_Input;
};


export type MutationCreate_Article_Translations_Tag_ItemsArgs = {
  data?: InputMaybe<Array<Create_Article_Translations_Tag_Input>>;
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Global_Translations_ItemArgs = {
  data: Create_Global_Translations_Input;
};


export type MutationCreate_Global_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Global_Translations_Input>>;
  filter?: InputMaybe<Global_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Home_Page_Translations_ItemArgs = {
  data: Create_Home_Page_Translations_Input;
};


export type MutationCreate_Home_Page_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Home_Page_Translations_Input>>;
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Languages_ItemArgs = {
  data: Create_Languages_Input;
};


export type MutationCreate_Languages_ItemsArgs = {
  data?: InputMaybe<Array<Create_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Project_ItemArgs = {
  data: Create_Project_Input;
};


export type MutationCreate_Project_ItemsArgs = {
  data?: InputMaybe<Array<Create_Project_Input>>;
  filter?: InputMaybe<Project_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Project_Translations_ItemArgs = {
  data: Create_Project_Translations_Input;
};


export type MutationCreate_Project_Translations_ItemsArgs = {
  data?: InputMaybe<Array<Create_Project_Translations_Input>>;
  filter?: InputMaybe<Project_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationCreate_Tag_ItemArgs = {
  data: Create_Tag_Input;
};


export type MutationCreate_Tag_ItemsArgs = {
  data?: InputMaybe<Array<Create_Tag_Input>>;
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationDelete_Article_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Article_Tag_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_Tag_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Article_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Article_Translations_Tag_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Article_Translations_Tag_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Global_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Global_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Home_Page_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Home_Page_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Languages_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Languages_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Project_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Project_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Project_Translations_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Project_Translations_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationDelete_Tag_ItemArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDelete_Tag_ItemsArgs = {
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
};


export type MutationUpdate_Article_BatchArgs = {
  data?: InputMaybe<Array<Update_Article_Input>>;
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_ItemArgs = {
  data: Update_Article_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Article_ItemsArgs = {
  data: Update_Article_Input;
  filter?: InputMaybe<Article_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Tag_BatchArgs = {
  data?: InputMaybe<Array<Update_Article_Tag_Input>>;
  filter?: InputMaybe<Article_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Tag_ItemArgs = {
  data: Update_Article_Tag_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Article_Tag_ItemsArgs = {
  data: Update_Article_Tag_Input;
  filter?: InputMaybe<Article_Tag_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Article_Translations_Input>>;
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Translations_ItemArgs = {
  data: Update_Article_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Article_Translations_ItemsArgs = {
  data: Update_Article_Translations_Input;
  filter?: InputMaybe<Article_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Translations_Tag_BatchArgs = {
  data?: InputMaybe<Array<Update_Article_Translations_Tag_Input>>;
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Article_Translations_Tag_ItemArgs = {
  data: Update_Article_Translations_Tag_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Article_Translations_Tag_ItemsArgs = {
  data: Update_Article_Translations_Tag_Input;
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_GlobalArgs = {
  data: Update_Global_Input;
};


export type MutationUpdate_Global_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Global_Translations_Input>>;
  filter?: InputMaybe<Global_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Global_Translations_ItemArgs = {
  data: Update_Global_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Global_Translations_ItemsArgs = {
  data: Update_Global_Translations_Input;
  filter?: InputMaybe<Global_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Home_PageArgs = {
  data: Update_Home_Page_Input;
};


export type MutationUpdate_Home_Page_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Home_Page_Translations_Input>>;
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Home_Page_Translations_ItemArgs = {
  data: Update_Home_Page_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Home_Page_Translations_ItemsArgs = {
  data: Update_Home_Page_Translations_Input;
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Languages_BatchArgs = {
  data?: InputMaybe<Array<Update_Languages_Input>>;
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Languages_ItemArgs = {
  data: Update_Languages_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Languages_ItemsArgs = {
  data: Update_Languages_Input;
  filter?: InputMaybe<Languages_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Project_BatchArgs = {
  data?: InputMaybe<Array<Update_Project_Input>>;
  filter?: InputMaybe<Project_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Project_ItemArgs = {
  data: Update_Project_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Project_ItemsArgs = {
  data: Update_Project_Input;
  filter?: InputMaybe<Project_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Project_Translations_BatchArgs = {
  data?: InputMaybe<Array<Update_Project_Translations_Input>>;
  filter?: InputMaybe<Project_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Project_Translations_ItemArgs = {
  data: Update_Project_Translations_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Project_Translations_ItemsArgs = {
  data: Update_Project_Translations_Input;
  filter?: InputMaybe<Project_Translations_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Tag_BatchArgs = {
  data?: InputMaybe<Array<Update_Tag_Input>>;
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type MutationUpdate_Tag_ItemArgs = {
  data: Update_Tag_Input;
  id: Scalars['ID']['input'];
};


export type MutationUpdate_Tag_ItemsArgs = {
  data: Update_Tag_Input;
  filter?: InputMaybe<Tag_Filter>;
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Query = {
  __typename?: 'Query';
  article: Array<Article>;
  article_aggregated: Array<Article_Aggregated>;
  article_by_id?: Maybe<Article>;
  article_by_version?: Maybe<Version_Article>;
  article_tag: Array<Article_Tag>;
  article_tag_aggregated: Array<Article_Tag_Aggregated>;
  article_tag_by_id?: Maybe<Article_Tag>;
  article_tag_by_version?: Maybe<Version_Article_Tag>;
  article_translations: Array<Article_Translations>;
  article_translations_aggregated: Array<Article_Translations_Aggregated>;
  article_translations_by_id?: Maybe<Article_Translations>;
  article_translations_by_version?: Maybe<Version_Article_Translations>;
  article_translations_tag: Array<Article_Translations_Tag>;
  article_translations_tag_aggregated: Array<Article_Translations_Tag_Aggregated>;
  article_translations_tag_by_id?: Maybe<Article_Translations_Tag>;
  article_translations_tag_by_version?: Maybe<Version_Article_Translations_Tag>;
  global?: Maybe<Global>;
  global_by_version?: Maybe<Version_Global>;
  global_translations: Array<Global_Translations>;
  global_translations_aggregated: Array<Global_Translations_Aggregated>;
  global_translations_by_id?: Maybe<Global_Translations>;
  global_translations_by_version?: Maybe<Version_Global_Translations>;
  home_page?: Maybe<Home_Page>;
  home_page_by_version?: Maybe<Version_Home_Page>;
  home_page_translations: Array<Home_Page_Translations>;
  home_page_translations_aggregated: Array<Home_Page_Translations_Aggregated>;
  home_page_translations_by_id?: Maybe<Home_Page_Translations>;
  home_page_translations_by_version?: Maybe<Version_Home_Page_Translations>;
  languages: Array<Languages>;
  languages_aggregated: Array<Languages_Aggregated>;
  languages_by_id?: Maybe<Languages>;
  languages_by_version?: Maybe<Version_Languages>;
  project: Array<Project>;
  project_aggregated: Array<Project_Aggregated>;
  project_by_id?: Maybe<Project>;
  project_by_version?: Maybe<Version_Project>;
  project_translations: Array<Project_Translations>;
  project_translations_aggregated: Array<Project_Translations_Aggregated>;
  project_translations_by_id?: Maybe<Project_Translations>;
  project_translations_by_version?: Maybe<Version_Project_Translations>;
  tag: Array<Tag>;
  tag_aggregated: Array<Tag_Aggregated>;
  tag_by_id?: Maybe<Tag>;
  tag_by_version?: Maybe<Version_Tag>;
};


export type QueryArticleArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_AggregatedArgs = {
  filter?: InputMaybe<Article_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticle_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryArticle_TagArgs = {
  filter?: InputMaybe<Article_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Tag_AggregatedArgs = {
  filter?: InputMaybe<Article_Tag_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Tag_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticle_Tag_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryArticle_TranslationsArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_AggregatedArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticle_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryArticle_Translations_TagArgs = {
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_Tag_AggregatedArgs = {
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryArticle_Translations_Tag_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticle_Translations_Tag_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryGlobalArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobal_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryGlobal_TranslationsArgs = {
  filter?: InputMaybe<Global_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGlobal_Translations_AggregatedArgs = {
  filter?: InputMaybe<Global_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGlobal_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGlobal_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryHome_PageArgs = {
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_By_VersionArgs = {
  version: Scalars['String']['input'];
};


export type QueryHome_Page_TranslationsArgs = {
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_Translations_AggregatedArgs = {
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryHome_Page_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHome_Page_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryLanguagesArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_AggregatedArgs = {
  filter?: InputMaybe<Languages_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryLanguages_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryLanguages_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryProjectArgs = {
  filter?: InputMaybe<Project_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProject_AggregatedArgs = {
  filter?: InputMaybe<Project_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProject_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProject_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryProject_TranslationsArgs = {
  filter?: InputMaybe<Project_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProject_Translations_AggregatedArgs = {
  filter?: InputMaybe<Project_Translations_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryProject_Translations_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryProject_Translations_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};


export type QueryTagArgs = {
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTag_AggregatedArgs = {
  filter?: InputMaybe<Tag_Filter>;
  groupBy?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryTag_By_IdArgs = {
  id: Scalars['ID']['input'];
  version?: InputMaybe<Scalars['String']['input']>;
};


export type QueryTag_By_VersionArgs = {
  id: Scalars['ID']['input'];
  version: Scalars['String']['input'];
};

export type Subscription = {
  __typename?: 'Subscription';
  article_mutated?: Maybe<Article_Mutated>;
  article_tag_mutated?: Maybe<Article_Tag_Mutated>;
  article_translations_mutated?: Maybe<Article_Translations_Mutated>;
  article_translations_tag_mutated?: Maybe<Article_Translations_Tag_Mutated>;
  directus_access_mutated?: Maybe<Directus_Access_Mutated>;
  directus_activity_mutated?: Maybe<Directus_Activity_Mutated>;
  directus_comments_mutated?: Maybe<Directus_Comments_Mutated>;
  directus_dashboards_mutated?: Maybe<Directus_Dashboards_Mutated>;
  directus_files_mutated?: Maybe<Directus_Files_Mutated>;
  directus_flows_mutated?: Maybe<Directus_Flows_Mutated>;
  directus_folders_mutated?: Maybe<Directus_Folders_Mutated>;
  directus_notifications_mutated?: Maybe<Directus_Notifications_Mutated>;
  directus_operations_mutated?: Maybe<Directus_Operations_Mutated>;
  directus_panels_mutated?: Maybe<Directus_Panels_Mutated>;
  directus_permissions_mutated?: Maybe<Directus_Permissions_Mutated>;
  directus_policies_mutated?: Maybe<Directus_Policies_Mutated>;
  directus_presets_mutated?: Maybe<Directus_Presets_Mutated>;
  directus_revisions_mutated?: Maybe<Directus_Revisions_Mutated>;
  directus_roles_mutated?: Maybe<Directus_Roles_Mutated>;
  directus_settings_mutated?: Maybe<Directus_Settings_Mutated>;
  directus_shares_mutated?: Maybe<Directus_Shares_Mutated>;
  directus_translations_mutated?: Maybe<Directus_Translations_Mutated>;
  directus_users_mutated?: Maybe<Directus_Users_Mutated>;
  directus_versions_mutated?: Maybe<Directus_Versions_Mutated>;
  directus_webhooks_mutated?: Maybe<Directus_Webhooks_Mutated>;
  global_mutated?: Maybe<Global_Mutated>;
  global_translations_mutated?: Maybe<Global_Translations_Mutated>;
  home_page_mutated?: Maybe<Home_Page_Mutated>;
  home_page_translations_mutated?: Maybe<Home_Page_Translations_Mutated>;
  languages_mutated?: Maybe<Languages_Mutated>;
  project_mutated?: Maybe<Project_Mutated>;
  project_translations_mutated?: Maybe<Project_Translations_Mutated>;
  tag_mutated?: Maybe<Tag_Mutated>;
};


export type SubscriptionArticle_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticle_Tag_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticle_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionArticle_Translations_Tag_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Access_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Activity_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Comments_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Dashboards_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Files_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Flows_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Folders_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Notifications_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Operations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Panels_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Permissions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Policies_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Presets_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Revisions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Roles_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Settings_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Shares_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Users_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Versions_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionDirectus_Webhooks_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionGlobal_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionGlobal_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionHome_Page_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionLanguages_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionProject_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionProject_Translations_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};


export type SubscriptionTag_MutatedArgs = {
  event?: InputMaybe<EventEnum>;
};

export type Article = {
  __typename?: 'article';
  id: Scalars['ID']['output'];
  translations?: Maybe<Array<Maybe<Article_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type ArticleTranslationsArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Aggregated = {
  __typename?: 'article_aggregated';
  avg?: Maybe<Article_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Aggregated_Fields>;
  count?: Maybe<Article_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Aggregated_Fields>;
  min?: Maybe<Article_Aggregated_Fields>;
  sum?: Maybe<Article_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Aggregated_Fields>;
};

export type Article_Aggregated_Count = {
  __typename?: 'article_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Article_Aggregated_Fields = {
  __typename?: 'article_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Article_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Article_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Article_Mutated = {
  __typename?: 'article_mutated';
  data?: Maybe<Article>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Article_Tag = {
  __typename?: 'article_tag';
  article_id?: Maybe<Article>;
  id: Scalars['ID']['output'];
  tag_id?: Maybe<Tag>;
};


export type Article_TagArticle_IdArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TagTag_IdArgs = {
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Tag_Aggregated = {
  __typename?: 'article_tag_aggregated';
  avg?: Maybe<Article_Tag_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Tag_Aggregated_Fields>;
  count?: Maybe<Article_Tag_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Tag_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Tag_Aggregated_Fields>;
  min?: Maybe<Article_Tag_Aggregated_Fields>;
  sum?: Maybe<Article_Tag_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Tag_Aggregated_Fields>;
};

export type Article_Tag_Aggregated_Count = {
  __typename?: 'article_tag_aggregated_count';
  article_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
};

export type Article_Tag_Aggregated_Fields = {
  __typename?: 'article_tag_aggregated_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

export type Article_Tag_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Tag_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Tag_Filter>>>;
  article_id?: InputMaybe<Article_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  tag_id?: InputMaybe<Tag_Filter>;
};

export type Article_Tag_Mutated = {
  __typename?: 'article_tag_mutated';
  data?: Maybe<Article_Tag>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Article_Translations = {
  __typename?: 'article_translations';
  article_id?: Maybe<Article>;
  author?: Maybe<Directus_Users>;
  content: Scalars['String']['output'];
  cover_image?: Maybe<Directus_Files>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  pub_date: Scalars['Date']['output'];
  pub_date_func?: Maybe<Datetime_Functions>;
  slug: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Maybe<Article_Translations_Tag>>>;
  tags_func?: Maybe<Count_Functions>;
  title: Scalars['String']['output'];
  views: Scalars['Int']['output'];
};


export type Article_TranslationsArticle_IdArgs = {
  filter?: InputMaybe<Article_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsAuthorArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsCover_ImageArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_TranslationsTagsArgs = {
  filter?: InputMaybe<Article_Translations_Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Translations_Aggregated = {
  __typename?: 'article_translations_aggregated';
  avg?: Maybe<Article_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Translations_Aggregated_Fields>;
  count?: Maybe<Article_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Translations_Aggregated_Fields>;
  min?: Maybe<Article_Translations_Aggregated_Fields>;
  sum?: Maybe<Article_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Translations_Aggregated_Fields>;
};

export type Article_Translations_Aggregated_Count = {
  __typename?: 'article_translations_aggregated_count';
  article_id?: Maybe<Scalars['Int']['output']>;
  author?: Maybe<Scalars['Int']['output']>;
  content?: Maybe<Scalars['Int']['output']>;
  cover_image?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  pub_date?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['Int']['output']>;
  tags?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Article_Translations_Aggregated_Fields = {
  __typename?: 'article_translations_aggregated_fields';
  article_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  views?: Maybe<Scalars['Float']['output']>;
};

export type Article_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  article_id?: InputMaybe<Article_Filter>;
  author?: InputMaybe<Directus_Users_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  cover_image?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  pub_date?: InputMaybe<Date_Filter_Operators>;
  pub_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<Article_Translations_Tag_Quantifier_Filter>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  views?: InputMaybe<Number_Filter_Operators>;
};

export type Article_Translations_Mutated = {
  __typename?: 'article_translations_mutated';
  data?: Maybe<Article_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Article_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  _none?: InputMaybe<Article_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Filter>>>;
  _some?: InputMaybe<Article_Translations_Filter>;
  article_id?: InputMaybe<Article_Filter>;
  author?: InputMaybe<Directus_Users_Filter>;
  content?: InputMaybe<String_Filter_Operators>;
  cover_image?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  pub_date?: InputMaybe<Date_Filter_Operators>;
  pub_date_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  slug?: InputMaybe<String_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<Article_Translations_Tag_Quantifier_Filter>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  views?: InputMaybe<Number_Filter_Operators>;
};

export type Article_Translations_Tag = {
  __typename?: 'article_translations_tag';
  article_translations_id?: Maybe<Article_Translations>;
  id: Scalars['ID']['output'];
  tag_id?: Maybe<Tag>;
};


export type Article_Translations_TagArticle_Translations_IdArgs = {
  filter?: InputMaybe<Article_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Article_Translations_TagTag_IdArgs = {
  filter?: InputMaybe<Tag_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Article_Translations_Tag_Aggregated = {
  __typename?: 'article_translations_tag_aggregated';
  avg?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
  avgDistinct?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
  count?: Maybe<Article_Translations_Tag_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Article_Translations_Tag_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
  min?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
  sum?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
  sumDistinct?: Maybe<Article_Translations_Tag_Aggregated_Fields>;
};

export type Article_Translations_Tag_Aggregated_Count = {
  __typename?: 'article_translations_tag_aggregated_count';
  article_translations_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  tag_id?: Maybe<Scalars['Int']['output']>;
};

export type Article_Translations_Tag_Aggregated_Fields = {
  __typename?: 'article_translations_tag_aggregated_fields';
  article_translations_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  tag_id?: Maybe<Scalars['Float']['output']>;
};

export type Article_Translations_Tag_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Tag_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Tag_Filter>>>;
  article_translations_id?: InputMaybe<Article_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  tag_id?: InputMaybe<Tag_Filter>;
};

export type Article_Translations_Tag_Mutated = {
  __typename?: 'article_translations_tag_mutated';
  data?: Maybe<Article_Translations_Tag>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Article_Translations_Tag_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Article_Translations_Tag_Filter>>>;
  _none?: InputMaybe<Article_Translations_Tag_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Article_Translations_Tag_Filter>>>;
  _some?: InputMaybe<Article_Translations_Tag_Filter>;
  article_translations_id?: InputMaybe<Article_Translations_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  tag_id?: InputMaybe<Tag_Filter>;
};

export type Big_Int_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLBigInt']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Boolean_Filter_Operators = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Count_Function_Filter_Operators = {
  count?: InputMaybe<Number_Filter_Operators>;
};

export type Count_Functions = {
  __typename?: 'count_functions';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Create_Article_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Article_Translations_Input>>>;
};

export type Create_Article_Tag_Input = {
  article_id?: InputMaybe<Create_Article_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  tag_id?: InputMaybe<Create_Tag_Input>;
};

export type Create_Article_Translations_Input = {
  article_id?: InputMaybe<Create_Article_Input>;
  author?: InputMaybe<Create_Directus_Users_Input>;
  content: Scalars['String']['input'];
  cover_image?: InputMaybe<Create_Directus_Files_Input>;
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  pub_date: Scalars['Date']['input'];
  slug: Scalars['String']['input'];
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Create_Article_Translations_Tag_Input>>>;
  title: Scalars['String']['input'];
  views: Scalars['Int']['input'];
};

export type Create_Article_Translations_Tag_Input = {
  article_translations_id?: InputMaybe<Create_Article_Translations_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  tag_id?: InputMaybe<Create_Tag_Input>;
};

export type Create_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<Create_Directus_Policies_Input>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Create_Directus_Users_Input>;
};

export type Create_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download: Scalars['String']['input'];
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Create_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Create_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage: Scalars['String']['input'];
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Create_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Folders_Input>;
};

export type Create_Directus_Permissions_Input = {
  action: Scalars['String']['input'];
  collection: Scalars['String']['input'];
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<Create_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Create_Directus_Policies_Input = {
  admin_access: Scalars['Boolean']['input'];
  app_access: Scalars['Boolean']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name: Scalars['String']['input'];
  permissions?: InputMaybe<Array<InputMaybe<Create_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
};

export type Create_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Create_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  parent?: InputMaybe<Create_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Create_Directus_Users_Input>>>;
};

export type Create_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Create_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Create_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Create_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Create_Global_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ntfy_password?: InputMaybe<Scalars['String']['input']>;
  ntfy_user?: InputMaybe<Scalars['String']['input']>;
  recent_articles_limit?: InputMaybe<Scalars['Int']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Global_Translations_Input>>>;
  ym_counter?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Global_Translations_Input = {
  about?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  global_id?: InputMaybe<Create_Global_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  navigation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Create_Home_Page_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Home_Page_Translations_Input>>>;
};

export type Create_Home_Page_Translations_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  home_page_id?: InputMaybe<Create_Home_Page_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Languages_Input = {
  code: Scalars['ID']['input'];
  direction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Create_Project_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Create_Project_Translations_Input>>>;
};

export type Create_Project_Translations_Input = {
  article_url?: InputMaybe<Scalars['String']['input']>;
  demo_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Create_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Create_Languages_Input>;
  project_id?: InputMaybe<Create_Project_Input>;
  source_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Create_Tag_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
};

export type Date_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Datetime_Function_Filter_Operators = {
  day?: InputMaybe<Number_Filter_Operators>;
  hour?: InputMaybe<Number_Filter_Operators>;
  minute?: InputMaybe<Number_Filter_Operators>;
  month?: InputMaybe<Number_Filter_Operators>;
  second?: InputMaybe<Number_Filter_Operators>;
  week?: InputMaybe<Number_Filter_Operators>;
  weekday?: InputMaybe<Number_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Datetime_Functions = {
  __typename?: 'datetime_functions';
  day?: Maybe<Scalars['Int']['output']>;
  hour?: Maybe<Scalars['Int']['output']>;
  minute?: Maybe<Scalars['Int']['output']>;
  month?: Maybe<Scalars['Int']['output']>;
  second?: Maybe<Scalars['Int']['output']>;
  week?: Maybe<Scalars['Int']['output']>;
  weekday?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Delete_Many = {
  __typename?: 'delete_many';
  ids: Array<Maybe<Scalars['ID']['output']>>;
};

export type Delete_One = {
  __typename?: 'delete_one';
  id: Scalars['ID']['output'];
};

export type Directus_Access = {
  __typename?: 'directus_access';
  id: Scalars['ID']['output'];
  policy?: Maybe<Directus_Policies>;
  role?: Maybe<Directus_Roles>;
  sort?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_AccessPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_AccessUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Access_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Access_Mutated = {
  __typename?: 'directus_access_mutated';
  data?: Maybe<Directus_Access>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Access_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _none?: InputMaybe<Directus_Access_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Access_Filter>>>;
  _some?: InputMaybe<Directus_Access_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  role?: InputMaybe<Directus_Roles_Filter>;
  sort?: InputMaybe<Number_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Activity = {
  __typename?: 'directus_activity';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  ip?: Maybe<Scalars['String']['output']>;
  item: Scalars['String']['output'];
  origin?: Maybe<Scalars['String']['output']>;
  revisions?: Maybe<Array<Maybe<Directus_Revisions>>>;
  revisions_func?: Maybe<Count_Functions>;
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
  user?: Maybe<Directus_Users>;
  user_agent?: Maybe<Scalars['String']['output']>;
};


export type Directus_ActivityRevisionsArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_ActivityUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Activity_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Activity_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ip?: InputMaybe<String_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  origin?: InputMaybe<String_Filter_Operators>;
  revisions?: InputMaybe<Directus_Revisions_Quantifier_Filter>;
  revisions_func?: InputMaybe<Count_Function_Filter_Operators>;
  timestamp?: InputMaybe<Date_Filter_Operators>;
  timestamp_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  user?: InputMaybe<Directus_Users_Filter>;
  user_agent?: InputMaybe<String_Filter_Operators>;
};

export type Directus_Activity_Mutated = {
  __typename?: 'directus_activity_mutated';
  data?: Maybe<Directus_Activity>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Comments = {
  __typename?: 'directus_comments';
  collection: Scalars['String']['output'];
  comment: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Directus_CommentsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_CommentsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Comments_Mutated = {
  __typename?: 'directus_comments_mutated';
  data?: Maybe<Directus_Comments>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Dashboards = {
  __typename?: 'directus_dashboards';
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  note?: Maybe<Scalars['String']['output']>;
  panels?: Maybe<Array<Maybe<Directus_Panels>>>;
  panels_func?: Maybe<Count_Functions>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_DashboardsPanelsArgs = {
  filter?: InputMaybe<Directus_Panels_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_DashboardsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Dashboards_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Dashboards_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  panels?: InputMaybe<Directus_Panels_Quantifier_Filter>;
  panels_func?: InputMaybe<Count_Function_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Dashboards_Mutated = {
  __typename?: 'directus_dashboards_mutated';
  data?: Maybe<Directus_Dashboards>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Files = {
  __typename?: 'directus_files';
  charset?: Maybe<Scalars['String']['output']>;
  created_on?: Maybe<Scalars['Date']['output']>;
  created_on_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  embed?: Maybe<Scalars['String']['output']>;
  filename_disk?: Maybe<Scalars['String']['output']>;
  filename_download: Scalars['String']['output'];
  filesize?: Maybe<Scalars['GraphQLBigInt']['output']>;
  focal_point_x?: Maybe<Scalars['Int']['output']>;
  focal_point_y?: Maybe<Scalars['Int']['output']>;
  folder?: Maybe<Directus_Folders>;
  height?: Maybe<Scalars['Int']['output']>;
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  metadata?: Maybe<Scalars['JSON']['output']>;
  metadata_func?: Maybe<Count_Functions>;
  modified_by?: Maybe<Directus_Users>;
  modified_on?: Maybe<Scalars['Date']['output']>;
  modified_on_func?: Maybe<Datetime_Functions>;
  storage: Scalars['String']['output'];
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  tus_data?: Maybe<Scalars['JSON']['output']>;
  tus_data_func?: Maybe<Count_Functions>;
  tus_id?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  uploaded_by?: Maybe<Directus_Users>;
  uploaded_on?: Maybe<Scalars['Date']['output']>;
  uploaded_on_func?: Maybe<Datetime_Functions>;
  width?: Maybe<Scalars['Int']['output']>;
};


export type Directus_FilesFolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesModified_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FilesUploaded_ByArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Files_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Files_Filter>>>;
  charset?: InputMaybe<String_Filter_Operators>;
  created_on?: InputMaybe<Date_Filter_Operators>;
  created_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  duration?: InputMaybe<Number_Filter_Operators>;
  embed?: InputMaybe<String_Filter_Operators>;
  filename_disk?: InputMaybe<String_Filter_Operators>;
  filename_download?: InputMaybe<String_Filter_Operators>;
  filesize?: InputMaybe<Big_Int_Filter_Operators>;
  focal_point_x?: InputMaybe<Number_Filter_Operators>;
  focal_point_y?: InputMaybe<Number_Filter_Operators>;
  folder?: InputMaybe<Directus_Folders_Filter>;
  height?: InputMaybe<Number_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  metadata?: InputMaybe<String_Filter_Operators>;
  metadata_func?: InputMaybe<Count_Function_Filter_Operators>;
  modified_by?: InputMaybe<Directus_Users_Filter>;
  modified_on?: InputMaybe<Date_Filter_Operators>;
  modified_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  storage?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  tus_data?: InputMaybe<String_Filter_Operators>;
  tus_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  tus_id?: InputMaybe<String_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  uploaded_by?: InputMaybe<Directus_Users_Filter>;
  uploaded_on?: InputMaybe<Date_Filter_Operators>;
  uploaded_on_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Files_Mutated = {
  __typename?: 'directus_files_mutated';
  data?: Maybe<Directus_Files>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Flows = {
  __typename?: 'directus_flows';
  accountability?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  operation?: Maybe<Directus_Operations>;
  operations?: Maybe<Array<Maybe<Directus_Operations>>>;
  operations_func?: Maybe<Count_Functions>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  status?: Maybe<Scalars['String']['output']>;
  trigger?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_FlowsOperationArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsOperationsArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_FlowsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Flows_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Flows_Filter>>>;
  accountability?: InputMaybe<String_Filter_Operators>;
  color?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  operation?: InputMaybe<Directus_Operations_Filter>;
  operations?: InputMaybe<Directus_Operations_Quantifier_Filter>;
  operations_func?: InputMaybe<Count_Function_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  status?: InputMaybe<String_Filter_Operators>;
  trigger?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Flows_Mutated = {
  __typename?: 'directus_flows_mutated';
  data?: Maybe<Directus_Flows>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Folders = {
  __typename?: 'directus_folders';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Folders>;
};


export type Directus_FoldersParentArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Folders_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Folders_Filter>>>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Folders_Filter>;
};

export type Directus_Folders_Mutated = {
  __typename?: 'directus_folders_mutated';
  data?: Maybe<Directus_Folders>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Notifications = {
  __typename?: 'directus_notifications';
  collection?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  recipient?: Maybe<Directus_Users>;
  sender?: Maybe<Directus_Users>;
  status?: Maybe<Scalars['String']['output']>;
  subject: Scalars['String']['output'];
  timestamp?: Maybe<Scalars['Date']['output']>;
  timestamp_func?: Maybe<Datetime_Functions>;
};


export type Directus_NotificationsRecipientArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_NotificationsSenderArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Notifications_Mutated = {
  __typename?: 'directus_notifications_mutated';
  data?: Maybe<Directus_Notifications>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations = {
  __typename?: 'directus_operations';
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  flow?: Maybe<Directus_Flows>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  reject?: Maybe<Directus_Operations>;
  resolve?: Maybe<Directus_Operations>;
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
};


export type Directus_OperationsFlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsRejectArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsResolveArgs = {
  filter?: InputMaybe<Directus_Operations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_OperationsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Operations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Operations_Mutated = {
  __typename?: 'directus_operations_mutated';
  data?: Maybe<Directus_Operations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Operations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _none?: InputMaybe<Directus_Operations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Operations_Filter>>>;
  _some?: InputMaybe<Directus_Operations_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  flow?: InputMaybe<Directus_Flows_Filter>;
  id?: InputMaybe<Id_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  reject?: InputMaybe<Directus_Operations_Filter>;
  resolve?: InputMaybe<Directus_Operations_Filter>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Panels = {
  __typename?: 'directus_panels';
  color?: Maybe<Scalars['String']['output']>;
  dashboard?: Maybe<Directus_Dashboards>;
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  height: Scalars['Int']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Scalars['JSON']['output']>;
  options_func?: Maybe<Count_Functions>;
  position_x: Scalars['Int']['output'];
  position_y: Scalars['Int']['output'];
  show_header: Scalars['Boolean']['output'];
  type: Scalars['String']['output'];
  user_created?: Maybe<Directus_Users>;
  width: Scalars['Int']['output'];
};


export type Directus_PanelsDashboardArgs = {
  filter?: InputMaybe<Directus_Dashboards_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PanelsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Panels_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Panels_Mutated = {
  __typename?: 'directus_panels_mutated';
  data?: Maybe<Directus_Panels>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Panels_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _none?: InputMaybe<Directus_Panels_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Panels_Filter>>>;
  _some?: InputMaybe<Directus_Panels_Filter>;
  color?: InputMaybe<String_Filter_Operators>;
  dashboard?: InputMaybe<Directus_Dashboards_Filter>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  height?: InputMaybe<Number_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  note?: InputMaybe<String_Filter_Operators>;
  options?: InputMaybe<String_Filter_Operators>;
  options_func?: InputMaybe<Count_Function_Filter_Operators>;
  position_x?: InputMaybe<Number_Filter_Operators>;
  position_y?: InputMaybe<Number_Filter_Operators>;
  show_header?: InputMaybe<Boolean_Filter_Operators>;
  type?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  width?: InputMaybe<Number_Filter_Operators>;
};

export type Directus_Permissions = {
  __typename?: 'directus_permissions';
  action: Scalars['String']['output'];
  collection: Scalars['String']['output'];
  fields?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['ID']['output']>;
  permissions?: Maybe<Scalars['JSON']['output']>;
  permissions_func?: Maybe<Count_Functions>;
  policy?: Maybe<Directus_Policies>;
  presets?: Maybe<Scalars['JSON']['output']>;
  presets_func?: Maybe<Count_Functions>;
  validation?: Maybe<Scalars['JSON']['output']>;
  validation_func?: Maybe<Count_Functions>;
};


export type Directus_PermissionsPolicyArgs = {
  filter?: InputMaybe<Directus_Policies_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Permissions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Permissions_Mutated = {
  __typename?: 'directus_permissions_mutated';
  data?: Maybe<Directus_Permissions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Permissions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _none?: InputMaybe<Directus_Permissions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Permissions_Filter>>>;
  _some?: InputMaybe<Directus_Permissions_Filter>;
  action?: InputMaybe<String_Filter_Operators>;
  collection?: InputMaybe<String_Filter_Operators>;
  fields?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  permissions?: InputMaybe<String_Filter_Operators>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  policy?: InputMaybe<Directus_Policies_Filter>;
  presets?: InputMaybe<String_Filter_Operators>;
  presets_func?: InputMaybe<Count_Function_Filter_Operators>;
  validation?: InputMaybe<String_Filter_Operators>;
  validation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies = {
  __typename?: 'directus_policies';
  admin_access: Scalars['Boolean']['output'];
  app_access: Scalars['Boolean']['output'];
  description?: Maybe<Scalars['String']['output']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa: Scalars['Boolean']['output'];
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ip_access?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  name: Scalars['String']['output'];
  permissions?: Maybe<Array<Maybe<Directus_Permissions>>>;
  permissions_func?: Maybe<Count_Functions>;
  roles?: Maybe<Array<Maybe<Directus_Access>>>;
  roles_func?: Maybe<Count_Functions>;
  users?: Maybe<Array<Maybe<Directus_Access>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_PoliciesPermissionsArgs = {
  filter?: InputMaybe<Directus_Permissions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesRolesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PoliciesUsersArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Policies_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Policies_Filter>>>;
  admin_access?: InputMaybe<Boolean_Filter_Operators>;
  app_access?: InputMaybe<Boolean_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  enforce_tfa?: InputMaybe<Boolean_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  ip_access?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  permissions?: InputMaybe<Directus_Permissions_Quantifier_Filter>;
  permissions_func?: InputMaybe<Count_Function_Filter_Operators>;
  roles?: InputMaybe<Directus_Access_Quantifier_Filter>;
  roles_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Access_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Policies_Mutated = {
  __typename?: 'directus_policies_mutated';
  data?: Maybe<Directus_Policies>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Presets = {
  __typename?: 'directus_presets';
  bookmark?: Maybe<Scalars['String']['output']>;
  collection?: Maybe<Scalars['String']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  filter?: Maybe<Scalars['JSON']['output']>;
  filter_func?: Maybe<Count_Functions>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  layout?: Maybe<Scalars['String']['output']>;
  layout_options?: Maybe<Scalars['JSON']['output']>;
  layout_options_func?: Maybe<Count_Functions>;
  layout_query?: Maybe<Scalars['JSON']['output']>;
  layout_query_func?: Maybe<Count_Functions>;
  refresh_interval?: Maybe<Scalars['Int']['output']>;
  role?: Maybe<Directus_Roles>;
  search?: Maybe<Scalars['String']['output']>;
  user?: Maybe<Directus_Users>;
};


export type Directus_PresetsRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_PresetsUserArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Presets_Mutated = {
  __typename?: 'directus_presets_mutated';
  data?: Maybe<Directus_Presets>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions = {
  __typename?: 'directus_revisions';
  activity?: Maybe<Directus_Activity>;
  collection: Scalars['String']['output'];
  data?: Maybe<Scalars['JSON']['output']>;
  data_func?: Maybe<Count_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  parent?: Maybe<Directus_Revisions>;
  version?: Maybe<Directus_Versions>;
};


export type Directus_RevisionsActivityArgs = {
  filter?: InputMaybe<Directus_Activity_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsParentArgs = {
  filter?: InputMaybe<Directus_Revisions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RevisionsVersionArgs = {
  filter?: InputMaybe<Directus_Versions_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Revisions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Revisions_Mutated = {
  __typename?: 'directus_revisions_mutated';
  data?: Maybe<Directus_Revisions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Revisions_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _none?: InputMaybe<Directus_Revisions_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Revisions_Filter>>>;
  _some?: InputMaybe<Directus_Revisions_Filter>;
  activity?: InputMaybe<Directus_Activity_Filter>;
  collection?: InputMaybe<String_Filter_Operators>;
  data?: InputMaybe<String_Filter_Operators>;
  data_func?: InputMaybe<Count_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Revisions_Filter>;
  version?: InputMaybe<Directus_Versions_Filter>;
};

export type Directus_Roles = {
  __typename?: 'directus_roles';
  children?: Maybe<Array<Maybe<Directus_Roles>>>;
  children_func?: Maybe<Count_Functions>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<Directus_Roles>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  users?: Maybe<Array<Maybe<Directus_Users>>>;
  users_func?: Maybe<Count_Functions>;
};


export type Directus_RolesChildrenArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesParentArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_RolesUsersArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Roles_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Roles_Mutated = {
  __typename?: 'directus_roles_mutated';
  data?: Maybe<Directus_Roles>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Roles_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _none?: InputMaybe<Directus_Roles_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Roles_Filter>>>;
  _some?: InputMaybe<Directus_Roles_Filter>;
  children?: InputMaybe<Directus_Roles_Quantifier_Filter>;
  children_func?: InputMaybe<Count_Function_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  parent?: InputMaybe<Directus_Roles_Filter>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  users?: InputMaybe<Directus_Users_Quantifier_Filter>;
  users_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Directus_Settings = {
  __typename?: 'directus_settings';
  auth_login_attempts?: Maybe<Scalars['Int']['output']>;
  auth_password_policy?: Maybe<Scalars['String']['output']>;
  basemaps?: Maybe<Scalars['JSON']['output']>;
  basemaps_func?: Maybe<Count_Functions>;
  custom_aspect_ratios?: Maybe<Scalars['JSON']['output']>;
  custom_aspect_ratios_func?: Maybe<Count_Functions>;
  custom_css?: Maybe<Scalars['String']['output']>;
  default_appearance?: Maybe<Scalars['String']['output']>;
  default_language?: Maybe<Scalars['String']['output']>;
  default_theme_dark?: Maybe<Scalars['String']['output']>;
  default_theme_light?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  mapbox_key?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_allow_deletes_note */
  mcp_allow_deletes: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_enabled_note */
  mcp_enabled: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.mcp_prompts_collection_note */
  mcp_prompts_collection?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_note */
  mcp_system_prompt?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.mcp_system_prompt_enabled_note */
  mcp_system_prompt_enabled?: Maybe<Scalars['Boolean']['output']>;
  module_bar?: Maybe<Scalars['JSON']['output']>;
  module_bar_func?: Maybe<Count_Functions>;
  org_name?: Maybe<Scalars['String']['output']>;
  product_updates?: Maybe<Scalars['Boolean']['output']>;
  /** $t:field_options.directus_settings.project_color_note */
  project_color?: Maybe<Scalars['String']['output']>;
  project_descriptor?: Maybe<Scalars['String']['output']>;
  project_id?: Maybe<Scalars['ID']['output']>;
  project_logo?: Maybe<Directus_Files>;
  project_name?: Maybe<Scalars['String']['output']>;
  project_owner?: Maybe<Scalars['String']['output']>;
  project_status?: Maybe<Scalars['String']['output']>;
  project_url?: Maybe<Scalars['String']['output']>;
  project_usage?: Maybe<Scalars['String']['output']>;
  public_background?: Maybe<Directus_Files>;
  public_favicon?: Maybe<Directus_Files>;
  public_foreground?: Maybe<Directus_Files>;
  public_note?: Maybe<Scalars['String']['output']>;
  /** $t:fields.directus_settings.public_registration_note */
  public_registration: Scalars['Boolean']['output'];
  /** $t:fields.directus_settings.public_registration_email_filter_note */
  public_registration_email_filter?: Maybe<Scalars['JSON']['output']>;
  public_registration_email_filter_func?: Maybe<Count_Functions>;
  public_registration_role?: Maybe<Directus_Roles>;
  /** $t:fields.directus_settings.public_registration_verify_email_note */
  public_registration_verify_email?: Maybe<Scalars['Boolean']['output']>;
  report_bug_url?: Maybe<Scalars['String']['output']>;
  report_error_url?: Maybe<Scalars['String']['output']>;
  report_feature_url?: Maybe<Scalars['String']['output']>;
  storage_asset_presets?: Maybe<Scalars['JSON']['output']>;
  storage_asset_presets_func?: Maybe<Count_Functions>;
  storage_asset_transform?: Maybe<Scalars['String']['output']>;
  storage_default_folder?: Maybe<Directus_Folders>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  visual_editor_urls?: Maybe<Scalars['JSON']['output']>;
  visual_editor_urls_func?: Maybe<Count_Functions>;
};


export type Directus_SettingsProject_LogoArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_BackgroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_FaviconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_ForegroundArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsPublic_Registration_RoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SettingsStorage_Default_FolderArgs = {
  filter?: InputMaybe<Directus_Folders_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Settings_Mutated = {
  __typename?: 'directus_settings_mutated';
  data?: Maybe<Directus_Settings>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Shares = {
  __typename?: 'directus_shares';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_end?: Maybe<Scalars['Date']['output']>;
  date_end_func?: Maybe<Datetime_Functions>;
  /** $t:shared_leave_blank_for_unlimited */
  date_start?: Maybe<Scalars['Date']['output']>;
  date_start_func?: Maybe<Datetime_Functions>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  /** $t:shared_leave_blank_for_unlimited */
  max_uses?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  /** $t:shared_leave_blank_for_passwordless_access */
  password?: Maybe<Scalars['Hash']['output']>;
  role?: Maybe<Directus_Roles>;
  times_used?: Maybe<Scalars['Int']['output']>;
  user_created?: Maybe<Directus_Users>;
};


export type Directus_SharesRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_SharesUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Shares_Mutated = {
  __typename?: 'directus_shares_mutated';
  data?: Maybe<Directus_Shares>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Translations = {
  __typename?: 'directus_translations';
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  language: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Directus_Translations_Mutated = {
  __typename?: 'directus_translations_mutated';
  data?: Maybe<Directus_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users = {
  __typename?: 'directus_users';
  appearance?: Maybe<Scalars['String']['output']>;
  auth_data?: Maybe<Scalars['JSON']['output']>;
  auth_data_func?: Maybe<Count_Functions>;
  avatar?: Maybe<Directus_Files>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  email_notifications?: Maybe<Scalars['Boolean']['output']>;
  external_identifier?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  language?: Maybe<Scalars['String']['output']>;
  last_access?: Maybe<Scalars['Date']['output']>;
  last_access_func?: Maybe<Datetime_Functions>;
  last_name?: Maybe<Scalars['String']['output']>;
  last_page?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['Hash']['output']>;
  policies?: Maybe<Array<Maybe<Directus_Access>>>;
  policies_func?: Maybe<Count_Functions>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Directus_Roles>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  tags_func?: Maybe<Count_Functions>;
  text_direction?: Maybe<Scalars['String']['output']>;
  tfa_secret?: Maybe<Scalars['Hash']['output']>;
  theme_dark?: Maybe<Scalars['String']['output']>;
  theme_dark_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_dark_overrides_func?: Maybe<Count_Functions>;
  theme_light?: Maybe<Scalars['String']['output']>;
  theme_light_overrides?: Maybe<Scalars['JSON']['output']>;
  theme_light_overrides_func?: Maybe<Count_Functions>;
  title?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['Hash']['output']>;
};


export type Directus_UsersAvatarArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersPoliciesArgs = {
  filter?: InputMaybe<Directus_Access_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_UsersRoleArgs = {
  filter?: InputMaybe<Directus_Roles_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Users_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Users_Mutated = {
  __typename?: 'directus_users_mutated';
  data?: Maybe<Directus_Users>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Users_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _none?: InputMaybe<Directus_Users_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Users_Filter>>>;
  _some?: InputMaybe<Directus_Users_Filter>;
  appearance?: InputMaybe<String_Filter_Operators>;
  auth_data?: InputMaybe<String_Filter_Operators>;
  auth_data_func?: InputMaybe<Count_Function_Filter_Operators>;
  avatar?: InputMaybe<Directus_Files_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  email?: InputMaybe<String_Filter_Operators>;
  email_notifications?: InputMaybe<Boolean_Filter_Operators>;
  external_identifier?: InputMaybe<String_Filter_Operators>;
  first_name?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  language?: InputMaybe<String_Filter_Operators>;
  last_access?: InputMaybe<Date_Filter_Operators>;
  last_access_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  last_name?: InputMaybe<String_Filter_Operators>;
  last_page?: InputMaybe<String_Filter_Operators>;
  location?: InputMaybe<String_Filter_Operators>;
  password?: InputMaybe<Hash_Filter_Operators>;
  policies?: InputMaybe<Directus_Access_Quantifier_Filter>;
  policies_func?: InputMaybe<Count_Function_Filter_Operators>;
  provider?: InputMaybe<String_Filter_Operators>;
  role?: InputMaybe<Directus_Roles_Filter>;
  status?: InputMaybe<String_Filter_Operators>;
  tags?: InputMaybe<String_Filter_Operators>;
  tags_func?: InputMaybe<Count_Function_Filter_Operators>;
  text_direction?: InputMaybe<String_Filter_Operators>;
  tfa_secret?: InputMaybe<Hash_Filter_Operators>;
  theme_dark?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides?: InputMaybe<String_Filter_Operators>;
  theme_dark_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  theme_light?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides?: InputMaybe<String_Filter_Operators>;
  theme_light_overrides_func?: InputMaybe<Count_Function_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  token?: InputMaybe<Hash_Filter_Operators>;
};

export type Directus_Versions = {
  __typename?: 'directus_versions';
  collection: Scalars['String']['output'];
  date_created?: Maybe<Scalars['Date']['output']>;
  date_created_func?: Maybe<Datetime_Functions>;
  date_updated?: Maybe<Scalars['Date']['output']>;
  date_updated_func?: Maybe<Datetime_Functions>;
  delta?: Maybe<Scalars['JSON']['output']>;
  delta_func?: Maybe<Count_Functions>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  item: Scalars['String']['output'];
  key: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  user_created?: Maybe<Directus_Users>;
  user_updated?: Maybe<Directus_Users>;
};


export type Directus_VersionsUser_CreatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Directus_VersionsUser_UpdatedArgs = {
  filter?: InputMaybe<Directus_Users_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Versions_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Directus_Versions_Filter>>>;
  collection?: InputMaybe<String_Filter_Operators>;
  date_created?: InputMaybe<Date_Filter_Operators>;
  date_created_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  date_updated?: InputMaybe<Date_Filter_Operators>;
  date_updated_func?: InputMaybe<Datetime_Function_Filter_Operators>;
  delta?: InputMaybe<String_Filter_Operators>;
  delta_func?: InputMaybe<Count_Function_Filter_Operators>;
  hash?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Id_Filter_Operators>;
  item?: InputMaybe<String_Filter_Operators>;
  key?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
  user_created?: InputMaybe<Directus_Users_Filter>;
  user_updated?: InputMaybe<Directus_Users_Filter>;
};

export type Directus_Versions_Mutated = {
  __typename?: 'directus_versions_mutated';
  data?: Maybe<Directus_Versions>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Directus_Webhooks = {
  __typename?: 'directus_webhooks';
  actions: Array<Maybe<Scalars['String']['output']>>;
  collections: Array<Maybe<Scalars['String']['output']>>;
  data?: Maybe<Scalars['Boolean']['output']>;
  headers?: Maybe<Scalars['JSON']['output']>;
  headers_func?: Maybe<Count_Functions>;
  id: Scalars['ID']['output'];
  method?: Maybe<Scalars['String']['output']>;
  migrated_flow?: Maybe<Directus_Flows>;
  name: Scalars['String']['output'];
  status?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  was_active_before_deprecation: Scalars['Boolean']['output'];
};


export type Directus_WebhooksMigrated_FlowArgs = {
  filter?: InputMaybe<Directus_Flows_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Directus_Webhooks_Mutated = {
  __typename?: 'directus_webhooks_mutated';
  data?: Maybe<Directus_Webhooks>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Global = {
  __typename?: 'global';
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  ntfy_password?: Maybe<Scalars['String']['output']>;
  ntfy_user?: Maybe<Scalars['String']['output']>;
  recent_articles_limit?: Maybe<Scalars['Int']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Array<Maybe<Global_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
  ym_counter?: Maybe<Scalars['Int']['output']>;
};


export type GlobalTranslationsArgs = {
  filter?: InputMaybe<Global_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Global_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Global_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Global_Filter>>>;
  email?: InputMaybe<String_Filter_Operators>;
  github?: InputMaybe<String_Filter_Operators>;
  id?: InputMaybe<Number_Filter_Operators>;
  ntfy_password?: InputMaybe<String_Filter_Operators>;
  ntfy_user?: InputMaybe<String_Filter_Operators>;
  recent_articles_limit?: InputMaybe<Number_Filter_Operators>;
  telegram?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  translations?: InputMaybe<Global_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
  ym_counter?: InputMaybe<Number_Filter_Operators>;
};

export type Global_Mutated = {
  __typename?: 'global_mutated';
  data?: Maybe<Global>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Global_Translations = {
  __typename?: 'global_translations';
  about?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  global_id?: Maybe<Global>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  navigation?: Maybe<Scalars['JSON']['output']>;
  navigation_func?: Maybe<Count_Functions>;
};


export type Global_TranslationsGlobal_IdArgs = {
  filter?: InputMaybe<Global_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Global_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Global_Translations_Aggregated = {
  __typename?: 'global_translations_aggregated';
  avg?: Maybe<Global_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Global_Translations_Aggregated_Fields>;
  count?: Maybe<Global_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Global_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Global_Translations_Aggregated_Fields>;
  min?: Maybe<Global_Translations_Aggregated_Fields>;
  sum?: Maybe<Global_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Global_Translations_Aggregated_Fields>;
};

export type Global_Translations_Aggregated_Count = {
  __typename?: 'global_translations_aggregated_count';
  about?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  global_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  navigation?: Maybe<Scalars['Int']['output']>;
};

export type Global_Translations_Aggregated_Fields = {
  __typename?: 'global_translations_aggregated_fields';
  global_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Global_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Global_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Global_Translations_Filter>>>;
  about?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  global_id?: InputMaybe<Global_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  navigation?: InputMaybe<String_Filter_Operators>;
  navigation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Global_Translations_Mutated = {
  __typename?: 'global_translations_mutated';
  data?: Maybe<Global_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Global_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Global_Translations_Filter>>>;
  _none?: InputMaybe<Global_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Global_Translations_Filter>>>;
  _some?: InputMaybe<Global_Translations_Filter>;
  about?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  global_id?: InputMaybe<Global_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  navigation?: InputMaybe<String_Filter_Operators>;
  navigation_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Hash_Filter_Operators = {
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Home_Page = {
  __typename?: 'home_page';
  id: Scalars['ID']['output'];
  translations?: Maybe<Array<Maybe<Home_Page_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type Home_PageTranslationsArgs = {
  filter?: InputMaybe<Home_Page_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Home_Page_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Home_Page_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Home_Page_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Home_Page_Mutated = {
  __typename?: 'home_page_mutated';
  data?: Maybe<Home_Page>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Home_Page_Translations = {
  __typename?: 'home_page_translations';
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  home_page_id?: Maybe<Home_Page>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  subheadline?: Maybe<Scalars['String']['output']>;
};


export type Home_Page_TranslationsHome_Page_IdArgs = {
  filter?: InputMaybe<Home_Page_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Home_Page_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Home_Page_Translations_Aggregated = {
  __typename?: 'home_page_translations_aggregated';
  avg?: Maybe<Home_Page_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Home_Page_Translations_Aggregated_Fields>;
  count?: Maybe<Home_Page_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Home_Page_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Home_Page_Translations_Aggregated_Fields>;
  min?: Maybe<Home_Page_Translations_Aggregated_Fields>;
  sum?: Maybe<Home_Page_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Home_Page_Translations_Aggregated_Fields>;
};

export type Home_Page_Translations_Aggregated_Count = {
  __typename?: 'home_page_translations_aggregated_count';
  description?: Maybe<Scalars['Int']['output']>;
  headline?: Maybe<Scalars['Int']['output']>;
  home_page_id?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  subheadline?: Maybe<Scalars['Int']['output']>;
};

export type Home_Page_Translations_Aggregated_Fields = {
  __typename?: 'home_page_translations_aggregated_fields';
  home_page_id?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
};

export type Home_Page_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Home_Page_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Home_Page_Translations_Filter>>>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  home_page_id?: InputMaybe<Home_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  subheadline?: InputMaybe<String_Filter_Operators>;
};

export type Home_Page_Translations_Mutated = {
  __typename?: 'home_page_translations_mutated';
  data?: Maybe<Home_Page_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Home_Page_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Home_Page_Translations_Filter>>>;
  _none?: InputMaybe<Home_Page_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Home_Page_Translations_Filter>>>;
  _some?: InputMaybe<Home_Page_Translations_Filter>;
  description?: InputMaybe<String_Filter_Operators>;
  headline?: InputMaybe<String_Filter_Operators>;
  home_page_id?: InputMaybe<Home_Page_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  subheadline?: InputMaybe<String_Filter_Operators>;
};

export type Id_Filter_Operators = {
  _contains?: InputMaybe<Scalars['ID']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['ID']['input']>;
  _eq?: InputMaybe<Scalars['ID']['input']>;
  _icontains?: InputMaybe<Scalars['ID']['input']>;
  _iends_with?: InputMaybe<Scalars['ID']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['ID']['input']>;
  _ncontains?: InputMaybe<Scalars['ID']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['ID']['input']>;
  _neq?: InputMaybe<Scalars['ID']['input']>;
  _niends_with?: InputMaybe<Scalars['ID']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['ID']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['ID']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['ID']['input']>;
};

export type Languages = {
  __typename?: 'languages';
  code: Scalars['ID']['output'];
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Languages_Aggregated = {
  __typename?: 'languages_aggregated';
  count?: Maybe<Languages_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Languages_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
};

export type Languages_Aggregated_Count = {
  __typename?: 'languages_aggregated_count';
  code?: Maybe<Scalars['Int']['output']>;
  direction?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['Int']['output']>;
};

export type Languages_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Languages_Filter>>>;
  code?: InputMaybe<String_Filter_Operators>;
  direction?: InputMaybe<String_Filter_Operators>;
  name?: InputMaybe<String_Filter_Operators>;
};

export type Languages_Mutated = {
  __typename?: 'languages_mutated';
  data?: Maybe<Languages>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Number_Filter_Operators = {
  _between?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _eq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _gte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _lt?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _lte?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nbetween?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _neq?: InputMaybe<Scalars['GraphQLStringOrFloat']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['GraphQLStringOrFloat']['input']>>>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Project = {
  __typename?: 'project';
  id: Scalars['ID']['output'];
  translations?: Maybe<Array<Maybe<Project_Translations>>>;
  translations_func?: Maybe<Count_Functions>;
};


export type ProjectTranslationsArgs = {
  filter?: InputMaybe<Project_Translations_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Aggregated = {
  __typename?: 'project_aggregated';
  avg?: Maybe<Project_Aggregated_Fields>;
  avgDistinct?: Maybe<Project_Aggregated_Fields>;
  count?: Maybe<Project_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Project_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Project_Aggregated_Fields>;
  min?: Maybe<Project_Aggregated_Fields>;
  sum?: Maybe<Project_Aggregated_Fields>;
  sumDistinct?: Maybe<Project_Aggregated_Fields>;
};

export type Project_Aggregated_Count = {
  __typename?: 'project_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  translations?: Maybe<Scalars['Int']['output']>;
};

export type Project_Aggregated_Fields = {
  __typename?: 'project_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Project_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Project_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Project_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  translations?: InputMaybe<Project_Translations_Quantifier_Filter>;
  translations_func?: InputMaybe<Count_Function_Filter_Operators>;
};

export type Project_Mutated = {
  __typename?: 'project_mutated';
  data?: Maybe<Project>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Project_Translations = {
  __typename?: 'project_translations';
  article_url?: Maybe<Scalars['String']['output']>;
  demo_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Directus_Files>;
  id: Scalars['ID']['output'];
  languages_code?: Maybe<Languages>;
  project_id?: Maybe<Project>;
  source_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};


export type Project_TranslationsIconArgs = {
  filter?: InputMaybe<Directus_Files_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Project_TranslationsLanguages_CodeArgs = {
  filter?: InputMaybe<Languages_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type Project_TranslationsProject_IdArgs = {
  filter?: InputMaybe<Project_Filter>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Project_Translations_Aggregated = {
  __typename?: 'project_translations_aggregated';
  avg?: Maybe<Project_Translations_Aggregated_Fields>;
  avgDistinct?: Maybe<Project_Translations_Aggregated_Fields>;
  count?: Maybe<Project_Translations_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Project_Translations_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Project_Translations_Aggregated_Fields>;
  min?: Maybe<Project_Translations_Aggregated_Fields>;
  sum?: Maybe<Project_Translations_Aggregated_Fields>;
  sumDistinct?: Maybe<Project_Translations_Aggregated_Fields>;
};

export type Project_Translations_Aggregated_Count = {
  __typename?: 'project_translations_aggregated_count';
  article_url?: Maybe<Scalars['Int']['output']>;
  demo_url?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['Int']['output']>;
  /** SVG */
  icon?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  languages_code?: Maybe<Scalars['Int']['output']>;
  project_id?: Maybe<Scalars['Int']['output']>;
  source_url?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Project_Translations_Aggregated_Fields = {
  __typename?: 'project_translations_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
  project_id?: Maybe<Scalars['Float']['output']>;
  year?: Maybe<Scalars['Float']['output']>;
};

export type Project_Translations_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Project_Translations_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Project_Translations_Filter>>>;
  article_url?: InputMaybe<String_Filter_Operators>;
  demo_url?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  project_id?: InputMaybe<Project_Filter>;
  source_url?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type Project_Translations_Mutated = {
  __typename?: 'project_translations_mutated';
  data?: Maybe<Project_Translations>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Project_Translations_Quantifier_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Project_Translations_Filter>>>;
  _none?: InputMaybe<Project_Translations_Filter>;
  _or?: InputMaybe<Array<InputMaybe<Project_Translations_Filter>>>;
  _some?: InputMaybe<Project_Translations_Filter>;
  article_url?: InputMaybe<String_Filter_Operators>;
  demo_url?: InputMaybe<String_Filter_Operators>;
  description?: InputMaybe<String_Filter_Operators>;
  icon?: InputMaybe<Directus_Files_Filter>;
  id?: InputMaybe<Number_Filter_Operators>;
  languages_code?: InputMaybe<Languages_Filter>;
  project_id?: InputMaybe<Project_Filter>;
  source_url?: InputMaybe<String_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
  year?: InputMaybe<Number_Filter_Operators>;
};

export type String_Filter_Operators = {
  _contains?: InputMaybe<Scalars['String']['input']>;
  _empty?: InputMaybe<Scalars['Boolean']['input']>;
  _ends_with?: InputMaybe<Scalars['String']['input']>;
  _eq?: InputMaybe<Scalars['String']['input']>;
  _icontains?: InputMaybe<Scalars['String']['input']>;
  _iends_with?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _istarts_with?: InputMaybe<Scalars['String']['input']>;
  _ncontains?: InputMaybe<Scalars['String']['input']>;
  _nempty?: InputMaybe<Scalars['Boolean']['input']>;
  _nends_with?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _niends_with?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  _nistarts_with?: InputMaybe<Scalars['String']['input']>;
  _nnull?: InputMaybe<Scalars['Boolean']['input']>;
  _nstarts_with?: InputMaybe<Scalars['String']['input']>;
  _null?: InputMaybe<Scalars['Boolean']['input']>;
  _starts_with?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'tag';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type Tag_Aggregated = {
  __typename?: 'tag_aggregated';
  avg?: Maybe<Tag_Aggregated_Fields>;
  avgDistinct?: Maybe<Tag_Aggregated_Fields>;
  count?: Maybe<Tag_Aggregated_Count>;
  countAll?: Maybe<Scalars['Int']['output']>;
  countDistinct?: Maybe<Tag_Aggregated_Count>;
  group?: Maybe<Scalars['JSON']['output']>;
  max?: Maybe<Tag_Aggregated_Fields>;
  min?: Maybe<Tag_Aggregated_Fields>;
  sum?: Maybe<Tag_Aggregated_Fields>;
  sumDistinct?: Maybe<Tag_Aggregated_Fields>;
};

export type Tag_Aggregated_Count = {
  __typename?: 'tag_aggregated_count';
  id?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['Int']['output']>;
};

export type Tag_Aggregated_Fields = {
  __typename?: 'tag_aggregated_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Tag_Filter = {
  _and?: InputMaybe<Array<InputMaybe<Tag_Filter>>>;
  _or?: InputMaybe<Array<InputMaybe<Tag_Filter>>>;
  id?: InputMaybe<Number_Filter_Operators>;
  title?: InputMaybe<String_Filter_Operators>;
};

export type Tag_Mutated = {
  __typename?: 'tag_mutated';
  data?: Maybe<Tag>;
  event?: Maybe<EventEnum>;
  key: Scalars['ID']['output'];
};

export type Update_Article_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Article_Translations_Input>>>;
};

export type Update_Article_Tag_Input = {
  article_id?: InputMaybe<Update_Article_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  tag_id?: InputMaybe<Update_Tag_Input>;
};

export type Update_Article_Translations_Input = {
  article_id?: InputMaybe<Update_Article_Input>;
  author?: InputMaybe<Update_Directus_Users_Input>;
  content?: InputMaybe<Scalars['String']['input']>;
  cover_image?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  pub_date?: InputMaybe<Scalars['Date']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Update_Article_Translations_Tag_Input>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  views?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Article_Translations_Tag_Input = {
  article_translations_id?: InputMaybe<Update_Article_Translations_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  tag_id?: InputMaybe<Update_Tag_Input>;
};

export type Update_Directus_Access_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  policy?: InputMaybe<Update_Directus_Policies_Input>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  sort?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Update_Directus_Users_Input>;
};

export type Update_Directus_Files_Input = {
  charset?: InputMaybe<Scalars['String']['input']>;
  created_on?: InputMaybe<Scalars['Date']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  duration?: InputMaybe<Scalars['Int']['input']>;
  embed?: InputMaybe<Scalars['String']['input']>;
  filename_disk?: InputMaybe<Scalars['String']['input']>;
  filename_download?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['GraphQLBigInt']['input']>;
  focal_point_x?: InputMaybe<Scalars['Int']['input']>;
  focal_point_y?: InputMaybe<Scalars['Int']['input']>;
  folder?: InputMaybe<Update_Directus_Folders_Input>;
  height?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  metadata?: InputMaybe<Scalars['JSON']['input']>;
  modified_by?: InputMaybe<Update_Directus_Users_Input>;
  modified_on?: InputMaybe<Scalars['Date']['input']>;
  storage?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  tus_data?: InputMaybe<Scalars['JSON']['input']>;
  tus_id?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  uploaded_by?: InputMaybe<Update_Directus_Users_Input>;
  uploaded_on?: InputMaybe<Scalars['Date']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Directus_Folders_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Folders_Input>;
};

export type Update_Directus_Permissions_Input = {
  action?: InputMaybe<Scalars['String']['input']>;
  collection?: InputMaybe<Scalars['String']['input']>;
  fields?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id?: InputMaybe<Scalars['ID']['input']>;
  permissions?: InputMaybe<Scalars['JSON']['input']>;
  policy?: InputMaybe<Update_Directus_Policies_Input>;
  presets?: InputMaybe<Scalars['JSON']['input']>;
  validation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Update_Directus_Policies_Input = {
  admin_access?: InputMaybe<Scalars['Boolean']['input']>;
  app_access?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  /** $t:field_options.directus_policies.enforce_tfa */
  enforce_tfa?: InputMaybe<Scalars['Boolean']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ip_access?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Update_Directus_Permissions_Input>>>;
  roles?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
};

export type Update_Directus_Roles_Input = {
  children?: InputMaybe<Array<InputMaybe<Update_Directus_Roles_Input>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Update_Directus_Roles_Input>;
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  users?: InputMaybe<Array<InputMaybe<Update_Directus_Users_Input>>>;
};

export type Update_Directus_Users_Input = {
  appearance?: InputMaybe<Scalars['String']['input']>;
  auth_data?: InputMaybe<Scalars['JSON']['input']>;
  avatar?: InputMaybe<Update_Directus_Files_Input>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_notifications?: InputMaybe<Scalars['Boolean']['input']>;
  external_identifier?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  last_access?: InputMaybe<Scalars['Date']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  last_page?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['Hash']['input']>;
  policies?: InputMaybe<Array<InputMaybe<Update_Directus_Access_Input>>>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Update_Directus_Roles_Input>;
  status?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Scalars['JSON']['input']>;
  text_direction?: InputMaybe<Scalars['String']['input']>;
  tfa_secret?: InputMaybe<Scalars['Hash']['input']>;
  theme_dark?: InputMaybe<Scalars['String']['input']>;
  theme_dark_overrides?: InputMaybe<Scalars['JSON']['input']>;
  theme_light?: InputMaybe<Scalars['String']['input']>;
  theme_light_overrides?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['Hash']['input']>;
};

export type Update_Global_Input = {
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  ntfy_password?: InputMaybe<Scalars['String']['input']>;
  ntfy_user?: InputMaybe<Scalars['String']['input']>;
  recent_articles_limit?: InputMaybe<Scalars['Int']['input']>;
  telegram?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Global_Translations_Input>>>;
  ym_counter?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Global_Translations_Input = {
  about?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  global_id?: InputMaybe<Update_Global_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  navigation?: InputMaybe<Scalars['JSON']['input']>;
};

export type Update_Home_Page_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Home_Page_Translations_Input>>>;
};

export type Update_Home_Page_Translations_Input = {
  description?: InputMaybe<Scalars['String']['input']>;
  headline?: InputMaybe<Scalars['String']['input']>;
  home_page_id?: InputMaybe<Update_Home_Page_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  subheadline?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Languages_Input = {
  code?: InputMaybe<Scalars['ID']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Update_Project_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  translations?: InputMaybe<Array<InputMaybe<Update_Project_Translations_Input>>>;
};

export type Update_Project_Translations_Input = {
  article_url?: InputMaybe<Scalars['String']['input']>;
  demo_url?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Update_Directus_Files_Input>;
  id?: InputMaybe<Scalars['ID']['input']>;
  languages_code?: InputMaybe<Update_Languages_Input>;
  project_id?: InputMaybe<Update_Project_Input>;
  source_url?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Update_Tag_Input = {
  id?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Version_Article = {
  __typename?: 'version_article';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Article_Tag = {
  __typename?: 'version_article_tag';
  article_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  tag_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Article_Translations = {
  __typename?: 'version_article_translations';
  article_id?: Maybe<Scalars['JSON']['output']>;
  author?: Maybe<Scalars['JSON']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  cover_image?: Maybe<Scalars['JSON']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  pub_date?: Maybe<Scalars['Date']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  views?: Maybe<Scalars['Int']['output']>;
};

export type Version_Article_Translations_Tag = {
  __typename?: 'version_article_translations_tag';
  article_translations_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  tag_id?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Global = {
  __typename?: 'version_global';
  email?: Maybe<Scalars['String']['output']>;
  github?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  ntfy_password?: Maybe<Scalars['String']['output']>;
  ntfy_user?: Maybe<Scalars['String']['output']>;
  recent_articles_limit?: Maybe<Scalars['Int']['output']>;
  telegram?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
  ym_counter?: Maybe<Scalars['Int']['output']>;
};

export type Version_Global_Translations = {
  __typename?: 'version_global_translations';
  about?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  global_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  navigation?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Home_Page = {
  __typename?: 'version_home_page';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Home_Page_Translations = {
  __typename?: 'version_home_page_translations';
  description?: Maybe<Scalars['String']['output']>;
  headline?: Maybe<Scalars['String']['output']>;
  home_page_id?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  subheadline?: Maybe<Scalars['String']['output']>;
};

export type Version_Languages = {
  __typename?: 'version_languages';
  code?: Maybe<Scalars['ID']['output']>;
  direction?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type Version_Project = {
  __typename?: 'version_project';
  id?: Maybe<Scalars['ID']['output']>;
  translations?: Maybe<Scalars['JSON']['output']>;
};

export type Version_Project_Translations = {
  __typename?: 'version_project_translations';
  article_url?: Maybe<Scalars['String']['output']>;
  demo_url?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['JSON']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  languages_code?: Maybe<Scalars['JSON']['output']>;
  project_id?: Maybe<Scalars['JSON']['output']>;
  source_url?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export type Version_Tag = {
  __typename?: 'version_tag';
  id?: Maybe<Scalars['ID']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type ArticleQueryVariables = Exact<{ [key: string]: never; }>;


export type ArticleQuery = { __typename?: 'Query', article: Array<{ __typename?: 'article', translations?: Array<{ __typename?: 'article_translations', id: string, title: string, description: string, slug: string, pub_date: any, tags?: Array<{ __typename?: 'article_translations_tag', tag_id?: { __typename?: 'tag', title: string } | null } | null> | null, languages_code?: { __typename?: 'languages', code: string, name?: string | null } | null } | null> | null }> };

export type RecentArticleQueryVariables = Exact<{ [key: string]: never; }>;


export type RecentArticleQuery = { __typename?: 'Query', article: Array<{ __typename?: 'article', translations?: Array<{ __typename?: 'article_translations', title: string, slug: string, pub_date: any, views: number, cover_image?: { __typename?: 'directus_files', id: string, title?: string | null } | null, languages_code?: { __typename?: 'languages', code: string } | null } | null> | null }> };

export type Article_TranslationsQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type Article_TranslationsQuery = { __typename?: 'Query', article_translations: Array<{ __typename?: 'article_translations', id: string, title: string, description: string, slug: string, content: string, pub_date: any, views: number, tags?: Array<{ __typename?: 'article_translations_tag', tag_id?: { __typename?: 'tag', title: string } | null } | null> | null, author?: { __typename?: 'directus_users', first_name?: string | null, last_name?: string | null } | null, languages_code?: { __typename?: 'languages', code: string, name?: string | null } | null, cover_image?: { __typename?: 'directus_files', title?: string | null, type?: string | null, filename_disk?: string | null } | null, article_id?: { __typename?: 'article', translations?: Array<{ __typename?: 'article_translations', slug: string, pub_date: any, languages_code?: { __typename?: 'languages', code: string, name?: string | null } | null } | null> | null } | null }> };

export type AboutMeQueryQueryVariables = Exact<{
  pageLang: Scalars['String']['input'];
}>;


export type AboutMeQueryQuery = { __typename?: 'Query', global_translations: Array<{ __typename?: 'global_translations', about?: string | null }> };

export type Project_TranslationsQueryVariables = Exact<{
  pageLang: Scalars['String']['input'];
}>;


export type Project_TranslationsQuery = { __typename?: 'Query', project_translations: Array<{ __typename?: 'project_translations', id: string, title?: string | null, year?: number | null, description?: string | null, source_url?: string | null, demo_url?: string | null, article_url?: string | null, icon?: { __typename?: 'directus_files', filename_disk?: string | null } | null }> };

export type TagQueryVariables = Exact<{ [key: string]: never; }>;


export type TagQuery = { __typename?: 'Query', tag: Array<{ __typename?: 'tag', id: string, title: string }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: NonNullable<DocumentTypeDecoration<TResult, TVariables>['__apiType']>;
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  override toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const ArticleDocument = new TypedDocumentString(`
    query Article {
  article {
    translations(filter: {status: {_eq: "published"}}) {
      id
      title
      tags {
        tag_id {
          title
        }
      }
      description
      slug
      pub_date
      languages_code {
        code
        name
      }
    }
  }
}
    `) as unknown as TypedDocumentString<ArticleQuery, ArticleQueryVariables>;
export const RecentArticleDocument = new TypedDocumentString(`
    query RecentArticle {
  article {
    translations(filter: {status: {_eq: "published"}}) {
      title
      cover_image {
        id
        title
      }
      slug
      pub_date
      views
      languages_code {
        code
      }
    }
  }
}
    `) as unknown as TypedDocumentString<RecentArticleQuery, RecentArticleQueryVariables>;
export const Article_TranslationsDocument = new TypedDocumentString(`
    query Article_translations($slug: String!) {
  article_translations(filter: {slug: {_eq: $slug}}) {
    id
    title
    tags {
      tag_id {
        title
      }
    }
    description
    slug
    content
    author {
      first_name
      last_name
    }
    pub_date
    views
    languages_code {
      code
      name
    }
    cover_image {
      title
      type
      filename_disk
    }
    article_id {
      translations {
        slug
        languages_code {
          code
          name
        }
        pub_date
      }
    }
  }
}
    `) as unknown as TypedDocumentString<Article_TranslationsQuery, Article_TranslationsQueryVariables>;
export const AboutMeQueryDocument = new TypedDocumentString(`
    query AboutMeQuery($pageLang: String!) {
  global_translations(filter: {languages_code: {code: {_contains: $pageLang}}}) {
    about
  }
}
    `) as unknown as TypedDocumentString<AboutMeQueryQuery, AboutMeQueryQueryVariables>;
export const Project_TranslationsDocument = new TypedDocumentString(`
    query Project_translations($pageLang: String!) {
  project_translations(
    filter: {languages_code: {code: {_contains: $pageLang}}}
    sort: ["-year"]
  ) {
    id
    title
    year
    description
    source_url
    demo_url
    article_url
    icon {
      filename_disk
    }
  }
}
    `) as unknown as TypedDocumentString<Project_TranslationsQuery, Project_TranslationsQueryVariables>;
export const TagDocument = new TypedDocumentString(`
    query Tag {
  tag {
    id
    title
  }
}
    `) as unknown as TypedDocumentString<TagQuery, TagQueryVariables>;