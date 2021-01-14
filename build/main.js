/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scss/index.scss":
/*!*************************!*\
  !*** ./scss/index.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/index.scss */ "./scss/index.scss");


const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;

const portfolio = [
  {
    name: 'fancy-weather',
    icon: '../assets/icons/fancy-weather_icon-min.png',
    description: 'lorem ipsum',
    linkGit: 'https://github.com/AndreiMilashevich/rsschool-cv/tree/fancy-weather',
    linkDemo: 'https://andreimilashevich.github.io/rsschool-cv/fancy-weather/build/index.html',
  },
  {
    name: 'Simple-singolo',
    icon: '../assets/icons/singolo_icon-min.png',
    description: 'lorem ipsum',
    linkGit: 'https://github.com/AndreiMilashevich/simple-singolo',
    linkDemo: 'https://andreimilashevich.github.io/simple-singolo/simple-singolo/index',
  },
  {
    name: 'Raindrops',
    icon: '../assets/icons/raindrops-min.png',
    description: 'lorem ipsum',
    linkGit: 'https://github.com/AndreiMilashevich/raindrops',
    linkDemo: 'https://andreimilashevich.github.io/raindrops/raindrops/build/index',
  },
];

const skills = [
  { description: 'HTML5', icon: '../assets/icons/html5_icon.png' },
  { description: 'CSS3', icon: '../assets/icons/css3_icon.png' },
  { description: 'JavaScript', icon: '../assets/icons/js_icon.png' },
  { description: 'SASS', icon: '../assets/icons/sass_icon.png' },
  { description: 'Git', icon: '../assets/icons/git_icon.png' },
  { description: 'GitHub', icon: '../assets/icons/github_icon.png' },
  { description: 'Webpack', icon: '../assets/icons/webpack_icon.png' },
];

const technologies = [
  { name: 'All' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'SASS' },
  { name: 'JS' },
  { name: 'Webpack' },
];

function setSkills(data) {
  data.forEach((element, index) => {
    const divContainer = document.createElement('div');
    const div = document.createElement('div');
    const p = document.createElement('p');
    divContainer.className = 'skills_item';
    divContainer.setAttribute('data-aos', 'flip-left');
    divContainer.setAttribute('data-aos-delay', index * skillsDelay);
    divContainer.setAttribute('data-aos-duration', 1000);
    div.className = 'skills_image';
    p.className = 'skills_description';
    div.style.backgroundImage = `url(${element.icon})`;
    p.textContent = element.description;
    divContainer.appendChild(div);
    divContainer.appendChild(p);
    skillsContainer.appendChild(divContainer);
  });
}

function setPortfolioButton(data) {
  data.forEach((element, index) => {
    const div = document.createElement('div');
    div.className = 'portfolio_button_item';
    div.textContent = element.name;
    div.setAttribute('data-aos', 'fade-down');
    div.setAttribute('data-aos-delay', (index * skillsDelay) / 2);
    div.setAttribute('data-aos-duration', 500);
    portfolioButtonContainer.appendChild(div);
  });
}

setSkills(skills);
setPortfolioButton(technologies);

