
// Récupérer la fonction "fetchWeatherData"
import { fetchWeatherData } from "./fetchWeatherData";


/**
 * Gère l'événement de soumission du formulaire de recherche de la ville météo.
 * Cette fonction 
 *  - récupère la valeur de l'entrée de recherche,
 *  - appelle la fonction fetchWeatherData pour récupérer les données météorologiques de la ville.
 * 
 * @param {Event} event - L'événement de soumission du formulaire.
 */
export async function handleSearchForm(event) {
    event.preventDefault();

    // Récupère la valeur de l'entrée de recherche de la ville
    const cityName = document.querySelector('.searchInput').value;

    try {
        // Récupère les données météorologiques en utilisant le nom de la ville
        const weatherData = await fetchWeatherData(cityName);

        console.log('Weather Data : ', weatherData);
    } catch (error) {
        console.log("Une erreur s'est produite !", error);
    }
}