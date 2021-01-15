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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsMkRBQTJEO0FBQzlELEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsbUVBQW1FO0FBQ3RFOztBQUVBO0FBQ0EsR0FBRyxjQUFjO0FBQ2pCLEdBQUcsZ0JBQWdCO0FBQ25CLEdBQUcsZUFBZTtBQUNsQixHQUFHLGVBQWU7QUFDbEIsR0FBRyxhQUFhO0FBQ2hCLEdBQUcsa0JBQWtCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxR0FBcUcsS0FBSztBQUMxRyxVQUFVLGFBQWE7QUFDdkI7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRixtREFBbUQsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi4vc2Nzcy9pbmRleC5zY3NzJztcblxuY29uc3Qgc2tpbGxzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNraWxsc193cmFwcGVyJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9ydGZvbGlvX2J1dHRvbl9jb250YWluZXInKTtcbmNvbnN0IHBvcnRmb2xpb0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fd3JhcHBlcicpO1xuY29uc3Qgc2tpbGxzRGVsYXkgPSAyMDA7XG5cbmNvbnN0IHBvcnRmb2xpbyA9IFtcbiAge1xuICAgIG5hbWU6ICdmYW5jeS13ZWF0aGVyJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2ZhbmN5LXdlYXRoZXJfaWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJzxwPlRoZSBGYW5jeS13ZWF0aGVyIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuIEl0IGlzIGEgd2VhdGhlci1mb2Nhc3QgYXBwbGljYXRpb24uIEJ5IGRlZmF1bHQsIHRoZSBhcHAgZGlzcGxheXMgd2VhdGhlciwgMy1kYXlzIGZvcmVjYXN0LCBjdXJyZW50IHRpbWUsIGFuZCBjdXJyZW50IGdlb2dyYXBoaWNhbCBjb29yZGluYXRlcyBpbiB0aGUgcGxhY2Ugd2hlcmUgdXNlciBpcyBsb2NhdGVkLiBCdXQgYXBwIGNhbiBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IGVhY2ggY2l0eS4g0JVoZSBhcHAgaGFzIGFuIGludGVncmF0ZWQgbWFwIHRoYXQgc2hvd3MgdGhlIGN1cnJlbnQgcGxhY2Ugb3IgdGhlIHJlcXVpcmVkIHBsYWNlLjwvcD48cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4sIDxiPldlYnBhY2s8L2I+LjwvcD4nLFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcnNzY2hvb2wtY3YvdHJlZS9mYW5jeS13ZWF0aGVyJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3Jzc2Nob29sLWN2L2ZhbmN5LXdlYXRoZXIvYnVpbGQvaW5kZXguaHRtbCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnU2ltcGxlLXNpbmdvbG8nLFxuICAgIGljb246ICcuLi9hc3NldHMvaWNvbnMvc2luZ29sb19pY29uLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnPHA+VGhlIFNpbXBsZS1TaW5nb2xvIHdhcyBjcmVhdGVkIGR1cmluZyB0aGUgY291cnNlIG9mIFRoZSBSb2xsaW5nIFNjb3BlcyBzY2hvb2wgKEVQQU0gU3lzdGVtcykuPHA+VGhlIGxheW91dCBpcyBsYWlkIG91dCBpbiB0aHJlZSBzdGF0ZXM6IG1vYmlsZSwgdGFibGV0IGFuZCBkZXNrdG9wLjwvcD48L3A+PHA+VGhlIHByb2plY3QgdXNlcyBzdWNoIHRlY2hub2xvZ2llcyBhczogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LjwvcD4nLFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvc2ltcGxlLXNpbmdvbG8nLFxuICAgIGxpbmtEZW1vOiAnaHR0cHM6Ly9hbmRyZWltaWxhc2hldmljaC5naXRodWIuaW8vc2ltcGxlLXNpbmdvbG8vc2ltcGxlLXNpbmdvbG8vaW5kZXgnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1JhaW5kcm9wcycsXG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9yYWluZHJvcHMtbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246ICc8cD5UaGUgUmFpbnJvcHMgR2FtZSB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLjwvcD48cD5NYXRoIGV4YW1wbGVzIGFyZSB3cml0dGVuIGluIHJhaW5kcm9wcyB0aGF0IGZhbGxzIGF0IGEgY2VydGFpbiBzcGVlZC4gWW91IG11c3QgIGVudGVyIHRoZSBhbnN3ZXIgYmVmb3JlIHRoZSBkcm9wIGZhbGxzLiBBZnRlciB0aGUgZW5kIG9mIHRoZSBnYW1lLCB0aGUgZ2FtZSBzdGF0aXN0aWNzIGFyZSBkaXNwbGF5ZWQuPC9wPjxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPiwgPGI+V2VicGFjazwvYj4uPC9wPicsXG4gICAgbGlua0dpdDogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbmRyZWlNaWxhc2hldmljaC9yYWluZHJvcHMnLFxuICAgIGxpbmtEZW1vOiAnaHR0cHM6Ly9hbmRyZWltaWxhc2hldmljaC5naXRodWIuaW8vcmFpbmRyb3BzL3JhaW5kcm9wcy9idWlsZC9pbmRleCcsXG4gIH0sXG5dO1xuXG5jb25zdCBza2lsbHMgPSBbXG4gIHsgZGVzY3JpcHRpb246ICdIVE1MNScsIGljb246ICcuLi9hc3NldHMvaWNvbnMvaHRtbDVfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdDU1MzJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9jc3MzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnSmF2YVNjcmlwdCcsIGljb246ICcuLi9hc3NldHMvaWNvbnMvanNfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdTQVNTJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9zYXNzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnR2l0JywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9naXRfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdHaXRIdWInLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2dpdGh1Yl9pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ1dlYnBhY2snLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3dlYnBhY2tfaWNvbi5wbmcnIH0sXG5dO1xuXG5jb25zdCB0ZWNobm9sb2dpZXMgPSBbXG4gIHsgbmFtZTogJ0FsbCcgfSxcbiAgeyBuYW1lOiAnSFRNTDUnIH0sXG4gIHsgbmFtZTogJ0NTUzMnIH0sXG4gIHsgbmFtZTogJ1NBU1MnIH0sXG4gIHsgbmFtZTogJ0pTJyB9LFxuICB7IG5hbWU6ICdXZWJwYWNrJyB9LFxuXTtcblxuZnVuY3Rpb24gc2V0U2tpbGxzKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGRpdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGl2Q29udGFpbmVyLmNsYXNzTmFtZSA9ICdza2lsbHNfaXRlbSc7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MnLCAnZmxpcC1sZWZ0Jyk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZGVsYXknLCBpbmRleCAqIHNraWxsc0RlbGF5KTtcbiAgICBkaXZDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kdXJhdGlvbicsIDEwMDApO1xuICAgIGRpdi5jbGFzc05hbWUgPSAnc2tpbGxzX2ltYWdlJztcbiAgICBwLmNsYXNzTmFtZSA9ICdza2lsbHNfZGVzY3JpcHRpb24nO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7ZWxlbWVudC5pY29ufSlgO1xuICAgIHAudGV4dENvbnRlbnQgPSBlbGVtZW50LmRlc2NyaXB0aW9uO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChwKTtcbiAgICBza2lsbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2Q29udGFpbmVyKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFBvcnRmb2xpb0J1dHRvbihkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3BvcnRmb2xpb19idXR0b25faXRlbSc7XG4gICAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zJywgJ2ZhZGUtZG93bicpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgKGluZGV4ICogc2tpbGxzRGVsYXkpIC8gMik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZHVyYXRpb24nLCA1MDApO1xuICAgIHBvcnRmb2xpb0J1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xuICB9KTtcbn1cblxuc2V0U2tpbGxzKHNraWxscyk7XG5zZXRQb3J0Zm9saW9CdXR0b24odGVjaG5vbG9naWVzKTtcblxuZnVuY3Rpb24gc2V0UG9ydGZvbGlvSXRlbShkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBsZXQgc2lkZTtcbiAgICBpZiAoaW5kZXggJSAyID09PSAwKSB7XG4gICAgICBzaWRlID0gJ2xlZnQnO1xuICAgIH0gZWxzZSB7XG4gICAgICBzaWRlID0gJ3JpZ2h0JztcbiAgICB9XG4gICAgcG9ydGZvbGlvQ29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbVwiIGRhdGEtYW9zPVwiZmFkZS0ke3NpZGV9XCIgZGF0YS1hb3MtZHVyYXRpb249XCIxMDAwXCIgZGF0YS1hb3MtYW5jaG9yLXBsYWNlbWVudD1cImNlbnRlci1ib3R0b21cIj5cbiAgICA8aDM+JHtlbGVtZW50Lm5hbWV9PC9oMz5cbiAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fYm9keVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2ltYWdlXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJyR7ZWxlbWVudC5pY29ufScpXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1fZGVzY3JpcHRpb25cIj48cD4ke2VsZW1lbnQuZGVzY3JpcHRpb259PC9wPjwvZGl2PiAgXG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2J1dHRvbl9jb250YWluZXIgYnV0dG9uXCIgPlxuICAgICAgPGEgaHJlZj1cIiR7ZWxlbWVudC5saW5rRGVtb31cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19idXR0b25faXRlbVwiPkRlbW88L2Rpdj5cbiAgICAgIDwvYT5cbiAgICAgIDxhIGhyZWY9XCIke2VsZW1lbnQubGlua0dpdH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19idXR0b25faXRlbVwiPkdpdEh1YjwvZGl2PlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5gKTtcbiAgfSk7XG59XG5zZXRQb3J0Zm9saW9JdGVtKHBvcnRmb2xpbyk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zY3JpcHRzL3NjcmlwdC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=