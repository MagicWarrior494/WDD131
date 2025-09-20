const navLinks = document.querySelectorAll('.nav-link');
const iframe = document.querySelector('iframe[name="contentFrame"]');
const welcome = document.querySelector('.welcome');
const homeBtn = document.getElementById('homeBtn');

// Load a page in the iframe
function loadPage(url, clickedLink = null) {
    // Update active class
    navLinks.forEach(l => l.classList.remove('active'));
    if (clickedLink) clickedLink.classList.add('active');

    // Fade out welcome if visible
    if (!welcome.classList.contains('hidden')) {
        welcome.classList.add('hidden');
    }

    // Fade out iframe if currently visible
    iframe.classList.remove('visible');

    // Delay to allow fade out
    setTimeout(() => {
        iframe.src = url;
        iframe.classList.add('visible');
    }, 300);
}

// Nav link clicks
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const url = link.getAttribute('href');
        loadPage(url, link);
    });
});

// Home button click
homeBtn.addEventListener('click', (e) => {
    e.preventDefault();

    // Remove active class from all nav links
    navLinks.forEach(l => l.classList.remove('active'));

    // Fade out iframe
    iframe.classList.remove('visible');

    // Fade in welcome page after delay
    setTimeout(() => {
        welcome.classList.remove('hidden');
    }, 300);
});
