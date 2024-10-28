document.getElementById('btn-voltar').addEventListener('click', function () {
    window.location.reload(); 
    window.location.href = 'index.html';
});

const categories = document.querySelectorAll('.category-title');

categories.forEach(title => {
    title.addEventListener('click', () => {
        const products = title.nextElementSibling;

        if (products.style.maxHeight) {
            products.style.maxHeight = null; // Recolhe
            title.classList.remove('expanded'); // Remove classe quando colapsado
        } else {
            products.style.maxHeight = products.scrollHeight + "px"; // Expande até o tamanho do conteúdo
            title.classList.add('expanded'); // Adiciona classe quando expandido
        }
    });
});

