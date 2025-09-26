import React, { useState } from 'react'
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

type Props = {}

export const WeekGraph = (props:Props) => {

    //WeekGraph

    const [series, setSeries] = useState<ApexOptions["series"]>([
        {
            name: "Gasto total",
            data: [2001.5, 4502.6, 5003, 1000, 20000.54, 5002, 1203],
        }
    ])

    const [options, setOptions] = useState<ApexOptions>({
        chart: {
            type: "bar",
            fontFamily: "Poppins, sans-serif",
        },
        plotOptions: {
            bar: {
                borderRadius: 6,
                columnWidth: '60%',
            }
        },
        dataLabels: {
            enabled: false
        },
        yaxis: {
            title: {
                text: 'Gasto total'
            }
        },
        xaxis: {
            categories: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            title: {
                text: 'Días de la semana'
            }
        },
        fill: {
            colors: ['#044C7C']
        }
    })

    return (
        <>
            <Chart 
                options={options}
                series={series}
                type="bar"
            />
        </> 
    )
}
