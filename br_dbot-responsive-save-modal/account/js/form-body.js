(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components/lib/desktop-wrapper"), require("@deriv/components/lib/desktop-wrapper.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/mobile-wrapper"), require("@deriv/components/lib/mobile-wrapper.css"), require("@deriv/components/lib/themed-scrollbars"), require("@deriv/components/lib/themed-scrollbars.css"), require("@deriv/shared/utils/screen"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components/lib/desktop-wrapper", "@deriv/components/lib/desktop-wrapper.css", "@deriv/components/lib/div100vh-container", "@deriv/components/lib/div100vh-container.css", "@deriv/components/lib/mobile-wrapper", "@deriv/components/lib/mobile-wrapper.css", "@deriv/components/lib/themed-scrollbars", "@deriv/components/lib/themed-scrollbars.css", "@deriv/shared/utils/screen", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components/lib/desktop-wrapper"), require("@deriv/components/lib/desktop-wrapper.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/mobile-wrapper"), require("@deriv/components/lib/mobile-wrapper.css"), require("@deriv/components/lib/themed-scrollbars"), require("@deriv/components/lib/themed-scrollbars.css"), require("@deriv/shared/utils/screen"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components/lib/desktop-wrapper"], root["@deriv/components/lib/desktop-wrapper.css"], root["@deriv/components/lib/div100vh-container"], root["@deriv/components/lib/div100vh-container.css"], root["@deriv/components/lib/mobile-wrapper"], root["@deriv/components/lib/mobile-wrapper.css"], root["@deriv/components/lib/themed-scrollbars"], root["@deriv/components/lib/themed-scrollbars.css"], root["@deriv/shared/utils/screen"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_components_lib_desktop_wrapper__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_desktop_wrapper_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_mobile_wrapper__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_mobile_wrapper_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_themed_scrollbars_css__, __WEBPACK_EXTERNAL_MODULE__deriv_shared_utils_screen__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Components/form-body/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz9mMDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/classnames/index.js\n");

/***/ }),

/***/ "./Components/form-body/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container\"\nvar div100vh_container_ = __webpack_require__(\"@deriv/components/lib/div100vh-container\");\nvar div100vh_container_default = /*#__PURE__*/__webpack_require__.n(div100vh_container_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container.css\"\nvar div100vh_container_css_ = __webpack_require__(\"@deriv/components/lib/div100vh-container.css\");\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/desktop-wrapper\"\nvar desktop_wrapper_ = __webpack_require__(\"@deriv/components/lib/desktop-wrapper\");\nvar desktop_wrapper_default = /*#__PURE__*/__webpack_require__.n(desktop_wrapper_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/desktop-wrapper.css\"\nvar desktop_wrapper_css_ = __webpack_require__(\"@deriv/components/lib/desktop-wrapper.css\");\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/mobile-wrapper\"\nvar mobile_wrapper_ = __webpack_require__(\"@deriv/components/lib/mobile-wrapper\");\nvar mobile_wrapper_default = /*#__PURE__*/__webpack_require__.n(mobile_wrapper_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/mobile-wrapper.css\"\nvar mobile_wrapper_css_ = __webpack_require__(\"@deriv/components/lib/mobile-wrapper.css\");\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n\n// EXTERNAL MODULE: ./Components/scrollbars-container/scrollbars-container.jsx\nvar scrollbars_container = __webpack_require__(\"./Components/scrollbars-container/scrollbars-container.jsx\");\n\n// CONCATENATED MODULE: ./Components/form-body/form-body.jsx\n\n\n\n        \n\n\n\n        \n\n\n\n        \n\n\nvar form_body_FormBody = function FormBody(_ref) {\n  var children = _ref.children,\n      scroll_offset = _ref.scroll_offset;\n  return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(desktop_wrapper_default.a, null, /*#__PURE__*/external_react_default.a.createElement(scrollbars_container[\"a\" /* ScrollbarsContainer */], {\n    className: \"account__scrollbars_container--grid-layout\",\n    scroll_offset: scroll_offset\n  }, children)), /*#__PURE__*/external_react_default.a.createElement(mobile_wrapper_default.a, null, /*#__PURE__*/external_react_default.a.createElement(div100vh_container_default.a, {\n    className: \"account__scrollbars_container--grid-layout\",\n    height_offset: scroll_offset || '200px'\n  }, children)));\n};\n// CONCATENATED MODULE: ./Components/form-body/index.js\n\n/* harmony default export */ var form_body = __webpack_exports__[\"default\"] = (form_body_FormBody);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2Zvcm0tYm9keS9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9mb3JtLWJvZHkvZm9ybS1ib2R5LmpzeD85MDJlIiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9mb3JtLWJvZHkvaW5kZXguanM/NmI0YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXYxMDB2aENvbnRhaW5lciwgRGVza3RvcFdyYXBwZXIsIE1vYmlsZVdyYXBwZXIgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgU2Nyb2xsYmFyc0NvbnRhaW5lciB9IGZyb20gJ0NvbXBvbmVudHMvc2Nyb2xsYmFycy1jb250YWluZXIvc2Nyb2xsYmFycy1jb250YWluZXIuanN4JztcblxuZXhwb3J0IGNvbnN0IEZvcm1Cb2R5ID0gKHsgY2hpbGRyZW4sIHNjcm9sbF9vZmZzZXQgfSkgPT4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgPERlc2t0b3BXcmFwcGVyPlxuICAgICAgICAgICAgPFNjcm9sbGJhcnNDb250YWluZXIgY2xhc3NOYW1lPSdhY2NvdW50X19zY3JvbGxiYXJzX2NvbnRhaW5lci0tZ3JpZC1sYXlvdXQnIHNjcm9sbF9vZmZzZXQ9e3Njcm9sbF9vZmZzZXR9PlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvU2Nyb2xsYmFyc0NvbnRhaW5lcj5cbiAgICAgICAgPC9EZXNrdG9wV3JhcHBlcj5cbiAgICAgICAgPE1vYmlsZVdyYXBwZXI+XG4gICAgICAgICAgICA8RGl2MTAwdmhDb250YWluZXJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2FjY291bnRfX3Njcm9sbGJhcnNfY29udGFpbmVyLS1ncmlkLWxheW91dCdcbiAgICAgICAgICAgICAgICBoZWlnaHRfb2Zmc2V0PXtzY3JvbGxfb2Zmc2V0IHx8ICcyMDBweCd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9EaXYxMDB2aENvbnRhaW5lcj5cbiAgICAgICAgPC9Nb2JpbGVXcmFwcGVyPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4pO1xuIiwiaW1wb3J0IHsgRm9ybUJvZHkgfSBmcm9tICcuL2Zvcm0tYm9keS5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtQm9keTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQU1BO0FBQ0E7QUFGQTtBQVJBOzs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/form-body/index.js\n");

