
// Récupérer la fonction "fetchWeatherData"
import { fetchWeatherData } from "./fetchWeatherData";
import { weatherContainer } from "./weatherContainer";

/**
 * Gère l'événement de soumission du formulaire de recherche de la ville météo.
 * Cette fonction 
 *  - récupère la valeur de l'entrée de recherche de la ville,
 *  - appelle la fonction fetchWeatherData pour récupérer les données météorologique,
 *  - vide l'input de recherche et rétablit l'opacité de l'icône de recherche.
 * 
 * @param {Event} event - L'événement de soumission du formulaire.
 */
export async function handleSearchForm(event) {
    event.preventDefault();

    // Récupère la valeur de l'entrée de recherche de la ville
    const cityNameInput = document.querySelector('.searchInput');
    const cityName = cityNameInput.value;

    try {
        // Récupère les données météorologiques en utilisant le nom de la ville
        const weatherData = await fetchWeatherData(cityName);
        // console.log('Weather Data : ', weatherData);

        // Appeler la fonction "weatherContainer" qui crée les cartes
        weatherContainer(weatherData);

        // Réinitialise l'input et l'icône de recherche
        cityNameInput.value = '';
        document.querySelector('.searchBtn img').classList.add('opacity');


    } catch (error) {
        console.log("Une erreur s'est produite !", error);
    }
}