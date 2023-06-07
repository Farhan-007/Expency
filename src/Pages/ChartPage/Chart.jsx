import React, { useState } from 'react'
import { Chart as chartjs, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2'
chartjs.register(
    Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler
)
let chartData = JSON.parse(localStorage.getItem("chartData")) || {
    amount: [0],
    time: ['00:00:00']
};
const Graph = () => {

    const [data, setData] = useState({
        labels: chartData.time,
        datasets: [
            {
                label: "My Expenses",
                data: chartData.amount,
                backgroundColor: 'aqua',
                borderColor: 'rgb(73, 126, 126)',
                labelsColor: 'white',
                borderJoinStyle: "round",
                tension: 0.5,
                pointStyle: 'rect',
                pointBorderColor: 'white',
                pointBackgroundColor: 'aqua',
                showLine: true,
            }
        ]
    })
    console.log(setData)

    return (
        <>

            <div className='w-full md:w-1/2 h-[full] md:fixed'>

                <Line data={data} />

            </div>
        </>
    )
}

export default Graph;