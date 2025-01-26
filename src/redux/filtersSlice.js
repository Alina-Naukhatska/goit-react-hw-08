import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filter',
  initialState: '', 
  reducers: {
    changeFilter: (state, action) => action.payload, 
  },
});

export const { changeFilter } = filtersSlice.actions;

export const selectFilter = state => state.filters;

export default filtersSlice.reducer;
