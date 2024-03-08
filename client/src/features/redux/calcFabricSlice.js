import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  result:{}
};

export const calculateSlice = createSlice({
  name: 'calc',
  initialState,
  reducers: {
    calcFabrick: (state, action) => {
       
      const { data, fabricName } = action.payload;
    
      let totalHeightDay = 0;
      let totalHeightWeek = 0;
      let totalHeightMonth = 0;
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth() + 1;

      data.forEach((entry) => {
        if (entry.folderFabric === fabricName) {
          entry.folderDate.forEach((folder) => {
            const [day, month] = folder.date.split(".");

            folder.item.forEach((item) => {
              const height = parseInt(item.width);
              const col = parseInt(item.col);
              if (
                parseInt(day) === currentDate.getDate() &&
                parseInt(month) === currentDate.getMonth() + 1
              ) {
                totalHeightDay += height * col;
              }

              if (
                parseInt(day) >= currentDate.getDate() - currentDate.getDay() + 1 &&
                parseInt(month) === currentDate.getMonth() + 1
              ) {
                totalHeightWeek += height * col;
              }

              if (parseInt(month) === currentMonth) {
                totalHeightMonth += height * col;
              }
            });
          });
        }
      });

      state.result = {
        totalHeightDay,
        totalHeightWeek,
        totalHeightMonth,
      };
    }
  }
});

export default calculateSlice.reducer;
  export const {
    calcFabrick,
  } = calculateSlice.actions;