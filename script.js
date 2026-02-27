document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const siteNav = document.querySelector('.site-nav');
    const navLinks = document.querySelectorAll('.site-nav a');

    if (!navToggle || !siteNav) return;

    const toggleNav = () => {
        const expanded = navToggle.getAttribute('aria-expanded') === 'true';
        navToggle.setAttribute('aria-expanded', String(!expanded));
        navToggle.setAttribute('aria-label', expanded ? '메뉴 열기' : '메뉴 닫기');
        siteNav.classList.toggle('is-open', !expanded);
        document.body.classList.toggle('nav-open', !expanded);
    };

    navToggle.addEventListener('click', toggleNav);

    navLinks.forEach((link) => {
        link.addEventListener('click', () => {
            if (navToggle.getAttribute('aria-expanded') === 'true') {
                toggleNav();
            }
        });
    });
});
