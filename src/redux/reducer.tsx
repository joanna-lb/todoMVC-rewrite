import {
    SET_TODO_LIST,
    ADD_TODO,
    CHANGE_COMPLETE_STATUS,
    SET_ALL_TASKS_COMPLETE_STATUS,
    DELETE_TODO, EDIT_TODO_LIST, CLEAR_COMPLETE
} from "../utils/constants";
import {TodoListActionTypes, TodoType} from "../types";
import exp from "constants";

const initialState:Array<TodoType>=[]


export default function todoReducer(state=initialState,action:TodoListActionTypes): Array<TodoType> {
    switch (action.type) {
        case SET_TODO_LIST:
            const newState:Array<TodoType>=[]
           action.data.map(todo=>newState.push(todo))
            return newState
        case ADD_TODO:
            const addTodo=[action.payload]
           return state.concat(addTodo) as Array<TodoType>
        case SET_ALL_TASKS_COMPLETE_STATUS:
       return state.map((todo: TodoType) => {
                return {...todo, isComplete: action.payload.isComplete}
            })
        case CHANGE_COMPLETE_STATUS:
            return state.map((todo: TodoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, isComplete: action.payload.isComplete}
                }
                return todo;
            })
        case DELETE_TODO:
            const stateDeleted=state.filter((todo: TodoType) => todo.id !== action.payload.id)
            return [...state,stateDeleted] as Array<TodoType>
        case EDIT_TODO_LIST:
           return state.map((todo: TodoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })

        case CLEAR_COMPLETE:
                return state.filter((todo:TodoType) => !todo.isComplete)

            default:
                return state

    }

}