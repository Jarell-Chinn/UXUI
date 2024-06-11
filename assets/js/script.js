document.addEventListener('DOMContentLoaded', function() {
    setupSmoothScroll('a[href="#About"]', '#About');
    setupSmoothScroll('a[href="#Socials"]', '#Socials');
    setupSmoothScroll('a[href="#Home"]', '#Home');
});

document.addEventListener("DOMContentLoaded", function() {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.2 }); // The threshold can be adjusted to trigger the effect sooner or later

    document.querySelectorAll('.fade-effect').forEach(element => {
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

// RandomNumber(); // Call the function to start the loop

// function RandomNumber() { 
//     let number = Math.floor(Math.random() * 10000); 
//     if (number === 4) {
//         let element = document.getElementById("delete");
//         if (element) element.remove();
//     }
//     console.log(number);
//    RandomNumber()
// }
