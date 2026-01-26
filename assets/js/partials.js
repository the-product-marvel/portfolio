console.log("partials.js loaded");

document.addEventListener('DOMContentLoaded', async () => {
    const slots = document.querySelectorAll('[data-partial]');

    for (const slot of slots) {
        const path = slot.getAttribute('data-partial');
        const response = await fetch(path);
        slot.innerHTML = await response.text();
    }

    // ---- Reveal AFTER partials load ----
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Footer year
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();

    // Extras toggle
    const toggle = document.querySelector('.extras-toggle');
    const content = document.getElementById('extras-content');

    if (toggle && content) {
        toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') === 'true';
            toggle.setAttribute('aria-expanded', String(!expanded));
            content.hidden = expanded;
        });
    }
});