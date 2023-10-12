

// Clé d'API OpenWeather récupérée depuis les variables d'environnement
const API_KEY_OPENWEATHER = import.meta.env.VITE_API_KEY_OPENWEATHER;

// Importe les fonctions fetchPhoto et createChart
import { fetchPhoto } from "./fetchPhoto";
import { createChart } from "./createChart";

/**
 * Effectue une requête pour obtenir les données météorologiques de la ville à partir du nom de la ville spécifié.
 * 
 * @param {string} cityName - Le nom de la ville.
 * @returns {Promise<object>} - Les données météorologiques de la ville.
 */
export async function fetchWeatherData(cityName) {
    // Construire l'URL de l'API OpenWeather
    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY_OPENWEATHER}`;

    // Effectuer une requête pour obtenir les données météorologiques
    const weatherResponse = await fetch(weatherApiUrl);
    const weatherDataJson = await weatherResponse.json();

    fetchPhoto(weatherDataJson.city.name);

    // Filtrer la liste de 40 éléments pour obtenir les données par jour
    const weatherDataFilter = weatherDataJson.list.filter((el, index) => {
        if (index % 8 === 0) {
            return el;
        }
    });
    
    // Construire un tableau d'objets avec les données à afficher
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let weatherDataObj = weatherDataFilter.map(el => {
        return {
            // icon: `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
            icon: `https://openweathermap.org/img/w/${el.weather[0].icon}.png`,
            temp: Math.round(el.main.temp),
            day: days[new Date(el.dt_txt).getDay()]
        };
    });

    createChart(weatherDataObj, weatherDataJson.city.name);
    
    return {
        city: weatherDataJson.city.name,
        weather: weatherDataObj
    }
}

