
// Importe la fonction handleSearchForm depuis le module handleSearchForm.js
import { handleSearchForm } from "./handleSearchForm";

// Récupère la div avec l'ID "app"
const app = document.querySelector('#app');

// Crée le formulaire
const searchForm = document.createElement('form');
searchForm.classList.add('searchForm');
const containerCards = document.querySelector('.containerCards');
app.insertBefore(searchForm, containerCards);

// Crée l'input (champ de recherche)
const searchInput = document.createElement('input');
searchInput.classList.add('searchInput');
searchInput.setAttribute('name', 'searchInput');
searchInput.setAttribute('type', 'text');
searchInput.setAttribute('placeholder', 'Search ...');
searchForm.appendChild(searchInput);

// Initialise la valeur de l'input à vide lors du chargement de la page
window.addEventListener('load', function() {
    searchInput.value = '';
})

// Écoute l'événement 'input' sur l'élément searchInput (champ de recherche)
searchInput.addEventListener('input', function(e) {
    const searchIcon = document.querySelector('.searchBtn img');
    if (e.target.value !== '' && searchIcon.classList.contains('opacity')) {
        // Si l'input contient une valeur, on retire l'opacité de l'icône (loupe)
        searchIcon.classList.remove('opacity');
    }
    else if (e.target.value === '' && !searchIcon.classList.contains('opacity')) {  
        // Si l'input est vide, on ajoute l'opacité de l'icône (loupe)
        searchIcon.classList.add('opacity');
    }
})

// Crée le conteneur pour le bouton
const searchBtn = document.createElement('div');
searchBtn.classList.add('searchBtn');
searchForm.appendChild(searchBtn);

// Crée l'image
const searchIcon = document.createElement('img');
searchIcon.classList.add('opacity');
searchIcon.setAttribute('src', 'src/asset/image/search-icon-fat.png')
searchBtn.appendChild(searchIcon);

// Crée le bouton
const btn = document.createElement('button');
btn.setAttribute('type', 'submit')
searchBtn.appendChild(btn);

// Écoute l'événement de soumission du formulaire et appelle la fonction handleSearchForm
searchForm.addEventListener('submit', handleSearchForm);