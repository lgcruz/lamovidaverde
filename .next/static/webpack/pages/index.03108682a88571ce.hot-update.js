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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Carousel */ \"./components/Home/Carousel.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction LandingPage(props) {\n    var _this = this;\n    _s();\n    var carouselList = props.carouselList;\n    var refCarousel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    // const router = useRouter();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        console.log(refCarousel);\n        setTimeout(function() {\n            refCarousel.current.scrollLeft = refCarousel.current.scrollLeft + refCarousel.current.clientWidth;\n        }, 5000);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: '-webkit-fill-available',\n            display: '-webkit-inline-box',\n            alignItems: 'center',\n            justifyContent: 'center',\n            // position: 'relative',\n            overflow: 'hidden',\n            // flexDirection: 'row',\n            transition: '0.2s'\n        },\n        ref: refCarousel,\n        children: carouselList.map(function(banner, index) {\n            // console.log('vvv');\n            return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Carousel__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                side: index % 2 === 0,\n                title: banner.title,\n                src: banner.src,\n                description: banner.description\n            }, void 0, false, {\n                fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/LandingPage.tsx\",\n                lineNumber: 44,\n                columnNumber: 24\n            }, _this));\n        })\n    }, void 0, false, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/components/Home/LandingPage.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this));\n}\n_s(LandingPage, \"ytM8mRN4g4KPxpSwwHoKpLg9iSI=\");\n_c = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\nvar _c;\n$RefreshReg$(_c, \"LandingPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvTGFuZGluZ1BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3NFO0FBS3JDOztTQVF4QkcsV0FBVyxDQUFDQyxLQUF1QixFQUFnQixDQUFDOzs7SUFDekQsR0FBSyxDQUFHQyxZQUFZLEdBQUtELEtBQUssQ0FBdEJDLFlBQVk7SUFDcEIsR0FBSyxDQUFDQyxXQUFXLEdBQUdMLDZDQUFNO0lBQzFCLEVBQThCO0lBRTlCRCxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztRQUN2QkcsVUFBVSxDQUFDLFFBQ25CLEdBRHlCLENBQUM7WUFDYkgsV0FBVyxDQUFDSSxPQUFPLENBQWlCQyxVQUFVLEdBQUlMLFdBQVcsQ0FBQ0ksT0FBTyxDQUFpQkMsVUFBVSxHQUFJTCxXQUFXLENBQUNJLE9BQU8sQ0FBaUJFLFdBQVc7UUFDeEosQ0FBQyxFQUFFLElBQUk7SUFDWCxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRUwsTUFBTSw2RUFDREMsQ0FBRztRQUNBQyxLQUFLLEVBQUUsQ0FBQztZQUNKQyxLQUFLLEVBQUUsQ0FBd0I7WUFDL0JDLE9BQU8sRUFBRSxDQUFvQjtZQUM3QkMsVUFBVSxFQUFFLENBQVE7WUFDcEJDLGNBQWMsRUFBRSxDQUFRO1lBQ3hCLEVBQXdCO1lBQ3hCQyxRQUFRLEVBQUUsQ0FBUTtZQUNsQixFQUF3QjtZQUN4QkMsVUFBVSxFQUFFLENBQU07UUFDdEIsQ0FBQztRQUNEQyxHQUFHLEVBQUVmLFdBQVc7a0JBRWZELFlBQVksQ0FBQ2lCLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBRUMsS0FBSyxFQUFLLENBQUM7WUFDbEMsRUFBc0I7WUFFdEIsTUFBTSw2RUFBRXRCLGlEQUFRO2dCQUFDdUIsSUFBSSxFQUFFRCxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQUVFLEtBQUssRUFBRUgsTUFBTSxDQUFDRyxLQUFLO2dCQUFFQyxHQUFHLEVBQUVKLE1BQU0sQ0FBQ0ksR0FBRztnQkFBRUMsV0FBVyxFQUFFTCxNQUFNLENBQUNLLFdBQVc7Ozs7OztRQUNqSCxDQUFDOzs7Ozs7QUFHYixDQUFDO0dBakNRekIsV0FBVztLQUFYQSxXQUFXO0FBa0NwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSG9tZS9MYW5kaW5nUGFnZS50c3g/N2VhMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyBGcmFnbWVudCwgUmVhY3RFbGVtZW50LCBSZWYsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHN0eWxlIGZyb20gJy4vTGF5b3V0Lm1vZHVsZS5jc3MnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxQcm9wcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZ2VuZXJhbEludGVyZmFjZXMnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gJy4vQ2Fyb3VzZWwnO1xuXG5cbmludGVyZmFjZSBMYW5kaW5nUGFnZVByb3BzIHtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgY2Fyb3VzZWxMaXN0OiBDYXJvdXNlbFByb3BzW107XG59XG5cbmZ1bmN0aW9uIExhbmRpbmdQYWdlKHByb3BzOiBMYW5kaW5nUGFnZVByb3BzKTogUmVhY3RFbGVtZW50IHtcbiAgICBjb25zdCB7IGNhcm91c2VsTGlzdCB9ID0gcHJvcHM7XG4gICAgY29uc3QgcmVmQ2Fyb3VzZWwgPSB1c2VSZWYoKTtcbiAgICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZWZDYXJvdXNlbCk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgKHJlZkNhcm91c2VsLmN1cnJlbnQgYXMgSFRNTEVsZW1lbnQpLnNjcm9sbExlZnQgPSAocmVmQ2Fyb3VzZWwuY3VycmVudCBhcyBIVE1MRWxlbWVudCkuc2Nyb2xsTGVmdCArIChyZWZDYXJvdXNlbC5jdXJyZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aDtcbiAgICAgICAgfSwgNTAwMCk7XG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBcbiAgICAgICAgICAgIHN0eWxlPXt7IFxuICAgICAgICAgICAgICAgIHdpZHRoOiAnLXdlYmtpdC1maWxsLWF2YWlsYWJsZScsIFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICctd2Via2l0LWlubGluZS1ib3gnLCBcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJywgXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIC8vIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJywgXG4gICAgICAgICAgICAgICAgLy8gZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJzAuMnMnXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgcmVmPXtyZWZDYXJvdXNlbH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2Nhcm91c2VsTGlzdC5tYXAoKGJhbm5lciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndnZ2Jyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJvdXNlbCBzaWRlPXtpbmRleCAlIDIgPT09IDB9IHRpdGxlPXtiYW5uZXIudGl0bGV9IHNyYz17YmFubmVyLnNyY30gZGVzY3JpcHRpb249e2Jhbm5lci5kZXNjcmlwdGlvbn0gIC8+XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJDYXJvdXNlbCIsIkxhbmRpbmdQYWdlIiwicHJvcHMiLCJjYXJvdXNlbExpc3QiLCJyZWZDYXJvdXNlbCIsImNvbnNvbGUiLCJsb2ciLCJzZXRUaW1lb3V0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJjbGllbnRXaWR0aCIsImRpdiIsInN0eWxlIiwid2lkdGgiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3ZlcmZsb3ciLCJ0cmFuc2l0aW9uIiwicmVmIiwibWFwIiwiYmFubmVyIiwiaW5kZXgiLCJzaWRlIiwidGl0bGUiLCJzcmMiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/LandingPage.tsx\n");

/***/ })

});