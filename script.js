document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor with Magnetic Effect
    const cursorBlob = document.querySelector('.cursor-blob');
    
    document.addEventListener('mousemove', (e) => {
        // Fast follow for cursor
        cursorBlob.style.left = e.clientX + 'px';
        cursorBlob.style.top = e.clientY + 'px';
    });

    // Hover states for cursor
    const clickables = document.querySelectorAll('a, button, .h-card');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });

    // Top Progress Bar
    const progressBar = document.getElementById('progress-bar');
    
    // Magnetic Button Effect on "Let's Build"
    const magneticWrap = document.querySelector('.magnetic-wrap');
    const magneticEl = document.querySelector('.magnetic-element');
    
    if (magneticWrap && magneticEl) {
        magneticWrap.addEventListener('mousemove', (e) => {
            const rect = magneticWrap.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            magneticEl.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        magneticWrap.addEventListener('mouseleave', () => {
            magneticEl.style.transform = `translate(0px, 0px)`;
        });
    }

    // Scroll Logic 
    const horizontalScrollContainer = document.querySelector('.native-horizontal-scroll');
    const projectsSection = document.getElementById('projects');

    if (horizontalScrollContainer) {
        // Center the horizontal scroll on load
        const centerPosition = (horizontalScrollContainer.scrollWidth - horizontalScrollContainer.clientWidth) / 2;
        horizontalScrollContainer.scrollLeft = centerPosition;
    }

    // Scroll Reveal Elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.view-reveal').forEach(el => observer.observe(el));

    // Handle Window Scroll Events
    window.addEventListener('scroll', () => {
        // Update Progress Bar
        const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (window.scrollY / scrollTotal) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
});
