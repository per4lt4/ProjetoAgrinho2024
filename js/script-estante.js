// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');
    
    searchIcon.addEventListener('click', () => {
      if (searchBar.classList.contains('hidden')) {
        searchBar.classList.remove('hidden');
        searchBar.style.width = '200px'; // Largura da barra expandida
        document.getElementById('search-input').focus();
      } else {
        searchBar.style.width = '0';
        setTimeout(() => searchBar.classList.add('hidden'), 300); // Tempo para a animação
      }
    });
  
    // Opcional: Fechar a barra de pesquisa ao clicar fora dela
    document.addEventListener('click', (event) => {
      if (!searchBar.contains(event.target) && !searchIcon.contains(event.target)) {
        searchBar.style.width = '0';
        setTimeout(() => searchBar.classList.add('hidden'), 300); // Tempo para a animação
      }
    });
  });
 
  function toggleFiltro() {
    const filtro = document.getElementById('filtro');
    filtro.classList.toggle('show');
  }

  //categorias//
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  //filtrar por produto//
  