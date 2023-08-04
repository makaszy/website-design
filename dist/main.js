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
/* harmony export */   deleteShowreelBlock: () => (/* binding */ deleteShowreelBlock)
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
function setProject(project) {
  document.querySelector(".p-showreel__img").setAttribute("src", project.image);
  document.querySelector(".p-showreel__img").setAttribute("alt", project.alt);
  document.querySelector(".p-showreel__title").textContent = project.title;
}
async function postProject(project) {
  setProject(project);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWU7Ozs7Ozs7Ozs7Ozs7OztBQzlCOUIsTUFBTW1DLE9BQU8sQ0FBQztFQUNaQyxXQUFXQSxDQUFDckIsS0FBSyxFQUFFTixLQUFLLEVBQUVtQixHQUFHLEVBQUU7SUFDN0IsSUFBSSxDQUFDYixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDTixLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDbUIsR0FBRyxHQUFHQSxHQUFHO0VBQ2hCO0FBQ0Y7QUFDQSxNQUFNN0IsUUFBUSxHQUFHLENBQ2YsSUFBSW9DLE9BQU8sQ0FDVCxrQkFBa0IsRUFDbEIsaUNBQWlDLEVBQ2pDLHVDQUNGLENBQUMsRUFDRCxJQUFJQSxPQUFPLENBQ1QsYUFBYSxFQUNiLGlDQUFpQyxFQUNqQyx1Q0FDRixDQUFDLEVBQ0QsSUFBSUEsT0FBTyxDQUNULGNBQWMsRUFDZCxpQ0FBaUMsRUFDakMsdUNBQ0YsQ0FBQyxDQUNGO0FBRUQsaUVBQWVwQyxRQUFROzs7Ozs7VUN6QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovL3dlYnNpdGUtZGVzaWduLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0L21haW4vX21haW4tc2hvd3JlZWwuanMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1kZXNpZ24vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQvbWFpbi9zaG93cmVlbC9fZGlzcGxheS5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL3Nob3dyZWVsL19sb2dpYy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi8uL3NyYy9jb21wb25lbnRzL2xheW91dC9tYWluL3Nob3dyZWVsL19wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2Vic2l0ZS1kZXNpZ24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJzaXRlLWRlc2lnbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnNpdGUtZGVzaWduLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbWJ1cmdlciBNZW51IEJ0blxuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlci1kaXZfX2J0blwiKTtcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX19uYXZcIik7XG5jb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIjpyb290XCIpO1xuXG5idG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgYnRuLmNsYXNzTGlzdC50b2dnbGUoXCJvcGVuXCIpO1xuICBuYXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlbi1uYXZcIik7XG4gIHJvb3QuY2xhc3NMaXN0LnRvZ2dsZSgnZGFyaycpO1xufSk7XG4iLCJpbXBvcnQgcHJvamVjdHMgZnJvbSBcIi4vc2hvd3JlZWwvX3Byb2plY3RzXCI7XG5pbXBvcnQgcG9zdEFsbFByb2plY3RzIGZyb20gXCIuL3Nob3dyZWVsL19sb2dpY1wiO1xuXG5jb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ0bi0tc2hvd3JlZWxcIik7XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwb3N0QWxsUHJvamVjdHMocHJvamVjdHMpO1xufSkiLCJmdW5jdGlvbiBjcmVhdGVEaXYoY2xhc3NOYW1lKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdk91dGVyKCkge1xuICBjb25zdCBkaXYgPSBjcmVhdGVEaXYoYG1haW5fX3Nob3dyZWVsLS1vdXRlcmApO1xuICAvKiBkaXYuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTsgKi9cbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwLW1haW5fX3Nob3dyZWVsLS1vdXRlclwiKTtcbiAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGl2SW5uZXIoKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdihgbWFpbl9fc2hvd3JlZWwtLWlubmVyYCk7XG4gIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltZygpIHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwicC1zaG93cmVlbF9faW1nXCIpO1xuICByZXR1cm4gaW1hZ2U7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJzaG93cmVlbF9fdGl0bGVcIiwgXCJwLXNob3dyZWVsX190aXRsZVwiKTtcbiAgcmV0dXJuIGhlYWRpbmc7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVNob3dyZWVsQmxvY2soKSB7XG4gIGNvbnN0IGRpdiA9IGNyZWF0ZURpdk91dGVyKCk7XG4gIGNvbnN0IGRpdkluID0gY3JlYXRlRGl2SW5uZXIoKTtcbiAgY29uc3QgaW1nID0gY3JlYXRlSW1nKCk7XG4gIGNvbnN0IHRpdGxlID0gY3JlYXRlVGl0bGUoKTtcbiAgZGl2LmFwcGVuZENoaWxkKGRpdkluKTtcbiAgZGl2SW4uYXBwZW5kQ2hpbGQoaW1nKTtcbiAgZGl2SW4uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICByZXR1cm4gZGl2O1xufVxuXG5mdW5jdGlvbiBkZWxldGVTaG93cmVlbEJsb2NrKCkge1xuICBjb25zdCBzaG93cmVlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5tYWluX19zaG93cmVlbC0tb3V0ZXJgKTtcbiAgc2hvd3JlZWwucmVtb3ZlKCk7XG59XG5cblxuZXhwb3J0IHtjcmVhdGVTaG93cmVlbEJsb2NrLCBkZWxldGVTaG93cmVlbEJsb2NrfSBcbiIsImltcG9ydCB7IGNyZWF0ZVNob3dyZWVsQmxvY2ssIGRlbGV0ZVNob3dyZWVsQmxvY2sgfSBmcm9tIFwiLi9fZGlzcGxheVwiO1xuXG5mdW5jdGlvbiBkZWxheSh0aW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIHRpbWUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHNldFByb2plY3QocHJvamVjdCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnAtc2hvd3JlZWxfX2ltZ1wiKS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgcHJvamVjdC5pbWFnZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1zaG93cmVlbF9faW1nXCIpLnNldEF0dHJpYnV0ZShcImFsdFwiLCBwcm9qZWN0LmFsdCk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucC1zaG93cmVlbF9fdGl0bGVcIikudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0UHJvamVjdChwcm9qZWN0KSB7XG4gIHNldFByb2plY3QocHJvamVjdCk7XG4gIGF3YWl0IGRlbGF5KDIwMDApO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwb3N0QWxsUHJvamVjdHMoYXJyKSB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgY29uc3QgZGl2ID0gY3JlYXRlU2hvd3JlZWxCbG9jaygpO1xuICBtYWluLmFwcGVuZENoaWxkKGRpdik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICBhd2FpdCBwb3N0UHJvamVjdChhcnJbaV0pO1xuICB9XG4gIGRlbGV0ZVNob3dyZWVsQmxvY2soKTtcbn0gXG5cbmV4cG9ydCBkZWZhdWx0IHBvc3RBbGxQcm9qZWN0cztcbiIsImNsYXNzIFByb2plY3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgaW1hZ2UsIGFsdCkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gICAgdGhpcy5hbHQgPSBhbHQ7XG4gIH1cbn1cbmNvbnN0IHByb2plY3RzID0gW1xuICBuZXcgUHJvamVjdChcbiAgICBcIkZhc2hpb24gTWFnYXppbmVcIixcbiAgICBcIi4uL3NyYy9pbWFnZXMvc3RvY2stMS0tdGFsbC5qcGdcIixcbiAgICBcIlBlcnNvbiBzaXR0aW5nIGluIGZhc2hpb25hYmxlIGNsb3RoZXNcIlxuICApLFxuICBuZXcgUHJvamVjdChcbiAgICBcIlNwb3J0IEJyYW5kXCIsXG4gICAgXCIuLi9zcmMvaW1hZ2VzL3N0b2NrLTItLXRhbGwuanBnXCIsXG4gICAgXCJQZXJzb24gc2l0dGluZyBpbiBmYXNoaW9uYWJsZSBjbG90aGVzXCJcbiAgKSxcbiAgbmV3IFByb2plY3QoXG4gICAgXCJGb29kIFByb2R1Y3RcIixcbiAgICBcIi4uL3NyYy9pbWFnZXMvc3RvY2stMy0tdGFsbC5qcGdcIixcbiAgICBcIlBlcnNvbiBzaXR0aW5nIGluIGZhc2hpb25hYmxlIGNsb3RoZXNcIlxuICApLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdHM7ICAiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIvaGVhZGVyXCI7XG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvbGF5b3V0L21haW4vX21haW4tc2hvd3JlZWxcIjtcbiJdLCJuYW1lcyI6WyJidG4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJyb290IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsInByb2plY3RzIiwicG9zdEFsbFByb2plY3RzIiwiY3JlYXRlRGl2IiwiY2xhc3NOYW1lIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImNyZWF0ZURpdk91dGVyIiwiY3JlYXRlRGl2SW5uZXIiLCJjcmVhdGVJbWciLCJpbWFnZSIsImNyZWF0ZVRpdGxlIiwiaGVhZGluZyIsImNyZWF0ZVNob3dyZWVsQmxvY2siLCJkaXZJbiIsImltZyIsInRpdGxlIiwiYXBwZW5kQ2hpbGQiLCJkZWxldGVTaG93cmVlbEJsb2NrIiwic2hvd3JlZWwiLCJyZW1vdmUiLCJkZWxheSIsInRpbWUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzZXRQcm9qZWN0IiwicHJvamVjdCIsInNldEF0dHJpYnV0ZSIsImFsdCIsInRleHRDb250ZW50IiwicG9zdFByb2plY3QiLCJhcnIiLCJtYWluIiwiaSIsImxlbmd0aCIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciJdLCJzb3VyY2VSb290IjoiIn0=