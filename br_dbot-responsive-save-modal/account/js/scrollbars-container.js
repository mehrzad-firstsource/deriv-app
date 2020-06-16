(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components/lib/themed-scrollbars"), require("@deriv/components/lib/themed-scrollbars.css"), require("@deriv/shared/utils/screen"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components/lib/themed-scrollbars", "@deriv/components/lib/themed-scrollbars.css", "@deriv/shared/utils/screen", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components/lib/themed-scrollbars"), require("@deriv/components/lib/themed-scrollbars.css"), require("@deriv/shared/utils/screen"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components/lib/themed-scrollbars"], root["@deriv/components/lib/themed-scrollbars.css"], root["@deriv/shared/utils/screen"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars_css__, __WEBPACK_EXTERNAL_MODULE__deriv_shared_utils_screen__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Components/scrollbars-container/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz9mMDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/classnames/index.js\n");

/***/ }),

/***/ "./Components/scrollbars-container/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollbars_container_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"./Components/scrollbars-container/scrollbars-container.jsx\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_scrollbars_container_jsx__WEBPACK_IMPORTED_MODULE_0__[/* ScrollbarsContainer */ \"a\"]);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Njcm9sbGJhcnMtY29udGFpbmVyL2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3Njcm9sbGJhcnMtY29udGFpbmVyL2luZGV4LmpzPzgxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2Nyb2xsYmFyc0NvbnRhaW5lciB9IGZyb20gJy4vc2Nyb2xsYmFycy1jb250YWluZXIuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsYmFyc0NvbnRhaW5lcjtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/scrollbars-container/index.js\n");

/***/ }),

/***/ "./Components/scrollbars-container/scrollbars-container.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ScrollbarsContainer; });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components/lib/themed-scrollbars\");\n/* harmony import */ var _deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/components/lib/themed-scrollbars.css\");\n/* harmony import */ var _deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"@deriv/shared/utils/screen\");\n/* harmony import */ var _deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n        \n\nvar ScrollbarsContainer = function ScrollbarsContainer(_ref) {\n  var children = _ref.children,\n      className = _ref.className,\n      scroll_offset = _ref.scroll_offset;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    is_bypassed: Object(_deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__[\"isMobile\"])(),\n    height: scroll_offset ? \"calc(100% - \".concat(scroll_offset, \")\") : '100%'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('account__scrollbars_container', className)\n  }, children));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Njcm9sbGJhcnMtY29udGFpbmVyL3Njcm9sbGJhcnMtY29udGFpbmVyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9zY3JvbGxiYXJzLWNvbnRhaW5lci9zY3JvbGxiYXJzLWNvbnRhaW5lci5qc3g/ZjA3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZWRTY3JvbGxiYXJzIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdAZGVyaXYvc2hhcmVkL3V0aWxzL3NjcmVlbic7XG5cbmV4cG9ydCBjb25zdCBTY3JvbGxiYXJzQ29udGFpbmVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc2Nyb2xsX29mZnNldCB9KSA9PiAoXG4gICAgPFRoZW1lZFNjcm9sbGJhcnMgaXNfYnlwYXNzZWQ9e2lzTW9iaWxlKCl9IGhlaWdodD17c2Nyb2xsX29mZnNldCA/IGBjYWxjKDEwMCUgLSAke3Njcm9sbF9vZmZzZXR9KWAgOiAnMTAwJSd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudF9fc2Nyb2xsYmFyc19jb250YWluZXInLCBjbGFzc05hbWUpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9UaGVtZWRTY3JvbGxiYXJzPlxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/scrollbars-container/scrollbars-container.jsx\n");

/***/ }),

/***/ "@deriv/components/lib/themed-scrollbars":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL3RoZW1lZC1zY3JvbGxiYXJzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvZXh0ZXJuYWwgXCJAZGVyaXYvY29tcG9uZW50cy9saWIvdGhlbWVkLXNjcm9sbGJhcnNcIj9iZmQxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZGVyaXZfY29tcG9uZW50c19saWJfdGhlbWVkX3Njcm9sbGJhcnNfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/themed-scrollbars\n");

/***/ }),

/***/ "@deriv/components/lib/themed-scrollbars.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL3RoZW1lZC1zY3JvbGxiYXJzLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL3RoZW1lZC1zY3JvbGxiYXJzLmNzc1wiPzc4M2UiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl90aGVtZWRfc2Nyb2xsYmFyc19jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/themed-scrollbars.css\n");

/***/ }),

/***/ "@deriv/shared/utils/screen":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared_utils_screen__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3NoYXJlZC91dGlscy9zY3JlZW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9zaGFyZWQvdXRpbHMvc2NyZWVuXCI/M2VhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X3NoYXJlZF91dGlsc19zY3JlZW5fXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/shared/utils/screen\n");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcInJlYWN0XCI/NTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ })["default"];
});