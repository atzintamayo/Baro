import React from 'react'
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import "@scenes/Analytics/css/styleweek.css";

type Props = {}

export const WeekStatistics = (props:Props) => {
    return (
        <>
            <div className='stats'>
                <div className='divStat1'>
                    <div className='mgStats'>Promedio de gasto</div>
                </div>
                <div className='divStat2'>
                    <div className='mgStats'>2</div>
                </div>
                <div className='divStat3'>
                    <div className='mgStats'>3</div>
                </div>
            </div>  

            <div className='contOth'>
                <div className='oth'>

                </div>
            </div>
        </> 
    )
}

