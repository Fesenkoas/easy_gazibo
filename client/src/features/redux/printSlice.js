import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  printFile: [],
  data:{}
};


const printSlice = createSlice({
    name: "print",
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

  export default printSlice.reducer;
  export const {
    getAllPrintFile,
    loading,
  } = printSlice.actions;