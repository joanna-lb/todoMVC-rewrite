import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../store";
import {newTodos} from "../../shared";
import {todosType, todoType} from "../types";


type changeStatusType = {
    id: string,
    status: boolean
}
type editType = {
    id: string,
    name: string
}

const initialState: todoType[] = []


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
          state=state.filter((todo: todoType) => todo.id !== action.payload)
            return state
        },
        changeCompleteStatus: (state, action: PayloadAction<changeStatusType>) => {
           state= state.map((todo: todoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, isComplete: action.payload.status}
                }
                return todo;
            })
            return state

        },
        editTodoList: (state, action: PayloadAction<editType>) => {
           state= state.map((todo: todoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })
            return state
        },
        setAllTasksAsCompleted: (state) => {
          state=  state.map((todo: todoType) => {
             return  {...todo,isComplete:true}
            })
            return state
        },
        clearAllCompletes: (state) => {
           state= state.map((todo: todoType) => {
                return {...todo, isComplete: false}
            })
            return state
        },
        clearComplete: (state) => {
         state= state.filter(todo => !todo.isComplete)
            return state
        }
    }
})
export const {
    setTodoList,
    addTodo,
    deleteTodo,
    changeCompleteStatus,
    editTodoList,
    clearAllCompletes,
    setAllTasksAsCompleted,
    clearComplete
} = todoSlice.actions
//export const selectTodos=(state:RootState)=>state.todoList.todos

export default todoSlice.reducer