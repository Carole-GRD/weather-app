
// Clé d'API OpenWeather récupérée depuis les variables d'environnement
const API_KEY_UNSPLASH = import.meta.env.VITE_API_KEY_UNSPLASH;



/**
 * Récupère et affiche une photo de la ville spécifiée depuis l'API Unsplash.
 * @param {string} cityName - Le nom de la ville pour laquelle vous souhaitez obtenir une photo.
 * @throws {Error} - Lance une erreur si la requête échoue ou s'il n'y a pas de résultat.
 */
export async function fetchPhoto(cityName) {
    try {
        // Construire l'URL de l'API Unsplash
        const unsplashApiUrl = `https://api.unsplash.com/search/photos?query=${cityName}&client_id=${API_KEY_UNSPLASH}`;

        // Effectuer une requête pour obtenir une photo
        const unsplashResponse = await fetch(unsplashApiUrl);

        // Vérifier si la réponse HTTP est "ok" (statut 200)
        if (!unsplashResponse.ok) {
            throw new Error('La requête Unsplash a échoué.');
        }

        // Parser la réponse JSON de l'API Unsplash
        const unsplashJson = await unsplashResponse.json();

        // Vérifier si des résultats ont été renvoyés
        if (!unsplashJson.results || unsplashJson.results.length === 0) {
            throw new Error('Aucune photo trouvée pour cette ville.');
        }

        // Extraire l'URL de la première photo trouvée
        const urlPhoto = unsplashJson.results[0].urls.raw;

        // Mettre à jour l'image affichée dans la classe '.photoContainer img'
        const photo = document.querySelector('.photoContainer img');
        photo.setAttribute('src', urlPhoto);
        photo.setAttribute('alt', `Photo de ${cityName}`);
    } 
    catch (error) {
        console.error('Erreur lors de la récupération de la photo :', error.message);
    }
}

