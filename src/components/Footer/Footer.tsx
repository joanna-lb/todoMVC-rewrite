import React from "react";
import Filters from "./Filters";
import TodoCount from "./TodoCount";
import './index.css'

import {deleteTodoAction} from "../../Server";

import {checkAnyComplete} from "../../shared";
import {TodoType} from "../../types";


interface FooterPropsType {
     changeShowContent:(filterType:string)=>void
    todos:Array<TodoType>
    clearComplete:()=>void
}
const Footer = ({todos,changeShowContent,clearComplete}:FooterPropsType) => {


    const handleClearComplete =async () => {
        await   todos.filter(todo=>todo.isComplete).forEach(
            todo=> {
             try {
                return  deleteTodoAction(todo.id)
                }catch (e) {
                 console.log(e)
             }
            }
        )
        clearComplete()
    }

    return (
        <footer className='footer'>
            <TodoCount todos={todos}/>
            <Filters changeShowContent={changeShowContent}/>
            <button data-testid='button' className='clear-completed' style={{visibility:checkAnyComplete(todos)?"visible":"hidden"}}
                    onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
};

export default Footer