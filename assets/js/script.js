document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScroll('a[href="#About"]', '#About');
    setupSmoothScroll('a[href="#Socials"]', '#Socials');
    setupSmoothScroll('a[href="#Home"]', '#Home');
});

document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Toggle 'visible' class based on whether the section is intersecting
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 }); // The threshold can be adjusted to trigger the effect sooner or later

    // Observe both work image wrappers and container-works sections
    document.querySelectorAll('.work-image-wrapper, .container-works').forEach(element => {
        observer.observe(element);
    });
});




function setupSmoothScroll(linkSelector, sectionSelector) {
    const link = document.querySelector(linkSelector);
    if (link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const section = document.querySelector(sectionSelector);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
}

// document.addEventListener('DOMContentLoaded', function() {
//     const aboutLink = document.querySelector('a[href="#About"]');
//     aboutLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         const aboutSection = document.querySelector('#About');
//         aboutSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const contactLink = document.querySelector('a[href="#Socials"]');
//     contactLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         const contactSection = document.querySelector('#Socials');
//         contactSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const workLink = document.querySelector('a[href="#Home"]');
//     workLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         const workSection = document.querySelector('#Home');
//         workSection.scrollIntoView({ behavior: 'smooth' });
//     });
// });