document.getElementById('verCardapio').addEventListener('click', function () {
    const homeContent = document.querySelector('.home');

    // Adiciona a classe slide-up para mover a página para cima
    homeContent.classList.add('slide-up');

    // Redireciona após o término da animação (500ms)
    setTimeout(function () {
        window.location.href = 'menu-bebidas.html'; // Substituir pela URL do cardápio
    }, 410); // Tempo igual ao da animação no CSS
});
