
        // JavaScript aqui

        document.addEventListener('DOMContentLoaded', () => {
          const fornecedorButton = document.getElementById('fornecedor');
          const comercianteButton = document.getElementById('comerciante');
          const fornecedorForm = document.getElementById('fornecedor-form');
          const comercianteForm = document.getElementById('comerciante-form');

          fornecedorButton.addEventListener('click', () => {
              fornecedorButton.classList.add('active');
              comercianteButton.classList.remove('active');
              fornecedorForm.classList.add('active');
              comercianteForm.classList.remove('active');
          });

          comercianteButton.addEventListener('click', () => {
              comercianteButton.classList.add('active');
              fornecedorButton.classList.remove('active');
              comercianteForm.classList.add('active');
              fornecedorForm.classList.remove('active');
          });

          const getLocationButtonFornecedor = document.getElementById('get-location-btn-fornecedor');
          const locationInputFornecedor = document.getElementById('location-input-fornecedor');

          getLocationButtonFornecedor.addEventListener('click', () => {
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(position => {
                      const { latitude, longitude } = position.coords;
                      locationInputFornecedor.value = `Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`;
                  }, () => {
                      locationInputFornecedor.value = 'Não foi possível obter a localização.';
                  });
              } else {
                  locationInputFornecedor.value = 'Geolocalização não é suportada pelo seu navegador.';
              }
          });

          const getLocationButtonComerciante = document.getElementById('get-location-btn-comerciante');
          const locationInputComerciante = document.getElementById('location-input-comerciante');

          getLocationButtonComerciante.addEventListener('click', () => {
              if (navigator.geolocation) {
                  navigator.geolocation.getCurrentPosition(position => {
                      const { latitude, longitude } = position.coords;
                      locationInputComerciante.value = `Lat: ${latitude.toFixed(2)}, Lng: ${longitude.toFixed(2)}`;
                  }, () => {
                      locationInputComerciante.value = 'Não foi possível obter a localização.';
                  });
              } else {
                  locationInputComerciante.value = 'Geolocalização não é suportada pelo seu navegador.';
              }
          });
      });