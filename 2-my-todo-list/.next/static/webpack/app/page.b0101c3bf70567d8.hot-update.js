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

/***/ "(app-pages-browser)/./src/components/TodoItem.tsx":
/*!*************************************!*\
  !*** ./src/components/TodoItem.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TodoItem: function() { return /* binding */ TodoItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nfunction TodoItem(param) {\n    let { todoItemProps } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n        style: {\n            textDecoration: todoItemProps.TodoItem.completed ? \"line-through\" : \"none\"\n        },\n        children: [\n            todoItemProps.TodoItem.text,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>todoItemProps.toggleTodo(todoItemProps.TodoItem.id),\n                children: \"切换\"\n            }, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/components/TodoItem.tsx\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>todoItemProps.deleteTodo(todoItemProps.TodoItem.id),\n                children: \"删除\"\n            }, void 0, false, {\n                fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/components/TodoItem.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ziyi2/GolandProjects/react_demo/my-todo-list/src/components/TodoItem.tsx\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_c = TodoItem;\nvar _c;\n$RefreshReg$(_c, \"TodoItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1RvZG9JdGVtLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFPTyxTQUFTQSxTQUFTLEtBQThCO1FBQTlCLEVBQUNDLGFBQWEsRUFBZ0IsR0FBOUI7SUFDckIscUJBQ0ksOERBQUNDO1FBQUdDLE9BQU87WUFBQ0MsZ0JBQWdCSCxjQUFjRCxRQUFRLENBQUNLLFNBQVMsR0FBRyxpQkFBaUI7UUFBTTs7WUFDakZKLGNBQWNELFFBQVEsQ0FBQ00sSUFBSTswQkFDNUIsOERBQUNDO2dCQUFPQyxTQUFTLElBQU1QLGNBQWNRLFVBQVUsQ0FBQ1IsY0FBY0QsUUFBUSxDQUFDVSxFQUFFOzBCQUFHOzs7Ozs7MEJBQzVFLDhEQUFDSDtnQkFBT0MsU0FBUyxJQUFNUCxjQUFjVSxVQUFVLENBQUNWLGNBQWNELFFBQVEsQ0FBQ1UsRUFBRTswQkFBRzs7Ozs7Ozs7Ozs7O0FBR3hGO0tBUmdCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Ub2RvSXRlbS50c3g/NTY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVG9kb0l0ZW1Qcm9wcyB7XG4gICAgVG9kb0l0ZW06IGFueTtcbiAgICB0b2dnbGVUb2RvOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbiAgICBkZWxldGVUb2RvOiAoaWQ6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gVG9kb0l0ZW0oe3RvZG9JdGVtUHJvcHN9OiBUb2RvSXRlbVByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGxpIHN0eWxlPXt7dGV4dERlY29yYXRpb246IHRvZG9JdGVtUHJvcHMuVG9kb0l0ZW0uY29tcGxldGVkID8gJ2xpbmUtdGhyb3VnaCcgOiAnbm9uZSd9fT5cbiAgICAgICAgICAgIHt0b2RvSXRlbVByb3BzLlRvZG9JdGVtLnRleHR9XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZG9JdGVtUHJvcHMudG9nZ2xlVG9kbyh0b2RvSXRlbVByb3BzLlRvZG9JdGVtLmlkKX0+5YiH5o2iPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRvZG9JdGVtUHJvcHMuZGVsZXRlVG9kbyh0b2RvSXRlbVByb3BzLlRvZG9JdGVtLmlkKX0+5Yig6ZmkPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJUb2RvSXRlbSIsInRvZG9JdGVtUHJvcHMiLCJsaSIsInN0eWxlIiwidGV4dERlY29yYXRpb24iLCJjb21wbGV0ZWQiLCJ0ZXh0IiwiYnV0dG9uIiwib25DbGljayIsInRvZ2dsZVRvZG8iLCJpZCIsImRlbGV0ZVRvZG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/TodoItem.tsx\n"));

/***/ })

});