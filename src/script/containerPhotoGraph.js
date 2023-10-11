

// Récupère la div avec l'ID "app"
const app = document.querySelector('#app');

// Crée la div "containerPhotoGraph" qui contiendra la photo de la ville et le graphique
const containerPhotoGraph = document.createElement('div');
containerPhotoGraph.classList.add('containerPhotoGraph');
app.appendChild(containerPhotoGraph);


// Crée la div "graphContainer" pour le graphique
const graphContainer = document.createElement('div');
graphContainer.classList.add('graphContainer');
const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'canvas');
// const graph = document.createElement('img');
// graphContainer.appendChild(graph);
graphContainer.appendChild(canvas);
containerPhotoGraph.appendChild(graphContainer);

// Crée la div "photoContainer" pour la photo
const photoContainer = document.createElement('div');
photoContainer.classList.add('photoContainer');
const photo = document.createElement('img');
photoContainer.appendChild(photo);
containerPhotoGraph.appendChild(photoContainer);



