"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearComplete = exports.setAllTasksCompleteStatus = exports.editTodoList = exports.changeCompleteStatus = exports.deleteTodo = exports.addTodo = exports.setTodoList = exports.todoSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
exports.todoSlice = toolkit_1.createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoList: (state, action) => {
            return action.payload;
        },
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state = state.filter((todo) => todo.id !== action.payload);
            return state;
        },
        changeCompleteStatus: (state, action) => {
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { isComplete: action.payload.status });
                }
                return todo;
            });
            return state;
        },
        editTodoList: (state, action) => {
            state = state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { name: action.payload.name });
                }
                return todo;
            });
            return state;
        },
        setAllTasksCompleteStatus: (state, action) => {
            state = state.map((todo) => {
                return Object.assign(Object.assign({}, todo), { isComplete: action.payload });
            });
            return state;
        },
        clearComplete: (state) => {
            state = state.filter(todo => !todo.isComplete);
            return state;
        },
    }
});
_a = exports.todoSlice.actions, exports.setTodoList = _a.setTodoList, exports.addTodo = _a.addTodo, exports.deleteTodo = _a.deleteTodo, exports.changeCompleteStatus = _a.changeCompleteStatus, exports.editTodoList = _a.editTodoList, exports.setAllTasksCompleteStatus = _a.setAllTasksCompleteStatus, exports.clearComplete = _a.clearComplete;
//export const selectTodos=(state:RootState)=>state.todoList.todos
exports.default = exports.todoSlice.reducer;
//# sourceMappingURL=index.js.map