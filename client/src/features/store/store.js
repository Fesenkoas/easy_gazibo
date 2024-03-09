import { configureStore } from '@reduxjs/toolkit'
import { loggerEnhancer } from './../midlleWare/thunkEnhancer';
import { logger } from './../midlleWare/loggerWare';
import printSlice from '../redux/printSlice';
import calculateSlice  from '../redux/calcFabricSlice';
import authSlice from '../redux/authSlice';


export const store = configureStore({
  reducer: {
   printFile:printSlice,
   calcFile:calculateSlice,
   authFile:authSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer, logger),
});