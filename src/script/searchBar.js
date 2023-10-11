
// Import de la fonction handleSearchForm
import { handleSearchForm } from "./handleSearchForm";


// Récupérer l'input (champ de recherche)
let searchInput = document.querySelector('.searchInput');

// Écoute l'événement 'input' sur l'élément searchInput (champ de recherche)
searchInput.addEventListener('input', function(e) {
    let searchIcon = document.querySelector('.searchBtn img');
    if (e.target.value !== '' && searchIcon.classList.contains('opacity')) {
        // Si l'input contient une valeur, on retire l'opacité de l'icône (loupe)
        searchIcon.classList.remove('opacity');
    }
    else if (e.target.value === '' && !searchIcon.classList.contains('opacity')) {  
        // Si l'input est vide, on ajoute l'opacité de l'icône (loupe)
        searchIcon.classList.add('opacity');
    }
})


// Écoute l'événement de soumission du formulaire
let searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('submit', handleSearchForm);