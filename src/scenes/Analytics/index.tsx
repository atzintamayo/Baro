import React, { useState } from "react";

//Import css
import "@scenes/Analytics/css/styleweek.css";

//Import navbar
import Navbar from "@components/navbar";

//Import componentes de día
import { SotDay } from "@scenes/Analytics/barDia";
import { DaysArray } from "@utils/types/Days";

//Import componentes de gráfica y estdísticas
import { WeekGraph } from "@scenes/Analytics/graphsWeek/weekGraph";
import { WeekStatistics } from "@scenes/Analytics/graphsWeek/weekStatistics";

import useMediaQuery from "@hooks/useMediaQuery";

type Props = {};

const Week = (props: Props) => {

  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");
  const [graphState, setGraphState] = useState<string>("1");

  const handleGraphState = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setGraphState(event.target.value);
  }

  return ( 
    <>
      {isAboveSmallScreens ? (
        <div className="Big_container_white">

          <Navbar page="analytics"/>
    
          <div className="WeekTitle">
            <div className="textTitle">
              <h1>Semana</h1>
              <h2>12/10/22 --- 18/12/22</h2>
            </div>
          </div>
    
          <div className="WeekBody">
    
            <div className="semData">
              <div className="showDatGrap">
                <div className="txtColumn">Días</div>
    
                {DaysArray.map((day, i) => (
                  <SotDay
                    day={day}
                    date={new Date().toString()} //date={DAYS[i].date}
                    amount={i}  // date={DAYS[i].amount}
                    key={i}
                  />
                ))} 
    
              </div>
            </div>
    
            
            <div className="weekgraph">
              <div className="conteinerBarWeek">
    
                <div className="graphWeekTxt">
                  <div className="txtGraph">Gasto por día en la semana</div>
                  <select onChange={handleGraphState} value={graphState} className='selectWeek'>
                    <option value="1" className="options">Gráfica</option>
                    <option value="2" className="options">Estadísticas</option>
                  </select>
                </div>
    
                {graphState === "1" && 
                  <div className="graphWeek">
                    <WeekGraph />
                  </div>
                }
    
                {graphState === "2" && 
                  <div className="statisticsWeek">
                    <div className="conteinerSts">
                      <WeekStatistics />
                    </div>
                  </div>
                }
    
              </div>
            </div>
    
          </div>
        </div>
      ) : (
        <>
          <div className="Big_container_white">
            Contenido para celular
          </div>
        </>
      )}
    </>
  )
};

export default Week;
