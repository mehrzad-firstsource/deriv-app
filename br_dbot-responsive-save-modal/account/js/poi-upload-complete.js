(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components/lib/button-link"), require("@deriv/components/lib/button-link.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/icon"), require("@deriv/components/lib/icon.css"), require("@deriv/shared/utils/screen"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components/lib/button-link", "@deriv/components/lib/button-link.css", "@deriv/components/lib/div100vh-container", "@deriv/components/lib/div100vh-container.css", "@deriv/components/lib/icon", "@deriv/components/lib/icon.css", "@deriv/shared/utils/screen", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components/lib/button-link"), require("@deriv/components/lib/button-link.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/icon"), require("@deriv/components/lib/icon.css"), require("@deriv/shared/utils/screen"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components/lib/button-link"], root["@deriv/components/lib/button-link.css"], root["@deriv/components/lib/div100vh-container"], root["@deriv/components/lib/div100vh-container.css"], root["@deriv/components/lib/icon"], root["@deriv/components/lib/icon.css"], root["@deriv/shared/utils/screen"], root["@deriv/translations"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon_css__, __WEBPACK_EXTERNAL_MODULE__deriv_shared_utils_screen__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Components/poi-upload-complete/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n  Copyright (c) 2017 Jed Watson.\n  Licensed under the MIT License (MIT), see\n  http://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\n\tfunction classNames () {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg) && arg.length) {\n\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\tif (inner) {\n\t\t\t\t\tclasses.push(inner);\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzL2NsYXNzbmFtZXMvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uLi9ub2RlX21vZHVsZXMvY2xhc3NuYW1lcy9pbmRleC5qcz9mMDk3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICBDb3B5cmlnaHQgKGMpIDIwMTcgSmVkIFdhdHNvbi5cbiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcbiAgaHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoIWFyZykgY29udGludWU7XG5cblx0XHRcdHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcblxuXHRcdFx0aWYgKGFyZ1R5cGUgPT09ICdzdHJpbmcnIHx8IGFyZ1R5cGUgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdGNsYXNzZXMucHVzaChhcmcpO1xuXHRcdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGFyZykgJiYgYXJnLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgaW5uZXIgPSBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0XHRcdGlmIChpbm5lcikge1xuXHRcdFx0XHRcdGNsYXNzZXMucHVzaChpbm5lcik7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0Zm9yICh2YXIga2V5IGluIGFyZykge1xuXHRcdFx0XHRcdGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcblx0XHRcdFx0XHRcdGNsYXNzZXMucHVzaChrZXkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzLmpvaW4oJyAnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQSxVQUVBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/classnames/index.js\n");

/***/ }),

