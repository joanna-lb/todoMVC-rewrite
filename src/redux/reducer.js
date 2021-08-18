"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const initialState = [];
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SET_TODO_LIST:
            state = action.data;
            return state;
        case constants_1.ADD_TODO:
            state = [...state, action.payload];
            return state;
        case constants_1.SET_ALL_TASKS_COMPLETE_STATUS:
            state = state.map((todo) => {
                return Object.assign(Object.assign({}, todo), { isComplete: action.payload.isComplete });
            });
            return state;
        case constants_1.CHANGE_COMPLETE_STATUS:
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { isComplete: action.payload.isComplete });
                }
                return todo;
            });
            return state;
        case constants_1.DELETE_TODO:
            state = state.filter((todo) => todo.id !== action.payload.id);
            return state;
        case constants_1.EDIT_TODO_LIST:
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { name: action.payload.name });
                }
                return todo;
            });
            return state;
        case constants_1.CLEAR_COMPLETE:
            state = state.filter(todo => !todo.isComplete);
            return state;
        default:
            return state;
    }
}
exports.default = todoReducer;
//# sourceMappingURL=reducer.js.map