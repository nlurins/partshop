"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/shop",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShopSideBar */ \"./components/ShopSideBar.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\nvar Shop = function() {\n    var products = [\n        {\n            id: 0,\n            title: \"Michelin tires\",\n            categoryInfo: {\n                category: \"Tires\",\n                id: 0\n            },\n            price: 299.9,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 1,\n            title: \"Some oil\",\n            categoryInfo: {\n                category: \"Oils\",\n                id: 1\n            },\n            price: 39.9,\n            inStock: true,\n            picture: \"\"\n        }\n    ];\n    var categories = [];\n    products.map(function(product) {\n        if (!categories.includes(product.categoryInfo.id)) {}\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#070707f3] to-[#070707e1] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__.ShopSideBar, {\n                        products: products\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16\",\n                        children: products.map(function(product) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                title: product.title,\n                                price: product.price\n                            }, product.id, false, {\n                                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                lineNumber: 45,\n                                columnNumber: 28\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 43,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkM7QUFDYjtBQUN3QjtBQUNBO0FBQ3RCO0FBQ2xDLElBQU1JLElBQUksR0FBRyxXQUFNO0lBRWYsSUFBTUMsUUFBUSxHQUFHO1FBQ2I7WUFDSUMsRUFBRSxFQUFFLENBQUM7WUFDTEMsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QkMsWUFBWSxFQUFFO2dCQUNWQyxRQUFRLEVBQUUsT0FBTztnQkFDakJILEVBQUUsRUFBRSxDQUFDO2FBQ1I7WUFDREksS0FBSyxFQUFFLEtBQUs7WUFDWkMsT0FBTyxFQUFFLElBQUk7WUFDYkMsT0FBTyxFQUFFLEVBQUU7U0FDZDtRQUNEO1lBQ0lOLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxVQUFVO1lBQ2pCQyxZQUFZLEVBQUU7Z0JBQ1ZDLFFBQVEsRUFBRSxNQUFNO2dCQUNoQkgsRUFBRSxFQUFFLENBQUM7YUFDUjtZQUNESSxLQUFLLEVBQUUsSUFBSTtZQUNYQyxPQUFPLEVBQUUsSUFBSTtZQUNiQyxPQUFPLEVBQUUsRUFBRTtTQUNkO0tBQ0o7SUFDRCxJQUFNQyxVQUFVLEdBQUcsRUFBRTtJQUNyQlIsUUFBUSxDQUFDUyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTtRQUNwQixJQUFHLENBQUNGLFVBQVUsQ0FBQ0csUUFBUSxDQUFDRCxPQUFPLENBQUNQLFlBQVksQ0FBQ0YsRUFBRSxDQUFDLEVBQUMsRUFFaEQ7S0FDSixDQUFDO0lBQ0YscUJBQ0EsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdFQUFpRTs7MEJBQzVFLDhEQUFDbEIsc0RBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNpQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOztrQ0FDM0UsOERBQUNqQixnRUFBVzt3QkFBQ0ksUUFBUSxFQUFJQSxRQUFROzs7Ozs2QkFBRztrQ0FDcEMsOERBQUNZLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2RkFBNkY7a0NBQ3ZHYixRQUFRLENBQUNTLEdBQUcsQ0FBQ0MsU0FBQUEsT0FBTyxFQUFJOzRCQUNyQixxQkFBTyw4REFBQ2IsZ0VBQVc7Z0NBQWtCSyxLQUFLLEVBQUVRLE9BQU8sQ0FBQ1IsS0FBSztnQ0FBRUcsS0FBSyxFQUFFSyxPQUFPLENBQUNMLEtBQUs7K0JBQXRESyxPQUFPLENBQUNULEVBQUU7Ozs7cUNBQStDLENBQUM7eUJBQ3RGLENBQUM7Ozs7OzZCQUlBOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1A7Q0FDRjtBQWhES0YsS0FBQUEsSUFBSTtBQWtEViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaG9wLmpzP2I1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBcIkBmb250c291cmNlL21vbnRzZXJyYXRcIjtcbmltcG9ydCB7IFNob3BTaWRlQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcFNpZGVCYXJcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU2hvcCA9ICgpID0+IHtcbiAgXG4gICAgY29uc3QgcHJvZHVjdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdGl0bGU6ICdNaWNoZWxpbiB0aXJlcycsXG4gICAgICAgICAgICBjYXRlZ29yeUluZm86IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ1RpcmVzJyxcbiAgICAgICAgICAgICAgICBpZDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlOiAyOTkuOSxcbiAgICAgICAgICAgIGluU3RvY2s6IHRydWUsXG4gICAgICAgICAgICBwaWN0dXJlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBvaWwnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJbmZvOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6ICdPaWxzJyxcbiAgICAgICAgICAgICAgICBpZDogMVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlOiAzOS45LFxuICAgICAgICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnXG4gICAgICAgIH1cbiAgICBdXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IFtdO1xuICAgIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgaWYoIWNhdGVnb3JpZXMuaW5jbHVkZXMocHJvZHVjdC5jYXRlZ29yeUluZm8uaWQpKXtcblxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIGJnLWdyYWRpZW50LXRvLXIgIGZyb20tWyMwNzA3MDdmM10gdG8tWyMwNzA3MDdlMV0gbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bNSVdIGNvbnRhaW5lciBteC1hdXRvIG1heC13LVs5MCVdIGZsZXggZm9udC1bJ01vbnRzZXJyYXQnXVwiPlxuICAgICAgICAgICAgPFNob3BTaWRlQmFyIHByb2R1Y3RzID0ge3Byb2R1Y3RzfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkIGdyaWQtY29scy00IG1pbi1oLXNjcmVlbiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBteC1hdXRvIGdhcC04IHB5LTE2IG1yLTAgcHgtMTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gdGl0bGU9e3Byb2R1Y3QudGl0bGV9IHByaWNlPXtwcm9kdWN0LnByaWNlfS8+O1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaG9wU2lkZUJhciIsIlByb2R1Y3RDYXJkIiwidXNlRWZmZWN0IiwiU2hvcCIsInByb2R1Y3RzIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5SW5mbyIsImNhdGVnb3J5IiwicHJpY2UiLCJpblN0b2NrIiwicGljdHVyZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJwcm9kdWN0IiwiaW5jbHVkZXMiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});