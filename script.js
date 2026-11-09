document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('media-form');
  const gallery = document.getElementById('gallery');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const mediaType = document.getElementById('media-type').value;
    const mediaUrl = document.getElementById('media-url').value;

    const card = document.createElement('div');
    card.classList.add('card');

    if (mediaType === 'image') {
      const img = document.createElement('img');
      img.src = mediaUrl;
      img.alt = title;
      card.appendChild(img);
    } else if (mediaType === 'video') {
      const video = document.createElement('video');
      video.src = mediaUrl;
      video.controls = true;
      card.appendChild(video);
    }

    const caption = document.createElement('h3');
    caption.textContent = title;
    card.appendChild(caption);

    // Adiciona o novo card no topo da galeria
    gallery.prepend(card);

    // Limpa o formulário
    form.reset();
  });
});
