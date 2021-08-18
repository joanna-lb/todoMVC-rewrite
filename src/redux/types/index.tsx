import exp from "constants";


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
}




