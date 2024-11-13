let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});


// Initialize ScrollReveal with default settings
const sr = ScrollReveal({
    distance: '20px', 
    duration: 1000,   
    reset: true
});

//animations with adjusted delay and origin values
sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 300, origin: 'top' });
sr.reveal('.icons', { delay: 350, origin: 'left' });
sr.reveal('.section-heading', { delay: 380, origin: 'top' });
sr.reveal('.card', { delay: 400, origin: 'top' });
sr.reveal('.features-heading', { delay: 450, origin: 'top' });
sr.reveal('.features', { delay: 500, origin: 'top' });
sr.reveal('.about-container', { delay: 600, origin: 'top' });
sr.reveal('.contact-container', { delay: 600, origin: 'top' });
sr.reveal('#loginForm', { delay: 400, origin: 'top' });
sr.reveal('#registerForm', { delay: 400, origin: 'top' });

// Responsiveness based on screen size using media queries
const smallScreenSettings = {
    distance: '10px',  
    duration: 800,     
};

const mediumScreenSettings = {
    distance: '20px',  
    duration: 1000,
};

const largeScreenSettings = {
    distance: '30px',  
    duration: 1200,    
};

// Media queries to apply different settings based on screen size
const smallScreen = window.matchMedia('(max-width: 600px)');
const mediumScreen = window.matchMedia('(min-width: 601px) and (max-width: 1024px)');

function applyRevealSettings(settings) {
    sr.reveal('.hero-text', settings);
    sr.reveal('.hero-img', settings);
    sr.reveal('.icons', settings);
    sr.reveal('.section-heading', settings);
    sr.reveal('.card', settings);
    sr.reveal('.features-heading', settings);
    sr.reveal('.features', settings);
}

// Apply settings based on screen size
if (smallScreen.matches) {
    applyRevealSettings(smallScreenSettings);
} else if (mediumScreen.matches) {
    applyRevealSettings(mediumScreenSettings);
} else {
    applyRevealSettings(largeScreenSettings);
}
