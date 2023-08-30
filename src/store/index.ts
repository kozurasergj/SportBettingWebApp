import { configureStore } from '@reduxjs/toolkit'
import betslipsSlice from './slices/betslipsSlice'
import languageDropdownReducer from './slices/languageDropdownSlice'
import selectedCountrySlice from './slices/selectedCountrySlice'
import selectedSportSlice from './slices/selectedSportSlice'
import sportsSlice from './slices/sportsSlice'
import tournamentsSlice from './slices/tournamentsSlice'

export const store = configureStore({
  reducer: {
    languageDropdown: languageDropdownReducer,
    sports: sportsSlice,
    tournaments: tournamentsSlice,
    selectedSport: selectedSportSlice,
    selectedCountry: selectedCountrySlice,
    betslips: betslipsSlice,
  },
})

export type DispathType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