/***/ "./Components/icon-message-content/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n\n// EXTERNAL MODULE: ../node_modules/classnames/index.js\nvar classnames = __webpack_require__(\"../node_modules/classnames/index.js\");\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container\"\nvar div100vh_container_ = __webpack_require__(\"@deriv/components/lib/div100vh-container\");\nvar div100vh_container_default = /*#__PURE__*/__webpack_require__.n(div100vh_container_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container.css\"\nvar div100vh_container_css_ = __webpack_require__(\"@deriv/components/lib/div100vh-container.css\");\n\n// EXTERNAL MODULE: external \"@deriv/shared/utils/screen\"\nvar screen_ = __webpack_require__(\"@deriv/shared/utils/screen\");\n\n// CONCATENATED MODULE: ./Components/icon-message-content/icon-message-content.jsx\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n        \n\n\nvar icon_message_content_IconMessageContent = function IconMessageContent(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      icon = _ref.icon,\n      icon_row = _ref.icon_row,\n      message = _ref.message,\n      text = _ref.text;\n  return /*#__PURE__*/external_react_default.a.createElement(div100vh_container_default.a, {\n    className: \"account-management__message-wrapper\",\n    is_disabled: Object(screen_[\"isDesktop\"])(),\n    height_offset: \"110px\"\n  }, /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message-content', _defineProperty({}, \"\".concat(className, \"__message-content\"), className))\n  }, icon && /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message-icon', _defineProperty({}, \"\".concat(className, \"__message-icon\"), className))\n  }, icon), icon_row && /*#__PURE__*/external_react_default.a.createElement(\"div\", null, icon_row), /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message', _defineProperty({}, \"\".concat(className, \"__message\"), className))\n  }, message), text && /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: \"account-management__text-container\"\n  }, /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n    className: classnames_default()('account-management__text', _defineProperty({}, \"\".concat(className, \"__text\"), className))\n  }, text)), children));\n};\n\n/* harmony default export */ var icon_message_content = (icon_message_content_IconMessageContent);\n// CONCATENATED MODULE: ./Components/icon-message-content/index.js\n\n/* harmony default export */ var Components_icon_message_content = __webpack_exports__[\"default\"] = (icon_message_content);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LmpzeD82ODc5Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pbmRleC5qcz9hY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERpdjEwMHZoQ29udGFpbmVyIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNEZXNrdG9wIH0gZnJvbSAnQGRlcml2L3NoYXJlZC91dGlscy9zY3JlZW4nO1xuXG5jb25zdCBJY29uTWVzc2FnZUNvbnRlbnQgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuLCBpY29uLCBpY29uX3JvdywgbWVzc2FnZSwgdGV4dCB9KSA9PiAoXG4gICAgPERpdjEwMHZoQ29udGFpbmVyIGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLXdyYXBwZXInIGlzX2Rpc2FibGVkPXtpc0Rlc2t0b3AoKX0gaGVpZ2h0X29mZnNldD0nMTEwcHgnPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjY291bnQtbWFuYWdlbWVudF9fbWVzc2FnZS1jb250ZW50Jywge1xuICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlLWNvbnRlbnRgXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtpY29uICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLWljb24nLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fbWVzc2FnZS1pY29uYF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7aWNvbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7aWNvbl9yb3cgJiYgPGRpdj57aWNvbl9yb3d9PC9kaXY+fVxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlJywge1xuICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fbWVzc2FnZWBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge21lc3NhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0ZXh0ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X190ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXMoJ2FjY291bnQtbWFuYWdlbWVudF9fdGV4dCcsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYCR7Y2xhc3NOYW1lfV9fdGV4dGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIDwvRGl2MTAwdmhDb250YWluZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTWVzc2FnZUNvbnRlbnQ7XG4iLCJpbXBvcnQgSWNvbk1lc3NhZ2VDb250ZW50IGZyb20gJy4vaWNvbi1tZXNzYWdlLWNvbnRlbnQuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgSWNvbk1lc3NhZ2VDb250ZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQURBO0FBT0E7QUFEQTtBQVVBO0FBREE7QUFRQTtBQUFBO0FBRUE7QUFEQTtBQTFCQTs7QUF3Q0E7Ozs7O0FDN0NBO0FBRUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.js\n");

/***/ }),

/***/ "./Components/poa-button/poa-button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PoaButton; });\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components/lib/button-link\");\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/components/lib/button-link.css\");\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n        \n\n\nvar PoaButton = function PoaButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    to: \"/account/proof-of-address\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", {\n    className: \"dc-btn__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Submit proof of address')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1idXR0b24vcG9hLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hLWJ1dHRvbi9wb2EtYnV0dG9uLmpzeD9jYzBiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBvYUJ1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayB0bz0nL2FjY291bnQvcHJvb2Ytb2YtYWRkcmVzcyc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0Jz57bG9jYWxpemUoJ1N1Ym1pdCBwcm9vZiBvZiBhZGRyZXNzJyl9PC9wPlxuICAgIDwvQnV0dG9uTGluaz5cbik7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUZBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poa-button/poa-button.jsx\n");

/***/ }),

/***/ "./Components/poa-continue-trading-button/continue-trading-button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ContinueTradingButton; });\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components/lib/button-link\");\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/components/lib/button-link.css\");\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n        \n\n\nvar ContinueTradingButton = function ContinueTradingButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", {\n    className: \"dc-btn__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Continue trading')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hLWNvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uLmpzeD9mZTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRpbnVlVHJhZGluZ0J1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayB0bz0nLyc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0Jz57bG9jYWxpemUoJ0NvbnRpbnVlIHRyYWRpbmcnKX08L3A+XG4gICAgPC9CdXR0b25MaW5rPlxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa-continue-trading-button/continue-trading-button.jsx\n");

/***/ }),

