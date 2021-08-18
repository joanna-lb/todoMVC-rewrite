import React, {useEffect, useState} from "react";

import Header from "../components/Header/Header";
import Description from "../components/Description/Description";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {fetchTodoList} from '../Server'
import TodoList from "../components/TodoList/TodoList";

import {TodoType} from "../types";
import * as Actions from "../redux/action";



interface DispatchProps {
    //addTodo(text: string): void,
    todos:Array<TodoType>
    setTodoList:(todos:Array<TodoType>)=>void
    addTodo:(todo:TodoType)=>void
}


function Todo({setTodoList,todos,addTodo}:DispatchProps) {

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

    },[])

    // const handleChangeShowContent=(filterTypes:string)=>{
    //     switch (filterTypes) {
    //         case constants.FILTERS_TYPES.All:
    //             return  setShowContent(todos)
    //         case constants.FILTERS_TYPES.Active:
    //             return   setShowContent(todos.filter(todo=>!todo.isComplete))
    //         case constants.FILTERS_TYPES.Completed:
    //             return   setShowContent(todos.filter(todo=>todo.isComplete))
    //         default:
    //             return setShowContent(todos)
    //     }
    // }


    return (
        <>
            <section className="todoapp">
                <Header todos={todos} addTodo={addTodo}/>
                <TodoList todos={showContent}/>
                {/*{todos.length > 0 && <Footer changeShowContent={handleChangeShowContent} showContent={showContent}/>}*/}
            </section>
            <Description/>
        </>
    )
}
const mapStateToProps = (state: Array<TodoType>) => ({
    todos: state
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(Actions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Todo);
