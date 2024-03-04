import { configureStore } from '@reduxjs/toolkit'
import { loggerEnhancer } from './../midlleWare/thunkEnhancer';
import { logger } from './../midlleWare/loggerWare';
import printSlice from '../redux/printSlice';


export const store = configureStore({
  reducer: {
   printFile:printSlice, 
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer, logger),
});