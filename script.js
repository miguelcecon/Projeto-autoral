
const form = document.getElementById("media-form");
const gallery = document.getElementById("gallery");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const mediaType = document.getElementById("media-type").value;
    const mediaUrl = document.getElementById("media-url").value.trim();

    if (!title || !mediaUrl) {
        alert("Preencha todos os campos!");
        return;
    }

    // Criar o cartão
    const card = document.createElement("div");
    card.classList.add("card");

    if (mediaType === "image") {

        const img = document.createElement("img");

        img.src = mediaUrl;
        img.alt = title;
        img.loading = "lazy";

        img.onerror = function() {
            alert("Não foi possível carregar esta imagem. Verifique se o link é direto e válido.");
            card.remove();
        };

        card.appendChild(img);

    } else if (mediaType === "video") {

        const video = document.createElement("video");

        video.src = mediaUrl;
        video.controls = true;
        video.preload = "metadata";

        card.appendChild(video);
    }

    // Adicionar título
    const heading = document.createElement("h3");
    heading.textContent = title;

    card.appendChild(heading);

    // Adicionar à galeria
    gallery.appendChild(card);

    // Limpar formulário
    form.reset();

});
