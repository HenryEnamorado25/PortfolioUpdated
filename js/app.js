const home = document.querySelector('.header');
const about = document.querySelector('.aboutMe');
const project = document.querySelector('.projectSection');
const contact = document.querySelector('.contactContainer');
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const projectBtn = document.querySelector('#project');
const contactBtn = document.querySelector('#contact');

const btnContact = document.querySelector('#contactBtn');

btnContact.addEventListener("click", () => {
    contact.scrollIntoView();
})

aboutBtn.addEventListener("click", () => {
    about.scrollIntoView();
    console.log('hello');
});
projectBtn.addEventListener("click", () => {
    project.scrollIntoView();
})
btnContact.addEventListener("click", () => {
    contact.scrollIntoView();
})
contactBtn.addEventListener("click", () => {
    contact.scrollIntoView();
})
