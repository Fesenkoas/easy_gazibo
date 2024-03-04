import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  printFile: [],
};


const printSlice = createSlice({
    name: "manager",
    initialState,
    reducers: {
        getAllPrintFile(state, action){
            state.loading = false;
            state.printFile = action.payload;
            state.loading = true;
        },
      loading(state, action) {
        state.loading = action.payload;
      },
    },
  });
  export const reduxPrintFile = (state) => state.manager;
  export default printSlice.reducer;
  export const {
    getAllPrintFile,
    loading,
  } = printSlice.actions;