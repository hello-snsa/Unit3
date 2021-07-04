/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction navbar()\r\n{\r\n    return ` <div id=\"navbar\">\r\n\r\n    <h3><a href=\"index.html\">Home</a></h3>\r\n    \r\n    <div class=\"options\">\r\n        \r\n        <h3><a href=\"jewellary.html\">Jewelary</a></h3>\r\n        <h3><a href=\"electronics.html\">Electronics</a></h3>\r\n        <h3><a href=\"#\">Sign Up</a></h3>\r\n        <h3><a href=\"#\">Sign In</a></h3>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>\r\n\r\n<div id=\"cont\" ></div>\r\n     \r\n    `\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);\n\n//# sourceURL=webpack://webpack-demo/./components/navbar.js?");

/***/ }),

/***/ "./src/electronics.js":
/*!****************************!*\
  !*** ./src/electronics.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\nconsole.log(\"script electronics.js is working.\")\r\n\r\n\r\n\r\n//importing\r\n\r\n;\r\n\r\n// document.body.innerHTML=navbar();\r\nlet nav=document.getElementById('nav')\r\nnav=(0,_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n\r\n//declaring global variables\r\n// var parent = document.getElementById('parent');\r\nvar parent = document.getElementById('cont');\r\n// var parent = document.body;\r\n\r\n//calling main function\r\ngetData();\r\n\r\n//getting data\r\nasync function getData(){\r\n\r\n    let res = await fetch('https://fakestoreapi.com/products/category/electronics?limit=10');\r\n    \r\n    let data = await res.json();\r\n    console.log(\"data\",data);\r\n    // return data;\r\n    appendIt(data);\r\n\r\n}\r\n\r\n//append result to page\r\nfunction appendIt(d){\r\n\r\n    // d.forEach(({title,image,price}) =>{\r\n    for(var x in d){\r\n       \r\n\r\n        let Div = document.createElement('div');\r\n\r\n        let t= document.createElement('p');\r\n        t.innerText= d[x].title;\r\n       \r\n        let p= document.createElement('p');\r\n        p.innerText= 'Rs. '+ d[x].price;\r\n\r\n        let img = document.createElement('img');\r\n        img.src= d[x].image;\r\n\r\n        Div.append(img,p,t);\r\n        parent.append(Div);\r\n\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack-demo/./src/electronics.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/electronics.js");
/******/ 	
/******/ })()
;