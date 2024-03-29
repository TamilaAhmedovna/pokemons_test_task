import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import pokemonInfoReducer from './features/pokemon/pokemonSlice'
import { watcherSaga } from './features/pokemon/getPokemonSaga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

export default configureStore({
    reducer: {
        pokemonInfo: pokemonInfoReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleware)
})

// Run the saga effects
sagaMiddleware.run(watcherSaga)
