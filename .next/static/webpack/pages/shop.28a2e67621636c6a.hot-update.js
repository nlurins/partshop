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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ShopSideBar */ \"./components/ShopSideBar.js\");\n/* harmony import */ var _components_ProductCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductCard */ \"./components/ProductCard.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Shop = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), cart = ref[0], setCart = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(\"All Products\"), mainActive = ref1[0], setMainActive = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([\n        {\n            id: 0,\n            title: \"Michelin tires\",\n            category: \"Tires\",\n            categoryId: 0,\n            quantity: 1,\n            price: 299.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 1,\n            title: \"Some oil\",\n            category: \"Oils\",\n            categoryId: 1,\n            quantity: 1,\n            price: 39.99,\n            inStock: true,\n            picture: \"\"\n        },\n        {\n            id: 3,\n            title: \"Some part\",\n            category: \"Parts\",\n            categoryId: 2,\n            quantity: 1,\n            price: 89.99,\n            inStock: false,\n            picture: \"\"\n        }\n    ]), products = ref2[0], setProducts = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]), categories = ref3[0], setCategories = ref3[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function() {\n        products.forEach(function(product) {\n            if (!categories.includes(product.category)) {\n                setCategories((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(categories).concat([\n                    product.category\n                ]));\n            }\n        });\n    }, [\n        categories\n    ]);\n    var handleActive = function(e) {\n        setMainActive(e.target.innerHTML);\n    };\n    var addToCart = function(e) {\n        var addedItem = products.filter(function(product) {\n            return product.title === e.target.id;\n        });\n        if (!cart.includes(addedItem[0])) {\n            setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart).concat([\n                addedItem[0]\n            ]));\n        } else {\n            if (cart.length > 0) {\n                var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n                newCart.forEach(function(item) {\n                    if (item.id === addedItem[0].id) {\n                        item.quantity++;\n                    }\n                });\n                setCart((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(newCart));\n            }\n            console.log(cart);\n        }\n    };\n    var handlePlus = function(title) {\n        var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n        console.log([\n            newCart\n        ]);\n        newCart.forEach(function(item) {\n            if (item.title === title) {\n                item.quantity++;\n            }\n        });\n    };\n    var handleMinus = function(title) {\n        var newCart = (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(cart);\n        console.log[newCart];\n        newCart.forEach(function(item) {\n            if (item.title === title) {\n                item.quantity--;\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" bg-gradient-to-r from-[#070707f3] to-[#070707e1] min-h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__.Header, {\n                cart: cart,\n                handleMinus: handleMinus,\n                handlePlus: function() {\n                    return handlePlus();\n                }\n            }, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 107,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-[5%] container mx-auto max-w-[90%] flex font-['Montserrat'] z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ShopSideBar__WEBPACK_IMPORTED_MODULE_3__.ShopSideBar, {\n                        categories: categories,\n                        onClick: function(e) {\n                            handleActive(e);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 109,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container grid grid-cols-4 min-h-screen rounded-2xl bg-white mx-auto gap-8 py-16 mr-0 px-16 border shadow-2xl\",\n                        children: products.map(function(product) {\n                            if (mainActive === \"All Products\") {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                    inStock: product.inStock,\n                                    title: product.title,\n                                    price: product.price,\n                                    click: function(e) {\n                                        return addToCart(e);\n                                    }\n                                }, product.id, false, {\n                                    fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 28\n                                }, _this);\n                            } else {\n                                if (product.category === mainActive) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductCard__WEBPACK_IMPORTED_MODULE_4__.ProductCard, {\n                                        inStock: product.inStock,\n                                        title: product.title,\n                                        price: product.price,\n                                        click: function(e) {\n                                            return addToCart(e);\n                                        }\n                                    }, product.id, false, {\n                                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                                        lineNumber: 117,\n                                        columnNumber: 32\n                                    }, _this);\n                                }\n                            }\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                        lineNumber: 110,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n                lineNumber: 108,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/pages/shop.js\",\n        lineNumber: 106,\n        columnNumber: 5\n    }, _this);\n};\n_s(Shop, \"rdSsMgJqH77+BcGEK3lthz/HvNs=\");\n_c = Shop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Shop);\nvar _c;\n$RefreshReg$(_c, \"Shop\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ0gsQ0FBQyxDQUFDO3lDQUFBO3VDQUE5R0gsT0FBTyxDQUFDYixFQUFFOzs7OzZDQUF1RyxDQUFDO2lDQUM5STs2QkFDRDt5QkFDSCxDQUFDOzs7Ozs2QkFJQTs7Ozs7O3FCQUNKOzs7Ozs7YUFDSixDQUNQO0NBQ0Y7R0F4SEtMLElBQUk7QUFBSkEsS0FBQUEsSUFBSTtBQTBIViwrREFBZUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaG9wLmpzP2I1ZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVhZGVyXCJcbmltcG9ydCBcIkBmb250c291cmNlL21vbnRzZXJyYXRcIjtcbmltcG9ydCB7IFNob3BTaWRlQmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvU2hvcFNpZGVCYXJcIjtcbmltcG9ydCB7IFByb2R1Y3RDYXJkIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvUHJvZHVjdENhcmRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2hvcCA9ICgpID0+IHtcbiAgICBjb25zdCBbY2FydCwgc2V0Q2FydF0gPSB1c2VTdGF0ZShbXSk7XG4gICAgXG4gICAgXG4gICAgY29uc3QgW21haW5BY3RpdmUsIHNldE1haW5BY3RpdmVdID0gdXNlU3RhdGUoJ0FsbCBQcm9kdWN0cycpO1xuICAgIGNvbnN0IFtwcm9kdWN0cyxzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAwLFxuICAgICAgICAgICAgdGl0bGU6ICdNaWNoZWxpbiB0aXJlcycsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ1RpcmVzJyxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IDAsXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByaWNlOiAyOTkuOTksXG4gICAgICAgICAgICBpblN0b2NrOiB0cnVlLFxuICAgICAgICAgICAgcGljdHVyZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgb2lsJyxcbiAgICAgICAgICAgIGNhdGVnb3J5OiAnT2lscycsXG4gICAgICAgICAgICBjYXRlZ29yeUlkOiAxLFxuICAgICAgICAgICAgcXVhbnRpdHk6IDEsXG4gICAgICAgICAgICBwcmljZTogMzkuOTksXG4gICAgICAgICAgICBpblN0b2NrOiB0cnVlLFxuICAgICAgICAgICAgcGljdHVyZTogJydcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ1NvbWUgcGFydCcsXG4gICAgICAgICAgICBjYXRlZ29yeTogJ1BhcnRzJyxcbiAgICAgICAgICAgIGNhdGVnb3J5SWQ6IDIsXG4gICAgICAgICAgICBxdWFudGl0eTogMSxcbiAgICAgICAgICAgIHByaWNlOiA4OS45OSxcbiAgICAgICAgICAgIGluU3RvY2s6IGZhbHNlLFxuICAgICAgICAgICAgcGljdHVyZTogJydcbiAgICAgICAgfVxuICAgIF0pXG4gICAgbGV0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgaWYoIWNhdGVnb3JpZXMuaW5jbHVkZXMocHJvZHVjdC5jYXRlZ29yeSkpe1xuICAgICAgICAgICAgICAgIHNldENhdGVnb3JpZXMoWy4uLmNhdGVnb3JpZXMsIHByb2R1Y3QuY2F0ZWdvcnldKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtjYXRlZ29yaWVzXSlcblxuICAgIGNvbnN0IGhhbmRsZUFjdGl2ZSA9IChlKSA9PiB7XG4gICAgICAgIHNldE1haW5BY3RpdmUoZS50YXJnZXQuaW5uZXJIVE1MKVxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRvQ2FydCA9IChlKSA9PiB7XG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBwcm9kdWN0cy5maWx0ZXIocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LnRpdGxlID09PSBlLnRhcmdldC5pZDtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIGlmKCFjYXJ0LmluY2x1ZGVzKGFkZGVkSXRlbVswXSkpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzZXRDYXJ0KFsuLi5jYXJ0LCBhZGRlZEl0ZW1bMF1dKVxuICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoY2FydC5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGxldCBuZXdDYXJ0ID0gWy4uLmNhcnRdXG4gICAgICAgICAgICBuZXdDYXJ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYoaXRlbS5pZCA9PT0gYWRkZWRJdGVtWzBdLmlkKXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0eSsrXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHNldENhcnQoWy4uLm5ld0NhcnRdKTt9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlUGx1cyA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBsZXQgbmV3Q2FydCA9IFsuLi5jYXJ0XVxuICAgICAgICBjb25zb2xlLmxvZyhbbmV3Q2FydF0pXG4gICAgICAgIG5ld0NhcnQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmKGl0ZW0udGl0bGUgPT09IHRpdGxlKXtcbiAgICAgICAgICAgICAgICBpdGVtLnF1YW50aXR5KytcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVNaW51cyA9ICh0aXRsZSkgPT4ge1xuICAgICAgICBsZXQgbmV3Q2FydCA9IFsuLi5jYXJ0XVxuICAgICAgICBjb25zb2xlLmxvZ1tuZXdDYXJ0XVxuICAgICAgICBuZXdDYXJ0LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZihpdGVtLnRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICAgICAgaXRlbS5xdWFudGl0eS0tXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgYmctZ3JhZGllbnQtdG8tciAgZnJvbS1bIzA3MDcwN2YzXSB0by1bIzA3MDcwN2UxXSBtaW4taC1zY3JlZW5cIj5cbiAgICAgICAgPEhlYWRlciBjYXJ0PXtjYXJ0fSBoYW5kbGVNaW51cz17aGFuZGxlTWludXN9IGhhbmRsZVBsdXM9eygpID0+IGhhbmRsZVBsdXMoKX0vPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LVs1JV0gY29udGFpbmVyIG14LWF1dG8gbWF4LXctWzkwJV0gZmxleCBmb250LVsnTW9udHNlcnJhdCddIHotMTBcIj5cbiAgICAgICAgICAgIDxTaG9wU2lkZUJhciBjYXRlZ29yaWVzID0ge2NhdGVnb3JpZXN9IG9uQ2xpY2s9eyhlKSA9PiB7aGFuZGxlQWN0aXZlKGUpfX0vPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZ3JpZCBncmlkLWNvbHMtNCBtaW4taC1zY3JlZW4gcm91bmRlZC0yeGwgYmctd2hpdGUgbXgtYXV0byBnYXAtOCBweS0xNiBtci0wIHB4LTE2IGJvcmRlciBzaGFkb3ctMnhsXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgICAgICAgICBpZihtYWluQWN0aXZlID09PSAnQWxsIFByb2R1Y3RzJyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8UHJvZHVjdENhcmQga2V5PXtwcm9kdWN0LmlkfSBpblN0b2NrPXtwcm9kdWN0LmluU3RvY2t9IHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBwcmljZT17cHJvZHVjdC5wcmljZX0gY2xpY2sgPSB7KGUpID0+IGFkZFRvQ2FydChlKX0vPjtcbiAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaWYocHJvZHVjdC5jYXRlZ29yeSA9PT0gbWFpbkFjdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxQcm9kdWN0Q2FyZCBrZXk9e3Byb2R1Y3QuaWR9IGluU3RvY2s9e3Byb2R1Y3QuaW5TdG9ja30gdGl0bGU9e3Byb2R1Y3QudGl0bGV9IHByaWNlPXtwcm9kdWN0LnByaWNlfSBjbGljayA9IHsoZSkgPT4gYWRkVG9DYXJ0KGUpfS8+O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJTaG9wU2lkZUJhciIsIlByb2R1Y3RDYXJkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJTaG9wIiwiY2FydCIsInNldENhcnQiLCJtYWluQWN0aXZlIiwic2V0TWFpbkFjdGl2ZSIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsImNhdGVnb3J5SWQiLCJxdWFudGl0eSIsInByaWNlIiwiaW5TdG9jayIsInBpY3R1cmUiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJmb3JFYWNoIiwicHJvZHVjdCIsImluY2x1ZGVzIiwiaGFuZGxlQWN0aXZlIiwiZSIsInRhcmdldCIsImlubmVySFRNTCIsImFkZFRvQ2FydCIsImFkZGVkSXRlbSIsImZpbHRlciIsImxlbmd0aCIsIm5ld0NhcnQiLCJpdGVtIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVBsdXMiLCJoYW5kbGVNaW51cyIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJtYXAiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop.js\n"));

/***/ })

});