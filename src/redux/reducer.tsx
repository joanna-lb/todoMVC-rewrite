import {SET_TODO_LIST, ADD_TODO, CHANGE_COMPLETE_STATUS, SET_ALL_TASKS_COMPLETE_STATUS} from "../utils/constants";
import {TodoListActionTypes, TodoType} from "../types";
import exp from "constants";

const initialState:Array<TodoType>=[]


export default function todoReducer(state=initialState,action:TodoListActionTypes): Array<TodoType> {
    switch (action.type) {
        case SET_TODO_LIST:
           state= action.data
            return state
        case ADD_TODO:
            state=[...state,action.payload]
           return state
        case SET_ALL_TASKS_COMPLETE_STATUS:
            state= state.map((todo: TodoType) => {
                return {...todo, isComplete: action.payload.isComplete}
            })
            return state
        case CHANGE_COMPLETE_STATUS:
            state= state.map((todo: TodoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, isComplete: action.payload.isComplete}
                }
                return todo;
            })
            return state
            default:
                return state

    }

}