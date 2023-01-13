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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initial-page-load.js */ \"./src/initial-page-load.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nconsole.log(\"You are Heartly Welcome To Our Restaurant\");\nconsole.log(\"Here is the MENU\")\n\n_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad();\n\nlet tabSwitchingModule=(function()\n{\n    const homeTab=document.querySelector(\".home\");\n    homeTab.addEventListener(\"click\",_initial_page_load_js__WEBPACK_IMPORTED_MODULE_0__.initialPageLoad);\n\n    const menuTab=document.querySelector(\".menu\");\n    menuTab.addEventListener(\"click\",_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu);\n})();\n\n//# sourceURL=webpack://restaurant_site/./src/index.js?");

/***/ }),

/***/ "./src/initial-page-load.js":
/*!**********************************!*\
  !*** ./src/initial-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"initialPageLoad\": () => (/* binding */ initialPageLoad)\n/* harmony export */ });\nfunction initialPageLoad()\n{\n    const contentDiv=document.querySelector(\"#content\");\n\n    const navbar=document.createElement('nav');\n\n    const banner=document.createElement(\"div\");\n    banner.classList.add(\"banner\");\n\n    contentDiv.appendChild(navbar);\n    contentDiv.append(banner);\n\n    const navHead=document.createElement(\"h1\");\n    navHead.textContent=\"Eat-O-Food\";\n    navHead.classList.add(\"nav-heading\");\n\n    const ul=document.createElement(\"ul\");\n\n    const linkList1=document.createElement(\"li\");\n    linkList1.textContent=\"Home\";\n    linkList1.classList.add(\"link\",\"home\",\"current\");\n   \n\n    const linkList2=document.createElement(\"li\");\n    linkList2.textContent=\"Menu\";\n    linkList2.classList.add(\"link\",\"menu\");\n\n    const linkList3=document.createElement(\"li\");\n    linkList3.textContent=\"Contact\";\n    linkList3.classList.add(\"link\",\"contact\");\n\n    navbar.appendChild(navHead);\n    navbar.appendChild(ul);\n\n\n    ul.append(linkList1);\n    ul.append(linkList2);\n    ul.append(linkList3);\n\n    const area=document.createElement(\"div\");\n    area.classList.add(\"area\");\n\n    const bannerHead=document.createElement(\"h1\");\n    bannerHead.classList.add(\"heading\");\n    bannerHead.textContent=\"Come on down for some delicious cuisine!\";\n\n    const bannerHeading2=document.createElement(\"h2\");\n    bannerHeading2.textContent=\"Tasty and Affordable\";\n\n    const btnLink=document.createElement(\"a\")\n    btnLink.textContent=\"Order Now\"\n    btnLink.classList.add(\"btn\");\n\n    banner.append(area);\n    \n    area.append(bannerHead);\n    area.append(bannerHeading2);\n    area.append(btnLink);\n\n\n\n\n\n}\n\n//# sourceURL=webpack://restaurant_site/./src/initial-page-load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nfunction menu()\n{\n    const contentDiv=document.querySelector(\"#content\");\n    contentDiv.replaceChildren();\n\n    const navbar=document.createElement('nav');\n\n    const bannered=document.createElement(\"div\");\n    bannered.classList.add(\"menubanner\");\n\n    contentDiv.appendChild(navbar);\n    contentDiv.append(bannered);\n\n    const navHead=document.createElement(\"h1\");\n    navHead.textContent=\"Eat-O-Food\";\n    navHead.classList.add(\"nav-heading\");\n\n    const ul=document.createElement(\"ul\");\n\n    const linkList1=document.createElement(\"li\");\n    linkList1.textContent=\"Home\";\n    linkList1.classList.add(\"link\",\"home\");\n   \n\n    const linkList2=document.createElement(\"li\");\n    linkList2.textContent=\"Menu\";\n    linkList2.classList.add(\"link\",\"menu\",\"current\");\n\n    const linkList3=document.createElement(\"li\");\n    linkList3.textContent=\"Contact\";\n    linkList3.classList.add(\"link\",\"contact\");\n\n    navbar.appendChild(navHead);\n    navbar.appendChild(ul);\n\n\n    ul.append(linkList1);\n    ul.append(linkList2);\n    ul.append(linkList3);\n\n    const menuArea=document.createElement(\"div\");\n    menuArea.classList.add(\"menuArea\");\n    bannered.append(menuArea);\n\n    const menuHeading=document.createElement(\"h1\");\n    menuHeading.textContent=\"Menu\";\n    menuHeading.classList.add(\"menuHead\");\n    menuArea.append(menuHeading);\n\n    const menuList=document.createElement(\"div\");\n    menuList.classList.add(\"menuList\");\n    menuArea.append(menuList);\n\n   const item1=document.createElement(\"div\");\n   item1.classList.add(\"item\");\n   menuList.append(item1);\n\n   const food1img=document.createElement(\"image\");\n   food1img.innerHTML=\"<img src='../src/assets/burger1.jpg' width='160px' height='130px'>\";\n    food1img.classList.add(\"img\");\n   item1.appendChild(food1img);\n\n   const food1Description=document.createElement(\"h2\");\n   food1Description.textContent=\"Hamburger\";\n   food1Description.classList.add(\"foodHead\");\n   food1img.append(food1Description);\n\n   const food2img=document.createElement(\"image\");\n   food2img.innerHTML=\"<img src='../src/assets/burger2.jpg' width='160px' height='130px'>\";\n   food2img.classList.add(\"img\");\n   item1.appendChild(food2img);\n\n   const food2Description=document.createElement(\"h2\");\n   food2Description.textContent=\"CheeseBurger\";\n   food2Description.classList.add(\"foodHead\");\n   food2img.append(food2Description);\n\n   const food3img=document.createElement(\"image\");\n   food3img.innerHTML=\"<img src='../src/assets/burger3.jpg' width='160px' height='130px'>\";\n   food3img.classList.add(\"img\");\n   item1.appendChild(food3img);\n\n   const food3Description=document.createElement(\"h2\");\n   food3Description.textContent=\"Double CheeseBurger\";\n   food3Description.classList.add(\"foodHead\");\n   food3img.append(food3Description);\n\n   const food4img=document.createElement(\"image\");\n   food4img.innerHTML=\"<img src='../src/assets/burger4.jpg' width='160px' height='130px'>\";\n   food4img.classList.add(\"img\");\n   item1.appendChild(food4img);\n\n   const food4Description=document.createElement(\"h2\");\n   food4Description.textContent=\"Steak Burger\";\n   food4Description.classList.add(\"foodHead\");\n   food4img.append(food4Description);\n\n\n   const food5img=document.createElement(\"image\");\n   food5img.innerHTML=\"<img src='../src/assets/burger5.jpg' width='160px' height='130px'>\";\n   food5img.classList.add(\"img\");\n   item1.appendChild(food5img);\n\n   const food5Description=document.createElement(\"h2\");\n   food5Description.textContent=\"Double Deck HamBurger\";\n   food5Description.classList.add(\"foodHead\");\n   food5img.append(food5Description);\n\n   const food6img=document.createElement(\"image\");\n   food6img.innerHTML=\"<img src='../src/assets/burger6.jpg' width='160px' height='130px'>\";\n   food6img.classList.add(\"img\");\n   item1.appendChild(food6img);\n\n   const food6Description=document.createElement(\"h2\");\n   food6Description.textContent=\"Special Burger\";\n   food6Description.classList.add(\"foodHead\");\n   food6img.append(food6Description);\n\n\n\n\n}\n\n//# sourceURL=webpack://restaurant_site/./src/menu.js?");

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