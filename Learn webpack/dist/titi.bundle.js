/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-odd/index.js":
/*!**************************************!*\
  !*** ./node_modules/is-odd/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-odd <https://github.com/jonschlinkert/is-odd>\n *\n * Copyright (c) 2015-2017, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nconst isNumber = __webpack_require__(/*! is-number */ \"./node_modules/is-odd/node_modules/is-number/index.js\");\n\nmodule.exports = function isOdd(value) {\n  const n = Math.abs(value);\n  if (!isNumber(n)) {\n    throw new TypeError('expected a number');\n  }\n  if (!Number.isInteger(n)) {\n    throw new Error('expected an integer');\n  }\n  if (!Number.isSafeInteger(n)) {\n    throw new Error('value exceeds maximum safe integer');\n  }\n  return (n % 2) === 1;\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/is-odd/index.js?");

/***/ }),

/***/ "./node_modules/is-odd/node_modules/is-number/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/is-odd/node_modules/is-number/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*!\n * is-number <https://github.com/jonschlinkert/is-number>\n *\n * Copyright (c) 2014-2018, Jon Schlinkert.\n * Released under the MIT License.\n */\n\n\n\nmodule.exports = function isNumber(num) {\n  var number = +num;\n\n  if ((number - number) !== 0) {\n    // Discard Infinity and NaN\n    return false;\n  }\n\n  if (number === num) {\n    return true;\n  }\n\n  if (typeof num === 'string') {\n    // String parsed, both a non-empty whitespace string and an empty string\n    // will have been coerced to 0. If 0 trim the string and see if its empty.\n    if (number === 0 && num.trim() === '') {\n      return false;\n    }\n    return true;\n  }\n  return false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-odd/node_modules/is-number/index.js?");

/***/ }),

/***/ "./src/family.js":
/*!***********************!*\
  !*** ./src/family.js ***!
  \***********************/
/*! exports provided: hong, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hong\", function() { return hong; });\nconst hong = [\"emmy\", \"eden\", \"kousong\", \"kim\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\"hong\", \"khaov\", \"ching\"]);\n\n\n//# sourceURL=webpack:///./src/family.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var is_odd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-odd */ \"./node_modules/is-odd/index.js\");\n/* harmony import */ var is_odd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_odd__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _family__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./family */ \"./src/family.js\");\n/* harmony import */ var _sum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sum */ \"./src/sum.js\");\n // I know isOdd is a useless package I can code it myself but this is just to try npm packages\n\n\n\n\n// default import\n// named import\n\nconsole.log(\"chingo\");\nconsole.log(_family__WEBPACK_IMPORTED_MODULE_1__[\"hong\"]);\nconsole.log(_family__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\nconsole.log(Object(_sum__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(5, 15));\nconsole.log(Object(_sum__WEBPACK_IMPORTED_MODULE_2__[\"minus\"])(10, 8));\n\nconsole.log(is_odd__WEBPACK_IMPORTED_MODULE_0___default()(104));\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/*! exports provided: default, minus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minus\", function() { return minus; });\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (a, b) {\n  return a + b;\n});\n\nfunction minus(a, b) {\n  return a - b;\n}\n\n\n//# sourceURL=webpack:///./src/sum.js?");

/***/ })

/******/ });