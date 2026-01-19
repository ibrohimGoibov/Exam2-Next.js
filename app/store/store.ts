import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { pokemonApi } from '../services/pokemon'
import { pokemonApi1 } from '../services/pokemon1'
import { pokemonApi2 } from '../services/pokemon2'

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [pokemonApi1.reducerPath]: pokemonApi1.reducer,
    [pokemonApi2.reducerPath]: pokemonApi2.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(
      pokemonApi.middleware,
      pokemonApi1.middleware,
      pokemonApi2.middleware
    ),
})

setupListeners(store.dispatch)