/***/ "./Components/poi-upload-complete/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/icon\"\nvar icon_ = __webpack_require__(\"@deriv/components/lib/icon\");\nvar icon_default = /*#__PURE__*/__webpack_require__.n(icon_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/icon.css\"\nvar icon_css_ = __webpack_require__(\"@deriv/components/lib/icon.css\");\n\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n\n// EXTERNAL MODULE: ./Components/poa-continue-trading-button/continue-trading-button.jsx\nvar continue_trading_button = __webpack_require__(\"./Components/poa-continue-trading-button/continue-trading-button.jsx\");\n\n// EXTERNAL MODULE: ./Components/poa-button/poa-button.jsx\nvar poa_button = __webpack_require__(\"./Components/poa-button/poa-button.jsx\");\n\n// EXTERNAL MODULE: ./Components/icon-message-content/index.js + 1 modules\nvar icon_message_content = __webpack_require__(\"./Components/icon-message-content/index.js\");\n\n// CONCATENATED MODULE: ./Components/poi-upload-complete/upload-complete.jsx\n\n\n\n        \n\n\n\n\n\nvar upload_complete_UploadComplete = function UploadComplete(_ref) {\n  var has_poa = _ref.has_poa,\n      is_description_enabled = _ref.is_description_enabled;\n  var message = Object(translations_[\"localize\"])('Your proof of identity was submitted successfully');\n\n  if (has_poa) {\n    return /*#__PURE__*/external_react_default.a.createElement(icon_message_content[\"default\"], {\n      message: message,\n      text: Object(translations_[\"localize\"])('Your document is being reviewed, please check back in 1-3 days.'),\n      icon: /*#__PURE__*/external_react_default.a.createElement(icon_default.a, {\n        icon: \"IcPoiVerified\",\n        size: 128\n      })\n    }, is_description_enabled && /*#__PURE__*/external_react_default.a.createElement(continue_trading_button[\"a\" /* ContinueTradingButton */], null));\n  }\n\n  return /*#__PURE__*/external_react_default.a.createElement(icon_message_content[\"default\"], {\n    message: message,\n    icon: /*#__PURE__*/external_react_default.a.createElement(icon_default.a, {\n      icon: \"IcPoiVerified\",\n      size: 128\n    })\n  }, is_description_enabled && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: \"account-management__text-container\"\n  }, /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n    className: \"account-management__text\"\n  }, Object(translations_[\"localize\"])('Your document is being reviewed, please check back in 1-3 days.')), /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n    className: \"account-management__text\"\n  }, Object(translations_[\"localize\"])('You must also submit a proof of address.'))), /*#__PURE__*/external_react_default.a.createElement(poa_button[\"a\" /* PoaButton */], null)));\n};\n// CONCATENATED MODULE: ./Components/poi-upload-complete/index.js\n\n/* harmony default export */ var poi_upload_complete = __webpack_exports__[\"default\"] = (upload_complete_UploadComplete);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS11cGxvYWQtY29tcGxldGUvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9pLXVwbG9hZC1jb21wbGV0ZS91cGxvYWQtY29tcGxldGUuanN4P2Q4YmYiLCJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL3BvaS11cGxvYWQtY29tcGxldGUvaW5kZXguanM/YmU2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250aW51ZVRyYWRpbmdCdXR0b24gfSBmcm9tICdDb21wb25lbnRzL3BvYS1jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi5qc3gnO1xuaW1wb3J0IHsgUG9hQnV0dG9uIH0gZnJvbSAnQ29tcG9uZW50cy9wb2EtYnV0dG9uL3BvYS1idXR0b24uanN4JztcbmltcG9ydCBJY29uTWVzc2FnZUNvbnRlbnQgZnJvbSAnQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudCc7XG5cbmV4cG9ydCBjb25zdCBVcGxvYWRDb21wbGV0ZSA9ICh7IGhhc19wb2EsIGlzX2Rlc2NyaXB0aW9uX2VuYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBsb2NhbGl6ZSgnWW91ciBwcm9vZiBvZiBpZGVudGl0eSB3YXMgc3VibWl0dGVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIGlmIChoYXNfcG9hKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50XG4gICAgICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgICAgICB0ZXh0PXtsb2NhbGl6ZSgnWW91ciBkb2N1bWVudCBpcyBiZWluZyByZXZpZXdlZCwgcGxlYXNlIGNoZWNrIGJhY2sgaW4gMS0zIGRheXMuJyl9XG4gICAgICAgICAgICAgICAgaWNvbj17PEljb24gaWNvbj0nSWNQb2lWZXJpZmllZCcgc2l6ZT17MTI4fSAvPn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNfZGVzY3JpcHRpb25fZW5hYmxlZCAmJiA8Q29udGludWVUcmFkaW5nQnV0dG9uIC8+fVxuICAgICAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uTWVzc2FnZUNvbnRlbnQgbWVzc2FnZT17bWVzc2FnZX0gaWNvbj17PEljb24gaWNvbj0nSWNQb2lWZXJpZmllZCcgc2l6ZT17MTI4fSAvPn0+XG4gICAgICAgICAgICB7aXNfZGVzY3JpcHRpb25fZW5hYmxlZCAmJiAoXG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X190ZXh0LWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fdGV4dCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdZb3VyIGRvY3VtZW50IGlzIGJlaW5nIHJldmlld2VkLCBwbGVhc2UgY2hlY2sgYmFjayBpbiAxLTMgZGF5cy4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYWNjb3VudC1tYW5hZ2VtZW50X190ZXh0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYWxpemUoJ1lvdSBtdXN0IGFsc28gc3VibWl0IGEgcHJvb2Ygb2YgYWRkcmVzcy4nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQb2FCdXR0b24gLz5cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBVcGxvYWRDb21wbGV0ZSB9IGZyb20gJy4vdXBsb2FkLWNvbXBsZXRlLmpzeCc7XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZENvbXBsZXRlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFRQTs7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQVNBOzs7OztBQ3JDQTtBQUVBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poi-upload-complete/index.js\n");

