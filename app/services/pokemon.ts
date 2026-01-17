import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// @ts-ignore
import type { Pokemon } from './types'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://69622847d9d64c761907166b.mockapi.io/'
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodos: builder.query<Pokemon[], void>({
      query: () => 'todo',
      providesTags: ['Todo']
    }),

    deleteTodo: builder.mutation<void, string>({
      query: id => ({
        url: `todo/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']
    }),

    addTodo: builder.mutation<void, any>({
      query: newUser => ({
        url: 'todo',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['Todo']
    }),
    editTodo: builder.mutation<void, any>({
  query: ({ id, ...data }) => ({
    url: `todo/${id}`,
    method: 'PUT',
    body: data
  }),
  invalidatesTags: ['Todo']
})

  })
})

export const {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useEditTodoMutation
} = pokemonApi
