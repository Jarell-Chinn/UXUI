
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
