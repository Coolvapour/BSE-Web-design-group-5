// waiting for the page to load
document.addEventListener('DOMContentLoaded', () => {
    // selecting all navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // adding click events to the links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // first remove the 'current' class from everyone
            navLinks.forEach(l => l.classList.remove('current'));
            // add it to the one just clicked
            this.classList.add('current');
        });
    });
});