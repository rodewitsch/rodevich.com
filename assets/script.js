// ─── Particles ───
(function() {
    const container = document.getElementById('particles');
    const count = 40;
    for (let i = 0; i < count; i++) {
        const span = document.createElement('span');
        const size = Math.random() * 4 + 2;
        span.style.width = size + 'px';
        span.style.height = size + 'px';
        span.style.left = Math.random() * 100 + '%';
        span.style.top = Math.random() * 100 + '%';
        span.style.animationDelay = Math.random() * 20 + 's';
        span.style.animationDuration = (Math.random() * 10 + 15) + 's';
        container.appendChild(span);
    }
})();

// ─── Theme toggle ───
(function() {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    if (stored === 'light' || (!stored && prefersLight)) {
        html.classList.add('light');
    }
    toggle.addEventListener('click', () => {
        html.classList.toggle('light');
        localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
    });
})();

// ─── Back to top ───
(function() {
    const btn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
