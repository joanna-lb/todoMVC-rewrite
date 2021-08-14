"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
require("./index.css");
function Description() {
    return (React.createElement("footer", { className: 'info' },
        React.createElement("span", null,
            React.createElement("p", null, "Double-click to edit a todo"),
            React.createElement("p", null,
                "Created by ",
                React.createElement("a", { href: 'http://github.com/petehunt/' }, "petehunt")),
            React.createElement("p", null,
                "Part of ",
                React.createElement("a", { href: "http://todomvc.com" }, "TodoMVC")))));
}
exports.default = Description;
//# sourceMappingURL=Description.js.map