"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
const Header_1 = tslib_1.__importDefault(require("../components/Header/Header"));
const Description_1 = tslib_1.__importDefault(require("../components/Description/Description"));
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
const server_1 = require("../server");
const TodoList_1 = tslib_1.__importDefault(require("../components/TodoList/TodoList"));
const Footer_1 = tslib_1.__importDefault(require("../components/Footer/Footer"));
const Actions = tslib_1.__importStar(require("../redux/action"));
const constants = tslib_1.__importStar(require("../utils/constants"));
const shared_1 = require("../shared");
function Todo({ setTodoList, todos, addTodo, deleteTodo, changeCompleteStatus, setAllTasksCompleteStatus, clearComplete, editTodoList }) {
    const [showContent, setShowContent] = react_1.useState(todos);
    // @ts-ignore
    react_1.useEffect(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield server_1.fetchTodoList().then(res => {
            if (res.data) {
                setShowContent(res.data);
                setTodoList(res.data);
            }
        });
    }), [shared_1.leftItemsCount(todos), todos.length]);
    const handleChangeShowContent = (filterTypes) => {
        switch (filterTypes) {
            case constants.FILTERS_TYPES.All:
                return setShowContent(todos);
            case constants.FILTERS_TYPES.Active:
                return setShowContent(todos.filter(todo => !todo.isComplete));
            case constants.FILTERS_TYPES.Completed:
                return setShowContent(todos.filter(todo => todo.isComplete));
            default:
                return setShowContent(todos);
        }
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("section", { className: "todoapp" },
            react_1.default.createElement(Header_1.default, { todos: todos, addTodo: addTodo, setAllTasksCompleteStatus: setAllTasksCompleteStatus }),
            react_1.default.createElement(TodoList_1.default, { todos: showContent, deleteTodo: deleteTodo, changeCompleteStatus: changeCompleteStatus, editTodoList: editTodoList }),
            todos && todos.length > 0
                &&
                    react_1.default.createElement(Footer_1.default, { todos: todos, changeShowContent: handleChangeShowContent, clearComplete: clearComplete })),
        react_1.default.createElement(Description_1.default, null)));
}
const mapStateToProps = (state) => ({
    todos: state
});
const mapDispatchToProps = (dispatch) => redux_1.bindActionCreators(Actions, dispatch);
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Todo);
//# sourceMappingURL=Todo.js.map