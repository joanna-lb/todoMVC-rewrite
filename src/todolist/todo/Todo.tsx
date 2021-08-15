import React, {useEffect, useState} from "react";
// import TodoList from "../../components/TodoList/TodoList";
 import Header from "../../components/Header/Header";
import Description from "../../components/Description/Description";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// import Footer from "../../components/Footer/Footer";
// import {connect} from "react-redux";
// import {FILTERS_TYPES} from "../../utils/constants";
// import {fetchTodoList, leftItemsCount} from "../../shared";
// import {setTodoList} from "../../redux/action";
import {fetchTodoList} from '../../pages'

import {setTodoList} from "../../redux/reducers";
import TodoList from "../../components/TodoList/TodoList";
import {useAppDispatch, useAppSelector} from "../../redux/hook";



function Todo() {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()
    const [showContent,setShowContents]=useState([]);

    useEffect(    ()=>{
  fetchTodoList().then(
            res=>res.json()).then(
             data=> {
                 if (data) {
                     setShowContents(data)
                     dispatch(setTodoList(data))
                 }
             }
  )
    },[])


    return (
        <>
            <section className="todoapp">
                <Header/>
                <TodoList todos={showContent}/>
            </section>
            <Description/>
        </>
    )
}


export default Todo