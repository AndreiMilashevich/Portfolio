/* eslint-disable max-len */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
import '../scss/index.scss';
import Typed from 'typed.js';

const skillsContainer = document.querySelector('.skills_wrapper');
const portfolioButtonContainer = document.querySelector('.portfolio_button_container');
const portfolioContainer = document.querySelector('.portfolio_wrapper');
const skillsDelay = 200;
const aosDuration = 500;
const photos = Array.from(document.querySelectorAll('.about_me_image_item'));
const projects = Array.from(document.querySelectorAll('.portfolio_item'));

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

const portfolio = [
  {
    name: 'fancy-weather',
    icon: '../assets/icons/fancy-weather_icon-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Fancy-weather was created during the course of The Rolling Scopes school (EPAM Systems).
            It is a weather-focast application. By default, the app displays weather, 3-days forecast, current time, 
            and current geographical coordinates in the place where user is located.
            But app can display information about each city. 
            Еhe app has an integrated map that shows the current place or the required place.</p>
            <p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Проект был создан во время прохождения курса The Rolling Scopes school (EPAM Systems). 
            Web-приложение показывает текущую погоду и прогноз погоды на три следующих дня в текущем месте или любом другом искомом месте. 
            В приложение интегрирована карта, указывающая текущее положение либо положение искомого города. Возможен выбор английского или русского языка, 
            температуры в градусах цельсия или фаренгейта.</p>
            <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/rsschool-cv/tree/fancy-weather',
    linkDemo: 'https://andreimilashevich.github.io/rsschool-cv/fancy-weather/build/index.html',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="true"',
  },
  {
    name: 'Simple-singolo',
    icon: '../assets/icons/singolo_icon-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Simple-Singolo was created during the course of The Rolling Scopes school (EPAM Systems).
          <p>The layout is laid out in three states: mobile, tablet and desktop.</p>
          </p><p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Приложение Simple-singolo было создано во время прохождения курса The Rolling Scopes school (EPAM Systems).</p>
          <p>Приложение сверстано по адаптивному макету.</p>
          <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/simple-singolo',
    linkDemo: 'https://andreimilashevich.github.io/simple-singolo/simple-singolo/index',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="false"',
  },
  {
    name: 'Raindrops',
    icon: '../assets/icons/raindrops-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Rainrops Game was created during the course of The Rolling Scopes school (EPAM Systems).
      </p><p>Math examples are written in raindrops that falls at a certain speed. 
      You must  enter the answer from keybord or numpad on right side of screen before the drop falls. 
      After the end of the game, the game statistics are displayed.</p>
      <p>The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Игра Rainrops была создано во время прохождения курса The Rolling Scopes school (EPAM Systems).</p>
      <p>Математические примеры написаны внутри капель дождя, падающих с определенной скоростью. 
      Нужно ввести пример с клавиатуры или числовой панели на экране до того как капли упадут. 
      После завершения игры на экран выводится игровая статистика.</p>
      <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>, <b>Webpack</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/raindrops',
    linkDemo: 'https://andreimilashevich.github.io/raindrops/raindrops/build/index',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="true" data-webpack="true"',
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

const pageContent = {
  // eslint-disable-next-line quote-props
  'ru': {
    home: 'Домой',
    skills: 'Навыки',
    portfolio: 'Портфолио',
    about: 'Обо мне',
    contacts: 'Контакты',
    strings: ['Привет!',
      'Я Андрей!',
      'и я Web разработчик!',
    ],
    learn: '<p>Узнать больше</p>',
    skillsHeader: 'Технические навыки',
    name: '<p>Имя</p>',
    namePlaceholder: 'Введите ваше имя',
    emailPlaceholder: 'Введите ваш email',
    textarea: 'Ваше сообщение',
    textareaPlaceholder: 'Введите ваше сообщение',
    submit: 'Отправить сообщение',
    aboutDescription: `<b>Пара слов обо мне:</b><br/>
    <ul>
    <li> Окончил авиационный факультет Военной академии Республики Беларусь.</li>
    <li> Специальность: Техническая эксплуатация пилотируемых летательных аппаратов и их силовых установок.</li>
    <li> В авиации добился больших высот, став инженером инженерно-авиационной службы авиационной эскадрильи (на ил-76, Ан-26), но это потолок развития авиационного инженера.</li>
    <li> Решил открыть для себя новые горизонты и прошел курсы: SkillUp(Ukraine) - Basic Web and SQL for software
    testing (2020) и «The Rolling Scopes school» (EPAM Systems)
    (2021).</li>
    <li> English: A2 - Pre-intermediate.</li></ul>`,
  },
  // eslint-disable-next-line quote-props
  'en': {
    home: 'Home',
    skills: 'Skills',
    portfolio: 'Portfilio',
    about: 'About me',
    contacts: 'Contacts',
    strings: ['Hello!',
      "I'm Andrei!",
      "I'm a Web Developer!",
    ],
    learn: '<p>Learn more about what I do</p>',
    skillsHeader: 'Skills',
    name: '<p>Name</p>',
    namePlaceholder: 'Enter your name',
    emailPlaceholder: 'Enter your email',
    textarea: 'Your message',
    textareaPlaceholder: 'Enter your message',
    submit: 'Send message',
    aboutDescription: `<b>A couple of words about me:</b><br/>
    <ul>
    <li>Education: Military Academy of the Republic of Belarus
    (2011). Aviation faculty.</li>
    <li>Specialty: Technical exploitation of manned aircrafts and
    their power units</li>
    <li>Previous job: Engineer of the aviation engineering department
    of the aviation squadron (IL-76, An-26)</li>
    <li>Courses: SkillUp(Ukraine) - Basic Web and SQL for software
    testing (2020) and «The Rolling Scopes school» (EPAM Systems)
    (2021).</li>
    <li>English: A2 - Pre-intermediate</li></ul>`,
  },
};

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
    portfolioContainer.insertAdjacentHTML('beforeend', `<div class="portfolio_item" data-aos="flip-${side}" data-aos-duration="1000" data-aos-anchor-placement="center-bottom ${portfolio.attr}">
    <h3>${element.name}</h3>
    <div class="portfolio_item_body">
      <div class="portfolio_item_image" style="background-image: url('${element.icon}')"></div>
      <div class="portfolio_item_description"><p>${element.description[`${language}`]}</p></div>  
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
