// mobile-navbar

document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', () => {
            navbar.classList.toggle('active');
        });
    }
});
