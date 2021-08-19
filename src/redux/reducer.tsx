import {
    SET_TODO_LIST,
    ADD_TODO,
    CHANGE_COMPLETE_STATUS,
    SET_ALL_TASKS_COMPLETE_STATUS,
    DELETE_TODO, EDIT_TODO_LIST, CLEAR_COMPLETE
} from "../utils/constants";
import { TodoType} from "../types";
import exp from "constants";

const initialState:Array<TodoType>=[]

export interface TodoListActionTypes {
    type: string,
    payload: {
        todo:TodoType
        data:TodoType[]
    }
}

export default function todoReducer(state=initialState,action:TodoListActionTypes): Array<TodoType> {
    switch (action.type) {
        case SET_TODO_LIST:
            const newState:Array<TodoType>=[]
           action.payload.data.map((todo:TodoType)=>newState.push(todo))
            return newState
        case ADD_TODO:
            const addTodo=[action.payload.todo]
           return state.concat(addTodo) as Array<TodoType>
        case SET_ALL_TASKS_COMPLETE_STATUS:
       return state.map((todo: TodoType) => {
                return {...todo, isComplete: action.payload.todo.isComplete}
            })
        case CHANGE_COMPLETE_STATUS:
            return state.map((todo: TodoType) => {
                if (todo.id === action.payload.todo.id) {
                    return {...todo, isComplete: action.payload.todo.isComplete}
                }
                return todo;
            })
        case DELETE_TODO:
            const stateDeleted=state.filter((todo: TodoType) => todo.id !== action.payload.todo.id)
            return [...state,stateDeleted] as Array<TodoType>
        case EDIT_TODO_LIST:
           return state.map((todo: TodoType) => {
                if (todo.id === action.payload.todo.id) {
                    return {...todo, name: action.payload.todo.name}
                }
                return todo;
            })

        case CLEAR_COMPLETE:
                return state.filter((todo:TodoType) => !todo.isComplete)

            default:
                return state

    }

}