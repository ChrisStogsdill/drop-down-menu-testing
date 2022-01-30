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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pictureMobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pictureMobile */ \"./src/pictureMobile.js\");\n\n\n(0,_pictureMobile__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://drop-down-menu-testing/./src/index.js?");

/***/ }),

/***/ "./src/pictureMobile.js":
/*!******************************!*\
  !*** ./src/pictureMobile.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pictureMobile)\n/* harmony export */ });\nfunction pictureMobile() {\n  const mobileDots = document.getElementById('mobile-dots-container').children;\n  const pictureList = document.querySelectorAll('.mobile-picture');\n  // find the current active picture\n  function findCurrentActiveMobilePicture() {\n    for (let i = 0; i < pictureList.length; i += 1) {\n      const pictureClassList = pictureList[i].classList.value;\n      if (pictureClassList.includes('mobile-picture-active')) {\n        // output the index location and the node element of the\n        // current active picture\n        const output = { index: i, node: pictureList[i] };\n        return output;\n      }\n    }\n    // return error in case for loop fails\n    return 'no active nodes';\n  }\n\n  // create function to clear all active pictures\n  function clearMobileActivePicture() {\n    for (let i = 0; i < pictureList.length; i += 1) {\n      pictureList[i].classList.remove('mobile-picture-active');\n    }\n  }\n\n  // creat function to clear selected dot\n  function clearMobileDotSelected() {\n    for (let i = 0; i < mobileDots.length; i += 1) {\n      mobileDots[i].classList.remove('selected-dot');\n    }\n  }\n\n  // create function to update selected dot\n  function updateSelectedDot() {\n    const currentPictureIndex = findCurrentActiveMobilePicture().index;\n    clearMobileDotSelected();\n    mobileDots[currentPictureIndex].classList.add('selected-dot');\n  }\n\n  // add eventListener for back button\n  const pictureMobileBackButton = document.getElementById('mobile-left-chevron');\n  pictureMobileBackButton.addEventListener('click', () => {\n    let currentPictureIndex = findCurrentActiveMobilePicture().index - 1;\n    // set index to end if it is -1\n    if (currentPictureIndex === -1) {\n      currentPictureIndex = pictureList.length - 1;\n    }\n    clearMobileActivePicture();\n    pictureList[currentPictureIndex].classList.add('mobile-picture-active');\n    updateSelectedDot();\n  });\n\n  // create forward function\n  function moveToNextPicture() {\n    let currentPictureIndex = findCurrentActiveMobilePicture().index + 1;\n    // check if it is the last picture\n    if (currentPictureIndex > pictureList.length - 1) {\n      currentPictureIndex = 0;\n    }\n    clearMobileActivePicture();\n    pictureList[currentPictureIndex].classList.add('mobile-picture-active');\n    updateSelectedDot();\n  }\n\n  // add eventListner for forward button\n  const pictureMobileForwardButton = document.getElementById('mobile-right-chevron');\n  pictureMobileForwardButton.addEventListener('click', () => {\n    moveToNextPicture();\n  });\n\n  // add eventListers for mobile-dots\n\n  for (let i = 0; i < mobileDots.length; i += 1) {\n    mobileDots[i].addEventListener('click', () => {\n      clearMobileActivePicture();\n      pictureList[i].classList.add('mobile-picture-active');\n      updateSelectedDot();\n    });\n  }\n\n  // set the interval for moving forward\n  const interval = setInterval(() => {\n    moveToNextPicture();\n  }, 5000);\n}\n\n\n//# sourceURL=webpack://drop-down-menu-testing/./src/pictureMobile.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;