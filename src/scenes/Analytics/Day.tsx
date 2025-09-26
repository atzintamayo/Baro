import React, { useState } from "react";

//Import css
import "@scenes/Analytics/css/styleday.css";

//Import navbar
import Navbar from "@components/navbar";

//Import componentes de dia
import { Days } from "@utils/types/Days";
import { useParams } from "react-router-dom";

import { DatosDash } from "./componentsDay";

//AQUI IMPORTA LAS GRAFICAS QUE VAYAS A USAR DESDE LA CARPETA DE graphsDay


import useMediaQuery from "@hooks/useMediaQuery";

type Props = {};

const Day = (props: Props) => {
  const params = useParams() as { day: Days };
  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");
  return (
    <div>
        <>
        {isAboveSmallScreens ? (
          <div className="Viewday">
            <Navbar page="Day"/>
              <div className="Day">
                <div className="DayTitle">
                  <div className="textTitle">
                    <h1>{params.day}</h1>
                    <h2>12/10/22 --- 18/12/22</h2>
                  </div>
                </div>
                <div className="GraphicsCont">
                  <div className="divisor">
                    <DatosDash
                    ClassBig="BigContainer1"
                    ClassBigText="DayTitle3"
                    ClassSmall="SmallCont1"
                    nombre="Dato1:"
                    infonum={123.00}/>
                    <DatosDash
                    ClassBig="BigContainer2"
                    ClassBigText="DayTitle4"
                    ClassSmall="SmallCont2"
                    nombre="Comparacion con el dia anterior"
                    infonum={43.00}/>
                  </div>
                  <div className="divisor">
                    <div className="ContainerData_Graph">
                      <div className="ContainerGraphs">
                        <div className="ContainerText">
                          <span className="DayTitle4">11</span>
                        </div> 
                        <div className="Graphs">
                        </div>
                      </div>
                    <DatosDash
                      ClassBig="BigContainer2"
                      ClassBigText="DayTitle4"
                      ClassSmall="SmallCont2"
                      nombre="Comparacion con el dia anterior"
                      infonum={43.00}/>
                    </div>
                  <div className="ContainerGraphs">
                    <div className="ContainerText">
                      <span className="DayTitle4">11</span>
                    </div>
                    <div className="Graphs">
                    </div>
                  </div>
                  </div>
                  
                  <div className="ContainerGraphs">
                        <div className="ContainerText">
                          <span className="DayTitle4">11</span>
                        </div> 
                        <div className="Graphs">
                        </div>
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
    </div>
    
  );
};

export default Day;
