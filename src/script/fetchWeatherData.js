

// Clé d'API OpenWeather récupérée depuis les variables d'environnement
const API_KEY_OPENWEATHER = import.meta.env.VITE_API_KEY_OPENWEATHER;

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
            icon: `https://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`,
            temp: Math.round(el.main.temp),
            day: days[new Date(el.dt_txt).getDay()]
        };
    });
    
    return {
        city: weatherDataJson.city.name,
        weather: weatherDataObj
    }
}

