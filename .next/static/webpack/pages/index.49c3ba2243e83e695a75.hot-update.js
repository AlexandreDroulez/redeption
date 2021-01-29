webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/Pages/LandingHome/Infos/styledComponents.js":
/*!********************************************************************!*\
  !*** ./src/components/Pages/LandingHome/Infos/styledComponents.js ***!
  \********************************************************************/
/*! exports provided: ContainerInfos, BoxInfos, BoxTitle, BoxSubTitle, ContainerLinks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerInfos\", function() { return ContainerInfos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxInfos\", function() { return BoxInfos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxTitle\", function() { return BoxTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"BoxSubTitle\", function() { return BoxSubTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContainerLinks\", function() { return ContainerLinks; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../styles/helper */ \"./styles/helper.js\");\n\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin: 1rem;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    grid-template-columns: 1fr;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar ContainerInfos = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerInfos\",\n  componentId: \"sc-1bavvqd-0\"\n})([\"width:100%;display:grid;grid-template-columns:1fr 1fr;align-items:center;justify-items:center;margin:auto;max-width:1200px;\", \"\"], _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].tablet(_templateObject()));\nvar BoxInfos = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__BoxInfos\",\n  componentId: \"sc-1bavvqd-1\"\n})([\"width:90%;min-width:288px;border:1px solid \", \";border-radius:20px;margin:2rem 0;padding:1rem;color:\", \";\", \"\"], function (props) {\n  return props.theme.palette.white;\n}, function (props) {\n  return props.theme.palette.white;\n}, _styles_helper__WEBPACK_IMPORTED_MODULE_2__[\"deviceMedia\"].phone(_templateObject2()));\nvar BoxTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styledComponents__BoxTitle\",\n  componentId: \"sc-1bavvqd-2\"\n})([\"text-align:center;font-weight:bold;\"]);\nvar BoxSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__BoxSubTitle\",\n  componentId: \"sc-1bavvqd-3\"\n})([\"text-align:center;margin:1rem 0;\"]);\nvar ContainerLinks = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styledComponents__ContainerLinks\",\n  componentId: \"sc-1bavvqd-4\"\n})([\"text-align:center;display:flex;justify-content:center;flex-direction:column;margin:1rem;\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnZXMvTGFuZGluZ0hvbWUvSW5mb3Mvc3R5bGVkQ29tcG9uZW50cy5qcz84MGQ5Il0sIm5hbWVzIjpbIkNvbnRhaW5lckluZm9zIiwic3R5bGVkIiwiZGl2IiwiZGV2aWNlTWVkaWEiLCJ0YWJsZXQiLCJCb3hJbmZvcyIsInByb3BzIiwidGhlbWUiLCJwYWxldHRlIiwid2hpdGUiLCJwaG9uZSIsIkJveFRpdGxlIiwiaDIiLCJCb3hTdWJUaXRsZSIsIkNvbnRhaW5lckxpbmtzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGNBQWMsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3SUFRdkJDLDBEQUFXLENBQUNDLE1BUlcsb0JBQXBCO0FBWUEsSUFBTUMsUUFBUSxHQUFHSix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHNIQUdDLFVBQUFJLEtBQUs7QUFBQSxTQUFJQSxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsT0FBWixDQUFvQkMsS0FBeEI7QUFBQSxDQUhOLEVBT1YsVUFBQUgsS0FBSztBQUFBLFNBQUlBLEtBQUssQ0FBQ0MsS0FBTixDQUFZQyxPQUFaLENBQW9CQyxLQUF4QjtBQUFBLENBUEssRUFTakJOLDBEQUFXLENBQUNPLEtBVEsscUJBQWQ7QUFhQSxJQUFNQyxRQUFRLEdBQUdWLHlEQUFNLENBQUNXLEVBQVY7QUFBQTtBQUFBO0FBQUEsMkNBQWQ7QUFLQSxJQUFNQyxXQUFXLEdBQUdaLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsd0NBQWpCO0FBS0EsSUFBTVksY0FBYyxHQUFHYix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLGdHQUFwQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1BhZ2VzL0xhbmRpbmdIb21lL0luZm9zL3N0eWxlZENvbXBvbmVudHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB7IGRldmljZU1lZGlhIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL2hlbHBlcic7XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXJJbmZvcyA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgJHtkZXZpY2VNZWRpYS50YWJsZXRgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGB9XG5gO1xuZXhwb3J0IGNvbnN0IEJveEluZm9zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDkwJTtcbiAgbWluLXdpZHRoOiAyODhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5wYWxldHRlLndoaXRlfTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgbWFyZ2luOiAycmVtIDA7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLnBhbGV0dGUud2hpdGV9O1xuXG4gICR7ZGV2aWNlTWVkaWEucGhvbmVgXG4gICAgbWFyZ2luOiAxcmVtO1xuICBgfVxuYDtcbmV4cG9ydCBjb25zdCBCb3hUaXRsZSA9IHN0eWxlZC5oMmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBCb3hTdWJUaXRsZSA9IHN0eWxlZC5kaXZgXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcmVtIDA7XG5gO1xuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyTGlua3MgPSBzdHlsZWQuZGl2YFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDFyZW07XG5gO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Pages/LandingHome/Infos/styledComponents.js\n");

/***/ })

})