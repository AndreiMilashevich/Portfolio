// eslint-disable-next-line import/prefer-default-export
export const portfolio = [
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
  {
    name: 'Calculator',
    icon: '../assets/icons/calculator-min.png',
    description: {
      // eslint-disable-next-line quote-props
      'en': `<p>The Rainrops app was created during the course of The UpSkillsLab (EPAM Systems). The app is a simple calculator. 
      The project uses such technologies as: <b>HTML5</b>, <b>CSS3</b>, <b>SASS</b>, <b>JavaScript</b>.</p>`,
      // eslint-disable-next-line quote-props
      'ru': `<p>Приложение калькулятор было создано во время прохождения курса UpSkillsLab (EPAM Systems). 
      Приложение представляет собой простой калькулятор.</p>
      <p>В проекте применены: <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>.</p>`,
    },
    linkGit: 'https://github.com/AndreiMilashevich/calculator',
    linkDemo: 'https://andreimilashevich.github.io/calculator/index',
    attr: 'data-html="true" data-css="true" data-js="true" data-sass="false" data-webpack="false"',
  },
];

export const skills = [
  { description: 'HTML5', icon: '../assets/icons/html5_icon.png' },
  { description: 'CSS3', icon: '../assets/icons/css3_icon.png' },
  { description: 'JavaScript', icon: '../assets/icons/js_icon.png' },
  { description: 'SASS', icon: '../assets/icons/sass_icon.png' },
  { description: 'Git', icon: '../assets/icons/git_icon.png' },
  { description: 'GitHub', icon: '../assets/icons/github_icon.png' },
  { description: 'Webpack', icon: '../assets/icons/webpack_icon.png' },
];

export const technologies = [
  { name: 'All' },
  { name: 'HTML5' },
  { name: 'CSS3' },
  { name: 'SASS' },
  { name: 'JS' },
  { name: 'Webpack' },
];

export const pageContent = {
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
    demo: 'Демонстрация',
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
    demo: 'Demo',
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
