"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Home/Carousel.tsx":
/*!**************************************!*\
  !*** ./components/Home/Carousel.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel.module.css */ \"./components/Home/Carousel.module.css\");\n/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction Carousel(props) {\n    _s();\n    // const router = useRouter();\n    var side = props.side, id = props.id;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(props);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselContainer),\n            children: [\n                !side && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselImageContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: props.src,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            // style={{ height: '600px' }} \n                            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselImages),\n                            src: props.src\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 21\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselTextContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            children: props.title\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            style: {\n                                whiteSpace: 'pre-line'\n                            },\n                            children: props.description\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                }, this),\n                side && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselImageContainer),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: props.src,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().carouselImages),\n                            src: props.src\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                            lineNumber: 44,\n                            columnNumber: 29\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, \"\".concat(id, \"-carousel\"), true, {\n            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n            lineNumber: 20,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/Carousel.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this));\n}\n_s(Carousel, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Carousel;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Carousel);\nvar _c;\n$RefreshReg$(_c, \"Carousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvQ2Fyb3VzZWwudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5RDtBQUNoQjs7U0FHaENHLFFBQVEsQ0FBQ0MsS0FNakIsRUFBaUIsQ0FBQzs7SUFDZixFQUE4QjtJQUM5QixHQUFLLENBQUdDLElBQUksR0FBU0QsS0FBSyxDQUFsQkMsSUFBSSxFQUFFQyxFQUFFLEdBQUtGLEtBQUssQ0FBWkUsRUFBRTtJQUNoQkwsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYk0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLEtBQUs7SUFDckIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0RKLDJDQUFROzhGQUNKUyxDQUFHO1lBQUNDLFNBQVMsRUFBRVIsK0VBQXVCOztpQkFDakNHLElBQUksZ0ZBQ0RJLENBQUc7b0JBQUNDLFNBQVMsRUFBRVIsb0ZBQTRCOzBHQUN2Q1csQ0FBQzt3QkFBQ0MsSUFBSSxFQUFFVixLQUFLLENBQUNXLEdBQUc7OEdBQ2JDLENBQUc7NEJBQ0EsRUFBK0I7NEJBQy9CTixTQUFTLEVBQUVSLDRFQUFvQjs0QkFDL0JhLEdBQUcsRUFBRVgsS0FBSyxDQUFDVyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzRGQU03Qk4sQ0FBRztvQkFBQ0MsU0FBUyxFQUFFUixtRkFBMkI7O29HQUN0Q2lCLENBQUU7c0NBQ0VmLEtBQUssQ0FBQ2dCLEtBQUs7Ozs7OztvR0FFZkMsQ0FBQzs0QkFBQ25CLEtBQUssRUFBRSxDQUFDO2dDQUFDb0IsVUFBVSxFQUFFLENBQVU7NEJBQUMsQ0FBQztzQ0FDL0JsQixLQUFLLENBQUNtQixXQUFXOzs7Ozs7Ozs7Ozs7Z0JBR3pCbEIsSUFBSSxnRkFDQUksQ0FBRztvQkFBQ0MsU0FBUyxFQUFFUixvRkFBNEI7MEdBQ3ZDVyxDQUFDO3dCQUFDQyxJQUFJLEVBQUVWLEtBQUssQ0FBQ1csR0FBRzs4R0FDYkMsQ0FBRzs0QkFDQU4sU0FBUyxFQUFFUiw0RUFBb0I7NEJBQy9CYSxHQUFHLEVBQUVYLEtBQUssQ0FBQ1csR0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7V0ExQmEsR0FBSyxNQUFTLENBQVpULEVBQUUsRUFBQyxDQUFTOzs7Ozs7Ozs7O0FBbUN6RSxDQUFDO0dBbERRSCxRQUFRO0tBQVJBLFFBQVE7QUFtRGpCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lL0Nhcm91c2VsLnRzeD9lOGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vQ2Fyb3VzZWwubW9kdWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gQ2Fyb3VzZWwocHJvcHM6IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgc3JjOiBzdHJpbmc7IFxuICAgIHNpZGU6IGJvb2xlYW47XG4gICAgaWQ6IG51bWJlcjtcbn0gKTogUmVhY3RFbGVtZW50IHtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCB7IHNpZGUsIGlkIH0gPSBwcm9wcztcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9wcyk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmNhcm91c2VsQ29udGFpbmVyfSBrZXk9e2Ake2lkfS1jYXJvdXNlbGB9PlxuICAgICAgICAgICAgICAgIHshc2lkZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5jYXJvdXNlbEltYWdlQ29udGFpbmVyfSA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5zcmN9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3R5bGU9e3sgaGVpZ2h0OiAnNjAwcHgnIH19IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLmNhcm91c2VsSW1hZ2VzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb3BzLnNyY30gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWxUZXh0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyB3aGl0ZVNwYWNlOiAncHJlLWxpbmUnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3NpZGUgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWxJbWFnZUNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17cHJvcHMuc3JjfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGUuY2Fyb3VzZWxJbWFnZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvcHMuc3JjfSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IENhcm91c2VsOyJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsInN0eWxlIiwiQ2Fyb3VzZWwiLCJwcm9wcyIsInNpZGUiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjYXJvdXNlbENvbnRhaW5lciIsImNhcm91c2VsSW1hZ2VDb250YWluZXIiLCJhIiwiaHJlZiIsInNyYyIsImltZyIsImNhcm91c2VsSW1hZ2VzIiwiY2Fyb3VzZWxUZXh0Q29udGFpbmVyIiwiaDEiLCJ0aXRsZSIsInAiLCJ3aGl0ZVNwYWNlIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/Carousel.tsx\n");

/***/ })

});