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
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));

const skillsButton = document.querySelector('.button_skills');
const homeButton = document.querySelector('.button_home');
const portfolioButton = document.querySelector('.button_portfolio');
const aboutMeButton = document.querySelector('.button_about_me');
const contactButton = document.querySelector('.button_contacts');
const learnMoreButton = document.querySelector('.learn_more');

const skillSection = document.querySelector('.skills');
const portfolioSection = document.querySelector('.portfolio');
const aboutMeSection = document.querySelector('.about_me');
const header = document.querySelector('header');

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
      <a href="${element.linkDemo}" target="_blank">
        <div class="portfolio_button_item">Demo</div>
      </a>
      <a href="${element.linkGit}" target="_blank">
        <div class="portfolio_button_item">GitHub</div>
      </a>
    </div>
  </div>`);
  });
}

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this; const
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function scroll(block, deltaHeight = header.offsetHeight) {
  window.scrollTo({ left: 0, top: block.offsetTop - deltaHeight + 1, behavior: 'smooth' });
}

setPortfolioItem(portfolio);
document.body.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'image') {
    event.target.classList.toggle('about_me_image_item_large');
  } else {
    photos.forEach((el) => el.classList.remove('about_me_image_item_large'));
  }
});

const setButtonsActive = () => {
  const scrollDistance = window.pageYOffset;
  portfolioButton.classList.remove('active');
  homeButton.classList.remove('active');
  if (scrollDistance >= skillSection.offsetTop - header.offsetHeight && scrollDistance + header.offsetHeight < portfolioSection.offsetTop) {
    skillsButton.classList.add('active');
  } else {
    skillsButton.classList.remove('active');
  }
  if (scrollDistance >= portfolioSection.offsetTop - header.offsetHeight && scrollDistance <= portfolioSection.offsetTop + portfolioSection.offsetHeight) {
    portfolioButton.classList.add('active');
  }
  if (scrollDistance >= aboutMeSection.offsetTop - header.offsetHeight && scrollDistance <= aboutMeSection.offsetTop + aboutMeSection.offsetHeight) {
    aboutMeButton.classList.add('active');
  } else {
    aboutMeButton.classList.remove('active');
  }

  if (scrollDistance < skillSection.offsetTop - header.offsetHeight) {
    homeButton.classList.add('active');
  }
};

skillsButton.addEventListener('click', () => scroll(skillSection));
learnMoreButton.addEventListener('click', () => scroll(skillSection));
homeButton.addEventListener('click', () => scroll(0, 0));
portfolioButton.addEventListener('click', () => scroll(portfolioSection));
aboutMeButton.addEventListener('click', () => scroll(aboutMeSection));
// contactButton.addEventListener('click', () => scroll(skillSection));
window.addEventListener('scroll', debounce(setButtonsActive, 400));


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9zY3NzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vc2NyaXB0cy9zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BvcnRmb2xpby93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0E0Qjs7QUFFNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBLEdBQUcsK0RBQStEO0FBQ2xFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsNkRBQTZEO0FBQ2hFLEdBQUcsMkRBQTJEO0FBQzlELEdBQUcsaUVBQWlFO0FBQ3BFLEdBQUcsbUVBQW1FO0FBQ3RFOztBQUVBO0FBQ0EsR0FBRyxjQUFjO0FBQ2pCLEdBQUcsZ0JBQWdCO0FBQ25CLEdBQUcsZUFBZTtBQUNsQixHQUFHLGVBQWU7QUFDbEIsR0FBRyxhQUFhO0FBQ2hCLEdBQUcsa0JBQWtCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxxR0FBcUcsS0FBSztBQUMxRyxVQUFVLGFBQWE7QUFDdkI7QUFDQSx3RUFBd0UsYUFBYTtBQUNyRixtREFBbUQsb0JBQW9CO0FBQ3ZFO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCO0FBQ2xDO0FBQ0E7QUFDQSxpQkFBaUIsZ0JBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHNFQUFzRTtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ3JMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9zY3NzL2luZGV4LnNjc3MnO1xuXG5jb25zdCBza2lsbHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzX3dyYXBwZXInKTtcbmNvbnN0IHBvcnRmb2xpb0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3J0Zm9saW9fYnV0dG9uX2NvbnRhaW5lcicpO1xuY29uc3QgcG9ydGZvbGlvQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpb193cmFwcGVyJyk7XG5jb25zdCBza2lsbHNEZWxheSA9IDIwMDtcbmNvbnN0IHBob3RvcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmFib3V0X21lX2ltYWdlX2l0ZW0nKSk7XG5cbmNvbnN0IHNraWxsc0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fc2tpbGxzJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9ob21lJyk7XG5jb25zdCBwb3J0Zm9saW9CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX3BvcnRmb2xpbycpO1xuY29uc3QgYWJvdXRNZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fYWJvdXRfbWUnKTtcbmNvbnN0IGNvbnRhY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2NvbnRhY3RzJyk7XG5jb25zdCBsZWFybk1vcmVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVhcm5fbW9yZScpO1xuXG5jb25zdCBza2lsbFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2tpbGxzJyk7XG5jb25zdCBwb3J0Zm9saW9TZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcnRmb2xpbycpO1xuY29uc3QgYWJvdXRNZVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWJvdXRfbWUnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWRlcicpO1xuXG5jb25zdCBwb3J0Zm9saW8gPSBbXG4gIHtcbiAgICBuYW1lOiAnZmFuY3ktd2VhdGhlcicsXG4gICAgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9mYW5jeS13ZWF0aGVyX2ljb24tbWluLnBuZycsXG4gICAgZGVzY3JpcHRpb246ICc8cD5UaGUgRmFuY3ktd2VhdGhlciB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLiBJdCBpcyBhIHdlYXRoZXItZm9jYXN0IGFwcGxpY2F0aW9uLiBCeSBkZWZhdWx0LCB0aGUgYXBwIGRpc3BsYXlzIHdlYXRoZXIsIDMtZGF5cyBmb3JlY2FzdCwgY3VycmVudCB0aW1lLCBhbmQgY3VycmVudCBnZW9ncmFwaGljYWwgY29vcmRpbmF0ZXMgaW4gdGhlIHBsYWNlIHdoZXJlIHVzZXIgaXMgbG9jYXRlZC4gQnV0IGFwcCBjYW4gZGlzcGxheSBpbmZvcm1hdGlvbiBhYm91dCBlYWNoIGNpdHkuINCVaGUgYXBwIGhhcyBhbiBpbnRlZ3JhdGVkIG1hcCB0aGF0IHNob3dzIHRoZSBjdXJyZW50IHBsYWNlIG9yIHRoZSByZXF1aXJlZCBwbGFjZS48L3A+PHA+VGhlIHByb2plY3QgdXNlcyBzdWNoIHRlY2hub2xvZ2llcyBhczogPGI+SFRNTDU8L2I+LCA8Yj5DU1MzPC9iPiwgPGI+U0FTUzwvYj4sIDxiPkphdmFTY3JpcHQ8L2I+LCA8Yj5XZWJwYWNrPC9iPi48L3A+JyxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3Jzc2Nob29sLWN2L3RyZWUvZmFuY3ktd2VhdGhlcicsXG4gICAgbGlua0RlbW86ICdodHRwczovL2FuZHJlaW1pbGFzaGV2aWNoLmdpdGh1Yi5pby9yc3NjaG9vbC1jdi9mYW5jeS13ZWF0aGVyL2J1aWxkL2luZGV4Lmh0bWwnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NpbXBsZS1zaW5nb2xvJyxcbiAgICBpY29uOiAnLi4vYXNzZXRzL2ljb25zL3NpbmdvbG9faWNvbi1taW4ucG5nJyxcbiAgICBkZXNjcmlwdGlvbjogJzxwPlRoZSBTaW1wbGUtU2luZ29sbyB3YXMgY3JlYXRlZCBkdXJpbmcgdGhlIGNvdXJzZSBvZiBUaGUgUm9sbGluZyBTY29wZXMgc2Nob29sIChFUEFNIFN5c3RlbXMpLjxwPlRoZSBsYXlvdXQgaXMgbGFpZCBvdXQgaW4gdGhyZWUgc3RhdGVzOiBtb2JpbGUsIHRhYmxldCBhbmQgZGVza3RvcC48L3A+PC9wPjxwPlRoZSBwcm9qZWN0IHVzZXMgc3VjaCB0ZWNobm9sb2dpZXMgYXM6IDxiPkhUTUw1PC9iPiwgPGI+Q1NTMzwvYj4sIDxiPlNBU1M8L2I+LCA8Yj5KYXZhU2NyaXB0PC9iPi48L3A+JyxcbiAgICBsaW5rR2l0OiAnaHR0cHM6Ly9naXRodWIuY29tL0FuZHJlaU1pbGFzaGV2aWNoL3NpbXBsZS1zaW5nb2xvJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3NpbXBsZS1zaW5nb2xvL3NpbXBsZS1zaW5nb2xvL2luZGV4JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSYWluZHJvcHMnLFxuICAgIGljb246ICcuLi9hc3NldHMvaWNvbnMvcmFpbmRyb3BzLW1pbi5wbmcnLFxuICAgIGRlc2NyaXB0aW9uOiAnPHA+VGhlIFJhaW5yb3BzIEdhbWUgd2FzIGNyZWF0ZWQgZHVyaW5nIHRoZSBjb3Vyc2Ugb2YgVGhlIFJvbGxpbmcgU2NvcGVzIHNjaG9vbCAoRVBBTSBTeXN0ZW1zKS48L3A+PHA+TWF0aCBleGFtcGxlcyBhcmUgd3JpdHRlbiBpbiByYWluZHJvcHMgdGhhdCBmYWxscyBhdCBhIGNlcnRhaW4gc3BlZWQuIFlvdSBtdXN0ICBlbnRlciB0aGUgYW5zd2VyIGJlZm9yZSB0aGUgZHJvcCBmYWxscy4gQWZ0ZXIgdGhlIGVuZCBvZiB0aGUgZ2FtZSwgdGhlIGdhbWUgc3RhdGlzdGljcyBhcmUgZGlzcGxheWVkLjwvcD48cD5UaGUgcHJvamVjdCB1c2VzIHN1Y2ggdGVjaG5vbG9naWVzIGFzOiA8Yj5IVE1MNTwvYj4sIDxiPkNTUzM8L2I+LCA8Yj5TQVNTPC9iPiwgPGI+SmF2YVNjcmlwdDwvYj4sIDxiPldlYnBhY2s8L2I+LjwvcD4nLFxuICAgIGxpbmtHaXQ6ICdodHRwczovL2dpdGh1Yi5jb20vQW5kcmVpTWlsYXNoZXZpY2gvcmFpbmRyb3BzJyxcbiAgICBsaW5rRGVtbzogJ2h0dHBzOi8vYW5kcmVpbWlsYXNoZXZpY2guZ2l0aHViLmlvL3JhaW5kcm9wcy9yYWluZHJvcHMvYnVpbGQvaW5kZXgnLFxuICB9LFxuXTtcblxuY29uc3Qgc2tpbGxzID0gW1xuICB7IGRlc2NyaXB0aW9uOiAnSFRNTDUnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2h0bWw1X2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnQ1NTMycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvY3NzM19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0phdmFTY3JpcHQnLCBpY29uOiAnLi4vYXNzZXRzL2ljb25zL2pzX2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnU0FTUycsIGljb246ICcuLi9hc3NldHMvaWNvbnMvc2Fzc19pY29uLnBuZycgfSxcbiAgeyBkZXNjcmlwdGlvbjogJ0dpdCcsIGljb246ICcuLi9hc3NldHMvaWNvbnMvZ2l0X2ljb24ucG5nJyB9LFxuICB7IGRlc2NyaXB0aW9uOiAnR2l0SHViJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy9naXRodWJfaWNvbi5wbmcnIH0sXG4gIHsgZGVzY3JpcHRpb246ICdXZWJwYWNrJywgaWNvbjogJy4uL2Fzc2V0cy9pY29ucy93ZWJwYWNrX2ljb24ucG5nJyB9LFxuXTtcblxuY29uc3QgdGVjaG5vbG9naWVzID0gW1xuICB7IG5hbWU6ICdBbGwnIH0sXG4gIHsgbmFtZTogJ0hUTUw1JyB9LFxuICB7IG5hbWU6ICdDU1MzJyB9LFxuICB7IG5hbWU6ICdTQVNTJyB9LFxuICB7IG5hbWU6ICdKUycgfSxcbiAgeyBuYW1lOiAnV2VicGFjaycgfSxcbl07XG5cbmZ1bmN0aW9uIHNldFNraWxscyhkYXRhKSB7XG4gIGRhdGEuZm9yRWFjaCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpdkNvbnRhaW5lci5jbGFzc05hbWUgPSAnc2tpbGxzX2l0ZW0nO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zJywgJ2ZsaXAtbGVmdCcpO1xuICAgIGRpdkNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWRlbGF5JywgaW5kZXggKiBza2lsbHNEZWxheSk7XG4gICAgZGl2Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1hb3MtZHVyYXRpb24nLCAxMDAwKTtcbiAgICBkaXYuY2xhc3NOYW1lID0gJ3NraWxsc19pbWFnZSc7XG4gICAgcC5jbGFzc05hbWUgPSAnc2tpbGxzX2Rlc2NyaXB0aW9uJztcbiAgICBkaXYuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2VsZW1lbnQuaWNvbn0pYDtcbiAgICBwLnRleHRDb250ZW50ID0gZWxlbWVudC5kZXNjcmlwdGlvbjtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQocCk7XG4gICAgc2tpbGxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRpdkNvbnRhaW5lcik7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRQb3J0Zm9saW9CdXR0b24oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmNsYXNzTmFtZSA9ICdwb3J0Zm9saW9fYnV0dG9uX2l0ZW0nO1xuICAgIGRpdi50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcycsICdmYWRlLWRvd24nKTtcbiAgICBkaXYuc2V0QXR0cmlidXRlKCdkYXRhLWFvcy1kZWxheScsIChpbmRleCAqIHNraWxsc0RlbGF5KSAvIDIpO1xuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2RhdGEtYW9zLWR1cmF0aW9uJywgNTAwKTtcbiAgICBwb3J0Zm9saW9CdXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgfSk7XG59XG5cbnNldFNraWxscyhza2lsbHMpO1xuc2V0UG9ydGZvbGlvQnV0dG9uKHRlY2hub2xvZ2llcyk7XG5cbmZ1bmN0aW9uIHNldFBvcnRmb2xpb0l0ZW0oZGF0YSkge1xuICBkYXRhLmZvckVhY2goKGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgbGV0IHNpZGU7XG4gICAgaWYgKGluZGV4ICUgMiA9PT0gMCkge1xuICAgICAgc2lkZSA9ICdsZWZ0JztcbiAgICB9IGVsc2Uge1xuICAgICAgc2lkZSA9ICdyaWdodCc7XG4gICAgfVxuICAgIHBvcnRmb2xpb0NvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGA8ZGl2IGNsYXNzPVwicG9ydGZvbGlvX2l0ZW1cIiBkYXRhLWFvcz1cImZhZGUtJHtzaWRlfVwiIGRhdGEtYW9zLWR1cmF0aW9uPVwiMTAwMFwiIGRhdGEtYW9zLWFuY2hvci1wbGFjZW1lbnQ9XCJjZW50ZXItYm90dG9tXCI+XG4gICAgPGgzPiR7ZWxlbWVudC5uYW1lfTwvaDM+XG4gICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2JvZHlcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9pbWFnZVwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKCcke2VsZW1lbnQuaWNvbn0nKVwiPjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInBvcnRmb2xpb19pdGVtX2Rlc2NyaXB0aW9uXCI+PHA+JHtlbGVtZW50LmRlc2NyaXB0aW9ufTwvcD48L2Rpdj4gIFxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9faXRlbV9idXR0b25fY29udGFpbmVyIGJ1dHRvblwiID5cbiAgICAgIDxhIGhyZWY9XCIke2VsZW1lbnQubGlua0RlbW99XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9fYnV0dG9uX2l0ZW1cIj5EZW1vPC9kaXY+XG4gICAgICA8L2E+XG4gICAgICA8YSBocmVmPVwiJHtlbGVtZW50LmxpbmtHaXR9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3J0Zm9saW9fYnV0dG9uX2l0ZW1cIj5HaXRIdWI8L2Rpdj5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+YCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcbiAgbGV0IHRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7IGNvbnN0XG4gICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIGNvbnN0IGxhdGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIGNvbnN0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgICBpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2Nyb2xsKGJsb2NrLCBkZWx0YUhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcbiAgd2luZG93LnNjcm9sbFRvKHsgbGVmdDogMCwgdG9wOiBibG9jay5vZmZzZXRUb3AgLSBkZWx0YUhlaWdodCArIDEsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcbn1cblxuc2V0UG9ydGZvbGlvSXRlbShwb3J0Zm9saW8pO1xuZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQudGFyZ2V0LmRhdGFzZXQudHlwZSA9PT0gJ2ltYWdlJykge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QudG9nZ2xlKCdhYm91dF9tZV9pbWFnZV9pdGVtX2xhcmdlJyk7XG4gIH0gZWxzZSB7XG4gICAgcGhvdG9zLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdhYm91dF9tZV9pbWFnZV9pdGVtX2xhcmdlJykpO1xuICB9XG59KTtcblxuY29uc3Qgc2V0QnV0dG9uc0FjdGl2ZSA9ICgpID0+IHtcbiAgY29uc3Qgc2Nyb2xsRGlzdGFuY2UgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gIHBvcnRmb2xpb0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgaWYgKHNjcm9sbERpc3RhbmNlID49IHNraWxsU2VjdGlvbi5vZmZzZXRUb3AgLSBoZWFkZXIub2Zmc2V0SGVpZ2h0ICYmIHNjcm9sbERpc3RhbmNlICsgaGVhZGVyLm9mZnNldEhlaWdodCA8IHBvcnRmb2xpb1NlY3Rpb24ub2Zmc2V0VG9wKSB7XG4gICAgc2tpbGxzQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9IGVsc2Uge1xuICAgIHNraWxsc0J1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfVxuICBpZiAoc2Nyb2xsRGlzdGFuY2UgPj0gcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRUb3AgLSBoZWFkZXIub2Zmc2V0SGVpZ2h0ICYmIHNjcm9sbERpc3RhbmNlIDw9IHBvcnRmb2xpb1NlY3Rpb24ub2Zmc2V0VG9wICsgcG9ydGZvbGlvU2VjdGlvbi5vZmZzZXRIZWlnaHQpIHtcbiAgICBwb3J0Zm9saW9CdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gIH1cbiAgaWYgKHNjcm9sbERpc3RhbmNlID49IGFib3V0TWVTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQgJiYgc2Nyb2xsRGlzdGFuY2UgPD0gYWJvdXRNZVNlY3Rpb24ub2Zmc2V0VG9wICsgYWJvdXRNZVNlY3Rpb24ub2Zmc2V0SGVpZ2h0KSB7XG4gICAgYWJvdXRNZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgfSBlbHNlIHtcbiAgICBhYm91dE1lQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG5cbiAgaWYgKHNjcm9sbERpc3RhbmNlIDwgc2tpbGxTZWN0aW9uLm9mZnNldFRvcCAtIGhlYWRlci5vZmZzZXRIZWlnaHQpIHtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59O1xuXG5za2lsbHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5sZWFybk1vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzY3JvbGwoc2tpbGxTZWN0aW9uKSk7XG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKDAsIDApKTtcbnBvcnRmb2xpb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNjcm9sbChwb3J0Zm9saW9TZWN0aW9uKSk7XG5hYm91dE1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKGFib3V0TWVTZWN0aW9uKSk7XG4vLyBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2Nyb2xsKHNraWxsU2VjdGlvbikpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlKHNldEJ1dHRvbnNBY3RpdmUsIDQwMCkpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc2NyaXB0cy9zY3JpcHQuanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG4iXSwic291cmNlUm9vdCI6IiJ9