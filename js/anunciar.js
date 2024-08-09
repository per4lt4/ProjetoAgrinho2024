document.addEventListener('DOMContentLoaded', () => {
    const uploadContainer = document.getElementById('uploadContainer');
    const fileInput = document.getElementById('fileInput');
    const uploadedImage = document.getElementById('uploadedImage');
    const uploadText = document.getElementById('uploadText');

    // Abrir o seletor de arquivos quando o contêiner for clicado
    uploadContainer.addEventListener('click', () => {
        fileInput.click();
    });

    // Manipular a seleção de arquivo
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                uploadedImage.src = e.target.result;
                uploadedImage.style.display = 'block'; // Exibir a imagem
                uploadText.style.display = 'none'; // Ocultar o texto
            };
            reader.onerror = () => {
                console.error('Erro ao ler o arquivo.');
            };
            reader.readAsDataURL(file);
        } else {
            console.log('Nenhum arquivo selecionado');
        }
    });
});

//imagems paquenas//

document.addEventListener('DOMContentLoaded', () => {
    const uploadContainers = document.querySelectorAll('.upload-container');

    uploadContainers.forEach(container => {
        const fileInput = container.querySelector('.hidden-input');
        const uploadedImage = container.querySelector('img');
        
        container.addEventListener('click', () => {
            fileInput.click();
        });

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    uploadedImage.src = e.target.result;
                    uploadedImage.style.display = 'block'; // Exibir a imagem
                };
                reader.onerror = () => {
                    console.error('Erro ao ler o arquivo.');
                };
                reader.readAsDataURL(file);
            } else {
                console.log('Nenhum arquivo selecionado');
            }
        });
    });
});


function toggleDropdown() {
    document.getElementById("dropdownContent").classList.toggle("show");
}

function selectOption(option) {
    document.getElementById("dropdownButton").innerText = option;
    document.getElementById("dropdownContent").classList.remove("show");
}

window.onclick = function(event) {
    if (!event.target.matches('#cultivo-botao')) {
        var dropdowns = document.getElementsByClassName("cultivo-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//para visualizar o preço//

function atualizarValor() {
    var valor = document.getElementById("inputValor").value;
    document.getElementById("valorAtualizado").innerText = valor;
}