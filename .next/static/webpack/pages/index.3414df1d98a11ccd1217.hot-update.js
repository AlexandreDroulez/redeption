webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Pages/LandingHome/Body/styledComponents.js":
/*!*******************************************************************!*\
  !*** ./src/components/Pages/LandingHome/Body/styledComponents.js ***!
  \*******************************************************************/
/*! exports provided: ContainerLandingHomeBody, GuildName, GuildPreferences, Logo, TransparenteContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLandingHomeBody\", function() { return ContainerLandingHomeBody; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuildName\", function() { return GuildName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GuildPreferences\", function() { return GuildPreferences; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TransparenteContainer\", function() { return TransparenteContainer; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _assets_jpeg_thumb_1920_1092358_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../assets/jpeg/thumb-1920-1092358.jpg */ \"./assets/jpeg/thumb-1920-1092358.jpg\");\n/* harmony import */ var _assets_jpeg_thumb_1920_1092358_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_jpeg_thumb_1920_1092358_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n     width: 75px;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar ContainerLandingHomeBody = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLandingHomeBody\",\n  componentId: \"xqk0mu-0\"\n})([\"height:100vh;background-image:url(\", \");margin:auto;display:flex;flex-direction:column;justify-content:space-between;text-align:center;\"], _assets_jpeg_thumb_1920_1092358_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);\nvar GuildName = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h1.withConfig({\n  displayName: \"styledComponents__GuildName\",\n  componentId: \"xqk0mu-1\"\n})([\"color:\", \";font-size:3rem;\"], function (props) {\n  return props.theme.palette.white;\n});\nvar GuildPreferences = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styledComponents__GuildPreferences\",\n  componentId: \"xqk0mu-2\"\n})([\"color:\", \";font-size:2rem;\"], function (props) {\n  return props.theme.palette.white;\n});\nvar Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"styledComponents__Logo\",\n  componentId: \"xqk0mu-3\"\n})([\"width:100px;margin:1rem auto;\", \"\"], _styles_helper__WEBPACK_IMPORTED_MODULE_3__[\"deviceMedia\"].tablet(_templateObject()));\nvar TransparenteContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__TransparenteContainer\",\n  componentId: \"xqk0mu-4\"\n})([\"display:flex;align-items:center;background-color:black;opacity:0.3;color:\", \";\"], function (props) {\n  return props.theme.palette.white;\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvTGFuZGluZ0hvbWUvQm9keS9zdHlsZWRDb21wb25lbnRzLmpzP2Y2NTYiXSwibmFtZXMiOlsiQ29udGFpbmVyTGFuZGluZ0hvbWVCb2R5Iiwic3R5bGVkIiwiZGl2Iiwid2FsbFBhcGVycyIsIkd1aWxkTmFtZSIsImgxIiwicHJvcHMiLCJ0aGVtZSIsInBhbGV0dGUiLCJ3aGl0ZSIsIkd1aWxkUHJlZmVyZW5jZXMiLCJoMiIsIkxvZ28iLCJpbWciLCJkZXZpY2VNZWRpYSIsInRhYmxldCIsIlRyYW5zcGFyZW50ZUNvbnRhaW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFTyxJQUFNQSx3QkFBd0IsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxnSkFFWEMsMEVBRlcsQ0FBOUI7QUFVQSxJQUFNQyxTQUFTLEdBQUdILHlEQUFNLENBQUNJLEVBQVY7QUFBQTtBQUFBO0FBQUEsbUNBQ1gsVUFBQUMsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxLQUF4QjtBQUFBLENBRE0sQ0FBZjtBQUtBLElBQU1DLGdCQUFnQixHQUFHVCx5REFBTSxDQUFDVSxFQUFWO0FBQUE7QUFBQTtBQUFBLG1DQUNsQixVQUFBTCxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLEtBQXhCO0FBQUEsQ0FEYSxDQUF0QjtBQUtBLElBQU1HLElBQUksR0FBR1gseURBQU0sQ0FBQ1ksR0FBVjtBQUFBO0FBQUE7QUFBQSwwQ0FHYkMsMERBQVcsQ0FBQ0MsTUFIQyxvQkFBVjtBQVFBLElBQU1DLHFCQUFxQixHQUFHZix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHVGQUt2QixVQUFBSSxLQUFLO0FBQUEsU0FBSUEsS0FBSyxDQUFDQyxLQUFOLENBQVlDLE9BQVosQ0FBb0JDLEtBQXhCO0FBQUEsQ0FMa0IsQ0FBM0IiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdlcy9MYW5kaW5nSG9tZS9Cb2R5L3N0eWxlZENvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB3YWxsUGFwZXJzIGZyb20gJy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9qcGVnL3RodW1iLTE5MjAtMTA5MjM1OC5qcGcnO1xuaW1wb3J0IHsgZGV2aWNlTWVkaWEgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9zdHlsZXMvaGVscGVyJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lckxhbmRpbmdIb21lQm9keSA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke3dhbGxQYXBlcnN9KTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbmA7XG5cbmV4cG9ydCBjb25zdCBHdWlsZE5hbWUgPSBzdHlsZWQuaDFgXG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUud2hpdGV9O1xuICBmb250LXNpemU6IDNyZW07XG5gO1xuXG5leHBvcnQgY29uc3QgR3VpbGRQcmVmZXJlbmNlcyA9IHN0eWxlZC5oMmBcbiAgY29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUucGFsZXR0ZS53aGl0ZX07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbmA7XG5cbmV4cG9ydCBjb25zdCBMb2dvID0gc3R5bGVkLmltZ2BcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDFyZW0gYXV0bztcbiAgJHtkZXZpY2VNZWRpYS50YWJsZXRgXG4gICAgIHdpZHRoOiA3NXB4O1xuICBgfVxuYDtcblxuZXhwb3J0IGNvbnN0IFRyYW5zcGFyZW50ZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvcGFjaXR5OiAwLjM7XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUud2hpdGV9O1xuYDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Pages/LandingHome/Body/styledComponents.js\n");

/***/ })

})