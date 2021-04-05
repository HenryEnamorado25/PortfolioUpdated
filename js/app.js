const home = document.querySelector('.header');
const aboutSection = document.querySelector('.aboutMe');
const projectSection = document.querySelector('.projectSection');
const contactSection = document.querySelector('.contactContainer');
const homeBtn = document.querySelector('#home');
const aboutBtn = document.querySelector('#about');
const projectBtn = document.querySelector('#project');
const contactBtn = document.querySelector('#contact');
const btnContact = document.querySelector('#contactBtn');

const burgerBar = document.querySelector('#burgerBar');
const menu = document.querySelector('.navBar');

const sideIcons = document.querySelector('.sideIcons');


//scroll logic for the nav Bar Menu Options
btnContact.addEventListener("click", () => {
   contactSection.scrollIntoView();
})

aboutBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView();
});
projectBtn.addEventListener("click", () => {
    projectSection.scrollIntoView();
})
btnContact.addEventListener("click", () => {
    contactSection.scrollIntoView();
})
contactBtn.addEventListener("click", () => {
    contactSection.scrollIntoView();
})
console.log(window.innerWidth);

//make sure that the menu come back when the page is resize to more than 950 px

if (window.innerWidth > 960) {
    menu.style.zIndex= "3"
}
else {
    menu.style.zIndex = "-3";
    
}
//Hambuerger Menu logic
var active = true;
burgerBar.addEventListener('click', () => {
    if (active) {
        burgerBar.classList.toggle("fa-times");
        menu.style.zIndex= "3"
        menu.style.transition = "0.2s"
        active = false;
        
    }else {
        burgerBar.classList.toggle("fa-times");
        menu.style.zIndex= "-3"
        menu.style.transition = "0.2s"
        active = true;  
    }
})

var scrollPosition = window.pageYOffset;

/*side icons logic*/
console.log(scrollPosition);
window.onscroll=()=> {
   if (window.pageYOffset >= 400) {
    sideIcons.style.right = "0.9rem"
   } else {
       sideIcons.style.right = "-3rem"
       sideIcons.style.transition = "0.5"
}
}

const sideHome = document.querySelector('#sideHome').addEventListener("click", () => {
    home.scrollIntoView();
});
const sideAbout = document.querySelector('#sideAbout').addEventListener("click", () => {
    aboutSection.scrollIntoView();
});
const sideProject = document.querySelector('#sideProject').addEventListener("click", () => {
    projectSection.scrollIntoView();
});
const sideContact = document.querySelector('#sideContact').addEventListener("click", () => {
    contactSection.scrollIntoView();
});



