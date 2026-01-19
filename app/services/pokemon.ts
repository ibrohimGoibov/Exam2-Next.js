import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// @ts-ignore
import type { Pokemon } from './types'
import toast, { Toaster } from 'react-hot-toast';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/'
  }),
  tagTypes: ['Todo'],
  endpoints: builder => ({
    getTodos: builder.query<Pokemon[], void>({
      query: () => 'data',
      providesTags: ['Todo']
    }),
      deleteTodo: builder.mutation<void, number>({
      query: id => ({
        url: `data/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Todo']

    }),
    loginTodo: builder.query<any[], { email: string; password: string }>({
  query: ({ email, password }) =>
    `users?email=${email}&password=${password}`
}),

    addTodo: builder.mutation<void, Pokemon>({
      query: newUser => ({
        url: 'data',
        method: 'POST',
        body: newUser
      }),
      invalidatesTags: ['Todo']
    }),

    editTodo: builder.mutation<void, Pokemon & { id: number }>({
      query: ({ id, ...data }) => ({
        url: `data/${id}`,
        method: 'PUT',
        body: data
      }),
      invalidatesTags: ['Todo']
    }),
    checkboxTodo: builder.mutation<void, { id: number; status: boolean }>({
  query: ({ id, status }) => ({
    url: `data/${id}`,
    method: 'PATCH',
    body: { status }
  }),
  invalidatesTags: ['Todo']
})

  })
})

export const {
  useGetTodosQuery,
  useDeleteTodoMutation,
  useAddTodoMutation,
  useEditTodoMutation,
  useCheckboxTodoMutation,
  useLoginTodoQuery
} = pokemonApi
