import React, {useEffect, useState} from "react";
// import TodoList from "../../components/TodoList/TodoList";
 import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import * as constants from '../utils/constants'

// import Footer from "../../components/Footer/Footer";
// import {connect} from "react-redux";
// import {FILTERS_TYPES} from "../../utils/constants";
// import {fetchTodoList, leftItemsCount} from "../../shared";
// import {setTodoList} from "../../redux/action";
import {fetchTodoList} from '../Server'

import {addTodo, setTodoList} from "../redux/reducers";
import TodoList from "../components/TodoList/TodoList";
import {useAppDispatch, useAppSelector} from "../redux/hook";
import Footer from "../components/Footer/Footer";
import {leftItemsCount} from "../shared";



function Todo() {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()
    const [showContent,setShowContent]=useState(todos);

    // @ts-ignore
    useEffect(    async ()=>{
        const response=  await fetchTodoList().then(
            res=> {
                if (res.data) {
                    setShowContent(res.data);
                    dispatch(setTodoList(res.data))
                }
            }

        )

    },[todos.length,leftItemsCount(todos)])

    const handleChangeShowContent=(filterTypes:string)=>{
        switch (filterTypes) {
            case constants.FILTERS_TYPES.All:
                return  setShowContent(todos)
            case constants.FILTERS_TYPES.Active:
                return   setShowContent(todos.filter(todo=>!todo.isComplete))
            case constants.FILTERS_TYPES.Completed:
                return   setShowContent(todos.filter(todo=>todo.isComplete))
            default:
                return setShowContent(todos)
        }
    }


    return (
        <>
            <section className="todoapp">
                <Header/>
                <TodoList todos={showContent}/>
                {todos.length > 0 && <Footer changeShowContent={handleChangeShowContent} showContent={showContent}/>}
            </section>
            <Description/>
        </>
    )
}


export default Todo