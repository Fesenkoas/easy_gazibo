import { configureStore } from '@reduxjs/toolkit'
import { loggerEnhancer } from './../midlleWare/thunkEnhancer';
import { logger } from './../midlleWare/loggerWare';


export const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerEnhancer, logger),
});