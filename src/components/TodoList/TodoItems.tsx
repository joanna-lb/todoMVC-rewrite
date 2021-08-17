

import React, {useEffect, useState} from "react";
import './index.css'
import {deleteTodoAction, updateTodoAction} from "../../pages";
import {changeCompleteStatus, deleteTodo, editTodoList} from "../../redux/reducers";
import {useAppDispatch, useAppSelector} from "../../redux/hook";



type TodoPropsType= {
    id: string,
    name: string,
    isComplete: boolean
}

const TodoItems = ({id,name,isComplete}:TodoPropsType) => {
    const todos=useAppSelector(state=>state.todos)
    const dispatch=useAppDispatch()
    const [isEdit, setIsEdit] = useState(false)
    const [todoName, setTodoName] = useState(name)
    const[completeStyle,setCompleteStyle]=useState(false)

    useEffect(()=>setCompleteStyle(isComplete),[])

    const handleKeyUp = async (e:any, id:string, todoName:string) => {
        const reg = new RegExp(/^\s+$/)
        if (e.keyCode === 13 && !reg.test(todoName) && todoName.length > 0) {
            await updateTodoAction(id, {name: todoName})
              await  dispatch(editTodoList({id, name:todoName})) ;
                setIsEdit(false)
        } else if (todoName.length === 0 && e.keyCode === 13) {
            await deleteTodoAction(id)
             await  deleteTodo(id)
                setIsEdit(false)
        }


   }

    const handleComplete = async (id: string, e: any) => {
        if (e.target.checked) {
            await updateTodoAction(id, {isComplete: true})
            changeCompleteStatus({id, status: true})
            setCompleteStyle(true)
        } else {

            await updateTodoAction(id, {isComplete: false})
            changeCompleteStatus({id, status: false})
            setCompleteStyle(false)
        }
    }

    const handleClickDestroy= async (id:string) => {
        console.log('destroy')
        await deleteTodoAction(id)
          dispatch(deleteTodo(id));
    }

    return (
        <>
            {
                < li key={id} className={completeStyle ?'completed': 'none'}>
                    {!isEdit && < div className='view'>

                        <div
                            className={completeStyle ? 'checkbox-checked' : 'checkbox-unchecked'}
                            onDoubleClick={() => setIsEdit(true)}
                        > <input className='checkbox-input' type='checkbox'
                                 onChange={(e) => handleComplete(id, e)}
                        /><span className='list-items'>{name === '' ? name : todoName}</span></div>
                        <div className='destroy' data-testid="destroy"
                                onClick={()=>handleClickDestroy(id)}
                        >&#x2715;</div>
                    </div>}
                    {isEdit && <input className='edit' value={todoName}
                                   onKeyUp={(e) => handleKeyUp(e, id, todoName)}
                                      onChange={(e) => setTodoName(e.target.value)}
                    />}
                </li>
            }
        </>
    )
}

export default TodoItems
