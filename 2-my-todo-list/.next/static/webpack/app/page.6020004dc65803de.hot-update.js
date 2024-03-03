"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.tsx":
/*!**************************!*\
  !*** ./src/app/page.tsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_TodoFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/TodoFilter */ \"(app-pages-browser)/./src/components/TodoFilter.tsx\");\n/* harmony import */ var _components_TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/TodoList */ \"(app-pages-browser)/./src/components/TodoList.tsx\");\n/* harmony import */ var _components_AddTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AddTodo */ \"(app-pages-browser)/./src/components/AddTodo.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    //初始代办事项为空\n    const [todos, setTodos] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [filter, setFilter] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"all\");\n    const addTodo = (text)=>{\n        const newTodoItem = {\n            id: Date.now(),\n            text,\n            completed: false\n        };\n        setTodos([\n            ...todos,\n            newTodoItem\n        ]);\n    };\n    const deleteTodo = (id)=>{\n        setTodos(todos.filter((todo)=>todo.id !== id));\n    };\n    const toggleTodo = (id)=>{\n        setTodos(todos.map((todo)=>{\n            if (todo.id === id) {\n                todo.completed = !todo.completed;\n            }\n            return todo;\n        }));\n    };\n    const getFilterTodo = ()=>{\n        switch(filter){\n            case \"completed\":\n                return todos.filter((todo)=>todo.completed);\n            case \"active\":\n                return todos.filter((todo)=>!todo.completed);\n            default:\n                return todos;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"my-todo-list\"\n            }, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/app/page.tsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddTodo__WEBPACK_IMPORTED_MODULE_3__.AddTodo, {\n                addTodo: addTodo\n            }, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/app/page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/app/page.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TodoFilter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/app/page.tsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/app/page.tsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"4ldVzuGdHG+qAH/CA1Vao+E5AT0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBR2lEO0FBQ0o7QUFDRTtBQUNkO0FBSWxCLFNBQVNJOztJQUN0QixVQUFVO0lBQ1YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdILCtDQUFRQSxDQUFTLEVBQUU7SUFDN0MsTUFBTSxDQUFDSSxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU1NLFVBQVUsQ0FBQ0M7UUFDZixNQUFNQyxjQUFjO1lBQ2xCQyxJQUFJQyxLQUFLQyxHQUFHO1lBQ1pKO1lBQ0FLLFdBQVc7UUFDYjtRQUNBVCxTQUFTO2VBQUlEO1lBQU9NO1NBQVk7SUFDbEM7SUFFQSxNQUFNSyxhQUFhLENBQUNKO1FBQ2xCTixTQUFTRCxNQUFNRSxNQUFNLENBQUNVLENBQUFBLE9BQVFBLEtBQUtMLEVBQUUsS0FBS0E7SUFDNUM7SUFFQSxNQUFNTSxhQUFhLENBQUNOO1FBQ2xCTixTQUFTRCxNQUFNYyxHQUFHLENBQUNGLENBQUFBO1lBQ2pCLElBQUlBLEtBQUtMLEVBQUUsS0FBS0EsSUFBSTtnQkFDbEJLLEtBQUtGLFNBQVMsR0FBRyxDQUFDRSxLQUFLRixTQUFTO1lBQ2xDO1lBQ0EsT0FBT0U7UUFDVDtJQUNGO0lBRUEsTUFBTUcsZ0JBQWdCO1FBQ3BCLE9BQVFiO1lBQ04sS0FBSztnQkFDSCxPQUFPRixNQUFNRSxNQUFNLENBQUNVLENBQUFBLE9BQVFBLEtBQUtGLFNBQVM7WUFDNUMsS0FBSztnQkFDSCxPQUFPVixNQUFNRSxNQUFNLENBQUNVLENBQUFBLE9BQVEsQ0FBQ0EsS0FBS0YsU0FBUztZQUM3QztnQkFDRSxPQUFPVjtRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2dCOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3BCLHdEQUFPQTtnQkFBQ08sU0FBU0E7Ozs7OzswQkFDbEIsOERBQUNSLDREQUFRQTs7Ozs7MEJBQ1QsOERBQUNELDhEQUFVQTs7Ozs7Ozs7Ozs7QUFHakI7R0E3Q3dCSTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2UudHN4P2Y2OGEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgVG9kb0ZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL1RvZG9GaWx0ZXJcIjtcbmltcG9ydCBUb2RvTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL1RvZG9MaXN0XCI7XG5pbXBvcnQgeyBBZGRUb2RvIH0gZnJvbSBcIkAvY29tcG9uZW50cy9BZGRUb2RvXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgLy/liJ3lp4vku6Plip7kuovpobnkuLrnqbpcbiAgY29uc3QgW3RvZG9zLCBzZXRUb2Rvc10gPSB1c2VTdGF0ZTxUb2RvW10+KFtdKVxuICBjb25zdCBbZmlsdGVyLCBzZXRGaWx0ZXJdID0gdXNlU3RhdGUoJ2FsbCcpXG4gIGNvbnN0IGFkZFRvZG8gPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgbmV3VG9kb0l0ZW0gPSB7XG4gICAgICBpZDogRGF0ZS5ub3coKSxcbiAgICAgIHRleHQsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlXG4gICAgfVxuICAgIHNldFRvZG9zKFsuLi50b2RvcywgbmV3VG9kb0l0ZW1dKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gaWQpKVxuICB9XG5cbiAgY29uc3QgdG9nZ2xlVG9kbyA9IChpZDogbnVtYmVyKSA9PiB7XG4gICAgc2V0VG9kb3ModG9kb3MubWFwKHRvZG8gPT4ge1xuICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kb1xuICAgIH0pKVxuICB9XG5cbiAgY29uc3QgZ2V0RmlsdGVyVG9kbyA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGZpbHRlcikge1xuICAgICAgY2FzZSAnY29tcGxldGVkJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKVxuICAgICAgY2FzZSAnYWN0aXZlJzpcbiAgICAgICAgcmV0dXJuIHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0b2Rvc1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMT5teS10b2RvLWxpc3Q8L2gxPlxuICAgICAgPEFkZFRvZG8gYWRkVG9kbz17YWRkVG9kb30+PC9BZGRUb2RvPlxuICAgICAgPFRvZG9MaXN0PjwvVG9kb0xpc3Q+XG4gICAgICA8VG9kb0ZpbHRlcj48L1RvZG9GaWx0ZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiVG9kb0ZpbHRlciIsIlRvZG9MaXN0IiwiQWRkVG9kbyIsInVzZVN0YXRlIiwiSG9tZSIsInRvZG9zIiwic2V0VG9kb3MiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJhZGRUb2RvIiwidGV4dCIsIm5ld1RvZG9JdGVtIiwiaWQiLCJEYXRlIiwibm93IiwiY29tcGxldGVkIiwiZGVsZXRlVG9kbyIsInRvZG8iLCJ0b2dnbGVUb2RvIiwibWFwIiwiZ2V0RmlsdGVyVG9kbyIsImRpdiIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.tsx\n"));

/***/ })

});