/***/ }),

/***/ "@deriv/components/lib/button-link":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2J1dHRvbi1saW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvZXh0ZXJuYWwgXCJAZGVyaXYvY29tcG9uZW50cy9saWIvYnV0dG9uLWxpbmtcIj8yYmE4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZGVyaXZfY29tcG9uZW50c19saWJfYnV0dG9uX2xpbmtfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/button-link\n");

/***/ }),

/***/ "@deriv/components/lib/button-link.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2J1dHRvbi1saW5rLmNzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL2J1dHRvbi1saW5rLmNzc1wiPzViMjQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl9idXR0b25fbGlua19jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/button-link.css\n");

/***/ }),

/***/ "@deriv/components/lib/div100vh-container":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lclwiPzQ0ZjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9jb21wb25lbnRzX2xpYl9kaXYxMDB2aF9jb250YWluZXJfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/div100vh-container\n");

/***/ }),

/***/ "@deriv/components/lib/div100vh-container.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2RpdjEwMHZoLWNvbnRhaW5lci5jc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9jb21wb25lbnRzL2xpYi9kaXYxMDB2aC1jb250YWluZXIuY3NzXCI/NzFhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X2NvbXBvbmVudHNfbGliX2RpdjEwMHZoX2NvbnRhaW5lcl9jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/div100vh-container.css\n");

/***/ }),

/***/ "@deriv/components/lib/icon":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2ljb24uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9jb21wb25lbnRzL2xpYi9pY29uXCI/Y2EyMCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X2NvbXBvbmVudHNfbGliX2ljb25fXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/icon\n");

/***/ }),

/***/ "@deriv/components/lib/icon.css":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon_css__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L2NvbXBvbmVudHMvbGliL2ljb24uY3NzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvZXh0ZXJuYWwgXCJAZGVyaXYvY29tcG9uZW50cy9saWIvaWNvbi5jc3NcIj85MTU4Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fZGVyaXZfY29tcG9uZW50c19saWJfaWNvbl9jc3NfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/components/lib/icon.css\n");

/***/ }),

/***/ "@deriv/shared/utils/screen":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared_utils_screen__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3NoYXJlZC91dGlscy9zY3JlZW4uanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcIkBkZXJpdi9zaGFyZWQvdXRpbHMvc2NyZWVuXCI/M2VhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfX2Rlcml2X3NoYXJlZF91dGlsc19zY3JlZW5fXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/shared/utils/screen\n");

/***/ }),

/***/ "@deriv/translations":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_translations__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3RyYW5zbGF0aW9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3RyYW5zbGF0aW9uc1wiPzI0MjYiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl90cmFuc2xhdGlvbnNfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/translations\n");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC9leHRlcm5hbCBcInJlYWN0XCI/NTg4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfcmVhY3RfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ })["default"];
});