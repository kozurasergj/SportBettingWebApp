import { createSlice } from '@reduxjs/toolkit'

interface initialState {
  sports: any
  preMatchSports: any
  tournamentEvents: any
}

const initialState: initialState = {
  sports: [],
  preMatchSports: [],
  tournamentEvents: [],
}

const sportsSlice = createSlice({
  name: 'sports',
  initialState,
  reducers: {
    setSports: (state, action) => {
      state.sports = action.payload
    },
    setPreMatchSports: (state, action) => {
      state.preMatchSports = action.payload
    },
    setTournamentEvents: (state, action) => {
      state.tournamentEvents = action.payload
    },
    resetTournamentEvents: (state) => {
      state.tournamentEvents = []
    },
  },
})

export const {
  setPreMatchSports,
  setTournamentEvents,
  setSports,
  resetTournamentEvents,
} = sportsSlice.actions

export default sportsSlice.reducer
