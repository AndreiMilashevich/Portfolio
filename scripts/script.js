/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
import '../scss/index.scss';
import Typed from 'typed.js';
import {
  portfolio, skills, technologies, pageContent,
} from './content.js';

const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;
const aosDuration = 500;
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));

const skillsButton = document.querySelector('.button_skills');
const homeButton = document.querySelector('.button_home');
const portfolioButton = document.querySelector('.button_portfolio');
const aboutMeButton = document.querySelector('.button_about_me');
const contactButton = document.querySelector('.button_contacts');
const learnMoreButton = document.querySelector('.learn_more');
const submit = document.querySelector('.submit');
const langButtonEn = document.querySelector('.en');
const langButtonRu = document.querySelector('.ru');

const skillSection = document.querySelector('.skills');
const portfolioSection = document.querySelector('.portfolio');
const aboutMeSection = document.querySelector('.about_me');
const contactSection = document.querySelector('.contact_section');
const header = document.querySelector('header');

// const hello = document.querySelector('.hello_span');
const skillsHeader = document.querySelector('.skills_header');
const portfolioHeader = document.querySelector('.portfolio_header');
const aboutMeHeader = document.querySelector('.about_me_header');
const contactsHeader = document.querySelector('.contact_header');
const inputName = document.querySelector('#name');
const labelName = document.querySelector('.name');
const inputMail = document.querySelector('#email');
const inputMessage = document.querySelector('#message');
const labelMessage = document.querySelector('.message');
const aboutMeDescription = document.querySelector('.about_me_description');

let language = 'en';

const options = {
  strings: pageContent[`${language}`].strings,
  typeSpeed: 60,
  backDelay: 1200,
  backSpeed: 43,
  loop: true,
  fadeOut: false,
};

let typed = new Typed('.typed', options);

function setSkills(data) {
  data.forEach((element, index) => {
    const divContainer = document.createElement('div');
    const div = document.createElement('div');
    const p = document.createElement('p');
    divContainer.className = 'skills_item';
    divContainer.setAttribute('data-aos', 'flip-left');
    divContainer.setAttribute('data-aos-delay', index * skillsDelay);
    divContainer.setAttribute('data-aos-duration', aosDuration * 2);
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
    div.setAttribute('data-aos-duration', aosDuration);
    div.setAttribute('data-button', element.name.toLowerCase());
    portfolioButtonContainer.appendChild(div);
  });
}

function setPortfolioItem(data) {
  data.forEach((element, index) => {
    let side;
    if (index % 2 === 0) {
      side = 'left';
    } else {
      side = 'right';
    }
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="flip-${side}" data-aos-anchor-placement="bottom-center" data-aos-duration="1000" data-aos-anchor=".portfolio_header" data-aos-anchor-placement="center-bottom " ${portfolio[index].attr}>
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')"></div>
      <div class="portfolio_item_description"><p>${element.description[`${language}`]}</p></div>  
    </div>
    <div class="portfolio_item_button_container button" >
      <a href="${element.linkDemo}" target="_blank">
        <div class="portfolio_button_item">${pageContent[`${language}`].demo}</div>
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
      // eslint-disable-next-line prefer-rest-params
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
  if (scrollDistance >= contactSection.offsetTop - header.offsetHeight && scrollDistance <= contactSection.offsetTop + contactSection.offsetHeight) {
    contactButton.classList.add('active');
  } else {
    contactButton.classList.remove('active');
  }
  if (scrollDistance < skillSection.offsetTop - header.offsetHeight) {
    homeButton.classList.add('active');
  }
};

function getLanguage() {
  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', 'en');
  } else {
    language = localStorage.getItem('language');
  }
}

function portfolioSort(a, data, array) {
  if (data === a) {
    for (let i = 0; i < array.length; i++) {
      array[i].classList.add('hidden');
      if (array[i].dataset[a] === 'true') {
        array[i].classList.remove('hidden');
      }
    }
  }
}

function setPageContent() {
  typed.destroy();
  homeButton.textContent = pageContent[`${language}`].home;
  skillsButton.textContent = pageContent[`${language}`].skills;
  portfolioButton.textContent = pageContent[`${language}`].portfolio;
  contactButton.textContent = pageContent[`${language}`].contacts;
  aboutMeButton.textContent = pageContent[`${language}`].about;
  // hello.textContent = pageContent[`${language}`].strings[0];
  learnMoreButton.innerHTML = pageContent[`${language}`].learn;
  skillsHeader.textContent = pageContent[`${language}`].skillsHeader;
  portfolioHeader.textContent = pageContent[`${language}`].portfolio;
  aboutMeHeader.textContent = pageContent[`${language}`].about;
  contactsHeader.textContent = pageContent[`${language}`].contacts;
  inputName.placeholder = pageContent[`${language}`].namePlaceholder;
  labelName.innerHTML = pageContent[`${language}`].name;
  inputMail.placeholder = pageContent[`${language}`].emailPlaceholder;
  inputMessage.textContent = pageContent[`${language}`].textarea;
  labelMessage.textContent = pageContent[`${language}`].textareaPlaceholder;
  submit.value = pageContent[`${language}`].textareaPlaceholder;
  options.strings = pageContent[`${language}`].strings;
  aboutMeDescription.innerHTML = pageContent[`${language}`].aboutDescription;
  typed = new Typed('.typed', options);
  if (language === 'en') {
    langButtonEn.classList.add('lang_active');
    langButtonRu.classList.remove('lang_active');
  } else {
    langButtonRu.classList.add('lang_active');
    langButtonEn.classList.remove('lang_active');
  }
}

getLanguage();
setPageContent();
setPortfolioItem(portfolio);
setSkills(skills);
setPortfolioButton(technologies);

skillsButton.addEventListener('click', () => scroll(skillSection));
learnMoreButton.addEventListener('click', () => scroll(skillSection));
homeButton.addEventListener('click', () => scroll(0, 0));
portfolioButton.addEventListener('click', () => scroll(portfolioSection));
aboutMeButton.addEventListener('click', () => scroll(aboutMeSection));
contactButton.addEventListener('click', () => scroll(contactSection));

langButtonEn.addEventListener('click', () => {
  portfolioContainer.innerHTML = '';
  language = langButtonEn.dataset.lang;
  localStorage.setItem('language', 'en');
  setPageContent();
  setPortfolioItem(portfolio);
});

langButtonRu.addEventListener('click', () => {
  portfolioContainer.innerHTML = '';
  language = langButtonRu.dataset.lang;
  localStorage.setItem('language', 'ru');
  setPageContent();
  setPortfolioItem(portfolio);
});

window.addEventListener('scroll', debounce(setButtonsActive, 400));
portfolioButtonContainer.addEventListener('click', (event) => {
  const projects = Array.from(document.querySelectorAll('.portfolio_item'));
  const data = event.target.dataset.button;
  if (data === undefined) {
    return;
  }
  const portfolioButtons = Array.from(document.querySelectorAll('.portfolio_button_item'));
  portfolioButtons.forEach((item) => {
    item.classList.remove('portfolio_active');
  });
  event.target.classList.add('portfolio_active');
  if (data === 'all') {
    projects.forEach((element) => {
      element.classList.remove('hidden');
    });
  } else {
    projects.forEach((element) => {
      element.classList.remove('hidden');
    });
  }
  portfolioSort('html', data, projects);
  portfolioSort('css', data, projects);
  portfolioSort('sass', data, projects);
  portfolioSort('js', data, projects);
  portfolioSort('webpack', data, projects);
});
