document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id'); // Usa 'id' si estás pasando el ID en la URL
    const detailContainer = document.getElementById('personaje-detail');

    if (characterId) {
        fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
            .then(response => response.json())
            .then(data => {
                detailContainer.innerHTML = `
                    <h2>${character.name}</h2>
                        <img src="${character.image}" alt="${character.name}">
                        <div class="character-info">
                        <p><b>Id:</b> ${character.id}</p>
                        <p><b>Estado:</b> ${character.status}</p>
                        <p><b>Especie:</b> ${character.species}</p>
                        <p><b>Género:</b> ${character.gender}</p>
                        <p><b>Origen:</b> ${character.origin.name}</p>
                        <p><b>Localización:</b> ${character.location.name}</p>
                                                
                        </div>
                        
                `;
            })
            .catch(error => {
                detailContainer.innerHTML = `<p>Error al cargar los detalles del personaje.</p>`;
                console.error('Error fetching character details:', error);
            });
    } else {
        detailContainer.innerHTML = `<p>No character ID provided.</p>`;
    }
});
