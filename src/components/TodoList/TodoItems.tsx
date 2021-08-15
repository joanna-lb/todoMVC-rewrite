

import React, {useState} from "react";
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

    const handleKeyUp = async (e:any, id:string, name:string) => {
        const reg = new RegExp(/^\s+$/)
        if (e.keyCode === 13 && !reg.test(name) && name.length > 0) {
            console.log(name)
            await updateTodoAction(id, {name: name})
              await  dispatch(editTodoList({id, name})) ;
                setIsEdit(false)
        } else if (name.length === 0 && e.keyCode === 13) {
            console.log('delete')
            await deleteTodoAction(id)
             await   deleteTodo(id)
                setIsEdit(false)
        }

   }

    const handleComplete =async (id:string, e:any) => {
        if(e.target.checked){
            await updateTodoAction(id, {isComplete:true})
           await changeCompleteStatus({id, status:true})
        }else {
            await updateTodoAction(id, {isComplete:false})
           await changeCompleteStatus({id, status:false})
        }
    }

    const handleClickDestroy= async (id:string) => {
        await deleteTodoAction(id)
         await   dispatch(deleteTodo(id));
    }

    return (
        <>
            {
                < li key={id} className={(isComplete) ? 'completed' : 'none'}>
                    {!isEdit && < div className='view'>
                        <input className='toggle' type='checkbox'
                               onChange={(e) => handleComplete(id, e)}
                        />
                        <label
                            className={isComplete ? 'checkbox-checked' : 'checkbox-unchecked'}
                            onDoubleClick={() => setIsEdit(true)}
                        >{name === '' ? name : todoName}</label>
                        <button className='destroy' data-testid="destroy"
                                onClick={()=>handleClickDestroy(id)}
                        >x</button>
                    </div>}
                    {isEdit && <input className='edit' value={todoName}
                                   onKeyUp={(e) => handleKeyUp(e, id, name)}
                                      onChange={(e) => setTodoName(e.target.value)}
                    />}
                </li>
            }
        </>
    )
}

export default TodoItems
