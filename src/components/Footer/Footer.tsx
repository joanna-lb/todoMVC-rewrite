import React from "react";
import Filters from "./Filters";
import TodoCount from "./TodoCount";
import './index.css'


import {useAppDispatch, useAppSelector} from "../../redux/hook";

import {deleteTodoAction} from "../../Server";
import {clearComplete} from "../../redux/reducers";
import {checkAnyComplete} from "../../shared";

interface FooterPropsType {
    changeShowContent:(filterType:string)=>void
    showContent:Array<object>
}
const Footer = ({changeShowContent,showContent}:FooterPropsType) => {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()

    const handleClearComplete =async () => {
        await   todos.filter(todo=>todo.isComplete).forEach(
            todo=> {
             try {
                return     deleteTodoAction(todo.id)
                }catch (e) {
                 console.log(e)
             }
            }
        )
        await dispatch(clearComplete())
    }

    return (
        <footer className='footer'>
            <TodoCount/>
            <Filters changeShowContent={changeShowContent}/>
            <button data-testid='button' className='clear-completed' style={{visibility:checkAnyComplete(todos)?"visible":"hidden"}}
                    onClick={handleClearComplete}>
                Clear completed
            </button>
        </footer>
    )
};

export default Footer