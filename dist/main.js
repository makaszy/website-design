/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/layout/header/header.js":
/*!************************************************!*\
  !*** ./src/components/layout/header/header.js ***!
  \************************************************/
/***/ (() => {

// Hamburger Menu Btn

const btn = document.querySelector(".header-div__btn");
const nav = document.querySelector(".header__nav");
const root = document.querySelector(":root");
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden-nav");
  root.classList.toggle('dark');
});

/***/ }),

/***/ "./src/components/layout/main/_main-showreel.js":
/*!******************************************************!*\
  !*** ./src/components/layout/main/_main-showreel.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _showreel_projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./showreel/_projects */ "./src/components/layout/main/showreel/_projects.js");
/* harmony import */ var _showreel_logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showreel/_logic */ "./src/components/layout/main/showreel/_logic.js");


const btn = document.querySelector(".btn--showreel");
btn.addEventListener("click", () => {
  (0,_showreel_logic__WEBPACK_IMPORTED_MODULE_1__["default"])(_showreel_projects__WEBPACK_IMPORTED_MODULE_0__["default"]);
});

/***/ }),

/***/ "./src/components/layout/main/showreel/_display.js":
/*!*********************************************************!*\
  !*** ./src/components/layout/main/showreel/_display.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createShowreelBlock: () => (/* binding */ createShowreelBlock),
/* harmony export */   deleteShowreelBlock: () => (/* binding */ deleteShowreelBlock),
/* harmony export */   setProject: () => (/* binding */ setProject)
/* harmony export */ });
function createDiv(className) {
  const div = document.createElement("div");
  div.classList.add(className);
  return div;
}
function createDivOuter() {
  const div = createDiv(`main__showreel--outer`);
  /* div.classList.toggle("hidden"); */
  div.classList.add("p-main__showreel--outer");
  return div;
}
function createDivInner() {
  const div = createDiv(`main__showreel--inner`);
  return div;
}
function createImg() {
  const image = document.createElement("img");
  image.classList.add("p-showreel__img");
  return image;
}
function createTitle() {
  const heading = document.createElement("h2");
  heading.classList.add("showreel__title", "p-showreel__title");
  return heading;
}
function setProject(project) {
  document.querySelector(".p-showreel__img").setAttribute("src", project.image);
  document.querySelector(".p-showreel__img").setAttribute("alt", project.alt);
  document.querySelector(".p-showreel__title").textContent = project.title;
}
function createShowreelBlock() {
  const div = createDivOuter();
  const divIn = createDivInner();
  const img = createImg();
  const title = createTitle();
  div.appendChild(divIn);
  divIn.appendChild(img);
  divIn.appendChild(title);
  return div;
}
function deleteShowreelBlock() {
  const showreel = document.querySelector(`.main__showreel--outer`);
  showreel.remove();
}


/***/ }),

/***/ "./src/components/layout/main/showreel/_logic.js":
/*!*******************************************************!*\
  !*** ./src/components/layout/main/showreel/_logic.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_display */ "./src/components/layout/main/showreel/_display.js");

function delay(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  });
}
async function postProject(project) {
  (0,_display__WEBPACK_IMPORTED_MODULE_0__.setProject)(project);
  await delay(2000);
}
async function postAllProjects(arr) {
  const main = document.querySelector("main");
  const div = (0,_display__WEBPACK_IMPORTED_MODULE_0__.createShowreelBlock)();
  main.appendChild(div);
  for (let i = 0; i < arr.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    await postProject(arr[i]);
  }
  (0,_display__WEBPACK_IMPORTED_MODULE_0__.deleteShowreelBlock)();
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postAllProjects);

/***/ }),

