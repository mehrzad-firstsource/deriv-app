(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@deriv/components/lib/button-link"), require("@deriv/components/lib/button-link.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/icon"), require("@deriv/components/lib/icon.css"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["@deriv/components/lib/button-link", "@deriv/components/lib/button-link.css", "@deriv/components/lib/div100vh-container", "@deriv/components/lib/div100vh-container.css", "@deriv/components/lib/icon", "@deriv/components/lib/icon.css", "@deriv/shared", "@deriv/translations", "react"], factory);
	else if(typeof exports === 'object')
		exports["@deriv/account"] = factory(require("@deriv/components/lib/button-link"), require("@deriv/components/lib/button-link.css"), require("@deriv/components/lib/div100vh-container"), require("@deriv/components/lib/div100vh-container.css"), require("@deriv/components/lib/icon"), require("@deriv/components/lib/icon.css"), require("@deriv/shared"), require("@deriv/translations"), require("react"));
	else
		root["@deriv/account"] = factory(root["@deriv/components/lib/button-link"], root["@deriv/components/lib/button-link.css"], root["@deriv/components/lib/div100vh-container"], root["@deriv/components/lib/div100vh-container.css"], root["@deriv/components/lib/icon"], root["@deriv/components/lib/icon.css"], root["@deriv/shared"], root["@deriv/translations"], root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_button_link_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_div100vh_container_css__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon__, __WEBPACK_EXTERNAL_MODULE__deriv_components_lib_icon_css__, __WEBPACK_EXTERNAL_MODULE__deriv_shared__, __WEBPACK_EXTERNAL_MODULE__deriv_translations__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Components/poa-submitted/index.js");
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
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n\n// EXTERNAL MODULE: ../node_modules/classnames/index.js\nvar classnames = __webpack_require__(\"../node_modules/classnames/index.js\");\nvar classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container\"\nvar div100vh_container_ = __webpack_require__(\"@deriv/components/lib/div100vh-container\");\nvar div100vh_container_default = /*#__PURE__*/__webpack_require__.n(div100vh_container_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/div100vh-container.css\"\nvar div100vh_container_css_ = __webpack_require__(\"@deriv/components/lib/div100vh-container.css\");\n\n// EXTERNAL MODULE: external \"@deriv/shared\"\nvar shared_ = __webpack_require__(\"@deriv/shared\");\n\n// CONCATENATED MODULE: ./Components/icon-message-content/icon-message-content.jsx\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n        \n\n\nvar icon_message_content_IconMessageContent = function IconMessageContent(_ref) {\n  var className = _ref.className,\n      children = _ref.children,\n      icon = _ref.icon,\n      icon_row = _ref.icon_row,\n      message = _ref.message,\n      text = _ref.text;\n  return /*#__PURE__*/external_react_default.a.createElement(div100vh_container_default.a, {\n    className: \"account-management__message-wrapper\",\n    is_disabled: Object(shared_[\"isDesktop\"])(),\n    height_offset: \"110px\"\n  }, /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message-content', _defineProperty({}, \"\".concat(className, \"__message-content\"), className))\n  }, icon && /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message-icon', _defineProperty({}, \"\".concat(className, \"__message-icon\"), className))\n  }, icon), icon_row && /*#__PURE__*/external_react_default.a.createElement(\"div\", null, icon_row), /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: classnames_default()('account-management__message', _defineProperty({}, \"\".concat(className, \"__message\"), className))\n  }, message), text && /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n    className: \"account-management__text-container\"\n  }, /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n    className: classnames_default()('account-management__text', _defineProperty({}, \"\".concat(className, \"__text\"), className))\n  }, text)), children));\n};\n\n/* harmony default export */ var icon_message_content = (icon_message_content_IconMessageContent);\n// CONCATENATED MODULE: ./Components/icon-message-content/index.js\n\n/* harmony default export */ var Components_icon_message_content = __webpack_exports__[\"default\"] = (icon_message_content);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2luZGV4LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGRlcml2L2FjY291bnQvLi9Db21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50L2ljb24tbWVzc2FnZS1jb250ZW50LmpzeD82ODc5Iiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9pY29uLW1lc3NhZ2UtY29udGVudC9pbmRleC5qcz9hY2M0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IERpdjEwMHZoQ29udGFpbmVyIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgaXNEZXNrdG9wIH0gZnJvbSAnQGRlcml2L3NoYXJlZCc7XG5cbmNvbnN0IEljb25NZXNzYWdlQ29udGVudCA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGljb24sIGljb25fcm93LCBtZXNzYWdlLCB0ZXh0IH0pID0+IChcbiAgICA8RGl2MTAwdmhDb250YWluZXIgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2Utd3JhcHBlcicgaXNfZGlzYWJsZWQ9e2lzRGVza3RvcCgpfSBoZWlnaHRfb2Zmc2V0PScxMTBweCc+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X19tZXNzYWdlLWNvbnRlbnQnLCB7XG4gICAgICAgICAgICAgICAgW2Ake2NsYXNzTmFtZX1fX21lc3NhZ2UtY29udGVudGBdOiBjbGFzc05hbWUsXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPlxuICAgICAgICAgICAge2ljb24gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UtaWNvbicsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlLWljb25gXTogY2xhc3NOYW1lLFxuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtpY29ufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtpY29uX3JvdyAmJiA8ZGl2PntpY29uX3Jvd308L2Rpdj59XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKCdhY2NvdW50LW1hbmFnZW1lbnRfX21lc3NhZ2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X19tZXNzYWdlYF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3RleHQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX3RleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lcygnYWNjb3VudC1tYW5hZ2VtZW50X190ZXh0Jywge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtjbGFzc05hbWV9X190ZXh0YF06IGNsYXNzTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9EaXYxMDB2aENvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEljb25NZXNzYWdlQ29udGVudDtcbiIsImltcG9ydCBJY29uTWVzc2FnZUNvbnRlbnQgZnJvbSAnLi9pY29uLW1lc3NhZ2UtY29udGVudC5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBJY29uTWVzc2FnZUNvbnRlbnQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBREE7QUFPQTtBQURBO0FBVUE7QUFEQTtBQVFBO0FBQUE7QUFFQTtBQURBO0FBMUJBOztBQXdDQTs7Ozs7QUM3Q0E7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/icon-message-content/index.js\n");

/***/ }),