/***/ }),

/***/ "./Components/scrollbars-container/scrollbars-container.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ScrollbarsContainer; });\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"../node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/components/lib/themed-scrollbars\");\n/* harmony import */ var _deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"@deriv/components/lib/themed-scrollbars.css\");\n/* harmony import */ var _deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_themed_scrollbars_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(\"@deriv/shared/utils/screen\");\n/* harmony import */ var _deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n        \n\nvar ScrollbarsContainer = function ScrollbarsContainer(_ref) {\n  var children = _ref.children,\n      className = _ref.className,\n      scroll_offset = _ref.scroll_offset;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_deriv_components_lib_themed_scrollbars__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    is_bypassed: Object(_deriv_shared_utils_screen__WEBPACK_IMPORTED_MODULE_4__[\"isMobile\"])(),\n    height: scroll_offset ? \"calc(100% - \".concat(scroll_offset, \")\") : '100%'\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('account__scrollbars_container', className)\n  }, children));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3Njcm9sbGJhcnMtY29udGFpbmVyL3Njcm9sbGJhcnMtY29udGFpbmVyLmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9zY3JvbGxiYXJzLWNvbnRhaW5lci9zY3JvbGxiYXJzLWNvbnRhaW5lci5qc3g/ZjA3YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUaGVtZWRTY3JvbGxiYXJzIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdAZGVyaXYvc2hhcmVkL3V0aWxzL3NjcmVlbic7XG5cbmV4cG9ydCBjb25zdCBTY3JvbGxiYXJzQ29udGFpbmVyID0gKHsgY2hpbGRyZW4sIGNsYXNzTmFtZSwgc2Nyb2xsX29mZnNldCB9KSA9PiAoXG4gICAgPFRoZW1lZFNjcm9sbGJhcnMgaXNfYnlwYXNzZWQ9e2lzTW9iaWxlKCl9IGhlaWdodD17c2Nyb2xsX29mZnNldCA/IGBjYWxjKDEwMCUgLSAke3Njcm9sbF9vZmZzZXR9KWAgOiAnMTAwJSd9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudF9fc2Nyb2xsYmFyc19jb250YWluZXInLCBjbGFzc05hbWUpfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9UaGVtZWRTY3JvbGxiYXJzPlxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFGQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/scrollbars-container/scrollbars-container.jsx\n");

/***/ }),

/***/ "@deriv/components/lib/desktop-wrapper":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_desktop_wrapper__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2Rlc2t0b3Atd3JhcHBlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL2Rlc2t0b3Atd3JhcHBlclwiP2U1MWMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl9kZXNrdG9wX3dyYXBwZXJfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/desktop-wrapper\n");

/***/ }),

/***/ "@deriv/components/lib/desktop-wrapper.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_desktop_wrapper_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2Rlc2t0b3Atd3JhcHBlci5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9jb21wb25lbnRzL2xpYi9kZXNrdG9wLXdyYXBwZXIuY3NzXCI/ZGQzZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X2NvbXBvbmVudHNfbGliX2Rlc2t0b3Bfd3JhcHBlcl9jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/desktop-wrapper.css\n");

/***/ }),

/***/ "@deriv/components/lib/div100vh-container":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lclwiPzQ0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl9kaXYxMDB2aF9jb250YWluZXJfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/div100vh-container\n");

/***/ }),

/***/ "@deriv/components/lib/div100vh-container.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lci5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9jb21wb25lbnRzL2xpYi9kaXYxMDB2aC1jb250YWluZXIuY3NzXCI/NzFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X2NvbXBvbmVudHNfbGliX2RpdjEwMHZoX2NvbnRhaW5lcl9jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/div100vh-container.css\n");

/***/ }),

/***/ "@deriv/components/lib/mobile-wrapper":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_mobile_wrapper__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL21vYmlsZS13cmFwcGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvZXh0ZXJuYWwgXCJAZGVyaXYvY29tcG9uZW50cy9saWIvbW9iaWxlLXdyYXBwZXJcIj80M2JkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZGVyaXZfY29tcG9uZW50c19saWJfbW9iaWxlX3dyYXBwZXJfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/mobile-wrapper\n");

/***/ }),

/***/ "@deriv/components/lib/mobile-wrapper.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_mobile_wrapper_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL21vYmlsZS13cmFwcGVyLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL21vYmlsZS13cmFwcGVyLmNzc1wiPzEzNWIiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl9tb2JpbGVfd3JhcHBlcl9jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/mobile-wrapper.css\n");

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