"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearComplete = exports.editTodoList = exports.deleteTodo = exports.changeCompleteStatus = exports.setAllTasksCompleteStatus = exports.addTodo = exports.setTodoList = void 0;
const constants_1 = require("../utils/constants");
const setTodoList = (todos) => {
    return ({ type: constants_1.SET_TODO_LIST, data: todos });
};
exports.setTodoList = setTodoList;
const addTodo = (todo) => {
    return ({ type: constants_1.ADD_TODO, payload: { todo } });
};
exports.addTodo = addTodo;
const setAllTasksCompleteStatus = (status) => {
    return ({ type: constants_1.SET_ALL_TASKS_COMPLETE_STATUS, payload: { isComplete: status } });
};
exports.setAllTasksCompleteStatus = setAllTasksCompleteStatus;
const changeCompleteStatus = (id, status) => {
    return ({ type: constants_1.CHANGE_COMPLETE_STATUS, payload: { id, isComplete: status } });
};
exports.changeCompleteStatus = changeCompleteStatus;
const deleteTodo = (id) => {
    return ({ type: constants_1.DELETE_TODO, payload: { id } });
};
exports.deleteTodo = deleteTodo;
const editTodoList = (id, name) => {
    return ({ type: constants_1.EDIT_TODO_LIST, payload: { id, name } });
};
exports.editTodoList = editTodoList;
const clearComplete = () => {
    return ({ type: constants_1.CLEAR_COMPLETE });
};
exports.clearComplete = clearComplete;
//# sourceMappingURL=action.js.map