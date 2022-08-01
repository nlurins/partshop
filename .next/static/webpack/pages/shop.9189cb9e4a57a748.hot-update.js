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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShopSideBar */ \"./components/ShopSideBar.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Shop = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"All Products\"), mainActive = ref1[0], setMainActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([\n        {\n            id: 0,\n            title: \"Michelin tires\",\n            category: \"Tires\",\n            categoryId: 0,\n            quantity: 1,\n            price: 299.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 1,\n            title: \"Some oil\",\n            category: \"Oils\",\n            categoryId: 1,\n            quantity: 1,\n            price: 39.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 3,\n            title: \"Some part\",\n            category: \"Parts\",\n            categoryId: 2,\n            quantity: 1,\n            price: 89.99,\n            inStock: false,\n            picture: \"\"\n        }\n    ]), products = ref2[0], setProducts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), categories = ref3[0], setCategories = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        products.forEach(function(product) {\n            if (!categories.includes(product.category)) {\n                setCategories((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(categories).concat([\n                    product.category\n                ]));\n            }\n        });\n    }, [\n        categories\n    ]);\n    var handleActive = function(e) {\n        setMainActive(e.target.innerHTML);\n    };\n    var addToCart = function(e) {\n        var addedItem = products.filter(function(product) {\n            return product.title === e.target.id;\n        });\n        if (!cart.includes(addedItem[0])) {\n            setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart).concat([\n                addedItem[0]\n            ]));\n        } else {\n            if (cart.length > 0) {\n                var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n                newCart.forEach(function(item) {\n                    if (item.id === addedItem[0].id) {\n                        item.quantity++;\n                    }\n                });\n                setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(newCart));\n            }\n            console.log(cart);\n        }\n    };\n    var handlePlus = function(title) {\n        var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n        newCart.forEach(function(item) {\n            if (item.title === title) {\n                item.quantity++;\n            }\n        });\n    };\n    var handleMinus = function(title) {\n        var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n        newCart.forEach(function(item) {\n            if (item.title === title) {\n                item.quantity--;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#070707f3] to-[#070707e1] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                cart: cart\n            }, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 104,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat'] z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__.ShopSideBar, {\n                        categories: categories,\n                        onClick: function(e) {\n                            handleActive(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16 border shadow-2xl\",\n                        children: products.map(function(product) {\n                            if (mainActive === \"All Products\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                    inStock: product.inStock,\n                                    title: product.title,\n                                    price: product.price,\n                                    click: function(e) {\n                                        return addToCart(e);\n                                    }\n                                }, product.id, false, {\n                                    fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                    lineNumber: 110,\n                                    columnNumber: 28\n                                }, _this);\n                            } else {\n                                if (product.category === mainActive) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                        inStock: product.inStock,\n                                        title: product.title,\n                                        price: product.price,\n                                        click: function(e) {\n                                            return addToCart(e);\n                                        }\n                                    }, product.id, false, {\n                                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 32\n                                    }, _this);\n                                }\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 107,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 105,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n        lineNumber: 103,\n        columnNumber: 5\n    }, _this);\n};\n_s(Shop, \"rdSsMgJqH77+BcGEK3lthz/HvNs=\");\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQSxJQUFJO0FBdUhWLCtEQUFlQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Nob3AuanM/YjVmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXJcIlxuaW1wb3J0IFwiQGZvbnRzb3VyY2UvbW9udHNlcnJhdFwiO1xuaW1wb3J0IHsgU2hvcFNpZGVCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9TaG9wU2lkZUJhclwiO1xuaW1wb3J0IHsgUHJvZHVjdENhcmQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTaG9wID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjYXJ0LCBzZXRDYXJ0XSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICBcbiAgICBjb25zdCBbbWFpbkFjdGl2ZSwgc2V0TWFpbkFjdGl2ZV0gPSB1c2VTdGF0ZSgnQWxsIFByb2R1Y3RzJyk7XG4gICAgY29uc3QgW3Byb2R1Y3RzLHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICB0aXRsZTogJ01pY2hlbGluIHRpcmVzJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnVGlyZXMnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogMCxcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgcHJpY2U6IDI5OS45OSxcbiAgICAgICAgICAgIGluU3RvY2s6IHRydWUsXG4gICAgICAgICAgICBwaWN0dXJlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBvaWwnLFxuICAgICAgICAgICAgY2F0ZWdvcnk6ICdPaWxzJyxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IDEsXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByaWNlOiAzOS45OSxcbiAgICAgICAgICAgIGluU3RvY2s6IHRydWUsXG4gICAgICAgICAgICBwaWN0dXJlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHRpdGxlOiAnU29tZSBwYXJ0JyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnUGFydHMnLFxuICAgICAgICAgICAgY2F0ZWdvcnlJZDogMixcbiAgICAgICAgICAgIHF1YW50aXR5OiAxLFxuICAgICAgICAgICAgcHJpY2U6IDg5Ljk5LFxuICAgICAgICAgICAgaW5TdG9jazogZmFsc2UsXG4gICAgICAgICAgICBwaWN0dXJlOiAnJ1xuICAgICAgICB9XG4gICAgXSlcbiAgICBsZXQgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xuICAgIFxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBpZighY2F0ZWdvcmllcy5pbmNsdWRlcyhwcm9kdWN0LmNhdGVnb3J5KSl7XG4gICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcmllcyhbLi4uY2F0ZWdvcmllcywgcHJvZHVjdC5jYXRlZ29yeV0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSwgW2NhdGVnb3JpZXNdKVxuXG4gICAgY29uc3QgaGFuZGxlQWN0aXZlID0gKGUpID0+IHtcbiAgICAgICAgc2V0TWFpbkFjdGl2ZShlLnRhcmdldC5pbm5lckhUTUwpXG4gICAgfVxuXG4gICAgY29uc3QgYWRkVG9DYXJ0ID0gKGUpID0+IHtcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHByb2R1Y3RzLmZpbHRlcihwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QudGl0bGUgPT09IGUudGFyZ2V0LmlkO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgaWYoIWNhcnQuaW5jbHVkZXMoYWRkZWRJdGVtWzBdKSl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNldENhcnQoWy4uLmNhcnQsIGFkZGVkSXRlbVswXV0pXG4gICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihjYXJ0Lmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgbGV0IG5ld0NhcnQgPSBbLi4uY2FydF1cbiAgICAgICAgICAgIG5ld0NhcnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICBpZihpdGVtLmlkID09PSBhZGRlZEl0ZW1bMF0uaWQpe1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5KytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgc2V0Q2FydChbLi4ubmV3Q2FydF0pO31cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNhcnQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICBjb25zdCBoYW5kbGVQbHVzID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGxldCBuZXdDYXJ0ID0gWy4uLmNhcnRdXG4gICAgICAgIG5ld0NhcnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNaW51cyA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBsZXQgbmV3Q2FydCA9IFsuLi5jYXJ0XVxuICAgICAgICBuZXdDYXJ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLnRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0eS0tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiBiZy1ncmFkaWVudC10by1yICBmcm9tLVsjMDcwNzA3ZjNdIHRvLVsjMDcwNzA3ZTFdIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8SGVhZGVyIGNhcnQ9e2NhcnR9Lz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bNSVdIGNvbnRhaW5lciBteC1hdXRvIG1heC13LVs5MCVdIGZsZXggZm9udC1bJ01vbnRzZXJyYXQnXSB6LTEwXCI+XG4gICAgICAgICAgICA8U2hvcFNpZGVCYXIgY2F0ZWdvcmllcyA9IHtjYXRlZ29yaWVzfSBvbkNsaWNrPXsoZSkgPT4ge2hhbmRsZUFjdGl2ZShlKX19Lz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGdyaWQgZ3JpZC1jb2xzLTQgbWluLWgtc2NyZWVuIHJvdW5kZWQtMnhsIGJnLXdoaXRlIG14LWF1dG8gZ2FwLTggcHktMTYgbXItMCBweC0xNiBib3JkZXIgc2hhZG93LTJ4bFwiPlxuICAgICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgaWYobWFpbkFjdGl2ZSA9PT0gJ0FsbCBQcm9kdWN0cycpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gPFByb2R1Y3RDYXJkIGtleT17cHJvZHVjdC5pZH0gaW5TdG9jaz17cHJvZHVjdC5pblN0b2NrfSB0aXRsZT17cHJvZHVjdC50aXRsZX0gcHJpY2U9e3Byb2R1Y3QucHJpY2V9IGNsaWNrID0geyhlKSA9PiBhZGRUb0NhcnQoZSl9Lz47XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmKHByb2R1Y3QuY2F0ZWdvcnkgPT09IG1haW5BY3RpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBpblN0b2NrPXtwcm9kdWN0LmluU3RvY2t9IHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBwcmljZT17cHJvZHVjdC5wcmljZX0gY2xpY2sgPSB7KGUpID0+IGFkZFRvQ2FydChlKX0vPjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3AiXSwibmFtZXMiOlsiSGVhZGVyIiwiU2hvcFNpZGVCYXIiLCJQcm9kdWN0Q2FyZCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiU2hvcCIsImNhcnQiLCJzZXRDYXJ0IiwibWFpbkFjdGl2ZSIsInNldE1haW5BY3RpdmUiLCJpZCIsInRpdGxlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUlkIiwicXVhbnRpdHkiLCJwcmljZSIsImluU3RvY2siLCJwaWN0dXJlIiwicHJvZHVjdHMiLCJzZXRQcm9kdWN0cyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwiZm9yRWFjaCIsInByb2R1Y3QiLCJpbmNsdWRlcyIsImhhbmRsZUFjdGl2ZSIsImUiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJhZGRUb0NhcnQiLCJhZGRlZEl0ZW0iLCJmaWx0ZXIiLCJsZW5ndGgiLCJuZXdDYXJ0IiwiaXRlbSIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVQbHVzIiwiaGFuZGxlTWludXMiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwibWFwIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});