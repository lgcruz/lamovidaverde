"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(router.pathname);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"La Movida Verde\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerStyle),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoHeader),\n                        onClick: function() {\n                            router.push('/');\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/la_movida_verde_logo.jpg\",\n                            style: {\n                                height: '120px'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: 'flex',\n                            flexDirection: 'row',\n                            height: '70px',\n                            marginLeft: '40px'\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat(router.pathname === '/' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected), \" \").concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader)),\n                                onClick: function() {\n                                    router.push('/');\n                                },\n                                children: 'Inicio'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/about' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/about');\n                                },\n                                children: 'Nosotros'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/tutorials' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/tutorials');\n                                },\n                                children: 'Tutoriales'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: '100%',\n                    height: '100%'\n                },\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    background: '#352109',\n                    color: 'white'\n                },\n                children: 'this is a footer'\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, this));\n}\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0xheW91dC50c3g/M2M4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBGcmFnbWVudCwgUmVhY3RFbGVtZW50LCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgc3R5bGUgZnJvbSAnLi9MYXlvdXQubW9kdWxlLmNzcyc7XG5cbmludGVyZmFjZSBMYXlvdXRQcm9wcyB7XG4gICAgY2hpbGRyZW46IFJlYWN0RWxlbWVudDtcbn1cblxuZnVuY3Rpb24gTGF5b3V0KHByb3BzOiBMYXlvdXRQcm9wcyk6IFJlYWN0RWxlbWVudCB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocm91dGVyLnBhdGhuYW1lKTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgTW92aWRhIFZlcmRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyU3R5bGV9ID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUubG9nb0hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2xhX21vdmlkYV92ZXJkZV9sb2dvLmpwZycgc3R5bGU9e3sgaGVpZ2h0OiAnMTIwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnLCBoZWlnaHQ6ICc3MHB4JywgbWFyZ2luTGVmdDogJzQwcHgnIH19PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucGF0aG5hbWUgPT09ICcvJyAmJiBzdHlsZS5zZWxlY3RlZFxuICAgICAgICAgICAgICAgICAgICAgICAgfSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmJ1dHRvbkhlYWRlclxuICAgICAgICAgICAgICAgICAgICAgICAgfWB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgeydJbmljaW8nfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkhlYWRlcn0gJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvYWJvdXQnICYmIHN0eWxlLnNlbGVjdGVkfWB9IG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvYWJvdXQnKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgeydOb3NvdHJvcyd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSGVhZGVyfSAke3JvdXRlci5wYXRobmFtZSA9PT0gJy90dXRvcmlhbHMnICYmIHN0eWxlLnNlbGVjdGVkfWB9IG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKCcvdHV0b3JpYWxzJyk7XG4gICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsnVHV0b3JpYWxlcyd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4Jywgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfX0gPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnIzM1MjEwOScsIGNvbG9yOiAnd2hpdGUnIH19PnsndGhpcyBpcyBhIGZvb3Rlcid9PC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiSGVhZCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3R5bGUiLCJMYXlvdXQiLCJwcm9wcyIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJwYXRobmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJidXR0b24iLCJsb2dvSGVhZGVyIiwib25DbGljayIsInB1c2giLCJpbWciLCJzcmMiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsIm1hcmdpbkxlZnQiLCJzZWxlY3RlZCIsImJ1dHRvbkhlYWRlciIsIndpZHRoIiwiY2hpbGRyZW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

});