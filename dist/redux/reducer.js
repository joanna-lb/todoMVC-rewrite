"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const initialState = [];
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SET_TODO_LIST:
            const newState = [];
            action.payload.data.map((todo) => newState.push(todo));
            return newState;
        case constants_1.ADD_TODO:
            const addTodo = [action.payload.todo];
            return state.concat(addTodo);
        case constants_1.SET_ALL_TASKS_COMPLETE_STATUS:
            return state.map((todo) => {
                return Object.assign(Object.assign({}, todo), { isComplete: action.payload.todo.isComplete });
            });
        case constants_1.CHANGE_COMPLETE_STATUS:
            return state.map((todo) => {
                if (todo.id === action.payload.todo.id) {
                    return Object.assign(Object.assign({}, todo), { isComplete: action.payload.todo.isComplete });
                }
                return todo;
            });
        case constants_1.DELETE_TODO:
            const stateDeleted = state.filter((todo) => todo.id !== action.payload.todo.id);
            return [...state, stateDeleted];
        case constants_1.EDIT_TODO_LIST:
            return state.map((todo) => {
                if (todo.id === action.payload.todo.id) {
                    return Object.assign(Object.assign({}, todo), { name: action.payload.todo.name });
                }
                return todo;
            });
        case constants_1.CLEAR_COMPLETE:
            return state.filter((todo) => !todo.isComplete);
        default:
            return state;
    }
}
exports.default = todoReducer;
//# sourceMappingURL=reducer.js.map