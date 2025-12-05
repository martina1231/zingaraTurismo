document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar Iconos Lucide
    lucide.createIcons();

    // 2. Lógica del Menú Móvil
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('icon-menu');
    const iconClose = document.getElementById('icon-close');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            
            if (isHidden) {
                // Abrir menú
                menu.classList.remove('hidden');
                iconOpen.classList.add('hidden');
                iconClose.classList.remove('hidden');
            } else {
                // Cerrar menú
                menu.classList.add('hidden');
                iconOpen.classList.remove('hidden');
                iconClose.classList.add('hidden');
            }
        });
    }

    // 3. Highlight del link activo en Navbar
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        // Simple check: si el href termina con el path actual
        if (link.getAttribute('href') === currentPath || (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
            link.classList.remove('text-white', 'hover:text-zingara-cyan');
            link.classList.add('text-zingara-yellow', 'border-b-2', 'border-zingara-yellow');
        }
    });
});