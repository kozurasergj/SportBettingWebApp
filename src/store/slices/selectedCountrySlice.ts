import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  selectedCountryIndexes: any
}

const initialState: initialState = {
  selectedCountryIndexes: [],
}

const selectedCountrySlice = createSlice({
  name: 'selectedCountry',
  initialState,
  reducers: {
    toggleSelectedCountryIndex: (state, action) => {
      const index = state.selectedCountryIndexes.indexOf(action.payload)
      if (index !== -1) {
        state.selectedCountryIndexes.splice(index, 1)
      } else {
        state.selectedCountryIndexes.push(action.payload)
      }
    },
    resetSelectedCountryIndexes: (state) => {
      state.selectedCountryIndexes = []
    },
  },
})

export const { toggleSelectedCountryIndex, resetSelectedCountryIndexes } =
  selectedCountrySlice.actions

export default selectedCountrySlice.reducer
