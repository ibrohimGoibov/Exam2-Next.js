import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import { pokemonApi1 } from '../services/pokemon1'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonApi1.reducerPath]: pokemonApi1.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      pokemonApi1.middleware
    ),
})

setupListeners(store.dispatch)
