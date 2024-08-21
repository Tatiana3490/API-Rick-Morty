document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const characterId = params.get('id');
    const detailContainer = document.getElementById('character-detail');

    if (!characterId) {
        detailContainer.innerHTML = '<p>ID del personaje no proporcionado.</p>';
        return;
    }

    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
        .then(response => response.json())
        .then(character => {
            detailContainer.innerHTML = `
                <h2>${character.name}</h2>
                <img src="${character.image}" alt="${character.name}">
                <p><b>Id:</b> ${character.id}</p>
                <p><b>Estado:</b> ${character.status}</p>
                <p><b>Especie:</b> ${character.species}</p>
                <p><b>Género:</b> ${character.gender}</p>
                <p><b>Origen:</b> ${character.origin.name}</p>
                <p><b>Localización:</b> ${character.location.name}</p>
                <p><b>Creado:</b> ${character.created}</p>
                                        
            `;
        })
        .catch(error => {
            detailContainer.innerHTML = '<p>Error al cargar los detalles del personaje. Inténtalo de nuevo más tarde.</p>';
            console.error('Error:', error);
        });
});
