import { createSlice } from '@reduxjs/toolkit'

const selectedDateIndexes = createSlice({
  name: 'selectedDate',
  initialState: [],
  reducers: {
    toggleSelectedDayIndex: (state, action) => {
      const indexToRemove = state.indexOf(action.payload)
      if (indexToRemove === -1) {
        state.push(action.payload)
      } else {
        state.splice(indexToRemove, 1)
      }
    },
  },
})

export const { toggleSelectedDayIndex } = selectedDateIndexes.actions
export default selectedDateIndexes.reducer
