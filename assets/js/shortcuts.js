// Author: Ahmed Shaikh


// Keep track of clicked keys
var isKeyPressed = {
    p: false,
    x: false,
    r: false,
    e: false,
    d: false,
    w: false,
    h: false,
    g: false,
    l: false,
    m: false,
    s: false,
    f: false,
    c: false
};

// Variables to keep track of modal views
var projectsModalView = false;
var experienceModalView = false;
var resumeModalView = false;

document.onkeydown = keyDownEvent => {
    // Track down key click
    isKeyPressed[keyDownEvent.key] = true;

    // Navigate to projects section
    if (isKeyPressed['p'] && !keyDownEvent.metaKey) {
        
        // Check whether in modal view
        if (projectsModalView && !experienceModalView && !resumeModalView) {

            window.location.href = '#';
            projectsModalView = false;

        } else {

            // Prevent shortcut to other modals while in a specific modal view
            if (!experienceModalView && !resumeModalView) {
                window.location.href = '/#projects';
                projectsModalView = true;
            }

        }

    }

    // Navigate to experience section
    if (isKeyPressed['x'] && !keyDownEvent.metaKey) {

        // Check whether in modal view
        if (experienceModalView && !projectsModalView && !resumeModalView) {

            window.location.href = '#';
            experienceModalView = false;

        } else {

            // Prevent shortcut to other modals while in a specific modal view
            if (!projectsModalView && !resumeModalView) {
                window.location.href = '/#experience';
                experienceModalView = true;
            }

        }

    }

    // Navigate to resume section
    if (isKeyPressed['r'] && !keyDownEvent.metaKey) {

        // Check whether in modal view
        if (resumeModalView && !projectsModalView && !experienceModalView) {

            window.location.href = '#';
            resumeModalView = false;

        } else {

            // Prevent shortcut to other modals while in a specific modal view
            if (!projectsModalView && !experienceModalView) {
                window.location.href = '/#resume';
                resumeModalView = true;
            }

        }

    }

    // Scroll up
    if (isKeyPressed['e'] && !keyDownEvent.metaKey) {
        window.scrollBy({
            top: -75,
            behavior: 'smooth'
        });
    }

    // Scroll down
    if (isKeyPressed['d'] && !keyDownEvent.metaKey) {
        window.scrollBy({
            top: 75,
            behavior: 'smooth'
        });
    }

    // Exit to homepage
    if (isKeyPressed['w'] && !keyDownEvent.metaKey) {
        window.location.href = '#';
        projectsModalView = false;
        experienceModalView = false;
        resumeModalView = false;
    }

    // HTML5up Attribution Link
    if (isKeyPressed['h'] && !keyDownEvent.metaKey) {
        window.open('https://html5up.net/', '_blank').focus();
        
        // Manually disable key due to shift in focus
        isKeyPressed['h'] = false;
    }

    // Socials Buttons
    if (!projectsModalView && !experienceModalView && !resumeModalView) {
        // GitHub
        if (isKeyPressed['g'] && !keyDownEvent.metaKey) {
            window.open('https://github.com/AhmedShaikhSW', '_blank').focus();
            
            // Manually disable key due to shift in focus
            isKeyPressed['g'] = false;
        }

        // LinkedIn
        if (isKeyPressed['l'] && !keyDownEvent.metaKey) {
            window.open('https://www.linkedin.com/in/ahmedshaikhsw/', '_blank').focus();
            
            // Manually disable key due to shift in focus
            isKeyPressed['l'] = false;
        }

        // Email
        if (isKeyPressed['m'] && !keyDownEvent.metaKey) {
            window.open('mailto:ahmeds@mun.ca');
            
            // Manually disable key due to shift in focus
            isKeyPressed['m'] = false;
        }
    }

    // Project Links
    if (projectsModalView) {
        // ScriptIt
        if (isKeyPressed['s'] && !keyDownEvent.metaKey) {
            window.open('https://github.com/sameerahmed15/ScriptIt', '_blank').focus();
            
            // Manually disable key due to shift in focus
            isKeyPressed['s'] = false;
        }

        // Facial Recognition
        if (isKeyPressed['f'] && !keyDownEvent.metaKey) {
            window.open('https://github.com/AhmedShaikhSW/facerec', '_blank').focus();
            
            // Manually disable key due to shift in focus
            isKeyPressed['f'] = false;
        }

        // Cryptography Ciphers
        if (isKeyPressed['c'] && !keyDownEvent.metaKey) {
            window.open('https://github.com/AhmedShaikhSW/ciphers-python3', '_blank').focus();
            
            // Manually disable key due to shift in focus
            isKeyPressed['c'] = false;
        }
    }

};


document.onkeyup = keyUpEvent => {
    // Track down key release
    isKeyPressed[keyUpEvent.key] = false;
};
