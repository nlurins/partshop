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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShopSideBar */ \"./components/ShopSideBar.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Shop = function() {\n    _s();\n    var products = [\n        {\n            id: 0,\n            title: \"Michelin tires\",\n            categoryInfo: {\n                category: \"Tires\",\n                id: 0\n            },\n            price: 299.9,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 1,\n            title: \"Some oil\",\n            categoryInfo: {\n                category: \"Oils\",\n                id: 1\n            },\n            price: 39.9,\n            inStock: true,\n            picture: \"\"\n        }\n    ];\n    var categories = [];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        products.map(function(product) {\n            if (!categories.includes(product.categoryInfo.id)) {\n                categories = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(categories).concat([\n                    product.categoryInfo\n                ]);\n            }\n            console.log(categories);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#070707f3] to-[#070707e1] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {}, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__.ShopSideBar, {\n                        categories: categories\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16\",\n                        children: products.map(function(product) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                title: product.title,\n                                price: product.price\n                            }, product.id, false, {\n                                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                lineNumber: 51,\n                                columnNumber: 28\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 47,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(Shop, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaG9wLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7OztBQUE2QztBQUNiO0FBQ3dCO0FBQ0E7QUFDdEI7O0FBQ2xDLElBQU1JLElBQUksR0FBRyxXQUFNOztJQUVmLElBQU1DLFFBQVEsR0FBRztRQUNiO1lBQ0lDLEVBQUUsRUFBRSxDQUFDO1lBQ0xDLEtBQUssRUFBRSxnQkFBZ0I7WUFDdkJDLFlBQVksRUFBRTtnQkFDVkMsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCSCxFQUFFLEVBQUUsQ0FBQzthQUNSO1lBQ0RJLEtBQUssRUFBRSxLQUFLO1lBQ1pDLE9BQU8sRUFBRSxJQUFJO1lBQ2JDLE9BQU8sRUFBRSxFQUFFO1NBQ2Q7UUFDRDtZQUNJTixFQUFFLEVBQUUsQ0FBQztZQUNMQyxLQUFLLEVBQUUsVUFBVTtZQUNqQkMsWUFBWSxFQUFFO2dCQUNWQyxRQUFRLEVBQUUsTUFBTTtnQkFDaEJILEVBQUUsRUFBRSxDQUFDO2FBQ1I7WUFDREksS0FBSyxFQUFFLElBQUk7WUFDWEMsT0FBTyxFQUFFLElBQUk7WUFDYkMsT0FBTyxFQUFFLEVBQUU7U0FDZDtLQUNKO0lBQ0QsSUFBSUMsVUFBVSxHQUFHLEVBQUU7SUFFbkJWLGdEQUFTLENBQUMsV0FBTTtRQUNaRSxRQUFRLENBQUNTLEdBQUcsQ0FBQ0MsU0FBQUEsT0FBTyxFQUFJO1lBQ3BCLElBQUcsQ0FBQ0YsVUFBVSxDQUFDRyxRQUFRLENBQUNELE9BQU8sQ0FBQ1AsWUFBWSxDQUFDRixFQUFFLENBQUMsRUFBQztnQkFDN0NPLFVBQVUsR0FBRyxxRkFBSUEsVUFBVSxDQUFWQSxRQUFKO29CQUFnQkUsT0FBTyxDQUFDUCxZQUFZO2lCQUFDO2FBQ3JEO1lBQ0RTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxVQUFVLENBQUM7U0FDMUIsQ0FBQztLQUNMLEVBQUUsRUFBRSxDQUFDO0lBR04scUJBQ0EsOERBQUNNLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLGdFQUFpRTs7MEJBQzVFLDhEQUFDcEIsc0RBQU07Ozs7cUJBQUc7MEJBQ1YsOERBQUNtQixLQUFHO2dCQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOztrQ0FDM0UsOERBQUNuQixnRUFBVzt3QkFBQ1ksVUFBVSxFQUFJQSxVQUFVOzs7Ozs2QkFBRztrQ0FDeEMsOERBQUNNLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyw2RkFBNkY7a0NBQ3ZHZixRQUFRLENBQUNTLEdBQUcsQ0FBQ0MsU0FBQUEsT0FBTyxFQUFJOzRCQUNyQixxQkFBTyw4REFBQ2IsZ0VBQVc7Z0NBQWtCSyxLQUFLLEVBQUVRLE9BQU8sQ0FBQ1IsS0FBSztnQ0FBRUcsS0FBSyxFQUFFSyxPQUFPLENBQUNMLEtBQUs7K0JBQXRESyxPQUFPLENBQUNULEVBQUU7Ozs7cUNBQStDLENBQUM7eUJBQ3RGLENBQUM7Ozs7OzZCQUlBOzs7Ozs7cUJBQ0o7Ozs7OzthQUNKLENBQ1A7Q0FDRjtHQXRES0YsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBd0RWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Nob3AuanM/YjVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IFwiQGZvbnRzb3VyY2UvbW9udHNlcnJhdFwiO1xuaW1wb3J0IHsgU2hvcFNpZGVCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wU2lkZUJhclwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTaG9wID0gKCkgPT4ge1xuICBcbiAgICBjb25zdCBwcm9kdWN0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB0aXRsZTogJ01pY2hlbGluIHRpcmVzJyxcbiAgICAgICAgICAgIGNhdGVnb3J5SW5mbzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAnVGlyZXMnLFxuICAgICAgICAgICAgICAgIGlkOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6IDI5OS45LFxuICAgICAgICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIG9pbCcsXG4gICAgICAgICAgICBjYXRlZ29yeUluZm86IHtcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogJ09pbHMnLFxuICAgICAgICAgICAgICAgIGlkOiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6IDM5LjksXG4gICAgICAgICAgICBpblN0b2NrOiB0cnVlLFxuICAgICAgICAgICAgcGljdHVyZTogJydcbiAgICAgICAgfVxuICAgIF1cbiAgICBsZXQgY2F0ZWdvcmllcyA9IFtdO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmKCFjYXRlZ29yaWVzLmluY2x1ZGVzKHByb2R1Y3QuY2F0ZWdvcnlJbmZvLmlkKSl7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcmllcyA9IFsuLi5jYXRlZ29yaWVzLCBwcm9kdWN0LmNhdGVnb3J5SW5mb11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpXG4gICAgICAgIH0pXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JhZGllbnQtdG8tciAgZnJvbS1bIzA3MDcwN2YzXSB0by1bIzA3MDcwN2UxXSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1JV0gY29udGFpbmVyIG14LWF1dG8gbWF4LXctWzkwJV0gZmxleCBmb250LVsnTW9udHNlcnJhdCddXCI+XG4gICAgICAgICAgICA8U2hvcFNpZGVCYXIgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkIGdyaWQtY29scy00IG1pbi1oLXNjcmVlbiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBteC1hdXRvIGdhcC04IHB5LTE2IG1yLTAgcHgtMTZcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gdGl0bGU9e3Byb2R1Y3QudGl0bGV9IHByaWNlPXtwcm9kdWN0LnByaWNlfS8+O1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaG9wU2lkZUJhciIsIlByb2R1Y3RDYXJkIiwidXNlRWZmZWN0IiwiU2hvcCIsInByb2R1Y3RzIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5SW5mbyIsImNhdGVnb3J5IiwicHJpY2UiLCJpblN0b2NrIiwicGljdHVyZSIsImNhdGVnb3JpZXMiLCJtYXAiLCJwcm9kdWN0IiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});