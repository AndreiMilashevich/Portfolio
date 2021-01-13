import "../scss/index.scss";

const skillsContainer = document.querySelector('.skills_wrapper');
const fragment = document.createDocumentFragment();

const skills = [
    {description: 'HTML5', icon: '../assets/icons/html5_icon.png'},
    {description: 'CSS3', icon: '../assets/icons/css3_icon.png'},
    {description: 'JavaScript', icon: '../assets/icons/js_icon.png'},
    {description: 'SASS', icon: '../assets/icons/sass_icon.png'},
    {description: 'Git', icon: '../assets/icons/git_icon.png'},
    {description: 'GitHub', icon: '../assets/icons/github_icon.png'},
]

function setSkills(data) {
    data.forEach(element => {
        const divContainer = document.createElement('div');
        const div = document.createElement('div');
        const p = document.createElement('p');
        divContainer.className = "skills_item";
        div.className = 'skills_image';
        p.className = "skills_description";
        div.style.backgroundImage = `url(${element.icon})`;
        p.textContent = element.description;
        divContainer.appendChild(div);
        divContainer.appendChild(p);
        skillsContainer.appendChild(divContainer);
    });
}

setSkills(skills);