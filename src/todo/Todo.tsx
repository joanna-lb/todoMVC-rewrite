import React, {useEffect, useState} from "react";

import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {fetchTodoList} from '../Server'
import TodoList from "../components/TodoList/TodoList";
import Footer from "../components/Footer/Footer";
import {TodoType} from "../types";
import * as Actions from "../redux/action";
import * as constants from "../utils/constants"
import {leftItemsCount} from "../shared";



interface DispatchProps {
    todos:Array<TodoType>
    setTodoList:(todos:Array<TodoType>)=>void
    addTodo:(todo:TodoType)=>void
    deleteTodo:(id:string)=>void
    changeCompleteStatus:(id:string,status:boolean)=>void
}


function Todo({setTodoList,todos,addTodo,deleteTodo,changeCompleteStatus}:DispatchProps) {

    const [showContent,setShowContent]=useState(todos);

    // @ts-ignore
    useEffect(    async ()=>{
        await fetchTodoList().then(
            res=> {
                if (res.data) {
                    setShowContent(res.data);
                   setTodoList(res.data)
                }
            }
        )

    },[leftItemsCount(todos),todos.length])

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
                <Header todos={todos} addTodo={addTodo}/>
                <TodoList todos={showContent}
                          deleteTodo={deleteTodo}
                          changeCompleteStatus={changeCompleteStatus}
                />
                {todos.length > 0 && <Footer
                    todos={todos}
                    changeShowContent={handleChangeShowContent}
                    />}
            </section>
            <Description/>
        </>
    )
}
const mapStateToProps = (state: Array<TodoType>) => ({
    todos: state
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
