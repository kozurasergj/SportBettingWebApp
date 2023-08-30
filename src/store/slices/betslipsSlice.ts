import { createSlice } from '@reduxjs/toolkit'

const betslipsSlice = createSlice({
  name: 'betslips',
  initialState: [],
  reducers: {
    addToBetslip: (state, action) => {
      state.push(action.payload)
    },
    removeFromBetslip: (state, action) => {
      state.splice(action.payload, 1)
    },
  },
})

export const { addToBetslip, removeFromBetslip } = betslipsSlice.actions
export default betslipsSlice.reducer
