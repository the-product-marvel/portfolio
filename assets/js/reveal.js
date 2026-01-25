const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const filterButtons = document.querySelectorAll('.filters button');
const panels = document.querySelectorAll('.geek-panel');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.setAttribute('aria-selected', 'false'));
        panels.forEach(p => p.classList.remove('active'));

        btn.setAttribute('aria-selected', 'true');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});