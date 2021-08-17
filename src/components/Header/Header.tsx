import * as React from "react";
import {useEffect, useState} from "react";
import './index.css'
import { newTodos} from "../../shared";
import {createTodo, updateTodoAction}  from '../../pages'
import {addTodo, clearAllCompletes, setAllTasksAsCompleted} from "../../redux/reducers";

import {useAppSelector,useAppDispatch} from "../../redux/hook";

import {updateAllTodosAction} from "../../pages";
import {todosType, todoType} from "../../redux/types";
const Header = () => {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()
    const [name, setName] = useState<string>("")
    const [allCompleteArrowStyle, setAllCompleteArrowStyle] = useState(false)



    const handleSubmit =async (e:any) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            const newTodo = newTodos(name)
            await createTodo(newTodo)
            await dispatch(addTodo(newTodo))
            setName("");
        }
    }


    const handleCompleteAll = async () => {
        setAllCompleteArrowStyle(!allCompleteArrowStyle)
        if (todos.filter((todo: todoType) => !todo.isComplete).length > 0) {
            await updateAllTodosAction(todos, {isComplete: true})
            setAllTasksAsCompleted()
          console.log(todos)
        } else if (todos.filter((todo: todoType) => todo.isComplete).length > 0) {
            await updateAllTodosAction(todos, {isComplete: false})
            clearAllCompletes()
        }
    }


    return (
        <header className='header'>
            <h1>todos</h1>
            <form onSubmit={handleSubmit} className='new-todo-form'>
                <div className='new-todo-div'
                    onClick={() => handleCompleteAll()}
                >
                    { <span className={allCompleteArrowStyle ? 'toggle-all-checked' : 'toggle-all'}
                                               data-testid='toggle-all'>❯</span>}
                </div>
                <input className='new-todo-input'
                       placeholder="What needs to be done?"
                       onChange={(e) => setName(e.target.value)}
                       value={name}/>
            </form>
        </header>
    )
}



export default Header