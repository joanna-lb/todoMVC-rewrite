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
        case constants_1.CHANGE_COMPLETE_STATUS:
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { isComplete: action.payload.isComplete });
                }
                return todo;
            });
            return state;
        default:
            return state;
    }
}
exports.default = todoReducer;
//# sourceMappingURL=reducer.js.map