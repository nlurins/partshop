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

/***/ "./components/ShopSideBar.js":
/*!***********************************!*\
  !*** ./components/ShopSideBar.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ShopSideBar\": function() { return /* binding */ ShopSideBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fontsource/montserrat */ \"./node_modules/@fontsource/montserrat/index.css\");\n/* harmony import */ var _fontsource_montserrat__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fontsource_montserrat__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar ShopSideBar = function(param) {\n    var categories = param.categories, onClick = param.onClick;\n    console.log(categories);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:max-w-[15%] flex flex-col font-['Montserrat'] text-white text-xl lg:text-3xl font-semibold text-center md:self-start lg:text-start lg:sticky top-20\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                onClick: onClick,\n                className: \"md:mb-[40%] mb-[5%] text-2xl lg:text-5xl hover:cursor-pointer hover:text-blue-gray-200\",\n                children: \"All Products\"\n            }, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/components/ShopSideBar.js\",\n                lineNumber: 8,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"gap-5 flex flex-row lg:flex-col justify-center lg:justify-start mb-10 md:mb-0\",\n                children: categories.map(function(unique) {\n                    console.log(categories);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"hover:cursor-pointer hover:text-blue-gray-200\",\n                        onClick: onClick,\n                        children: unique\n                    }, unique, false, {\n                        fileName: \"/home/normunds/repos/partshop/components/ShopSideBar.js\",\n                        lineNumber: 12,\n                        columnNumber: 24\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/home/normunds/repos/partshop/components/ShopSideBar.js\",\n                lineNumber: 9,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/normunds/repos/partshop/components/ShopSideBar.js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, _this);\n};\n_c = ShopSideBar;\nvar _c;\n$RefreshReg$(_c, \"ShopSideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Nob3BTaWRlQmFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBQWdDO0FBRXpCLElBQU1BLFdBQVcsR0FBRyxnQkFBMkI7UUFBekJDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxPQUFPLFNBQVBBLE9BQU87SUFDNUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxVQUFVLENBQUM7SUFFdkIscUJBQ0EsOERBQUNJLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLHdKQUF5Sjs7MEJBQ3BLLDhEQUFDQyxJQUFFO2dCQUFDTCxPQUFPLEVBQUVBLE9BQU87Z0JBQUVJLFNBQVMsRUFBQyx3RkFBd0Y7MEJBQUMsY0FBWTs7Ozs7cUJBQUs7MEJBQzFJLDhEQUFDRSxJQUFFO2dCQUFDRixTQUFTLEVBQUMsK0VBQStFOzBCQUN4RkwsVUFBVSxDQUFDUSxHQUFHLENBQUNDLFNBQUFBLE1BQU0sRUFBSTtvQkFDdEJQLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxVQUFVLENBQUM7b0JBQ3ZCLHFCQUFPLDhEQUFDVSxJQUFFO3dCQUFDTCxTQUFTLEVBQUMsK0NBQStDO3dCQUFjSixPQUFPLEVBQUVBLE9BQU87a0NBQUdRLE1BQU07dUJBQWpDQSxNQUFNOzs7OzZCQUFpQztpQkFDcEgsQ0FBQzs7Ozs7cUJBRUQ7Ozs7OzthQUVILENBQ1A7Q0FDRjtBQWhCWVYsS0FBQUEsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Nob3BTaWRlQmFyLmpzPzc0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiQGZvbnRzb3VyY2UvbW9udHNlcnJhdFwiO1xuXG5leHBvcnQgY29uc3QgU2hvcFNpZGVCYXIgPSAoe2NhdGVnb3JpZXMsIG9uQ2xpY2t9KSA9PiB7XG4gICAgY29uc29sZS5sb2coY2F0ZWdvcmllcylcbiAgXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1heC13LVsxNSVdIGZsZXggZmxleC1jb2wgZm9udC1bJ01vbnRzZXJyYXQnXSB0ZXh0LXdoaXRlIHRleHQteGwgbGc6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCAgdGV4dC1jZW50ZXIgbWQ6c2VsZi1zdGFydCBsZzp0ZXh0LXN0YXJ0IGxnOnN0aWNreSB0b3AtMjBcIj5cbiAgICAgICAgPGgxIG9uQ2xpY2s9e29uQ2xpY2t9IGNsYXNzTmFtZT1cIm1kOm1iLVs0MCVdIG1iLVs1JV0gdGV4dC0yeGwgbGc6dGV4dC01eGwgaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLWdyYXktMjAwXCI+QWxsIFByb2R1Y3RzPC9oMT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdhcC01IGZsZXggZmxleC1yb3cgbGc6ZmxleC1jb2wganVzdGlmeS1jZW50ZXIgbGc6anVzdGlmeS1zdGFydCBtYi0xMCBtZDptYi0wXCI+XG4gICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAodW5pcXVlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKVxuICAgICAgICAgICAgICAgIHJldHVybiA8bGkgY2xhc3NOYW1lPVwiaG92ZXI6Y3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLWdyYXktMjAwXCIga2V5PXt1bmlxdWV9IG9uQ2xpY2s9e29uQ2xpY2t9Pnt1bmlxdWV9PC9saT5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgXG4gICAgICAgIDwvdWw+XG4gICAgICAgIFxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiU2hvcFNpZGVCYXIiLCJjYXRlZ29yaWVzIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibWFwIiwidW5pcXVlIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ShopSideBar.js\n"));

/***/ })

});