/***/ "./Components/poa-continue-trading-button/continue-trading-button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return ContinueTradingButton; });\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components/lib/button-link\");\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/components/lib/button-link.css\");\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n        \n\n\nvar ContinueTradingButton = function ContinueTradingButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", {\n    className: \"dc-btn__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Continue trading')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hLWNvbnRpbnVlLXRyYWRpbmctYnV0dG9uL2NvbnRpbnVlLXRyYWRpbmctYnV0dG9uLmpzeD9mZTBlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbnRpbnVlVHJhZGluZ0J1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayB0bz0nLyc+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nZGMtYnRuX190ZXh0Jz57bG9jYWxpemUoJ0NvbnRpbnVlIHRyYWRpbmcnKX08L3A+XG4gICAgPC9CdXR0b25MaW5rPlxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poa-continue-trading-button/continue-trading-button.jsx\n");

/***/ }),

/***/ "./Components/poa-submitted/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/icon\"\nvar icon_ = __webpack_require__(\"@deriv/components/lib/icon\");\nvar icon_default = /*#__PURE__*/__webpack_require__.n(icon_);\n\n// EXTERNAL MODULE: external \"@deriv/components/lib/icon.css\"\nvar icon_css_ = __webpack_require__(\"@deriv/components/lib/icon.css\");\n\n// EXTERNAL MODULE: external \"@deriv/translations\"\nvar translations_ = __webpack_require__(\"@deriv/translations\");\n\n// EXTERNAL MODULE: external \"react\"\nvar external_react_ = __webpack_require__(\"react\");\nvar external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);\n\n// EXTERNAL MODULE: ./Components/poa-continue-trading-button/continue-trading-button.jsx\nvar continue_trading_button = __webpack_require__(\"./Components/poa-continue-trading-button/continue-trading-button.jsx\");\n\n// EXTERNAL MODULE: ./Components/poi-button/poi-button.jsx\nvar poi_button = __webpack_require__(\"./Components/poi-button/poi-button.jsx\");\n\n// CONCATENATED MODULE: ./Components/poi-button/index.js\n\n/* harmony default export */ var Components_poi_button = (poi_button[\"a\" /* PoiButton */]);\n// EXTERNAL MODULE: ./Components/icon-message-content/index.js + 1 modules\nvar icon_message_content = __webpack_require__(\"./Components/icon-message-content/index.js\");\n\n// CONCATENATED MODULE: ./Components/poa-submitted/submitted.jsx\n\n\n\n        \n\n\n\n\n\nvar submitted_Submitted = function Submitted(_ref) {\n  var needs_poi = _ref.needs_poi,\n      _ref$is_description_d = _ref.is_description_disabled,\n      is_description_disabled = _ref$is_description_d === void 0 ? false : _ref$is_description_d;\n  var message = Object(translations_[\"localize\"])('Your proof of address was submitted successfully');\n\n  if (needs_poi) {\n    return /*#__PURE__*/external_react_default.a.createElement(icon_message_content[\"default\"], {\n      message: message,\n      icon: /*#__PURE__*/external_react_default.a.createElement(icon_default.a, {\n        icon: \"IcPoaVerified\",\n        size: 128\n      })\n    }, /*#__PURE__*/external_react_default.a.createElement(\"div\", {\n      className: \"account-management__text-container\"\n    }, /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n      className: \"account-management__text\"\n    }, Object(translations_[\"localize\"])('Your document is being reviewed, please check back in 1-3 days.')), /*#__PURE__*/external_react_default.a.createElement(\"p\", {\n      className: \"account-management__text\"\n    }, Object(translations_[\"localize\"])('You must also submit a proof of identity.'))), /*#__PURE__*/external_react_default.a.createElement(Components_poi_button, null));\n  }\n\n  return /*#__PURE__*/external_react_default.a.createElement(icon_message_content[\"default\"], {\n    message: message,\n    text: Object(translations_[\"localize\"])('Your document is being reviewed, please check back in 1-3 days.'),\n    icon: /*#__PURE__*/external_react_default.a.createElement(icon_default.a, {\n      icon: \"IcPoaVerified\",\n      size: 128\n    })\n  }, !is_description_disabled && /*#__PURE__*/external_react_default.a.createElement(continue_trading_button[\"a\" /* ContinueTradingButton */], null));\n};\n// CONCATENATED MODULE: ./Components/poa-submitted/index.js\n\n/* harmony default export */ var poa_submitted = __webpack_exports__[\"default\"] = (submitted_Submitted);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvYS1zdWJtaXR0ZWQvaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9pLWJ1dHRvbi9pbmRleC5qcz9jZTllIiwid2VicGFjazovL0BkZXJpdi9hY2NvdW50Ly4vQ29tcG9uZW50cy9wb2Etc3VibWl0dGVkL3N1Ym1pdHRlZC5qc3g/ZDAyOCIsIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9hLXN1Ym1pdHRlZC9pbmRleC5qcz8xMTBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvaUJ1dHRvbiB9IGZyb20gJy4vcG9pLWJ1dHRvbi5qc3gnO1xuXG5leHBvcnQgZGVmYXVsdCBQb2lCdXR0b247XG4iLCJpbXBvcnQgeyBJY29uIH0gZnJvbSAnQGRlcml2L2NvbXBvbmVudHMnO1xuaW1wb3J0IHsgbG9jYWxpemUgfSBmcm9tICdAZGVyaXYvdHJhbnNsYXRpb25zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBDb250aW51ZVRyYWRpbmdCdXR0b24gfSBmcm9tICdDb21wb25lbnRzL3BvYS1jb250aW51ZS10cmFkaW5nLWJ1dHRvbi9jb250aW51ZS10cmFkaW5nLWJ1dHRvbi5qc3gnO1xuaW1wb3J0IFBvaUJ1dHRvbiBmcm9tICdDb21wb25lbnRzL3BvaS1idXR0b24nO1xuaW1wb3J0IEljb25NZXNzYWdlQ29udGVudCBmcm9tICdDb21wb25lbnRzL2ljb24tbWVzc2FnZS1jb250ZW50JztcblxuZXhwb3J0IGNvbnN0IFN1Ym1pdHRlZCA9ICh7IG5lZWRzX3BvaSwgaXNfZGVzY3JpcHRpb25fZGlzYWJsZWQgPSBmYWxzZSB9KSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGxvY2FsaXplKCdZb3VyIHByb29mIG9mIGFkZHJlc3Mgd2FzIHN1Ym1pdHRlZCBzdWNjZXNzZnVsbHknKTtcbiAgICBpZiAobmVlZHNfcG9pKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8SWNvbk1lc3NhZ2VDb250ZW50IG1lc3NhZ2U9e21lc3NhZ2V9IGljb249ezxJY29uIGljb249J0ljUG9hVmVyaWZpZWQnIHNpemU9ezEyOH0gLz59PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX3RleHQtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhY2NvdW50LW1hbmFnZW1lbnRfX3RleHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2xvY2FsaXplKCdZb3VyIGRvY3VtZW50IGlzIGJlaW5nIHJldmlld2VkLCBwbGVhc2UgY2hlY2sgYmFjayBpbiAxLTMgZGF5cy4nKX1cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FjY291bnQtbWFuYWdlbWVudF9fdGV4dCc+e2xvY2FsaXplKCdZb3UgbXVzdCBhbHNvIHN1Ym1pdCBhIHByb29mIG9mIGlkZW50aXR5LicpfTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8UG9pQnV0dG9uIC8+XG4gICAgICAgICAgICA8L0ljb25NZXNzYWdlQ29udGVudD5cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25NZXNzYWdlQ29udGVudFxuICAgICAgICAgICAgbWVzc2FnZT17bWVzc2FnZX1cbiAgICAgICAgICAgIHRleHQ9e2xvY2FsaXplKCdZb3VyIGRvY3VtZW50IGlzIGJlaW5nIHJldmlld2VkLCBwbGVhc2UgY2hlY2sgYmFjayBpbiAxLTMgZGF5cy4nKX1cbiAgICAgICAgICAgIGljb249ezxJY29uIGljb249J0ljUG9hVmVyaWZpZWQnIHNpemU9ezEyOH0gLz59XG4gICAgICAgID5cbiAgICAgICAgICAgIHshaXNfZGVzY3JpcHRpb25fZGlzYWJsZWQgJiYgPENvbnRpbnVlVHJhZGluZ0J1dHRvbiAvPn1cbiAgICAgICAgPC9JY29uTWVzc2FnZUNvbnRlbnQ+XG4gICAgKTtcbn07XG4iLCJpbXBvcnQgeyBTdWJtaXR0ZWQgYXMgUG9hU3VibWl0dGVkIH0gZnJvbSAnLi9zdWJtaXR0ZWQuanN4JztcblxuZXhwb3J0IGRlZmF1bHQgUG9hU3VibWl0dGVkO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBOzs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUtBOztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFRQTs7Ozs7QUMvQkE7QUFFQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Components/poa-submitted/index.js\n");

