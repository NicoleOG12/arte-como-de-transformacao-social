// Obtém os elementos do DOM
var modal = document.getElementById("modal");
var modalImg = document.getElementById("modal-img");
var closeBtn = document.getElementsByClassName("close")[0];
var prevBtn = document.getElementsByClassName("prev")[0];
var nextBtn = document.getElementsByClassName("next")[0];

var currentIndex = 0;
var images = document.querySelectorAll('.card2 img');

// Função para abrir o modal com a imagem clicada
function openModal(index) {
    modal.style.display = "block";
    modalImg.src = images[index].src;
    currentIndex = index;
}

// Função para fechar o modal
function closeModal() {
    modal.style.display = "none";
}

// Função para mostrar a imagem anterior
function showPrevImage() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    modalImg.src = images[currentIndex].src;
}

// Função para mostrar a próxima imagem
function showNextImage() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    modalImg.src = images[currentIndex].src;
}

// Adiciona eventos de clique às imagens
images.forEach((img, index) => {
    img.addEventListener('click', () => openModal(index));
});

// Adiciona eventos de clique aos botões do modal
closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);

// Fecha o modal se clicar fora da imagem
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
