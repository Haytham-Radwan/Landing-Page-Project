/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlin
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
// Define Global Variables
const sections = document.querySelectorAll("section");
const sectionsList = document.getElementById("navbar__list");

 



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// create a function to get the section name from 'dsts-nav' attribute.
const sections = document.querySelectorAll("section");
const sectionsList = document.getElementById("navbar__list");

//creat li elment and append to the menu
// assigin each li element to its own sections


function createList(){
    for (section of sections) {
        let sectionName = section.getAttribute("data-nav");
        let sectionLink = section.getAttribute("id");
        let lisItem = document.createElement("li");
        lisItem.innerHTML = `<a class= "menu__link" href="#${sectionLink}">${sectionName}</a>`;
        sectionsList.append(lisItem);


    }
}
createList();



    
// Scroll to section on link click


// Set sections as active(sccroll)



// Set sections as active by click
sections.forEach(function (element) {
    element.onclick = function () {
        //remove active class from all sections
        sections.forEach(function (element) {
            element.classList.remove('your-active-class');
        })
        this.classList.add('your-active-class');
    };

});


//button up function
let button = document.querySelector('.btn-up');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 500) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }

})
//button click function
window.addEventListener('click', function () {
    button.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    
});
//scroll to sections
/*const divScroll = document.querySelectorAll('section');
divScroll.forEach(function (section) {
    window.addEventListener('scroll', function () {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
})*/