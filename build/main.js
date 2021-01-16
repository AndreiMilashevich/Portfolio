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
const photoContainer = document.querySelector('.about_me_image_wrapper');
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));

const portfolio = [
  {
    name: 'fancy-weather',
    icon: '../assets/icons/fancy-weather_icon-min.png',
    description: '<p>The Fancy-weather was created during the course of The Rolling Scopes school (EPAM Systems). It is a weather-focast application. By default, the app displays weather, 3-days forecast, current time, and current geographical coordinates in the place where user is located. But app can display information about each city. Еhe app has an integrated map that shows the current place or the required place.</p><p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>',
    linkGit: 'https://github.com/AndreiMilashevich/rsschool-cv/tree/fancy-weather',
    linkDemo: 'https://andreimilashevich.github.io/rsschool-cv/fancy-weather/build/index.html',
  },
  {
    name: 'Simple-singolo',
    icon: '../assets/icons/singolo_icon-min.png',
    description: '<p>The Simple-Singolo was created during the course of The Rolling Scopes school (EPAM Systems).<p>The layout is laid out in three states: mobile, tablet and desktop.</p></p><p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>',
    linkGit: 'https://github.com/AndreiMilashevich/simple-singolo',
    linkDemo: 'https://andreimilashevich.github.io/simple-singolo/simple-singolo/index',
  },
  {
    name: 'Raindrops',
    icon: '../assets/icons/raindrops-min.png',
    description: '<p>The Rainrops Game was created during the course of The Rolling Scopes school (EPAM Systems).</p><p>Math examples are written in raindrops that falls at a certain speed. You must  enter the answer before the drop falls. After the end of the game, the game statistics are displayed.</p><p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>',
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
document.body.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'image') {
    event.target.classList.toggle('about_me_image_item_large');
  } else {
    photos.forEach((el) => el.classList.remove('about_me_image_item_large'));
  }
});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxHQUFHLCtEQUErRDtBQUNsRSxHQUFHLDZEQUE2RDtBQUNoRSxHQUFHLGlFQUFpRTtBQUNwRSxHQUFHLDZEQUE2RDtBQUNoRSxHQUFHLDJEQUEyRDtBQUM5RCxHQUFHLGlFQUFpRTtBQUNwRSxHQUFHLG1FQUFtRTtBQUN0RTs7QUFFQTtBQUNBLEdBQUcsY0FBYztBQUNqQixHQUFHLGdCQUFnQjtBQUNuQixHQUFHLGVBQWU7QUFDbEIsR0FBRyxlQUFlO0FBQ2xCLEdBQUcsYUFBYTtBQUNoQixHQUFHLGtCQUFrQjtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EscUdBQXFHLEtBQUs7QUFDMUcsVUFBVSxhQUFhO0FBQ3ZCO0FBQ0Esd0VBQXdFLGFBQWE7QUFDckYsbURBQW1ELG9CQUFvQjtBQUN2RTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0EsaUJBQWlCLGdCQUFnQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7O1VDdEhEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4uL3Njc3MvaW5kZXguc2Nzcyc7XG5cbmNvbnN0IHNraWxsc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5za2lsbHNfd3JhcHBlcicpO1xuY29uc3QgcG9ydGZvbGlvQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb19idXR0b25fY29udGFpbmVyJyk7XG5jb25zdCBwb3J0Zm9saW9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX3dyYXBwZXInKTtcbmNvbnN0IHNraWxsc0RlbGF5ID0gMjAwO1xuY29uc3QgcGhvdG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfbWVfaW1hZ2Vfd3JhcHBlcicpO1xuY29uc3QgcGhvdG9zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWJvdXRfbWVfaW1hZ2VfaXRlbScpKTtcblxuY29uc3QgcG9ydGZvbGlvID0gW1xuICB7XG4gICAgbmFtZTogJ2ZhbmN5LXdlYXRoZXInLFxuICAgIGljb246ICcuLi9hc3NldHMvaWNvbnMvZmFuY3ktd2VhdGhlcl9pY29uLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnPHA+VGhlIEZhbmN5LXdlYXRoZXIgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbCAoRVBBTSBTeXN0ZW1zKS4gSXQgaXMgYSB3ZWF0aGVyLWZvY2FzdCBhcHBsaWNhdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGFwcCBkaXNwbGF5cyB3ZWF0aGVyLCAzLWRheXMgZm9yZWNhc3QsIGN1cnJlbnQgdGltZSwgYW5kIGN1cnJlbnQgZ2VvZ3JhcGhpY2FsIGNvb3JkaW5hdGVzIGluIHRoZSBwbGFjZSB3aGVyZSB1c2VyIGlzIGxvY2F0ZWQuIEJ1dCBhcHAgY2FuIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgZWFjaCBjaXR5LiDQlWhlIGFwcCBoYXMgYW4gaW50ZWdyYXRlZCBtYXAgdGhhdCBzaG93cyB0aGUgY3VycmVudCBwbGFjZSBvciB0aGUgcmVxdWlyZWQgcGxhY2UuPC9wPjxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPicsXG4gICAgbGlua0dpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWlNaWxhc2hldmljaC9yc3NjaG9vbC1jdi90cmVlL2ZhbmN5LXdlYXRoZXInLFxuICAgIGxpbmtEZW1vOiAnaHR0cHM6Ly9hbmRyZWltaWxhc2hldmljaC5naXRodWIuaW8vcnNzY2hvb2wtY3YvZmFuY3ktd2VhdGhlci9idWlsZC9pbmRleC5odG1sJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdTaW1wbGUtc2luZ29sbycsXG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9zaW5nb2xvX2ljb24tbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246ICc8cD5UaGUgU2ltcGxlLVNpbmdvbG8gd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbCAoRVBBTSBTeXN0ZW1zKS48cD5UaGUgbGF5b3V0IGlzIGxhaWQgb3V0IGluIHRocmVlIHN0YXRlczogbW9iaWxlLCB0YWJsZXQgYW5kIGRlc2t0b3AuPC9wPjwvcD48cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4uPC9wPicsXG4gICAgbGlua0dpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWlNaWxhc2hldmljaC9zaW1wbGUtc2luZ29sbycsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9zaW1wbGUtc2luZ29sby9zaW1wbGUtc2luZ29sby9pbmRleCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnUmFpbmRyb3BzJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3JhaW5kcm9wcy1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJzxwPlRoZSBSYWlucm9wcyBHYW1lIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuPC9wPjxwPk1hdGggZXhhbXBsZXMgYXJlIHdyaXR0ZW4gaW4gcmFpbmRyb3BzIHRoYXQgZmFsbHMgYXQgYSBjZXJ0YWluIHNwZWVkLiBZb3UgbXVzdCAgZW50ZXIgdGhlIGFuc3dlciBiZWZvcmUgdGhlIGRyb3AgZmFsbHMuIEFmdGVyIHRoZSBlbmQgb2YgdGhlIGdhbWUsIHRoZSBnYW1lIHN0YXRpc3RpY3MgYXJlIGRpc3BsYXllZC48L3A+PHA+VGhlIHByb2plY3QgdXNlcyBzdWNoIHRlY2hub2xvZ2llcyBhczogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+JyxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3JhaW5kcm9wcycsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9yYWluZHJvcHMvcmFpbmRyb3BzL2J1aWxkL2luZGV4JyxcbiAgfSxcbl07XG5cbmNvbnN0IHNraWxscyA9IFtcbiAgeyBkZXNjcmlwdGlvbjogJ0hUTUw1JywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9odG1sNV9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0NTUzMnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2NzczNfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdKYXZhU2NyaXB0JywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9qc19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ1NBU1MnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3Nhc3NfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdHaXQnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2dpdF9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0dpdEh1YicsIGljb246ICcuLi9hc3NldHMvaWNvbnMvZ2l0aHViX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnV2VicGFjaycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvd2VicGFja19pY29uLnBuZycgfSxcbl07XG5cbmNvbnN0IHRlY2hub2xvZ2llcyA9IFtcbiAgeyBuYW1lOiAnQWxsJyB9LFxuICB7IG5hbWU6ICdIVE1MNScgfSxcbiAgeyBuYW1lOiAnQ1NTMycgfSxcbiAgeyBuYW1lOiAnU0FTUycgfSxcbiAgeyBuYW1lOiAnSlMnIH0sXG4gIHsgbmFtZTogJ1dlYnBhY2snIH0sXG5dO1xuXG5mdW5jdGlvbiBzZXRTa2lsbHMoZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkaXZDb250YWluZXIuY2xhc3NOYW1lID0gJ3NraWxsc19pdGVtJztcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcycsICdmbGlwLWxlZnQnKTtcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIGluZGV4ICogc2tpbGxzRGVsYXkpO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWR1cmF0aW9uJywgMTAwMCk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdza2lsbHNfaW1hZ2UnO1xuICAgIHAuY2xhc3NOYW1lID0gJ3NraWxsc19kZXNjcmlwdGlvbic7XG4gICAgZGl2LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlbGVtZW50Lmljb259KWA7XG4gICAgcC50ZXh0Q29udGVudCA9IGVsZW1lbnQuZGVzY3JpcHRpb247XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gICAgZGl2Q29udGFpbmVyLmFwcGVuZENoaWxkKHApO1xuICAgIHNraWxsc0NvbnRhaW5lci5hcHBlbmRDaGlsZChkaXZDb250YWluZXIpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0UG9ydGZvbGlvQnV0dG9uKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc05hbWUgPSAncG9ydGZvbGlvX2J1dHRvbl9pdGVtJztcbiAgICBkaXYudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MnLCAnZmFkZS1kb3duJyk7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCAoaW5kZXggKiBza2lsbHNEZWxheSkgLyAyKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kdXJhdGlvbicsIDUwMCk7XG4gICAgcG9ydGZvbGlvQnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG4gIH0pO1xufVxuXG5zZXRTa2lsbHMoc2tpbGxzKTtcbnNldFBvcnRmb2xpb0J1dHRvbih0ZWNobm9sb2dpZXMpO1xuXG5mdW5jdGlvbiBzZXRQb3J0Zm9saW9JdGVtKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGxldCBzaWRlO1xuICAgIGlmIChpbmRleCAlIDIgPT09IDApIHtcbiAgICAgIHNpZGUgPSAnbGVmdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNpZGUgPSAncmlnaHQnO1xuICAgIH1cbiAgICBwb3J0Zm9saW9Db250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtXCIgZGF0YS1hb3M9XCJmYWRlLSR7c2lkZX1cIiBkYXRhLWFvcy1kdXJhdGlvbj1cIjEwMDBcIiBkYXRhLWFvcy1hbmNob3ItcGxhY2VtZW50PVwiY2VudGVyLWJvdHRvbVwiPlxuICAgIDxoMz4ke2VsZW1lbnQubmFtZX08L2gzPlxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9ib2R5XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1faW1hZ2VcIiBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6IHVybCgnJHtlbGVtZW50Lmljb259JylcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9kZXNjcmlwdGlvblwiPjxwPiR7ZWxlbWVudC5kZXNjcmlwdGlvbn08L3A+PC9kaXY+ICBcbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYnV0dG9uX2NvbnRhaW5lciBidXR0b25cIiA+XG4gICAgICA8YSBocmVmPVwiJHtlbGVtZW50LmxpbmtEZW1vfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+RGVtbzwvZGl2PlxuICAgICAgPC9hPlxuICAgICAgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rR2l0fVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2J1dHRvbl9pdGVtXCI+R2l0SHViPC9kaXY+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PmApO1xuICB9KTtcbn1cbnNldFBvcnRmb2xpb0l0ZW0ocG9ydGZvbGlvKTtcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldC5kYXRhc2V0LnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LnRvZ2dsZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpO1xuICB9IGVsc2Uge1xuICAgIHBob3Rvcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnYWJvdXRfbWVfaW1hZ2VfaXRlbV9sYXJnZScpKTtcbiAgfVxufSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zY3JpcHRzL3NjcmlwdC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=