"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAllTodosAction = exports.deleteTodoAction = exports.fetchTodoList = exports.createTodo = exports.updateTodoAction = exports.BASE_URL = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
exports.BASE_URL = 'http://localhost:3000/todos';
// const updateTodoAction = (id, data) => axios.patch(`${BASE_URL}/${id}`, data)
const fetchTodoList = () => 
// axios.get(BASE_URL)
fetch(`/api/test/todos`, {
    method: 'GET',
    mode: 'no-cors',
    credentials: 'include',
}).then((response) => {
    console.log(response);
    return response.json();
}).then(response => console.log(response)).catch(e => {
    console.log(e);
});
exports.fetchTodoList = fetchTodoList;
const deleteTodoAction = (id) => {
    return axios_1.default.delete(`${exports.BASE_URL}/${id}`);
};
exports.deleteTodoAction = deleteTodoAction;
const updateTodoAction = (id, data) => axios_1.default.patch(`${exports.BASE_URL}/${id}`, data);
exports.updateTodoAction = updateTodoAction;
const updateAllTodosAction = (data, isComplete) => {
    data.forEach((todo) => axios_1.default.patch(`${exports.BASE_URL}/${todo.id}`, isComplete));
};
exports.updateAllTodosAction = updateAllTodosAction;
const createTodo = (todo) => {
    return axios_1.default.post(exports.BASE_URL, todo);
};
exports.createTodo = createTodo;
//# sourceMappingURL=index.js.map