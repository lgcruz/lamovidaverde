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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Home_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/LandingPage */ \"./components/Home/LandingPage.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n// pages/index.tsx\n\n\nvar Data = {\n    carouselList: [\n        {\n            title: 'Compostaje',\n            description: '📰Sab\\xedas que 1kg de residuos org\\xe1nicos se transforman en 30 gr de compost♻️?\\n\\n' + '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',\n            src: 'https://i.ibb.co/hyr3FZG/desechos-Organicos.jpg'\n        },\n        {\n            title: 'Compostera',\n            description: '📰Sab\\xedas que 1kg de residuos org\\xe1nicos se transforman en 30 gr de compost♻️?\\n\\n' + '🌱No se olviden que tenemos composteras para que hagas tu abono en casa ✨♻️',\n            src: 'https://i.ibb.co/XXKVSrf/vermicompostera.jpg'\n        },\n        {\n            title: 'Cascara de Huevo',\n            description: 'La c\\xe1scara de un huevo de gallina est\\xe1 formada por un 96% de carbonato de calcio:\\n' + ' una de las mejores fuentes de este ecol\\xf3gicas de este nutriente para las plantas en macetas,\\n' + ' jardines o huertas. Aunque no forman parte de nuestra dieta, las plantas extraen todos sus beneficios. A su vez, se les puede dar muchos otros usos.',\n            src: 'https://i.ibb.co/934dzG2/cascara-Huevo.jpg'\n        }\n    ]\n};\n{}function HomePage() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Home_LandingPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            name: \"La Movida Verde\",\n            carouselList: Data.carouselList\n        }, void 0, false, {\n            fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/index.tsx\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/luis/Desktop/LaMovidaVerde/pages/index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this));\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxFQUFrQjtBQUVjO0FBQ3dCO0FBRXhELEdBQUssQ0FBQ0UsSUFBSSxHQUFHLENBQUM7SUFDWkMsWUFBWSxFQUFFLENBQUM7UUFDYixDQUFDO1lBQ0NDLEtBQUssRUFBRSxDQUFZO1lBQ25CQyxXQUFXLEVBQUUsQ0FBaUYsZ0dBQ25GLENBQW1FO1lBQ3JFQyxHQUFOLEVBQUUsQ0FBaUQ7UUFDeEQsQ0FBQztRQUNELENBQUM7WUFDQ0YsS0FBSyxFQUFFLENBQVk7WUFDbkJDLFdBQVcsRUFBRSxDQUFpRixnR0FDbkYsQ0FBbUU7WUFDckVDLEdBQU4sRUFBRSxDQUE4QztRQUNyRCxDQUFDO1FBQ0QsQ0FBQztZQUNDRixLQUFLLEVBQUUsQ0FBa0I7WUFDekJDLFdBQVcsRUFBRSxDQUFxRiw2RkFDOUYsQ0FBK0Ysc0dBQ2pHLENBQXVKO1lBQ3pKQyxHQUFHLEVBQUUsQ0FBNEM7UUFDbkQsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBRUQsQ0FBQyxDQVU0RyxTQUVwR0MsUUFBUSxHQUFHLENBQUM7SUFDbkIsTUFBTSw2RUFDSFAsMkNBQVE7OEZBQ05DLG9FQUFXO1lBQUNPLElBQUksRUFBQyxDQUFpQjtZQUFDTCxZQUFZLEVBQUVELElBQUksQ0FBQ0MsWUFBWTs7Ozs7Ozs7Ozs7QUFHekUsQ0FBQztLQU5RSSxRQUFRO0FBU2pCLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXgudHN4XG5cbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExhbmRpbmdQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvSG9tZS9MYW5kaW5nUGFnZSc7XG5cbmNvbnN0IERhdGEgPSB7XG4gIGNhcm91c2VsTGlzdDogW1xuICAgIHtcbiAgICAgIHRpdGxlOiAnQ29tcG9zdGFqZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ/Cfk7BTYWLDrWFzIHF1ZSAxa2cgZGUgcmVzaWR1b3Mgb3Jnw6FuaWNvcyBzZSB0cmFuc2Zvcm1hbiBlbiAzMCBnciBkZSBjb21wb3N04pm777iPP1xcblxcbicrIFxuICAgICAgICAn8J+MsU5vIHNlIG9sdmlkZW4gcXVlIHRlbmVtb3MgY29tcG9zdGVyYXMgcGFyYSBxdWUgaGFnYXMgdHUgYWJvbm8gZW4gY2FzYSDinKjimbvvuI8nLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9pLmliYi5jby9oeXIzRlpHL2Rlc2VjaG9zLU9yZ2FuaWNvcy5qcGcnLFxuICAgIH0sXG4gICAge1xuICAgICAgdGl0bGU6ICdDb21wb3N0ZXJhJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAn8J+TsFNhYsOtYXMgcXVlIDFrZyBkZSByZXNpZHVvcyBvcmfDoW5pY29zIHNlIHRyYW5zZm9ybWFuIGVuIDMwIGdyIGRlIGNvbXBvc3TimbvvuI8/XFxuXFxuJysgXG4gICAgICAgICfwn4yxTm8gc2Ugb2x2aWRlbiBxdWUgdGVuZW1vcyBjb21wb3N0ZXJhcyBwYXJhIHF1ZSBoYWdhcyB0dSBhYm9ubyBlbiBjYXNhIOKcqOKZu++4jycsXG4gICAgICBzcmM6ICdodHRwczovL2kuaWJiLmNvL1hYS1ZTcmYvdmVybWljb21wb3N0ZXJhLmpwZydcbiAgICB9LFxuICAgIHtcbiAgICAgIHRpdGxlOiAnQ2FzY2FyYSBkZSBIdWV2bycsXG4gICAgICBkZXNjcmlwdGlvbjogJ0xhIGPDoXNjYXJhIGRlIHVuIGh1ZXZvIGRlIGdhbGxpbmEgZXN0w6EgZm9ybWFkYSBwb3IgdW4gOTYlIGRlIGNhcmJvbmF0byBkZSBjYWxjaW86XFxuJytcbiAgICAgICAgJyB1bmEgZGUgbGFzIG1lam9yZXMgZnVlbnRlcyBkZSBlc3RlIGVjb2zDs2dpY2FzIGRlIGVzdGUgbnV0cmllbnRlIHBhcmEgbGFzIHBsYW50YXMgZW4gbWFjZXRhcyxcXG4nK1xuICAgICAgICAnIGphcmRpbmVzIG8gaHVlcnRhcy4gQXVucXVlIG5vIGZvcm1hbiBwYXJ0ZSBkZSBudWVzdHJhIGRpZXRhLCBsYXMgcGxhbnRhcyBleHRyYWVuIHRvZG9zIHN1cyBiZW5lZmljaW9zLiBBIHN1IHZleiwgc2UgbGVzIHB1ZWRlIGRhciBtdWNob3Mgb3Ryb3MgdXNvcy4nLFxuICAgICAgc3JjOiAnaHR0cHM6Ly9pLmliYi5jby85MzRkekcyL2Nhc2NhcmEtSHVldm8uanBnJ1xuICAgIH1cbiAgXVxufVxuXG57LyogPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvL01jaHoxbjYvY2FzY2FyYS1HdWluZW8uanBnXCIgYWx0PVwiY2FzY2FyYS1HdWluZW9cIiBib3JkZXI9XCIwXCI+XG48aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vRzNkUFJSZy9jYXNjYXJhLU5hcmFuamEuanBnXCIgYWx0PVwiY2FzY2FyYS1OYXJhbmphXCIgYm9yZGVyPVwiMFwiPlxuPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvL3BiaDRMajIvcGFuLU1vaG9zby5qcGdcIiBhbHQ9XCJwYW4tTW9ob3NvXCIgYm9yZGVyPVwiMFwiPlxuPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvLzhOc1cyMHAvY2FzY2FyYS1QaW5hLmpwZ1wiIGFsdD1cImNhc2NhcmEtUGluYVwiIGJvcmRlcj1cIjBcIj5cbjxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9EWWcxczh4L3BhcGVsLUJhc3VyYS5qcGdcIiBhbHQ9XCJwYXBlbC1CYXN1cmFcIiBib3JkZXI9XCIwXCI+XG48aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vMjVUNzVHai9zYWNvVGUuanBnXCIgYWx0PVwic2Fjb1RlXCIgYm9yZGVyPVwiMFwiPlxuPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvL3Q0cjM5OFIvY2FzY2FyYS1NYW56YW5hLmpwZ1wiIGFsdD1cImNhc2NhcmEtTWFuemFuYVwiIGJvcmRlcj1cIjBcIj5cbjxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby85MzRkekcyL2Nhc2NhcmEtSHVldm8uanBnXCIgYWx0PVwiY2FzY2FyYS1IdWV2b1wiIGJvcmRlcj1cIjBcIj5cbjxpbWcgc3JjPVwiaHR0cHM6Ly9pLmliYi5jby9oeXIzRlpHL2Rlc2VjaG9zLU9yZ2FuaWNvcy5qcGdcIiBhbHQ9XCJkZXNlY2hvcy1Pcmdhbmljb3NcIiBib3JkZXI9XCIwXCI+XG48aW1nIHNyYz1cImh0dHBzOi8vaS5pYmIuY28vWFhLVlNyZi92ZXJtaWNvbXBvc3RlcmEuanBnXCIgYWx0PVwidmVybWljb21wb3N0ZXJhXCIgYm9yZGVyPVwiMFwiPlxuPGltZyBzcmM9XCJodHRwczovL2kuaWJiLmNvL1BtRzB3ZFYvbGEtbW92aWRhLXZlcmRlLWxvZ28uanBnXCIgYWx0PVwibGEtbW92aWRhLXZlcmRlLWxvZ29cIiBib3JkZXI9XCIwXCI+PC9pbWc+ICovfVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8TGFuZGluZ1BhZ2UgbmFtZT0nTGEgTW92aWRhIFZlcmRlJyBjYXJvdXNlbExpc3Q9e0RhdGEuY2Fyb3VzZWxMaXN0fSAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJMYW5kaW5nUGFnZSIsIkRhdGEiLCJjYXJvdXNlbExpc3QiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic3JjIiwiSG9tZVBhZ2UiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});