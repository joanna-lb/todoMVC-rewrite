"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_1 = require("react");
require("./index.css");
const shared_1 = require("../../shared");
const server_1 = require("../../server");
const server_2 = require("../../server");
const Header = ({ todos, addTodo, setAllTasksCompleteStatus }) => {
    const [name, setName] = react_1.useState('');
    const [allCompleteArrowStyle, setAllCompleteArrowStyle] = react_1.useState(false);
    const handleSubmit = (e) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        const reg = new RegExp(/^\s+$/);
        if (!reg.test(name) && name.length > 0) {
            const newTodo = shared_1.newTodos(name);
            yield server_1.createTodo(newTodo);
            addTodo(newTodo);
            setName("");
        }
    });
    const handleCompleteAll = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (todos.filter((todo) => !todo.isComplete).length > 0) {
            yield server_2.updateAllTodosAction(todos, { isComplete: true });
            setAllTasksCompleteStatus(true);
            setAllCompleteArrowStyle(true);
        }
        else if (todos.filter((todo) => todo.isComplete).length > 0) {
            yield server_2.updateAllTodosAction(todos, { isComplete: false });
            setAllTasksCompleteStatus(false);
            setAllCompleteArrowStyle(false);
        }
    });
    return (React.createElement("header", { className: 'header' },
        React.createElement("h1", null, "todos"),
        React.createElement("form", { onSubmit: handleSubmit, className: 'new-todo-form' },
            React.createElement("div", { className: 'new-todo-div', onClick: () => handleCompleteAll() }, React.createElement("span", { className: allCompleteArrowStyle ? 'toggle-all-checked' : 'toggle-all', "data-testid": 'toggle-all' }, "\u276F")),
            React.createElement("input", { className: 'new-todo-input', placeholder: "What needs to be done?", onChange: (e) => setName(e.target.value), value: name }))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map