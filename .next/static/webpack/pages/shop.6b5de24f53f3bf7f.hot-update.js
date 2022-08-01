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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShopSideBar */ \"./components/ShopSideBar.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Shop = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"All Products\"), mainActive = ref1[0], setMainActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([\n        {\n            id: 0,\n            title: \"Michelin tires\",\n            category: \"Tires\",\n            categoryId: 0,\n            quantity: 1,\n            price: 299.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 1,\n            title: \"Some oil\",\n            category: \"Oils\",\n            categoryId: 1,\n            quantity: 1,\n            price: 39.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 3,\n            title: \"Some part\",\n            category: \"Parts\",\n            categoryId: 2,\n            quantity: 1,\n            price: 89.99,\n            inStock: false,\n            picture: \"\"\n        }\n    ]), products = ref2[0], setProducts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), categories = ref3[0], setCategories = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        products.forEach(function(product) {\n            if (!categories.includes(product.category)) {\n                setCategories((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(categories).concat([\n                    product.category\n                ]));\n            }\n        });\n    }, [\n        categories\n    ]);\n    var handleActive = function(e) {\n        setMainActive(e.target.innerHTML);\n    };\n    var addToCart = function(e) {\n        var addedItem = products.filter(function(product) {\n            return product.title === e.target.id;\n        });\n        if (!cart.includes(addedItem[0])) {\n            setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart).concat([\n                addedItem[0].quantity++\n            ]));\n            if (cart.length > 0) {\n                var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n                newCart.forEach(function(item) {\n                    if (item.id === addedItem[id]) {\n                        item.quantity++;\n                    }\n                });\n                setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(newCart));\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#070707f3] to-[#070707e1] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                cart: cart\n            }, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 83,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat'] z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__.ShopSideBar, {\n                        categories: categories,\n                        onClick: function(e) {\n                            handleActive(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16 border shadow-2xl\",\n                        children: products.map(function(product) {\n                            if (mainActive === \"All Products\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                    inStock: product.inStock,\n                                    title: product.title,\n                                    price: product.price,\n                                    click: function(e) {\n                                        return addToCart(e);\n                                    }\n                                }, product.id, false, {\n                                    fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                    lineNumber: 89,\n                                    columnNumber: 28\n                                }, _this);\n                            } else {\n                                if (product.category === mainActive) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                        inStock: product.inStock,\n                                        title: product.title,\n                                        price: product.price,\n                                        click: function(e) {\n                                            return addToCart(e);\n                                        }\n                                    }, product.id, false, {\n                                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 32\n                                    }, _this);\n                                }\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 86,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 84,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, _this);\n};\n_s(Shop, \"rdSsMgJqH77+BcGEK3lthz/HvNs=\");\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNiLEVBQUU7Ozs7eUNBQXVHLENBQUM7NkJBQzNJLE1BQ0c7Z0NBQ0gsSUFBR2EsT0FBTyxDQUFDWCxRQUFRLEtBQUtKLFVBQVUsRUFBRTtvQ0FDaEMscUJBQU8sOERBQUNOLGdFQUFXO3dDQUFrQmMsT0FBTyxFQUFFTyxPQUFPLENBQUNQLE9BQU87d0NBQUVMLEtBQUssRUFBRVksT0FBTyxDQUFDWixLQUFLO3dDQUFFSSxLQUFLLEVBQUVRLE9BQU8sQ0FBQ1IsS0FBSzt3Q0FBRXdCLEtBQUssRUFBSSxTQUFDYixDQUFDO21EQUFLRyxTQUFTLENBQUNILENBQUMsQ0FBQzt5Q0FBQTt1Q0FBOUdILE9BQU8sQ0FBQ2IsRUFBRTs7Ozs2Q0FBdUcsQ0FBQztpQ0FDOUk7NkJBQ0Q7eUJBQ0gsQ0FBQzs7Ozs7NkJBSUE7Ozs7OztxQkFDSjs7Ozs7O2FBQ0osQ0FDUDtDQUNGO0dBaEdLTCxJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFrR1YsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC5qcz9iNWZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0hlYWRlclwiXG5pbXBvcnQgXCJAZm9udHNvdXJjZS9tb250c2VycmF0XCI7XG5pbXBvcnQgeyBTaG9wU2lkZUJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Nob3BTaWRlQmFyXCI7XG5pbXBvcnQgeyBQcm9kdWN0Q2FyZCB9IGZyb20gXCIuLi9jb21wb25lbnRzL1Byb2R1Y3RDYXJkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IFNob3AgPSAoKSA9PiB7XG4gICAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUoW10pO1xuICAgIFxuICAgIFxuICAgIGNvbnN0IFttYWluQWN0aXZlLCBzZXRNYWluQWN0aXZlXSA9IHVzZVN0YXRlKCdBbGwgUHJvZHVjdHMnKTtcbiAgICBjb25zdCBbcHJvZHVjdHMsc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHRpdGxlOiAnTWljaGVsaW4gdGlyZXMnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdUaXJlcycsXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiAwLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBwcmljZTogMjk5Ljk5LFxuICAgICAgICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIG9pbCcsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ09pbHMnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogMSxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgcHJpY2U6IDM5Ljk5LFxuICAgICAgICAgICAgaW5TdG9jazogdHJ1ZSxcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgdGl0bGU6ICdTb21lIHBhcnQnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdQYXJ0cycsXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiAyLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBwcmljZTogODkuOTksXG4gICAgICAgICAgICBpblN0b2NrOiBmYWxzZSxcbiAgICAgICAgICAgIHBpY3R1cmU6ICcnXG4gICAgICAgIH1cbiAgICBdKVxuICAgIGxldCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XG4gICAgXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGlmKCFjYXRlZ29yaWVzLmluY2x1ZGVzKHByb2R1Y3QuY2F0ZWdvcnkpKXtcbiAgICAgICAgICAgICAgICBzZXRDYXRlZ29yaWVzKFsuLi5jYXRlZ29yaWVzLCBwcm9kdWN0LmNhdGVnb3J5XSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LCBbY2F0ZWdvcmllc10pXG5cbiAgICBjb25zdCBoYW5kbGVBY3RpdmUgPSAoZSkgPT4ge1xuICAgICAgICBzZXRNYWluQWN0aXZlKGUudGFyZ2V0LmlubmVySFRNTClcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoZSkgPT4ge1xuICAgICAgICBsZXQgYWRkZWRJdGVtID0gcHJvZHVjdHMuZmlsdGVyKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC50aXRsZSA9PT0gZS50YXJnZXQuaWQ7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICBpZighY2FydC5pbmNsdWRlcyhhZGRlZEl0ZW1bMF0pKXtcbiAgICAgICAgICAgIHNldENhcnQoWy4uLmNhcnQsIGFkZGVkSXRlbVswXS5xdWFudGl0eSsrXSlcbiAgICAgICAgaWYoY2FydC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBuZXdDYXJ0ID0gWy4uLmNhcnRdXG4gICAgICAgICAgICBuZXdDYXJ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWRkZWRJdGVtW2lkXSl7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucXVhbnRpdHkrK1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBzZXRDYXJ0KFsuLi5uZXdDYXJ0XSk7XG4gICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JhZGllbnQtdG8tciAgZnJvbS1bIzA3MDcwN2YzXSB0by1bIzA3MDcwN2UxXSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPEhlYWRlciBjYXJ0PXtjYXJ0fS8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzUlXSBjb250YWluZXIgbXgtYXV0byBtYXgtdy1bOTAlXSBmbGV4IGZvbnQtWydNb250c2VycmF0J10gei0xMFwiPlxuICAgICAgICAgICAgPFNob3BTaWRlQmFyIGNhdGVnb3JpZXMgPSB7Y2F0ZWdvcmllc30gb25DbGljaz17KGUpID0+IHtoYW5kbGVBY3RpdmUoZSl9fS8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBncmlkIGdyaWQtY29scy00IG1pbi1oLXNjcmVlbiByb3VuZGVkLTJ4bCBiZy13aGl0ZSBteC1hdXRvIGdhcC04IHB5LTE2IG1yLTAgcHgtMTYgYm9yZGVyIHNoYWRvdy0yeGxcIj5cbiAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgICAgICAgIGlmKG1haW5BY3RpdmUgPT09ICdBbGwgUHJvZHVjdHMnKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IGluU3RvY2s9e3Byb2R1Y3QuaW5TdG9ja30gdGl0bGU9e3Byb2R1Y3QudGl0bGV9IHByaWNlPXtwcm9kdWN0LnByaWNlfSBjbGljayA9IHsoZSkgPT4gYWRkVG9DYXJ0KGUpfS8+O1xuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICBpZihwcm9kdWN0LmNhdGVnb3J5ID09PSBtYWluQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gaW5TdG9jaz17cHJvZHVjdC5pblN0b2NrfSB0aXRsZT17cHJvZHVjdC50aXRsZX0gcHJpY2U9e3Byb2R1Y3QucHJpY2V9IGNsaWNrID0geyhlKSA9PiBhZGRUb0NhcnQoZSl9Lz47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaG9wIl0sIm5hbWVzIjpbIkhlYWRlciIsIlNob3BTaWRlQmFyIiwiUHJvZHVjdENhcmQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNob3AiLCJjYXJ0Iiwic2V0Q2FydCIsIm1haW5BY3RpdmUiLCJzZXRNYWluQWN0aXZlIiwiaWQiLCJ0aXRsZSIsImNhdGVnb3J5IiwiY2F0ZWdvcnlJZCIsInF1YW50aXR5IiwicHJpY2UiLCJpblN0b2NrIiwicGljdHVyZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJjYXRlZ29yaWVzIiwic2V0Q2F0ZWdvcmllcyIsImZvckVhY2giLCJwcm9kdWN0IiwiaW5jbHVkZXMiLCJoYW5kbGVBY3RpdmUiLCJlIiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwiYWRkVG9DYXJ0IiwiYWRkZWRJdGVtIiwiZmlsdGVyIiwibGVuZ3RoIiwibmV3Q2FydCIsIml0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFwIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});