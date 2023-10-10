

// Récupérer l'input
let searchInput = document.querySelector('.searchInput');


// Récupérer le bouton et ajouter un "event" 
let searchBtn = document.querySelector('.searchBtn');
searchBtn.addEventListener('click', getInputValue);


function getInputValue(e) {
    e.preventDefault();

    // console.log('searchInput.value : ', searchInput.value);
    let cityToSearch = searchInput.value;
    // fetchData('', cityToSearch);
}





// let searchInput = document.querySelector('.searchInput');
// searchInput.addEventListener('keyup', function(e) {
//     console.log(e.target.value);
// });