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

/***/ "./components/Home/LandingPage.tsx":
/*!*****************************************!*\
  !*** ./components/Home/LandingPage.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ \"./components/Home/Carousel.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction LandingPage(props) {\n    var _this = this;\n    _s();\n    var carouselList = props.carouselList;\n    // const router = useRouter();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(carouselList);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '100%',\n            height: '100%',\n            display: 'flex',\n            alignItems: 'center',\n            justifyContent: 'center'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                padding: '60px'\n            },\n            children: carouselList.map(function(banner) {\n                // console.log('vvv');\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    title: banner.title,\n                    src: banner.src,\n                    description: banner.description\n                }, void 0, false, {\n                    fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/LandingPage.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 28\n                }, _this));\n            })\n        }, void 0, false, {\n            fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/LandingPage.tsx\",\n            lineNumber: 31,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/LandingPage.tsx\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n}\n_s(LandingPage, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvTGFuZGluZ1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3lEO0FBS3hCOztTQVF4QkUsV0FBVyxDQUFDQyxLQUF1QixFQUFnQixDQUFDOzs7SUFDekQsR0FBSyxDQUFHQyxZQUFZLEdBQUtELEtBQUssQ0FBdEJDLFlBQVk7SUFDcEIsRUFBOEI7SUFFOUJKLGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2JLLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixZQUFZO0lBQzVCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUNERyxDQUFHO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQ1RDLEtBQUssRUFBRSxDQUFNO1lBQ2JDLE1BQU0sRUFBRSxDQUFNO1lBQ2RDLE9BQU8sRUFBRSxDQUFNO1lBQ2ZDLFVBQVUsRUFBRSxDQUFRO1lBQ3BCQyxjQUFjLEVBQUUsQ0FBUTtRQUM1QixDQUFDOzhGQUNJTixDQUFHO1lBQUNDLEtBQUssRUFBRSxDQUFDO2dCQUFDTSxPQUFPLEVBQUUsQ0FBTTtZQUFDLENBQUM7c0JBQzFCVixZQUFZLENBQUNXLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDO2dCQUMzQixFQUFzQjtnQkFFdEIsTUFBTSw2RUFBRWYsaURBQVE7b0JBQUNnQixLQUFLLEVBQUVELE1BQU0sQ0FBQ0MsS0FBSztvQkFBRUMsR0FBRyxFQUFFRixNQUFNLENBQUNFLEdBQUc7b0JBQUVDLFdBQVcsRUFBRUgsTUFBTSxDQUFDRyxXQUFXOzs7Ozs7WUFDMUYsQ0FBQzs7Ozs7Ozs7Ozs7QUFNakIsQ0FBQztHQTNCUWpCLFdBQVc7S0FBWEEsV0FBVztBQTRCcEIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hvbWUvTGFuZGluZ1BhZ2UudHN4PzdlYTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgRnJhZ21lbnQsIFJlYWN0RWxlbWVudCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm9wcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZ2VuZXJhbEludGVyZmFjZXMnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnO1xuXG5cbmludGVyZmFjZSBMYW5kaW5nUGFnZVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2Fyb3VzZWxMaXN0OiBDYXJvdXNlbFByb3BzW107XG59XG5cbmZ1bmN0aW9uIExhbmRpbmdQYWdlKHByb3BzOiBMYW5kaW5nUGFnZVByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCB7IGNhcm91c2VsTGlzdCB9ID0gcHJvcHM7XG4gICAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coY2Fyb3VzZWxMaXN0KTtcbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgXG4gICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJywgXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIFxuICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsIFxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInXG4gICAgICAgIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAnNjBweCcgfX0+XG4gICAgICAgICAgICAgICAge2Nhcm91c2VsTGlzdC5tYXAoKGJhbm5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndnZ2Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPENhcm91c2VsIHRpdGxlPXtiYW5uZXIudGl0bGV9IHNyYz17YmFubmVyLnNyY30gZGVzY3JpcHRpb249e2Jhbm5lci5kZXNjcmlwdGlvbn0gIC8+XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiQ2Fyb3VzZWwiLCJMYW5kaW5nUGFnZSIsInByb3BzIiwiY2Fyb3VzZWxMaXN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1hcCIsImJhbm5lciIsInRpdGxlIiwic3JjIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Home/LandingPage.tsx\n");

/***/ })

});