"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAllTasksCompleteStatus = exports.addTodo = exports.setTodoList = void 0;
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
//# sourceMappingURL=action.js.map