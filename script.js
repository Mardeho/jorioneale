// Modern Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translateY(10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '1';
                spans[2].style.transform = '';
            }
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans[0].style.transform = '';
            spans[1].style.opacity = '1';
            spans[2].style.transform = '';
        });
    });
    
    // ========================================
    // Smooth Scrolling for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ========================================
    // Navbar Scroll Effect
    // ========================================
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // ========================================
    // Floating CTA Bar
    // ========================================
    const floatingCta = document.getElementById('floatingCta');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 800) {
            floatingCta.classList.add('visible');
        } else {
            floatingCta.classList.remove('visible');
        }
    });
    
    // ========================================
    // Testimonials Carousel
    // ========================================
    const testimonials = document.querySelectorAll('.testimonial-card-modern');
    const carouselDots = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentTestimonial = 0;
    
    // Create dots
    if (carouselDots && testimonials.length > 0) {
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showTestimonial(index));
            carouselDots.appendChild(dot);
        });
    }
    
    function showTestimonial(index) {
        testimonials.forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.carousel-dot').forEach(d => d.classList.remove('active'));
        
        testimonials[index].classList.add('active');
        document.querySelectorAll('.carousel-dot')[index].classList.add('active');
        currentTestimonial = index;
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            currentTestimonial = currentTestimonial > 0 ? currentTestimonial - 1 : testimonials.length - 1;
            showTestimonial(currentTestimonial);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
            showTestimonial(currentTestimonial);
        });
    }
    
    // Auto-rotate testimonials every 6 seconds
    setInterval(function() {
        if (testimonials.length > 0) {
            currentTestimonial = currentTestimonial < testimonials.length - 1 ? currentTestimonial + 1 : 0;
            showTestimonial(currentTestimonial);
        }
    }, 6000);
    
    // ========================================
    // Intersection Observer for Animations
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -80px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Add fade-in effect to sections
    const fadeElements = document.querySelectorAll(
        '.authority-card, .audience-card-large, .service-card-modern, ' +
        '.service-featured, .resource-card-premium, .contact-card-box'
    );
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
    
    // ========================================
    // Stats Counter Animation
    // ========================================
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.dataset.suffix || '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.animated) {
                entry.target.dataset.animated = 'true';
                const finalValue = parseInt(entry.target.textContent);
                if (!isNaN(finalValue)) {
                    entry.target.textContent = '0';
                    animateValue(entry.target, 0, finalValue, 2000);
                }
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('.stat-number, .stat-box-number').forEach(stat => {
        const text = stat.textContent.trim();
        const number = parseInt(text);
        if (!isNaN(number)) {
            stat.dataset.suffix = text.replace(number.toString(), '');
            statsObserver.observe(stat);
        }
    });
    
    // ========================================
    // Video Placeholder Click Effect
    // ========================================
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', function() {
            // You can add video modal or redirect logic here
            console.log('Video placeholder clicked - add your video embed here');
        });
    }
    
    // ========================================
    // Card Hover Sound Effect (Optional)
    // ========================================
    const hoverCards = document.querySelectorAll('.card-hover, .service-card-modern, .resource-card-premium');
    hoverCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease';
        });
    });
    
    // ========================================
    // Parallax Effect for Hero
    // ========================================
    const heroParticles = document.querySelector('.hero-particles');
    if (heroParticles) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * 0.5;
            heroParticles.style.transform = `translateY(${rate}px)`;
        });
    }
    
    // ========================================
    // Form Validation (if you add forms)
    // ========================================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ========================================
    // Track Button Clicks (for analytics)
    // ========================================
    function trackButtonClick(buttonName) {
        // Add your analytics tracking code here
        console.log('Button clicked:', buttonName);
        
        // Example: Google Analytics
        // if (typeof gtag !== 'undefined') {
        //     gtag('event', 'click', {
        //         'event_category': 'CTA',
        //         'event_label': buttonName
        //     });
        // }
    }
    
    // Add click tracking to all CTA buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const btnText = this.querySelector('span')?.textContent || this.textContent;
            trackButtonClick(btnText);
        });
    });
    
    // ========================================
    // Lazy Loading Images (when you add real photos)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img.lazy').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // Prevent Default on Empty Href Links
    // ========================================
    document.querySelectorAll('a[href="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
    
    // ========================================
    // Console Welcome Message
    // ========================================
    console.log('%c👋 Hello from Jori O\'Neale!', 'color: #D4AF37; font-size: 20px; font-weight: bold;');
    console.log('%cLooking to talk your book into existence?', 'color: #1E3A5F; font-size: 14px;');
    console.log('%c→ Visit: jorioneale.com', 'color: #666; font-size: 12px;');
    
});

// ========================================
// Page Load Performance
// ========================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('Page fully loaded');
});
