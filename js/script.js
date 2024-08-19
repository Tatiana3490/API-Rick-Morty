/*Elementos del DOM*/
const charactersEl = document.getElementById('characters');
const nameFilterEl = document.getElementById('name-filter');
const statusFilterEl = document.getElementById('status-filter');

/*Funcion que hace el llamado a la API*/
async function getCharacters (name, status){

    let url ='https://rickandmortyapi.com/api/character/';

    if(name || status){
        url += '?';
        if(name){
            url += `name=${name}&`;
        }

        if(status){
            url +=`status=${status}`;
        }
    }

    const response = await fetch(url);
    const data = await response.json();

    return data.results;
}

//La función que va a renderizar los elementos dentro del DOM

async function displayCharacters(name, status) {

    //Obtener los personajes filtrados
    const characters = await getCharacters(name, status);

    charactersEl.innerHTML ='';

    //renderizar los personajes
    for(let character of characters){
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src=" ${character.image}"/>
            <h2> ${character.name} </h2>
            <p> <b>Status:</b> <i>${character.status}</i> </p>
            <p> <b>Especie:</b> <i>${character.species}</i> </p>
            <p> <b>Localización:</b> <i>${character.location.name}</i> </p>
            <p> <b>Género:</b> <i>${character.gender}</i></p>
            <p> <b>Origen:</b><i> ${character.origin.name}</i> </p>
        
        
        `;

        //Para redirigir a la página de detalle

        card.addEventListener('click', () => {
            window.location.href = `detail.html?id=${character.id}`;
        });

        charactersEl.appendChild(card);
    }
    
}

displayCharacters();

//Para escuchar a los filtros del buscador

nameFilterEl.addEventListener('input', () => {
    displayCharacters(nameFilterEl.value, statusFilterEl.value);
});

statusFilterEl.addEventListener('change', () => {

    displayCharacters(nameFilterEl.value, statusFilterEl.value)
});