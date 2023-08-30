import { createSlice } from '@reduxjs/toolkit'

// interface initialState {
//   sports: any
// }

// const initialState: initialState = {
//   sports: [],
// }

const sportsSlice = createSlice({
  name: 'sports',
  initialState: [],
  reducers: {
    setSports: (state, action) => {
      return action.payload
    },
  },
})

export const { setSports } = sportsSlice.actions

export default sportsSlice.reducer
