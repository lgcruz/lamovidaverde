"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tutorials",{

/***/ "./components/Common/ProfileCard.tsx":
/*!*******************************************!*\
  !*** ./components/Common/ProfileCard.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProfileCard.module.css */ \"./components/Common/ProfileCard.module.css\");\n/* harmony import */ var _ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ProfileCard(props) {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var name = props.name, photo = props.photo, route = props.route;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        console.log(props);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().profileFrame),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().innerFrame),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: photo,\n                        className: (_ProfileCard_module_css__WEBPACK_IMPORTED_MODULE_3___default().profilePhoto)\n                    }, void 0, false, {\n                        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: name\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    router.push(\"/tutorials/\".concat(route));\n                },\n                children: \">\"\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Common/ProfileCard.tsx\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this));\n}\n_s(ProfileCard, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = ProfileCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfileCard);\nvar _c;\n$RefreshReg$(_c, \"ProfileCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1vbi9Qcm9maWxlQ2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBdUM7QUFDUTtBQUNIOztTQUduQ0csV0FBVyxDQUFDQyxLQU1wQixFQUFpQixDQUFDOztJQUNmLEdBQUssQ0FBQ0MsTUFBTSxHQUFHTCxzREFBUztJQUN4QixHQUFLLENBQUdNLElBQUksR0FBbUJGLEtBQUssQ0FBNUJFLElBQUksRUFBRUMsS0FBSyxHQUFZSCxLQUFLLENBQXRCRyxLQUFLLEVBQUVDLEtBQUssR0FBS0osS0FBSyxDQUFmSSxLQUFLO0lBQzFCUCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiUSxPQUFPLENBQUNDLEdBQUcsQ0FBQ04sS0FBSztJQUNyQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDRE8sQ0FBRztRQUFDQyxTQUFTLEVBQUVWLGlGQUFzQjs7d0ZBQ2pDUyxDQUFHO2dCQUFDQyxTQUFTLEVBQUVWLDZFQUFrQjtzR0FDN0JTLENBQUc7b0JBQUNDLFNBQVMsRUFBRVYsMkVBQWdCOzBHQUMvQmMsQ0FBRzt3QkFBQ0MsR0FBRyxFQUFFVixLQUFLO3dCQUFFSyxTQUFTLEVBQUVWLDZFQUFrQjs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHakRpQixDQUFDOzBCQUFFYixJQUFJOzs7Ozs7d0ZBQ1BjLENBQU07Z0JBQ0hDLE9BQU8sRUFBRSxRQUFRLEdBQUksQ0FBQztvQkFDbEJoQixNQUFNLENBQUNpQixJQUFJLENBQUUsQ0FBVyxhQUFRLE9BQU5kLEtBQUs7Z0JBQ25DLENBQUM7MEJBRUEsQ0FBRzs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7R0E5QlFMLFdBQVc7O1FBT0RILGtEQUFTOzs7S0FQbkJHLFdBQVc7QUErQnBCLCtEQUFlQSxXQUFXLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tb24vUHJvZmlsZUNhcmQudHN4PzY3ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBSZWFjdEVsZW1lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vUHJvZmlsZUNhcmQubW9kdWxlLmNzcyc7XG5cblxuZnVuY3Rpb24gUHJvZmlsZUNhcmQocHJvcHM6IHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgcGhvdG86IHN0cmluZztcbiAgICByb3V0ZTogc3RyaW5nOyBcbiAgICAvLyBzaWRlOiBib29sZWFuO1xuICAgIC8vIGlkOiBudW1iZXI7XG59ICk6IFJlYWN0RWxlbWVudCB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBuYW1lLCBwaG90bywgcm91dGUgfSA9IHByb3BzO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucHJvZmlsZUNvbnRhaW5lcn0gPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnByb2ZpbGVGcmFtZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlubmVyRnJhbWV9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtwaG90b30gY2xhc3NOYW1lPXtzdHlsZS5wcm9maWxlUGhvdG99IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3R1dG9yaWFscy8ke3JvdXRlfWApO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIj5cIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUNhcmQ7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInN0eWxlIiwiUHJvZmlsZUNhcmQiLCJwcm9wcyIsInJvdXRlciIsIm5hbWUiLCJwaG90byIsInJvdXRlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInByb2ZpbGVDb250YWluZXIiLCJwcm9maWxlRnJhbWUiLCJpbm5lckZyYW1lIiwiaW1nIiwic3JjIiwicHJvZmlsZVBob3RvIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Common/ProfileCard.tsx\n");

/***/ })

});