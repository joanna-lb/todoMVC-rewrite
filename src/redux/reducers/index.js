"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.editTodoList = exports.changeCompleteStatus = exports.deleteTodo = exports.addTodo = exports.setTodoList = exports.todoSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    todos: []
};
exports.todoSlice = toolkit_1.createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        setTodoList: (state, action) => {
            state.todos = action.payload;
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        changeCompleteStatus: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { isComplete: action.payload.status });
                }
                return todo;
            });
        },
        editTodoList: (state, action) => {
            state.todos = state.todos.map((todo) => {
                if (todo.id === action.payload.id) {
                    return Object.assign(Object.assign({}, todo), { name: action.payload.name });
                }
                return todo;
            });
        }
    }
});
_a = exports.todoSlice.actions, exports.setTodoList = _a.setTodoList, exports.addTodo = _a.addTodo, exports.deleteTodo = _a.deleteTodo, exports.changeCompleteStatus = _a.changeCompleteStatus, exports.editTodoList = _a.editTodoList;
//export const selectTodos=(state:RootState)=>state.todoList.todos
exports.default = exports.todoSlice.reducer;
//# sourceMappingURL=index.js.map