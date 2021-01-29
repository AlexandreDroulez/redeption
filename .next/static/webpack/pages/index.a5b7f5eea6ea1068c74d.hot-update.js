webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Pages/LandingHome/NavBar/index.js":
/*!**********************************************************!*\
  !*** ./src/components/Pages/LandingHome/NavBar/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ \"./src/components/Pages/LandingHome/NavBar/styledComponents.js\");\n/* harmony import */ var _assets_redemption_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../assets/redemption.png */ \"./assets/redemption.png\");\n/* harmony import */ var _assets_redemption_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_redemption_png__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _enums_links__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../enums/links */ \"./enums/links/index.js\");\n\n\nvar _jsxFileName = \"/Users/alexandredroulez/Desktop/Perso/redeption/src/components/Pages/LandingHome/NavBar/index.js\",\n    _this = undefined;\n\n\n\n\n\n\nvar LandingHomeNavbar = function LandingHomeNavbar(_ref) {\n  var pageShow = _ref.pageShow,\n      setPageShow = _ref.setPageShow;\n\n  function displayButtons() {\n    var _this2 = this;\n\n    Object.values(_enums_links__WEBPACK_IMPORTED_MODULE_4__[\"LINKS\"].NAVBAR).map(function (link) {\n      console.log(link);\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"StyledLink\"], {\n        pageShow: pageShow === link,\n        onClick: function onClick() {\n          return setPageShow(link);\n        },\n        children: link\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this2);\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"ContainerLandingHomeNavBar\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"Logo\"], {\n      src: _assets_redemption_png__WEBPACK_IMPORTED_MODULE_3___default.a\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"GuildName\"], {\n      children: \"Redempt\\xEF\\xD8n\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"TransparenteContainer\"], {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"GuildPreferences\"], {\n        children: \"Guilde PvP / RBG / ARENE\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styledComponents__WEBPACK_IMPORTED_MODULE_2__[\"ContainerLink\"], {\n        children: \"displayButtons()\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = LandingHomeNavbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingHomeNavbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"LandingHomeNavbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvTGFuZGluZ0hvbWUvTmF2QmFyL2luZGV4LmpzP2EyMjAiXSwibmFtZXMiOlsiTGFuZGluZ0hvbWVOYXZiYXIiLCJwYWdlU2hvdyIsInNldFBhZ2VTaG93IiwiZGlzcGxheUJ1dHRvbnMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJMSU5LUyIsIk5BVkJBUiIsIm1hcCIsImxpbmsiLCJjb25zb2xlIiwibG9nIiwibG9nbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBU0E7QUFDQTs7QUFFQSxJQUFNQSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BQStCO0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCQyxXQUFrQixRQUFsQkEsV0FBa0I7O0FBQ3ZELFdBQVNDLGNBQVQsR0FBMEI7QUFBQTs7QUFDeEJDLFVBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxrREFBSyxDQUFDQyxNQUFwQixFQUE0QkMsR0FBNUIsQ0FBZ0MsVUFBQUMsSUFBSSxFQUFJO0FBQ3RDQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLDBCQUNFLHFFQUFDLDREQUFEO0FBQVksZ0JBQVEsRUFBRVIsUUFBUSxLQUFLUSxJQUFuQztBQUF5QyxlQUFPLEVBQUU7QUFBQSxpQkFBTVAsV0FBVyxDQUFDTyxJQUFELENBQWpCO0FBQUEsU0FBbEQ7QUFBQSxrQkFDR0E7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGO0FBS0QsS0FQRDtBQVFEOztBQUNELHNCQUNFLHFFQUFDLDRFQUFEO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFBTSxTQUFHLEVBQUVHLDZEQUFJQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLDJEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFHRSxxRUFBQyx1RUFBRDtBQUFBLDhCQUNFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQywrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FyQkQ7O0tBQU1aLGlCO0FBdUJTQSxnRkFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BhZ2VzL0xhbmRpbmdIb21lL05hdkJhci9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIENvbnRhaW5lckxhbmRpbmdIb21lTmF2QmFyLFxuICBHdWlsZE5hbWUsXG4gIEd1aWxkUHJlZmVyZW5jZXMsXG4gIExvZ28sXG4gIFRyYW5zcGFyZW50ZUNvbnRhaW5lcixcbiAgQ29udGFpbmVyTGluayxcbiAgU3R5bGVkTGluayxcbn0gZnJvbSAnLi9zdHlsZWRDb21wb25lbnRzJztcbmltcG9ydCBsb2dvIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9yZWRlbXB0aW9uLnBuZyc7XG5pbXBvcnQgeyBMSU5LUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2VudW1zL2xpbmtzJztcblxuY29uc3QgTGFuZGluZ0hvbWVOYXZiYXIgPSAoeyBwYWdlU2hvdywgc2V0UGFnZVNob3cgfSkgPT4ge1xuICBmdW5jdGlvbiBkaXNwbGF5QnV0dG9ucygpIHtcbiAgICBPYmplY3QudmFsdWVzKExJTktTLk5BVkJBUikubWFwKGxpbmsgPT4ge1xuICAgICAgY29uc29sZS5sb2cobGluayk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8U3R5bGVkTGluayBwYWdlU2hvdz17cGFnZVNob3cgPT09IGxpbmt9IG9uQ2xpY2s9eygpID0+IHNldFBhZ2VTaG93KGxpbmspfT5cbiAgICAgICAgICB7bGlua31cbiAgICAgICAgPC9TdHlsZWRMaW5rPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXJMYW5kaW5nSG9tZU5hdkJhcj5cbiAgICAgIDxMb2dvIHNyYz17bG9nb30gLz5cbiAgICAgIDxHdWlsZE5hbWU+UmVkZW1wdMOvw5huPC9HdWlsZE5hbWU+XG4gICAgICA8VHJhbnNwYXJlbnRlQ29udGFpbmVyPlxuICAgICAgICA8R3VpbGRQcmVmZXJlbmNlcz5HdWlsZGUgUHZQIC8gUkJHIC8gQVJFTkU8L0d1aWxkUHJlZmVyZW5jZXM+XG4gICAgICAgIDxDb250YWluZXJMaW5rPmRpc3BsYXlCdXR0b25zKCk8L0NvbnRhaW5lckxpbms+XG4gICAgICA8L1RyYW5zcGFyZW50ZUNvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lckxhbmRpbmdIb21lTmF2QmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ0hvbWVOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pages/LandingHome/NavBar/index.js\n");

/***/ })

})