import {createSlice,PayloadAction} from "@reduxjs/toolkit";
import type{RootState} from "../store";
import {newTodos} from "../../shared";
import {todoType} from "../types";


type changeStatusType={
    id:string,
    status:boolean
}
type editType={
    id:string,
    name:string
}
interface TodosState{
    todos:any
}

const initialState={
    todos:[]
}as TodosState

export const todoSlice=createSlice({
    name:'todoList',
    initialState,
    reducers:{
        setTodoList: (state,action :PayloadAction<any>)=>{
    state.todos=action.payload
        },
        addTodo:(state,action:PayloadAction<object>)=>{
    state.todos=[...state.todos,action.payload]
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((todo:todoType) => todo.id !== action.payload)
        },
        changeCompleteStatus:(state,action:PayloadAction<changeStatusType>)=>{
           state.todos= state.todos.map((todo:todoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, isComplete:action.payload.status }
                }
                return todo;
            })

        },
        editTodoList:(state,action:PayloadAction<editType>)=>{
            state.todos= state.todos.map((todo:todoType) => {
                if (todo.id === action.payload.id) {
                    return {...todo, name: action.payload.name}
                }
                return todo;
            })
        }
    }
})
export const{setTodoList,addTodo,deleteTodo,changeCompleteStatus,editTodoList}=todoSlice.actions
//export const selectTodos=(state:RootState)=>state.todoList.todos

export default todoSlice.reducer