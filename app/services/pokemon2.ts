import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// @ts-ignore
import type { Pokemon } from './types'
import { Toaster } from 'react-hot-toast'

export const pokemonApi2 = createApi({
  reducerPath: 'pokemonApi2',
  baseQuery: fetchBaseQuery({
      baseUrl: 'http://localhost:3000/'
    }),
    tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodo: builder.query<Pokemon[], void>({
      query: () => 'human',
      providesTags: ['Todo']
    })
})
})

export const {
  useGetTodoQuery,
} = pokemonApi2