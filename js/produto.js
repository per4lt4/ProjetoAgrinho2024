//pra funcionar o menu hamburaguer//
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => nav.classList.toggle("active"));










const controls = document.querySelectorAll(".control");
let currentItem = 0;
const items = document.querySelectorAll(".item");
const maxItems = items.length;

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    const isLeft = e.target.classList.contains("arrow-left");

    if (isLeft) {
      currentItem -= 1;
    } else {
      currentItem += 1;
    }

    if (currentItem >= maxItems) {
      currentItem = 0;
    }

    if (currentItem < 0) {
      currentItem = maxItems - 1;
    }

    items.forEach((item) => item.classList.remove("current-item"));

    // Obtenha o contêiner do carrossel para rolar dentro dele
    const galleryWrapper = document.querySelector('.gallery-wrapper');

    if (galleryWrapper) {
      items[currentItem].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest" // Adiciona block: "nearest" para evitar rolar a página
      });
    }

    items[currentItem].classList.add("current-item");
  });
});

//função para somar o valor da compra//
document.addEventListener('DOMContentLoaded', function() {
    const precoInput = document.getElementById('preco-prod');
    const quantidadeInput = document.getElementById('quantidade');
    const valorTotalSpan = document.getElementById('valorTotal');
    
    function atualizarValorTotal() {
        const preco = parseFloat(precoInput.value);
        const quantidade = parseInt(quantidadeInput.value, 10);
        const valorTotal = preco * quantidade;
        valorTotalSpan.textContent = valorTotal.toFixed(2);
    }

    quantidadeInput.addEventListener('input', atualizarValorTotal);

    // Atualiza o valor total ao carregar a página
    atualizarValorTotal();
});



//avaliação estrelas//

const stars = document.querySelectorAll(".stars i");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});