/***/ "./src/components/layout/main/showreel/_projects.js":
/*!**********************************************************!*\
  !*** ./src/components/layout/main/showreel/_projects.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Project {
  constructor(title, image, alt) {
    this.title = title;
    this.image = image;
    this.alt = alt;
  }
}
const projects = [new Project("Fashion Magazine", "../src/images/stock-1--tall.jpg", "Person sitting in fashionable clothes"), new Project("Sport Brand", "../src/images/stock-2--tall.jpg", "Person sitting in fashionable clothes"), new Project("Food Product", "../src/images/stock-3--tall.jpg", "Person sitting in fashionable clothes")];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_layout_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/layout/header/header */ "./src/components/layout/header/header.js");
/* harmony import */ var _components_layout_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_layout_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_main_main_showreel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/layout/main/_main-showreel */ "./src/components/layout/main/_main-showreel.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dEIsZUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDeEI5QixNQUFNbUMsT0FBTyxDQUFDO0VBQ1pDLFdBQVdBLENBQUNuQixLQUFLLEVBQUVSLEtBQUssRUFBRU0sR0FBRyxFQUFFO0lBQzdCLElBQUksQ0FBQ0UsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ1IsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ00sR0FBRyxHQUFHQSxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQSxNQUFNaEIsUUFBUSxHQUFHLENBQ2YsSUFBSW9DLE9BQU8sQ0FDVCxrQkFBa0IsRUFDbEIsaUNBQWlDLEVBQ2pDLHVDQUNGLENBQUMsRUFDRCxJQUFJQSxPQUFPLENBQ1QsYUFBYSxFQUNiLGlDQUFpQyxFQUNqQyx1Q0FDRixDQUFDLEVBQ0QsSUFBSUEsT0FBTyxDQUNULGNBQWMsRUFDZCxpQ0FBaUMsRUFDakMsdUNBQ0YsQ0FBQyxDQUNGO0FBRUQsaUVBQWVwQyxRQUFROzs7Ozs7VUN6QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtZGVzaWduLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L21haW4vX21haW4tc2hvd3JlZWwuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1kZXNpZ24vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbWFpbi9zaG93cmVlbC9fZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL3Nob3dyZWVsL19sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL3Nob3dyZWVsL19wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1kZXNpZ24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtZGVzaWduLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbWJ1cmdlciBNZW51IEJ0blxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1kaXZfX2J0blwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZcIik7XG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlbi1uYXZcIik7XG4gIHJvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xufSk7XG4iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vc2hvd3JlZWwvX3Byb2plY3RzXCI7XG5pbXBvcnQgcG9zdEFsbFByb2plY3RzIGZyb20gXCIuL3Nob3dyZWVsL19sb2dpY1wiO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tc2hvd3JlZWxcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3N0QWxsUHJvamVjdHMocHJvamVjdHMpO1xufSkiLCJmdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdk91dGVyKCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoYG1haW5fX3Nob3dyZWVsLS1vdXRlcmApO1xuICAvKiBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTsgKi9cbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwLW1haW5fX3Nob3dyZWVsLS1vdXRlclwiKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2SW5uZXIoKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdihgbWFpbl9fc2hvd3JlZWwtLWlubmVyYCk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZygpIHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicC1zaG93cmVlbF9faW1nXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJzaG93cmVlbF9fdGl0bGVcIiwgXCJwLXNob3dyZWVsX190aXRsZVwiKTtcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3QocHJvamVjdCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtc2hvd3JlZWxfX2ltZ1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvamVjdC5pbWFnZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1zaG93cmVlbF9faW1nXCIpLnNldEF0dHJpYnV0ZShcImFsdFwiLCBwcm9qZWN0LmFsdCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1zaG93cmVlbF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVTaG93cmVlbEJsb2NrKCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXZPdXRlcigpO1xuICBjb25zdCBkaXZJbiA9IGNyZWF0ZURpdklubmVyKCk7XG4gIGNvbnN0IGltZyA9IGNyZWF0ZUltZygpO1xuICBjb25zdCB0aXRsZSA9IGNyZWF0ZVRpdGxlKCk7XG4gIGRpdi5hcHBlbmRDaGlsZChkaXZJbik7XG4gIGRpdkluLmFwcGVuZENoaWxkKGltZyk7XG4gIGRpdkluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gZGVsZXRlU2hvd3JlZWxCbG9jaygpIHtcbiAgY29uc3Qgc2hvd3JlZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAubWFpbl9fc2hvd3JlZWwtLW91dGVyYCk7XG4gIHNob3dyZWVsLnJlbW92ZSgpO1xufVxuXG5leHBvcnQge2NyZWF0ZVNob3dyZWVsQmxvY2ssIGRlbGV0ZVNob3dyZWVsQmxvY2ssIHNldFByb2plY3R9IFxuIiwiaW1wb3J0IHsgY3JlYXRlU2hvd3JlZWxCbG9jaywgZGVsZXRlU2hvd3JlZWxCbG9jaywgc2V0UHJvamVjdCB9IGZyb20gXCIuL19kaXNwbGF5XCI7XG5cbmZ1bmN0aW9uIGRlbGF5KHRpbWUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgIHNldFRpbWVvdXQocmVzb2x2ZSwgdGltZSlcbiAgfSlcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdFByb2plY3QocHJvamVjdCkge1xuICBzZXRQcm9qZWN0KHByb2plY3QpO1xuICBhd2FpdCBkZWxheSgyMDAwKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcG9zdEFsbFByb2plY3RzKGFycikge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZVNob3dyZWVsQmxvY2soKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChkaXYpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1hd2FpdC1pbi1sb29wXG4gICAgYXdhaXQgcG9zdFByb2plY3QoYXJyW2ldKTtcbiAgfVxuICBkZWxldGVTaG93cmVlbEJsb2NrKCk7XG59IFxuXG5leHBvcnQgZGVmYXVsdCBwb3N0QWxsUHJvamVjdHM7XG4iLCJjbGFzcyBQcm9qZWN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGltYWdlLCBhbHQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICAgIHRoaXMuYWx0ID0gYWx0O1xuICB9XG59XG5jb25zdCBwcm9qZWN0cyA9IFtcbiAgbmV3IFByb2plY3QoXG4gICAgXCJGYXNoaW9uIE1hZ2F6aW5lXCIsXG4gICAgXCIuLi9zcmMvaW1hZ2VzL3N0b2NrLTEtLXRhbGwuanBnXCIsXG4gICAgXCJQZXJzb24gc2l0dGluZyBpbiBmYXNoaW9uYWJsZSBjbG90aGVzXCJcbiAgKSxcbiAgbmV3IFByb2plY3QoXG4gICAgXCJTcG9ydCBCcmFuZFwiLFxuICAgIFwiLi4vc3JjL2ltYWdlcy9zdG9jay0yLS10YWxsLmpwZ1wiLFxuICAgIFwiUGVyc29uIHNpdHRpbmcgaW4gZmFzaGlvbmFibGUgY2xvdGhlc1wiXG4gICksXG4gIG5ldyBQcm9qZWN0KFxuICAgIFwiRm9vZCBQcm9kdWN0XCIsXG4gICAgXCIuLi9zcmMvaW1hZ2VzL3N0b2NrLTMtLXRhbGwuanBnXCIsXG4gICAgXCJQZXJzb24gc2l0dGluZyBpbiBmYXNoaW9uYWJsZSBjbG90aGVzXCJcbiAgKSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3RzOyAgIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlclwiO1xuaW1wb3J0IFwiLi9jb21wb25lbnRzL2xheW91dC9tYWluL19tYWluLXNob3dyZWVsXCI7XG4iXSwibmFtZXMiOlsiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibmF2Iiwicm9vdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJwcm9qZWN0cyIsInBvc3RBbGxQcm9qZWN0cyIsImNyZWF0ZURpdiIsImNsYXNzTmFtZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJjcmVhdGVEaXZPdXRlciIsImNyZWF0ZURpdklubmVyIiwiY3JlYXRlSW1nIiwiaW1hZ2UiLCJjcmVhdGVUaXRsZSIsImhlYWRpbmciLCJzZXRQcm9qZWN0IiwicHJvamVjdCIsInNldEF0dHJpYnV0ZSIsImFsdCIsInRleHRDb250ZW50IiwidGl0bGUiLCJjcmVhdGVTaG93cmVlbEJsb2NrIiwiZGl2SW4iLCJpbWciLCJhcHBlbmRDaGlsZCIsImRlbGV0ZVNob3dyZWVsQmxvY2siLCJzaG93cmVlbCIsInJlbW92ZSIsImRlbGF5IiwidGltZSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInBvc3RQcm9qZWN0IiwiYXJyIiwibWFpbiIsImkiLCJsZW5ndGgiLCJQcm9qZWN0IiwiY29uc3RydWN0b3IiXSwic291cmNlUm9vdCI6IiJ9