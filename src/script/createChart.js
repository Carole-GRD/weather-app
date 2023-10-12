

import Chart from 'chart.js/auto';


/**
 * Crée un graphique de ligne Chart.js.
 * @param {Array} weather - Données météorologiques.
 * @param {string} cityName - Nom de la ville pour le titre du graphique.
 */
export function createChart(weather, cityName) {

    // JS - Détruit l'instance de graphique existante pour réutiliser l'élément <canvas>
    let chartStatus = Chart.getChart("canvas"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    //-- Fin de la destruction du graphique

    // Ajouter la classe 'active' au 'graphContainer'
    document.querySelector('.graphContainer').classList.add('active');

    // Crée le tableau 'data' avec les données météorologiques en format adapté pour le graphique.
    let data = [];
    for (let i = 0; i < weather.length; i++) {
        data.push({
            day: weather[i].day,
            temperature: weather[i].temp
        })
    }

    // Crée un nouveau graphique en utilisant la bibliothèque Chart.js
    new Chart(
        document.querySelector('#canvas'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.day),
                datasets: [
                    {
                        label: '',
                        data: data.map(row => row.temperature)
                    }
                ]
            },
            options: {
                responsive: true, // Rend le graphique responsive
                maintainAspectRatio: false, // Désactive la proportion d'aspect
                plugins: {
                    title: {
                        display: true,
                        text: cityName,
                        color: '#fff',
                        font: {
                            size: 40
                        },
                    },
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: '#fff' 
                        },
                        ticks: {
                            color: '#fff' 
                        }
                    },
                    y: {
                        grid: {
                            color: '#fff' 
                        },
                        ticks: {
                            color: '#fff' 
                        }
                    }
                }
            }
        }
    );
}


