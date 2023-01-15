import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IArticle } from '../../models/models';

export const spcFlightApi = createApi({
  reducerPath: 'space/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3/',
  }),
  endpoints: (build) => ({
    articles: build.query<IArticle[], void>({
      query: () => ({
        url: `articles`,
      }),
    }),
    getArticle: build.query<IArticle, string>({
      query: (id) => ({
        url: `articles/${id}`,
      }),
    }),
  }),
});

export const { useArticlesQuery, useLazyGetArticleQuery } = spcFlightApi;
