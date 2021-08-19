"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_2 = require("@testing-library/react");
require("@testing-library/jest-dom");
const app_1 = tslib_1.__importDefault(require("./app"));
describe('App', () => {
    test('should render todo list', () => {
        react_2.render(react_1.default.createElement(app_1.default, null));
        expect(react_2.screen.getByText(/TodoMVC/i)).toBeInTheDocument();
    });
});
//# sourceMappingURL=app.test.js.map