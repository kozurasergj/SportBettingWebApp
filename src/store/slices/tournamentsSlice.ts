import { createSlice } from '@reduxjs/toolkit'

// interface initialState {
//   tournaments: any
// }

// const initialState: initialState = {
//   tournaments: [],
// }

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
