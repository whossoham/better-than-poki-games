document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const userActions = document.querySelector('.user-actions');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            const isNavVisible = navLinks.style.display === 'flex';
            
            navLinks.style.display = isNavVisible ? 'none' : 'flex';
            if (userActions) {
                userActions.style.display = isNavVisible ? 'none' : 'flex';
            }
            
            // Toggle menu icon
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
            
            // Adjust styles for mobile menu
            if (navLinks.style.display === 'flex') {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.width = '100%';
                navLinks.style.backgroundColor = 'white';
                navLinks.style.padding = '1rem';
                navLinks.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.1)';
                
                if (userActions) {
                    userActions.style.flexDirection = 'column';
                    userActions.style.width = '100%';
                    userActions.style.gap = '0.5rem';
                    userActions.style.marginTop = '1rem';
                }
            }
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch();
        });
        
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // In a real implementation, this would redirect to search results
            alert(`Searching for: ${searchTerm}`);
            // searchInput.value = '';
        }
    }
    
    // Game cards hover effect enhancement
    const gameCards = document.querySelectorAll('.game-card');
    
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
    
    // Play button functionality
    const playButtons = document.querySelectorAll('.btn-play');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const gameName = this.closest('.game-card').querySelector('h3').textContent;
            // In a real implementation, this would launch the game
            alert(`Starting ${gameName}!`);
        });
    });
    
    // Newsletter subscription
    const newsletterForm = document.querySelector('.newsletter-form');
    const emailInput = document.querySelector('.newsletter-form input');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = emailInput.value.trim();
            
            if (email && isValidEmail(email)) {
                alert(`Thank you for subscribing with ${email}!`);
                emailInput.value = '';
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
    
    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    // Lazy loading images (simple implementation)
    if ('IntersectionObserver' in window) {
        const imgOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px 50px 0px"
        };
        
        const imgObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    
                    if (src) {
                        img.src = src;
                    }
                    
                    observer.unobserve(img);
                }
            });
        }, imgOptions);
        
        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => {
            imgObserver.observe(img);
        });
    }
});
