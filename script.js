document.addEventListener('DOMContentLoaded', () => {

    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
        if (button.tagName.toLowerCase() === 'a') return;

        button.addEventListener('click', () => {
            const codeWrapper = button.parentElement;
            const codeToCopy = codeWrapper.querySelector('pre').innerText;

            navigator.clipboard.writeText(codeToCopy).then(() => {
                const originalIcon = button.innerHTML;
                button.innerHTML = '<i class="fa-solid fa-check"></i>';
                button.style.backgroundColor = '#28a745'; // Green

                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.style.backgroundColor = '';
                }, 2000);
            }).catch(err => {
                console.error('Falha ao copiar:', err);
            });
        });
    });

    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section, .step');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(link => {
                    const href = link.getAttribute('href');
                    link.classList.toggle('active', href === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: '-30% 0px -70% 0px' });

    sections.forEach(section => {
        observer.observe(section);
    });
});