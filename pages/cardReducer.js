import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    clearItems: state => {
      state.items = []
    }
  }
})

export const { addItem, removeItem, clearItems } = cartSlice.actions

export default cartSlice.reducer