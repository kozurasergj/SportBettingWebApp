import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  sportId: number|null
}

const initialState: initialState = {
  sportId: null,
}

const selectedSportsSlice = createSlice({
  name: 'activeSportSlice',
  initialState,
  reducers: {
    setSelectedSport: (state, action) => {
      state.sportId = action.payload
    },
  },
})

export const { setSelectedSport } = selectedSportsSlice.actions

export default selectedSportsSlice.reducer
