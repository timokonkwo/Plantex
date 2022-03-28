/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle')
navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const navLink = document.querySelectorAll('.nav__link');

function linkClicked() {
    navMenu.classList.remove('show-menu');
}
// Remove the Nav Menu when a link is clicked.
navLink.forEach(link => link.addEventListener('click', linkClicked))


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is greater than viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

/*=============== QUESTIONS ACCORDION ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== DARK LIGHT THEME ===============*/

// Previously selected topic (if user selected)


// We obtain the current theme that the interface has by validating the dark-theme class

// We validate if the user previously chose a topic


// Activate / deactivate the theme manually with the button

/*=============== SCROLL REVEAL ANIMATION ===============*/