/***/ }),

/***/ "./Components/poi-button/poi-button.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return PoiButton; });\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(\"@deriv/components/lib/button-link\");\n/* harmony import */ var _deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(\"@deriv/components/lib/button-link.css\");\n/* harmony import */ var _deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_deriv_components_lib_button_link_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(\"@deriv/translations\");\n/* harmony import */ var _deriv_translations__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(\"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n        \n\n\nvar PoiButton = function PoiButton() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_deriv_components_lib_button_link__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    to: \"/account/proof-of-identity\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\"p\", {\n    className: \"dc-btn__text\"\n  }, Object(_deriv_translations__WEBPACK_IMPORTED_MODULE_2__[\"localize\"])('Submit proof of identity')));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3BvaS1idXR0b24vcG9pLWJ1dHRvbi5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AZGVyaXYvYWNjb3VudC8uL0NvbXBvbmVudHMvcG9pLWJ1dHRvbi9wb2ktYnV0dG9uLmpzeD8zZmVlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJ1dHRvbkxpbmsgfSBmcm9tICdAZGVyaXYvY29tcG9uZW50cyc7XG5pbXBvcnQgeyBsb2NhbGl6ZSB9IGZyb20gJ0BkZXJpdi90cmFuc2xhdGlvbnMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IFBvaUJ1dHRvbiA9ICgpID0+IChcbiAgICA8QnV0dG9uTGluayB0bz0nL2FjY291bnQvcHJvb2Ytb2YtaWRlbnRpdHknPlxuICAgICAgICA8cCBjbGFzc05hbWU9J2RjLWJ0bl9fdGV4dCc+e2xvY2FsaXplKCdTdWJtaXQgcHJvb2Ygb2YgaWRlbnRpdHknKX08L3A+XG4gICAgPC9CdXR0b25MaW5rPlxuKTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRkE7OztBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/poi-button/poi-button.jsx\n");

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

/***/ "@deriv/shared":
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__deriv_shared__;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGRlcml2L3NoYXJlZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovL0BkZXJpdi9hY2NvdW50L2V4dGVybmFsIFwiQGRlcml2L3NoYXJlZFwiPzEzOTQiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19kZXJpdl9zaGFyZWRfXzsiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@deriv/shared\n");

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