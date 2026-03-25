document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const toggleBtn = document.querySelector('.navbar-toggler');
    const menuCollapse = document.getElementById('top_menu_collapse');

    if (toggleBtn && menuCollapse) {
        toggleBtn.addEventListener('click', function() {
            menuCollapse.classList.toggle('show');
        });
    }

    // Dropdown Toggles
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.parentElement;
            const menu = parent.querySelector('.dropdown-menu');
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-item-parent').forEach(p => {
                if (p !== parent) p.querySelector('.dropdown-menu').classList.remove('show');
            });

            menu.classList.toggle('show');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuCollapse.contains(e.target) && !toggleBtn.contains(e.target)) {
            menuCollapse.classList.remove('show');
        }
    });
});
