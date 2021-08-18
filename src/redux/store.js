"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const tslib_1 = require("tslib");
const toolkit_1 = require("@reduxjs/toolkit");
const reducers_1 = tslib_1.__importDefault(require("./reducers"));
exports.store = toolkit_1.configureStore({
    reducer: {
        todos: reducers_1.default
    }
});
//# sourceMappingURL=store.js.map