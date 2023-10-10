
// // Récupérer la clé d'API OpenWeather
// const API_KEY_OPENWEATHER = import.meta.env.VITE_API_KEY_OPENWEATHER;


// /**
//  * Effectue une requête pour obtenir les données météorologiques de la ville à partir des coordonnées spécifiées.
//  * 
//  * @param {number} latitude - La latitude de la ville.
//  * @param {number} longitude - La longitude de la ville.
//  * @returns {Promise<object>} - Les données météorologiques de la ville.
//  */
// export async function fetchWeatherData(latitude, longitude) {
//     const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPENWEATHER}`;
//     const weatherResponse = await fetch(weatherApiUrl);
//     const weatherData = await weatherResponse.json();
//     return weatherData;
// }



// Récupérer la clé d'API OpenWeather
const API_KEY_OPENWEATHER = import.meta.env.VITE_API_KEY_OPENWEATHER;

/**
 * Effectue une requête pour obtenir les données météorologiques de la ville à partir du nom de la ville spécifié.
 * 
 * @param {string} cityName - Le nom de la ville.
 * @returns {Promise<object>} - Les données météorologiques de la ville.
 */
export async function fetchWeatherData(cityName) {

    const weatherApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY_OPENWEATHER}`;

    const weatherResponse = await fetch(weatherApiUrl);
    const weatherData = await weatherResponse.json();
    
    return weatherData;
}

