import { createSlice } from '@reduxjs/toolkit'

const tournamentsSlice = createSlice({
  name: 'sports',
  initialState: [],
  reducers: {
    setTournaments: (state, action) => {
      return action.payload
    },
    resetTournaments: () => {
      return []
    },
  },
})

export const { setTournaments, resetTournaments } = tournamentsSlice.actions

export default tournamentsSlice.reducer
