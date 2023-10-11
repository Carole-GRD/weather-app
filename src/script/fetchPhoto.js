
// Clé d'API OpenWeather récupérée depuis les variables d'environnement
const API_KEY_UNSPLASH = import.meta.env.VITE_API_KEY_UNSPLASH;




export async function fetchPhoto(cityName) {
    // console.log(cityName);
    // console.log(API_KEY_UNSPLASH);

    const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${API_KEY_UNSPLASH}`;

    // Effectuer une requête pour obtenir une photo
    const unsplashResponse = await fetch(unsplashApiUrl);
    const unsplashJson = await unsplashResponse.json();

    const urlPhoto = unsplashJson.results[0].urls.raw;

    let photo = document.querySelector('.photoContainer img');
    photo.setAttribute('src', urlPhoto);
    photo.setAttribute('alt', `Photo de ${cityName}`);

    // console.log('urlPhoto : ', urlPhoto);
}

