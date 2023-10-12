
// Récupère la div avec l'ID "app"
const app = document.querySelector('#app');

// Créer la div "container" qui contiendra les cinq cartes avec la météo (pour 5 jours)
const container = document.createElement('div');
container.classList.add('containerCards');
let containerPhotoGraph = document.querySelector('.containerPhotoGraph');
app.insertBefore(container, containerPhotoGraph);

/**
 * Affiche les données météorologiques dans une div container.
 * @param {Object} data - Les données météorologiques à afficher.
 * @param {string} data.city - Le nom de la ville.
 * @param {Array} data.weather - Les informations météorologiques pour chaque jour.
 */
export async function weatherContainer(data) {

    // Effacer le contenu actuel du conteneur
    while (container.firstChild) {
        container.firstChild.remove();
    }

    // Créer et afficher des cartes pour chaque jour de la semaine
    data.weather.forEach(el => {

        // Créer la div "content"
        const card = document.createElement('div');
        card.classList.add('card');
        container.appendChild(card);

        // Créer la div "content"
        const content = document.createElement('div');
        content.classList.add('content');
        card.appendChild(content);

        // Afficher le jour de la semaine
        const day = document.createElement('span');
        day.classList.add('day');
        day.textContent = el.day;
        content.appendChild(day);

        // Afficher l'icône météo
        const image = document.createElement('img');
        image.setAttribute('src', el.icon);
        image.setAttribute('alt', 'icon.png');
        image.classList.add('icon');
        content.appendChild(image);

        // Afficher la température
        const temp = document.createElement('h3');
        temp.classList.add('temp');
        temp.textContent = el.temp;
        content.appendChild(temp);

        const celsius = document.createElement('span');
        celsius.classList.add('celsius');
        celsius.textContent = '°c';
        temp.appendChild(celsius);

        // // Afficher le nom de la ville
        // const city = document.createElement('p');
        // city.classList.add('city');
        // city.textContent = data.city;
        // content.appendChild(city);
    })
}

