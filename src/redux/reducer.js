"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../utils/constants");
const initialState = [];
function todoReducer(state = initialState, action) {
    switch (action.type) {
        case constants_1.SET_TODO_LIST:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
exports.default = todoReducer;
//# sourceMappingURL=reducer.js.map