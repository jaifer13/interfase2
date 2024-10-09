document.addEventListener("DOMContentLoaded", function () {
    const textInput = document.getElementById("textInput");
    const addButton = document.getElementById("addButton");
    const clearButton = document.getElementById("clearButton");
    const fontSizeSlider = document.getElementById("fontSizeSlider");
    const colorPicker = document.getElementById("colorPicker");
    const backgroundColorPicker = document.getElementById("backgroundColorPicker");
    const positionButtons = document.querySelectorAll(".position-button");
    const canvas = document.querySelector(".canvas");
    const imageUpload = document.getElementById("imageUpload");
    const addImageButton = document.getElementById("addImage");
    const clearImageButton = document.getElementById("clearImageButton");
    const canvas2 = document.querySelector(".canvas2");

    // Função para adicionar texto ao canvas
    addButton.addEventListener("click", function () {
        const textElement = document.createElement("p");
        textElement.textContent = textInput.value;
        textElement.style.fontSize = `${fontSizeSlider.value}px`;
        textElement.style.color = colorPicker.value;
        textElement.style.textAlign = "left";
        canvas.appendChild(textElement);
    });

    // Função para limpar o texto
    clearButton.addEventListener("click", function () {
        canvas.innerHTML = "";
    });

    // Atualizar tamanho da fonte em tempo real
    fontSizeSlider.addEventListener("input", function () {
        const textElement = canvas.querySelector("p:last-child");
        if (textElement) {
            textElement.style.fontSize = `${fontSizeSlider.value}px`;
        }
    });

    // Atualizar cor do texto em tempo real
    colorPicker.addEventListener("input", function () {
        const textElement = canvas.querySelector("p:last-child");
        if (textElement) {
            textElement.style.color = colorPicker.value;
        }
    });

    // Mudar o alinhamento do texto
    positionButtons.forEach(button => {
        button.addEventListener("click", function () {
            const position = this.getAttribute("data-position");
            const textElement = canvas.querySelector("p:last-child");
            if (textElement) {
                textElement.style.textAlign = position;
            }
        });
    });

    // Função para trocar o fundo da div canvas
    backgroundColorPicker.addEventListener("input", function () {
        canvas.style.backgroundColor = backgroundColorPicker.value;
    });

    // Função para adicionar imagem ao canvas2
    addImageButton.addEventListener("click", function () {
        const file = imageUpload.files[0];
        if (file) {
            const imgElement = document.createElement("img");
            imgElement.src = URL.createObjectURL(file);
            imgElement.style.width = "100%";  // Preenche toda a largura da div
            imgElement.style.height = "100%"; // Preenche toda a altura da div
            imgElement.style.objectFit = "cover"; // Mantém a proporção da imagem
            canvas2.innerHTML = ""; // Limpa qualquer conteúdo anterior
            canvas2.appendChild(imgElement);
        }
    });

    // Função para limpar a imagem
    clearImageButton.addEventListener("click", function () {
        canvas2.innerHTML = "";
    });
});
