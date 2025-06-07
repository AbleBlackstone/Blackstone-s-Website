document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu button
    const mobileMenuButton = document.createElement('button');
    mobileMenuButton.className = 'mobile-menu-button';
    mobileMenuButton.innerHTML = '☰';
    document.body.appendChild(mobileMenuButton);

    // Get navbar element
    const navbar = document.querySelector('.navbar');

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.innerHTML = navbar.classList.contains('active') ? '✕' : '☰';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            navbar.classList.remove('active');
            mobileMenuButton.innerHTML = '☰';
        }
    });

    // Close mobile menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            mobileMenuButton.innerHTML = '☰';
        });
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navbar.classList.remove('active');
            mobileMenuButton.innerHTML = '☰';
        }
    });
}); 