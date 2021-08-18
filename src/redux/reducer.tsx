import {SET_TODO_LIST,ADD_TODO} from "../utils/constants";
import {TodoListActionTypes, TodoType} from "../types";
import exp from "constants";

const initialState:TodoType[]=[]


export default function todoReducer(state=initialState,action:TodoListActionTypes): TodoType[] {
    switch (action.type) {
        case SET_TODO_LIST:
           state=action.payload
            return state
            default:
                return state

    }

}