"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importStar(require("react"));
// import TodoList from "../../components/TodoList/TodoList";
const Header_1 = tslib_1.__importDefault(require("../components/Header/Header"));
const Description_1 = tslib_1.__importDefault(require("../components/Description/Description"));
const constants = tslib_1.__importStar(require("../utils/constants"));
// import Footer from "../../components/Footer/Footer";
// import {connect} from "react-redux";
// import {FILTERS_TYPES} from "../../utils/constants";
// import {fetchTodoList, leftItemsCount} from "../../shared";
// import {setTodoList} from "../../redux/action";
const Server_1 = require("../Server");
const reducers_1 = require("../redux/reducers");
const TodoList_1 = tslib_1.__importDefault(require("../components/TodoList/TodoList"));
const hook_1 = require("../redux/hook");
const Footer_1 = tslib_1.__importDefault(require("../components/Footer/Footer"));
const shared_1 = require("../shared");
function Todo() {
    const todos = hook_1.useAppSelector(state => state.todos);
    const dispatch = hook_1.useAppDispatch();
    const [showContent, setShowContent] = react_1.useState(todos);
    // @ts-ignore
    react_1.useEffect(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield Server_1.fetchTodoList().then(res => {
            if (res.data) {
                setShowContent(res.data);
                dispatch(reducers_1.setTodoList(res.data));
            }
        });
    }), [todos.length, shared_1.leftItemsCount(todos)]);
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
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(TodoList_1.default, { todos: showContent }),
            todos.length > 0 && react_1.default.createElement(Footer_1.default, { changeShowContent: handleChangeShowContent, showContent: showContent })),
        react_1.default.createElement(Description_1.default, null)));
}
exports.default = Todo;
//# sourceMappingURL=Todo.js.map