import { createSlice } from '@reduxjs/toolkit';

interface commonState {
  isCollapse: boolean;
  isLoading: boolean;
}

const initialState: commonState = {
  isCollapse: false,
  isLoading: false
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    collapseMenu(state) {
      state.isCollapse = !state.isCollapse;
    },
    start: (state) => {
      state.isLoading = true;
    },
    finish: (state) => {
      state.isLoading = false;
    }
  }
});
export const { collapseMenu, start, finish } = commonSlice.actions;
export default commonSlice.reducer;
