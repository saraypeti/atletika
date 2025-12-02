const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Oldalváltás
function showPage(pageId) {
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.page === pageId) {
            link.classList.add('active');
        }
    });
    
    mobileMenu.classList.add('hidden');
}

// Eseményfigyelő hozzáadása minden menüponthoz
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); 
        const pageId = e.currentTarget.dataset.page; 
        showPage(pageId); 
    });
});

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); 
});