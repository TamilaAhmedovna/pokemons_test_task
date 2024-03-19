import { createSlice } from "@reduxjs/toolkit"

type PokemonType = {
  info: {
    base_experience?: number
  },
  loading: 'idle' | 'pending'
}

type StateType = {
  pokemonInfo: PokemonType
}

const initialState: PokemonType = {
  info: {},
  loading: 'idle'
}

export const pokemonSlice = createSlice({
  name: 'pokemonInfo', 
  initialState,
  reducers: {
    pokemonLoading: (state) => {
      if (state.loading === 'idle') {
        state.loading = 'pending'
      }
    },
    pokemonReceived: (state, action) => {
      if (state.loading === 'pending') {
        state.loading = 'idle'
      }
      state.info = action.payload
    }
  }
})

// export actions for state updating
export const { 
  pokemonReceived, 
  pokemonLoading 
} = pokemonSlice.actions

// export state items to use
export const selectPokemonInfo = (state: StateType) => 
  state.pokemonInfo.info
export const selectPokemonLoading = (state: StateType) => 
  state.pokemonInfo.loading

export default pokemonSlice.reducer
