import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// @ts-ignore
import type { Pokemon } from './types'

export const pokemonApi1 = createApi({
  reducerPath: 'pokemonApi1',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/'
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodo: builder.query<Pokemon[], void>({
      query: () => 'product',
      providesTags: ['Todo']
    }),

    deleteTodo: builder.mutation<void, number>({
      query: id => ({
        url: `product/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']
    }),

    addTodo: builder.mutation<void, Pokemon>({
      query: newUser => ({
        url: 'product',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['Todo']
    }),

    editTodo: builder.mutation<void, { id: number } & Partial<Pokemon>>({
      query: ({ id, ...data }) => ({
        url: `product/${id}`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Todo']
    }),

    checkboxTodo: builder.mutation<void, { id: number; status: boolean }>({
      query: ({ id, status }) => ({
        url: `product/${id}`,
        method: 'PATCH',
        body: { status }
      }),
      invalidatesTags: ['Todo']
    })
  })
})

export const {
  useGetTodoQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useEditTodoMutation,
  useCheckboxTodoMutation
} = pokemonApi1
