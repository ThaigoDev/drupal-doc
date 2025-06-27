document.addEventListener('DOMContentLoaded', () => {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeContainer = button.parentElement;
            const codeElement = codeContainer.querySelector('pre code');
            const codeToCopy = codeElement.innerText;

            navigator.clipboard.writeText(codeToCopy).then(() => {
                // Feedback visual para o usuário
                button.innerText = 'Copiado!';
                button.style.backgroundColor = '#28a745'; // Green color

                setTimeout(() => {
                    button.innerText = 'Copiar';
                    button.style.backgroundColor = '#444';
                }, 2000);
            }).catch(err => {
                console.error('Falha ao copiar texto: ', err);
                button.innerText = 'Erro!';
                 setTimeout(() => {
                    button.innerText = 'Copiar';
                }, 2000);
            });
        });
    });
});