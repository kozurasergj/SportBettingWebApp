import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  isOpen: boolean
}

const initialState: initialState = {
  isOpen: false,
}

const languageDropdownSlice = createSlice({
  name: 'languageDropdown',
  initialState,
  reducers: {
    toggleLanguageDropdown: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toggleLanguageDropdown } = languageDropdownSlice.actions

export default languageDropdownSlice.reducer
