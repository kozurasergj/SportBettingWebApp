import { configureStore } from '@reduxjs/toolkit'
import languageDropdownReducer from './slices/languageDropdownSlice'
import selectedCountrySlice from './slices/selectedCountrySlice'
import sportsSlice from './slices/sportsSlice'
import selectedSportSlice from './slices/selectedSportSlice'
import betslipsSlice from './slices/betslipsSlice'

export const store = configureStore({
  reducer: {
    languageDropdown: languageDropdownReducer,
    allInformationAboutSports: sportsSlice,
    selectedSport: selectedSportSlice,
    selectedCountry: selectedCountrySlice,
    betslips: betslipsSlice,
  },
})

export type DispathType = typeof store.dispatch
export type RootStateType = ReturnType<typeof store.getState>