function setPortfolioItem(data) {
  data.forEach((element, index) => {
    let side;
    if (index % 2 === 0) {
      side = 'left';
    } else {
      side = 'right';
    }
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="fade-${side}" data-aos-duration="1000" data-aos-anchor-placement="center-bottom">
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')"></div>
      <div class="portfolio_item_description"><p>${element.description}</p></div>  
    </div>
    <div class="portfolio_item_button_container button" >
      <a href="${element.linkDemo}">
        <div class="portfolio_button_item">Demo</div>
      </a>
      <a href="${element.linkGit}">
        <div class="portfolio_button_item">GitHub</div>
      </a>
    </div>
  </div>`);
  });
}
setPortfolioItem(portfolio);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./scripts/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsMkRBQTJEO0FBQzlELEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsbUVBQW1FO0FBQ3RFOztBQUVBO0FBQ0EsR0FBRyxjQUFjO0FBQ2pCLEdBQUcsZ0JBQWdCO0FBQ25CLEdBQUcsZUFBZTtBQUNsQixHQUFHLGVBQWU7QUFDbEIsR0FBRyxhQUFhO0FBQ2hCLEdBQUcsa0JBQWtCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxR0FBcUcsS0FBSztBQUMxRyxVQUFVLGFBQWE7QUFDdkI7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRixtREFBbUQsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc193cmFwcGVyJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXInKTtcbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fd3JhcHBlcicpO1xuY29uc3Qgc2tpbGxzRGVsYXkgPSAyMDA7XG5cbmNvbnN0IHBvcnRmb2xpbyA9IFtcbiAge1xuICAgIG5hbWU6ICdmYW5jeS13ZWF0aGVyJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2ZhbmN5LXdlYXRoZXJfaWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3Jzc2Nob29sLWN2L3RyZWUvZmFuY3ktd2VhdGhlcicsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9yc3NjaG9vbC1jdi9mYW5jeS13ZWF0aGVyL2J1aWxkL2luZGV4Lmh0bWwnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NpbXBsZS1zaW5nb2xvJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3NpbmdvbG9faWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJ2xvcmVtIGlwc3VtJyxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3NpbXBsZS1zaW5nb2xvJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3NpbXBsZS1zaW5nb2xvL3NpbXBsZS1zaW5nb2xvL2luZGV4JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSYWluZHJvcHMnLFxuICAgIGljb246ICcuLi9hc3NldHMvaWNvbnMvcmFpbmRyb3BzLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnbG9yZW0gaXBzdW0nLFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcmFpbmRyb3BzJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3JhaW5kcm9wcy9yYWluZHJvcHMvYnVpbGQvaW5kZXgnLFxuICB9LFxuXTtcblxuY29uc3Qgc2tpbGxzID0gW1xuICB7IGRlc2NyaXB0aW9uOiAnSFRNTDUnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2h0bWw1X2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnQ1NTMycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvY3NzM19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0phdmFTY3JpcHQnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2pzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnU0FTUycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvc2Fzc19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0dpdCcsIGljb246ICcuLi9hc3NldHMvaWNvbnMvZ2l0X2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnR2l0SHViJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9naXRodWJfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdXZWJwYWNrJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy93ZWJwYWNrX2ljb24ucG5nJyB9LFxuXTtcblxuY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7IG5hbWU6ICdBbGwnIH0sXG4gIHsgbmFtZTogJ0hUTUw1JyB9LFxuICB7IG5hbWU6ICdDU1MzJyB9LFxuICB7IG5hbWU6ICdTQVNTJyB9LFxuICB7IG5hbWU6ICdKUycgfSxcbiAgeyBuYW1lOiAnV2VicGFjaycgfSxcbl07XG5cbmZ1bmN0aW9uIHNldFNraWxscyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2tpbGxzX2l0ZW0nO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zJywgJ2ZsaXAtbGVmdCcpO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgaW5kZXggKiBza2lsbHNEZWxheSk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZHVyYXRpb24nLCAxMDAwKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3NraWxsc19pbWFnZSc7XG4gICAgcC5jbGFzc05hbWUgPSAnc2tpbGxzX2Rlc2NyaXB0aW9uJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW1lbnQuaWNvbn0pYDtcbiAgICBwLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgc2tpbGxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQb3J0Zm9saW9CdXR0b24oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwb3J0Zm9saW9fYnV0dG9uX2l0ZW0nO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcycsICdmYWRlLWRvd24nKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIChpbmRleCAqIHNraWxsc0RlbGF5KSAvIDIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWR1cmF0aW9uJywgNTAwKTtcbiAgICBwb3J0Zm9saW9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59XG5cbnNldFNraWxscyhza2lsbHMpO1xuc2V0UG9ydGZvbGlvQnV0dG9uKHRlY2hub2xvZ2llcyk7XG5cbmZ1bmN0aW9uIHNldFBvcnRmb2xpb0l0ZW0oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNpZGU7XG4gICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgc2lkZSA9ICdsZWZ0JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZSA9ICdyaWdodCc7XG4gICAgfVxuICAgIHBvcnRmb2xpb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1cIiBkYXRhLWFvcz1cImZhZGUtJHtzaWRlfVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJjZW50ZXItYm90dG9tXCI+XG4gICAgPGgzPiR7ZWxlbWVudC5uYW1lfTwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2VsZW1lbnQuaWNvbn0nKVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2Rlc2NyaXB0aW9uXCI+PHA+JHtlbGVtZW50LmRlc2NyaXB0aW9ufTwvcD48L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9idXR0b25fY29udGFpbmVyIGJ1dHRvblwiID5cbiAgICAgIDxhIGhyZWY9XCIke2VsZW1lbnQubGlua0RlbW99XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9fYnV0dG9uX2l0ZW1cIj5EZW1vPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiJHtlbGVtZW50LmxpbmtHaXR9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9fYnV0dG9uX2l0ZW1cIj5HaXRIdWI8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YCk7XG4gIH0pO1xufVxuc2V0UG9ydGZvbGlvSXRlbShwb3J0Zm9saW8pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2NyaXB0cy9zY3JpcHQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9