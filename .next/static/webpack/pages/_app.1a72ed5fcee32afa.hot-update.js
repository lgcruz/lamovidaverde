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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(props) {\n    var scrollFunction = function scrollFunction() {\n        console.log(document.body);\n        if (document.documentElement.scrollTop > 60) {\n            document.getElementById('header-movida-verde').style.height = \"46px\";\n        } else {\n            document.getElementById('header-movida-verde').style.height = \"171px\";\n        }\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(router.pathname);\n        window.onscroll = function() {\n            scrollFunction();\n        };\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"La Movida Verde\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerStyle),\n                id: 'header-movida-verde',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoHeader),\n                        onClick: function() {\n                            router.push('/');\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/la_movida_verde_logo.jpg\",\n                            style: {\n                                height: '120px'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat(router.pathname === '/' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected), \" \").concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader)),\n                                onClick: function() {\n                                    router.push('/');\n                                },\n                                children: 'Inicio'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/about' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/about');\n                                },\n                                children: 'Nosotros'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/tutorials' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/tutorials');\n                                },\n                                children: 'Tutoriales'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: '100%',\n                    height: '100%',\n                    justifyContent: 'center'\n                },\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 70,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    background: '#352109',\n                    color: 'white'\n                },\n                children: 'this is a footer'\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this));\n}\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDO29CQUFDaUMsT0FBTyxFQUFFLENBQU07b0JBQUVDLEtBQUssRUFBRSxDQUFNO29CQUFFdkIsTUFBTSxFQUFFLENBQU07b0JBQUV3QixjQUFjLEVBQUUsQ0FBUTtnQkFBQyxDQUFDOzBCQUNuRmpDLEtBQUssQ0FBQ2tDLFFBQVE7Ozs7Ozt3RkFFbEJoQixDQUFHO2dCQUFDcEIsS0FBSyxFQUFFLENBQUM7b0JBQUNrQyxLQUFLLEVBQUUsQ0FBTTtvQkFBRUcsVUFBVSxFQUFFLENBQVM7b0JBQUVDLEtBQUssRUFBRSxDQUFPO2dCQUFDLENBQUM7MEJBQUcsQ0FBa0I7Ozs7Ozs7Ozs7OztBQUdyRyxDQUFDO0dBakVRckMsTUFBTTs7UUFDSUYsa0RBQVM7OztLQURuQkUsTUFBTTtBQWtFZiwrREFBZUEsTUFBTSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTGF5b3V0LnRzeD8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEZyYWdtZW50LCBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZSBmcm9tICcuL0xheW91dC5tb2R1bGUuY3NzJztcblxuaW50ZXJmYWNlIExheW91dFByb3BzIHtcbiAgICBjaGlsZHJlbjogUmVhY3RFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBMYXlvdXQocHJvcHM6IExheW91dFByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGZ1bmN0aW9uIHNjcm9sbEZ1bmN0aW9uKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhkb2N1bWVudC5ib2R5KTtcbiAgICAgICAgXG4gICAgICAgIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID4gNjApIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbW92aWRhLXZlcmRlJykuc3R5bGUuaGVpZ2h0ID0gXCI0NnB4XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyLW1vdmlkYS12ZXJkZScpLnN0eWxlLmhlaWdodCA9IFwiMTcxcHhcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucGF0aG5hbWUpO1xuICAgICAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbigpIHtzY3JvbGxGdW5jdGlvbigpfTtcblxuICAgIH0sIFtdKVxuICAgIFxuICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYSBNb3ZpZGEgVmVyZGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5oZWFkZXJTdHlsZX0gaWQ9eydoZWFkZXItbW92aWRhLXZlcmRlJ30gPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZS5sb2dvSGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgICAgICB9fSBcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvbGFfbW92aWRhX3ZlcmRlX2xvZ28uanBnJyBzdHlsZT17eyBoZWlnaHQ6ICcxMjBweCcgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUub3B0aW9uQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnBhdGhuYW1lID09PSAnLycgJiYgc3R5bGUuc2VsZWN0ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5idXR0b25IZWFkZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1gfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsnSW5pY2lvJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25IZWFkZXJ9ICR7cm91dGVyLnBhdGhuYW1lID09PSAnL2Fib3V0JyAmJiBzdHlsZS5zZWxlY3RlZH1gfSBvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL2Fib3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH19ID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsnTm9zb3Ryb3MnfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Ake3N0eWxlLmJ1dHRvbkhlYWRlcn0gJHtyb3V0ZXIucGF0aG5hbWUgPT09ICcvdHV0b3JpYWxzJyAmJiBzdHlsZS5zZWxlY3RlZH1gfSBvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaCgnL3R1dG9yaWFscycpO1xuICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7J1R1dG9yaWFsZXMnfVxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0gPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBiYWNrZ3JvdW5kOiAnIzM1MjEwOScsIGNvbG9yOiAnd2hpdGUnIH19PnsndGhpcyBpcyBhIGZvb3Rlcid9PC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXSwibmFtZXMiOlsiSGVhZCIsIkZyYWdtZW50IiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwic3R5bGUiLCJMYXlvdXQiLCJwcm9wcyIsInNjcm9sbEZ1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50IiwiYm9keSIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbFRvcCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwicm91dGVyIiwicGF0aG5hbWUiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwiZGl2IiwiY2xhc3NOYW1lIiwiaGVhZGVyU3R5bGUiLCJpZCIsImJ1dHRvbiIsImxvZ29IZWFkZXIiLCJvbkNsaWNrIiwicHVzaCIsImltZyIsInNyYyIsIm9wdGlvbkNvbnRhaW5lciIsInNlbGVjdGVkIiwiYnV0dG9uSGVhZGVyIiwiZGlzcGxheSIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJjaGlsZHJlbiIsImJhY2tncm91bmQiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

});