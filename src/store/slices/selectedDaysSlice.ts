import { createSlice } from '@reduxjs/toolkit'

const selectedDaysIndexes = createSlice({
  name: 'selectedDay',
  initialState: [],
  reducers: {
    setSelectedDayIndex: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload)
      }
    },
    deleteSelectedDayIndex: (state, action) => {
      return state.filter((index) => index !== action.payload)
    },
  },
})

export const { setSelectedDayIndex, deleteSelectedDayIndex } =
  selectedDaysIndexes.actions

export default selectedDaysIndexes.reducer
