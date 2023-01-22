import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CommonState {
  value: number
}

const initialState: CommonState = {
  value: 0,
}

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const actions = commonSlice.actions

export default commonSlice.reducer
