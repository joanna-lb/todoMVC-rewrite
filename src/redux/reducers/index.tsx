import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { TodoType,EditType, ChangeStatusType} from "../types";
import {leftItemsCount} from "../../shared";


const initialState:TodoType[] = []


export const todoSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoList: (state, action: PayloadAction<any>) => {
            return action.payload
        },
        addTodo: (state, action: PayloadAction<any>) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
          state=state.filter((todo: TodoType) => todo.id !== action.payload)
            return state
        },
        changeCompleteStatus: (state, action: PayloadAction<ChangeStatusType>) => {
           state= state.map((todo: TodoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, isComplete: action.payload.status}
                }
                return todo;
            })
            return state

        },
        editTodoList: (state, action: PayloadAction<EditType>) => {
           state= state.map((todo: TodoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })
            return state
        },
        setAllTasksCompleteStatus: (state,action:PayloadAction<boolean>) => {
          state=  state.map((todo: TodoType) => {
                return {...todo, isComplete: action.payload}
            })
            return state
        },
        clearComplete: (state) => {
         state= state.filter(todo => !todo.isComplete)
            return state
        },
    }
})
export const {
    setTodoList,
    addTodo,
    deleteTodo,
    changeCompleteStatus,
    editTodoList,
    setAllTasksCompleteStatus,
    clearComplete
} = todoSlice.actions
//export const selectTodos=(state:RootState)=>state.todoList.todos

export default todoSlice.reducer