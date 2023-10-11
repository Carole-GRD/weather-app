

import Chart from 'chart.js/auto'


export function createChart(weather) {

    // JS - Destroy exiting Chart Instance to reuse <canvas> element
    let chartStatus = Chart.getChart("canvas"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    //-- End of chart destroy  
    
    document.querySelector('.graphContainer').classList.add('active');

    let data = [];

    for (let i = 0; i < weather.length; i++) {
        data.push({
            year: weather[i].day, 
            count: weather[i].temp
        })
    }


    new Chart(
        document.querySelector('#canvas'),
        {
            type: 'line',
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: '',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
}
