import Todo from "../todo/Todo";


export interface TodoType  {
        id:string,
        name:string,
        isComplete:boolean

}
export interface EditType {
        id: string,
        name: string
}

export interface ChangeStatusType {
        id: string,
        status: boolean
}

export interface TodoPropsType {
        id: string,
        name: string,
        isComplete: boolean
        deleteTodo:(id:string)=>void

}
export interface DeleteTodoType{
        deleteTodo:(id:string)=>void
}

export interface  ChangeCompleteStatus {
        changeCompleteStatus:(id:string,status:boolean)=>void
}

export interface TodoListActionTypes {
        type: string,
        payload:TodoType
        data:TodoType[]
}






