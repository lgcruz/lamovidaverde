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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout.module.css */ \"./components/Layout.module.css\");\n/* harmony import */ var _Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Layout_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Layout(props) {\n    var scrollFunction = function scrollFunction() {\n        if (document.body.scrollTop > 76 || document.documentElement.scrollTop > 76) {\n            document.getElementById('header-movida-verde').style.height = \"46px\";\n        } else {\n            document.getElementById('header-movida-verde').style.height = \"171px\";\n        }\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(router.pathname);\n        window.onscroll = scrollFunction();\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"La Movida Verde\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1.0, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().headerStyle),\n                id: 'header-movida-verde',\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().logoHeader),\n                        onClick: function() {\n                            router.push('/');\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/la_movida_verde_logo.jpg\",\n                            style: {\n                                height: '120px'\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionContainer),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat(router.pathname === '/' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected), \" \").concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader)),\n                                onClick: function() {\n                                    router.push('/');\n                                },\n                                children: 'Inicio'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/about' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/about');\n                                },\n                                children: 'Nosotros'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"\".concat((_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().buttonHeader), \" \").concat(router.pathname === '/tutorials' && (_Layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().selected)),\n                                onClick: function() {\n                                    router.push('/tutorials');\n                                },\n                                children: 'Tutoriales'\n                            }, void 0, false, {\n                                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                        lineNumber: 43,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: 'flex',\n                    width: '100%',\n                    height: '100%',\n                    justifyContent: 'center'\n                },\n                children: props.children\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 68,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    width: '100%',\n                    background: '#352109',\n                    color: 'white'\n                },\n                children: 'this is a footer'\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n                lineNumber: 71,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Layout.tsx\",\n        lineNumber: 29,\n        columnNumber: 9\n    }, this));\n}\n_s(Layout, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Layout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);\nvar _c;\n$RefreshReg$(_c, \"Layout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsQ0FBTTtvQkFBRUMsS0FBSyxFQUFFLENBQU07b0JBQUV6QixNQUFNLEVBQUUsQ0FBTTtvQkFBRTBCLGNBQWMsRUFBRSxDQUFRO2dCQUFDLENBQUM7MEJBQ25GakMsS0FBSyxDQUFDa0MsUUFBUTs7Ozs7O3dGQUVsQmhCLENBQUc7Z0JBQUNwQixLQUFLLEVBQUUsQ0FBQztvQkFBQ2tDLEtBQUssRUFBRSxDQUFNO29CQUFFRyxVQUFVLEVBQUUsQ0FBUztvQkFBRUMsS0FBSyxFQUFFLENBQU87Z0JBQUMsQ0FBQzswQkFBRyxDQUFrQjs7Ozs7Ozs7Ozs7O0FBR3JHLENBQUM7R0EvRFFyQyxNQUFNOztRQUNJRixrREFBUzs7O0tBRG5CRSxNQUFNO0FBZ0VmLCtEQUFlQSxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYXlvdXQudHN4PzNjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuXG5pbnRlcmZhY2UgTGF5b3V0UHJvcHMge1xuICAgIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIExheW91dChwcm9wczogTGF5b3V0UHJvcHMpOiBSZWFjdEVsZW1lbnQge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgZnVuY3Rpb24gc2Nyb2xsRnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA+IDc2IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA3Nikge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlci1tb3ZpZGEtdmVyZGUnKS5zdHlsZS5oZWlnaHQgPSBcIjQ2cHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXItbW92aWRhLXZlcmRlJykuc3R5bGUuaGVpZ2h0ID0gXCIxNzFweFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJvdXRlci5wYXRobmFtZSk7XG4gICAgICAgIHdpbmRvdy5vbnNjcm9sbCA9IHNjcm9sbEZ1bmN0aW9uKCk7XG5cbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TGEgTW92aWRhIFZlcmRlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuaGVhZGVyU3R5bGV9IGlkPXsnaGVhZGVyLW1vdmlkYS12ZXJkZSd9ID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUubG9nb0hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL2xhX21vdmlkYV92ZXJkZV9sb2dvLmpwZycgc3R5bGU9e3sgaGVpZ2h0OiAnMTIwcHgnIH19IC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLm9wdGlvbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wYXRobmFtZSA9PT0gJy8nICYmIHN0eWxlLnNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICB9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuYnV0dG9uSGVhZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH0gXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7J0luaWNpbyd9XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGUuYnV0dG9uSGVhZGVyfSAke3JvdXRlci5wYXRobmFtZSA9PT0gJy9hYm91dCcgJiYgc3R5bGUuc2VsZWN0ZWR9YH0gb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9hYm91dCcpO1xuICAgICAgICAgICAgICAgICAgICB9fSA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7J05vc290cm9zJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZS5idXR0b25IZWFkZXJ9ICR7cm91dGVyLnBhdGhuYW1lID09PSAnL3R1dG9yaWFscycgJiYgc3R5bGUuc2VsZWN0ZWR9YH0gb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy90dXRvcmlhbHMnKTtcbiAgICAgICAgICAgICAgICAgICAgfX0gPlxuICAgICAgICAgICAgICAgICAgICAgICAgeydUdXRvcmlhbGVzJ31cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19ID5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgYmFja2dyb3VuZDogJyMzNTIxMDknLCBjb2xvcjogJ3doaXRlJyB9fT57J3RoaXMgaXMgYSBmb290ZXInfTwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il0sIm5hbWVzIjpbIkhlYWQiLCJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlIiwiTGF5b3V0IiwicHJvcHMiLCJzY3JvbGxGdW5jdGlvbiIsImRvY3VtZW50IiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiaGVpZ2h0Iiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInBhdGhuYW1lIiwid2luZG93Iiwib25zY3JvbGwiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlclN0eWxlIiwiaWQiLCJidXR0b24iLCJsb2dvSGVhZGVyIiwib25DbGljayIsInB1c2giLCJpbWciLCJzcmMiLCJvcHRpb25Db250YWluZXIiLCJzZWxlY3RlZCIsImJ1dHRvbkhlYWRlciIsImRpc3BsYXkiLCJ3aWR0aCIsImp1c3RpZnlDb250ZW50IiwiY2hpbGRyZW4iLCJiYWNrZ3JvdW5kIiwiY29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Layout.tsx\n");

/***/ })

});