import * as React from "react";
import {useEffect, useState} from "react";
import './index.css'
import { newTodos} from "../../shared";
import {createTodo}  from '../../Server'
import {updateAllTodosAction} from "../../Server";
import {TodoType} from "../../types";




interface HeaderProps {
     addTodo:(todo:TodoType)=>void
     todos:Array<TodoType>
    setAllTasksCompleteStatus:(status:boolean)=>void
}
const Header = ({todos,addTodo,setAllTasksCompleteStatus}:HeaderProps) => {

    const [name, setName] = useState('')
    const [allCompleteArrowStyle, setAllCompleteArrowStyle] = useState(false)


    const handleSubmit =async (e:any) => {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/)
        if (!reg.test(name) && name.length > 0) {
            const newTodo = newTodos(name)
            await createTodo(newTodo)
            addTodo(newTodo)
            setName("");
        }
    }


    const handleCompleteAll = async () => {
        if (todos.filter((todo: TodoType) => !todo.isComplete).length > 0) {
            await updateAllTodosAction(todos, {isComplete: true})
            setAllTasksCompleteStatus(true)
            setAllCompleteArrowStyle(true)
        } else if (todos.filter((todo: TodoType) => todo.isComplete).length > 0) {
            await updateAllTodosAction(todos, {isComplete: false})
            setAllTasksCompleteStatus(false)
            setAllCompleteArrowStyle(false)
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