document.getElementById('btn-voltar').addEventListener('click', function () {
    if (window.location.pathname.includes('index.html')) {
        window.location.reload(); // Recarrega apenas se já estiver na página index
    } else {
        window.location.href = 'index.html'; // Redireciona para index se estiver em outra página
    }
});

const categories = document.querySelectorAll('.category-title');

categories.forEach(title => {
    title.addEventListener('click', () => {
        const products = title.nextElementSibling;

        // Fecha todas as outras seções de produtos
        categories.forEach(otherTitle => {
            if (otherTitle !== title) {
                const otherProducts = otherTitle.nextElementSibling;
                otherProducts.style.maxHeight = null;
                otherTitle.classList.remove('expanded');
            }
        });

        // Alterna a visibilidade da seção atual
        if (products.style.maxHeight) {
            products.style.maxHeight = null; // Recolhe
            title.classList.remove('expanded'); // Remove classe quando colapsado
        } else {
            products.style.maxHeight = products.scrollHeight + "px"; // Expande até o tamanho do conteúdo
            title.classList.add('expanded'); // Adiciona classe quando expandido
        }
    });
});

