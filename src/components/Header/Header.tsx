import * as React from "react";
import {useEffect, useState} from "react";
import './index.css'
import { newTodos} from "../../shared";
import {createTodo, updateTodoAction}  from '../../pages'

import {connect,DispatchProp} from "react-redux";

import {Dispatch} from "redux";
import {addTodo} from "../../redux/reducers";
import {setTodoList} from "../../redux/reducers";
import {useAppSelector,useAppDispatch} from "../../redux/hook";


const Header = () => {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()
    const [name, setName] = useState<string>("")

    const [allCompleteArrowStyle, setAllCompleteArrowStyle] = useState(false)

    const handleSubmit =async (e:any) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        console.log(todos)
        if (!reg.test(name) && name.length > 0) {
            const newTodo = newTodos(name)
            await createTodo(newTodo)
            await dispatch(addTodo(newTodo))
            setName("");
        }
    }

    // const handleCompleteAll =async () => {
    //     if (todos.filter(todo => !todo.isComplete).length > 0) {
    //         setAllCompleteArrowStyle(true)
    //       await  todos.forEach(todo=>updateTodoAction(todo.id,{isComplete:true}))
    //           await setAllTasksAsCompleted()
    //     //    await
    //     } else if (todos.filter(todo => todo.isComplete).length > 0) {
    //         setAllCompleteArrowStyle(false)
    //         await  todos.forEach(todo=>updateTodoAction(todo.id,{isComplete:false}))
    //        await clearAllCompletes()
    //     }
    // }


    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit} className='new-todo-form'>
                {/*<div className='new-todo-div' onClick={(e) => console.log('handleclick')}>*/}
                {/*    {todos.length>0 && <span className={allCompleteArrowStyle ? 'toggle-all-checked' : 'toggle-all'}*/}
                {/*                               data-testid='toggle-all'>❯</span>}*/}
                {/*</div>*/}
                <input className='new-todo-input'
                       placeholder="What needs to be done?"
                       onChange={(e) => setName(e.target.value)}
                       value={name}/>
            </form>
        </header>
    )
}



export default Header