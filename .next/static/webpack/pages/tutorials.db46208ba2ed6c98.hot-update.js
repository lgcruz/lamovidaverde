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

/***/ "./pages/tutorials/index.tsx":
/*!***********************************!*\
  !*** ./pages/tutorials/index.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Common_ProfileCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Common/ProfileCard */ \"./components/Common/ProfileCard.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nvar data = [\n    {\n        name: \"Luis Cruz\",\n        photo: '/luis-profile.png'\n    }\n];\nfunction TutorialPage() {\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: 'Tutoriales de La Movida Verde'\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/tutorials/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"hola\"\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/tutorials/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, this),\n            data.map(function(profile) {\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Common_ProfileCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    name: profile.name,\n                    photo: profile.photo\n                }, void 0, false, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/tutorials/index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 11\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/tutorials/index.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this));\n}\n_s(TutorialPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = TutorialPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TutorialPage);\nvar _c;\n$RefreshReg$(_c, \"TutorialPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90dXRvcmlhbHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ3NCOztBQUU3RCxHQUFLLENBQUNFLElBQUksR0FBRyxDQUFDO0lBQ1osQ0FBQztRQUNDQyxJQUFJLEVBQUUsQ0FBVztRQUNqQkMsS0FBSyxFQUFFLENBQW1CO0lBQzVCLENBQUM7QUFDSCxDQUFDO1NBRVFDLFlBQVksR0FBRyxDQUFDOzs7SUFDdkIsR0FBSyxDQUFDQyxNQUFNLEdBQUdOLHNEQUFTO0lBQ3hCLE1BQU0sNkVBQ0hPLENBQUc7O3dGQUNDQyxDQUFFOzBCQUNFLENBQStCOzs7Ozs7d0ZBRW5DQyxDQUFDOzBCQUFDLENBQUk7Ozs7OztZQUNOUCxJQUFJLENBQUNRLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE9BQU8sRUFBSyxDQUFDOzRGQUNyQlYsc0VBQVc7b0JBQUNFLElBQUksRUFBRVEsT0FBTyxDQUFDUixJQUFJO29CQUFFQyxLQUFLLEVBQUVPLE9BQU8sQ0FBQ1AsS0FBSzs7Ozs7O1lBQ3ZELENBQUM7Ozs7Ozs7QUFLVCxDQUFDO0dBZlFDLFlBQVk7O1FBQ0pMLGtEQUFTOzs7S0FEakJLLFlBQVk7QUFpQnJCLCtEQUFlQSxZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R1dG9yaWFscy9pbmRleC50c3g/ZTMzNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBQcm9maWxlQ2FyZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db21tb24vUHJvZmlsZUNhcmRcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIG5hbWU6IFwiTHVpcyBDcnV6XCIsXG4gICAgcGhvdG86ICcvbHVpcy1wcm9maWxlLnBuZydcbiAgfVxuXTtcblxuZnVuY3Rpb24gVHV0b3JpYWxQYWdlKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICAgIHsnVHV0b3JpYWxlcyBkZSBMYSBNb3ZpZGEgVmVyZGUnfVxuICAgICAgICA8L2gzPlxuICAgICAgICA8cD5ob2xhPC9wPlxuICAgICAgICB7ZGF0YS5tYXAoKHByb2ZpbGUpID0+IHtcbiAgICAgICAgICA8UHJvZmlsZUNhcmQgbmFtZT17cHJvZmlsZS5uYW1lfSBwaG90bz17cHJvZmlsZS5waG90b30gIC8+XG4gICAgICAgIH0pfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFR1dG9yaWFsUGFnZSJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJQcm9maWxlQ2FyZCIsImRhdGEiLCJuYW1lIiwicGhvdG8iLCJUdXRvcmlhbFBhZ2UiLCJyb3V0ZXIiLCJkaXYiLCJoMyIsInAiLCJtYXAiLCJwcm9maWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tutorials/index.tsx\n");

/***/ })

});