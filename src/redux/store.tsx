
import {createStore} from "redux";
import todos from "./reducers";
import {configureStore} from "@reduxjs/toolkit";
import exp from "constants";
import todoReducer from './reducers'

export const store= configureStore({
 reducer:{
  todos:todoReducer
 }
})
export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
