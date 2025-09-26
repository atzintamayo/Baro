import React from "react";
import { GasFreq, GasProx,SwitchGlass } from "./componetsfreq";
import { useState } from "react";
import useMediaQuery from "@hooks/useMediaQuery";
import './frequence.css';
import { FlagIcon } from "@heroicons/react/24/solid";
import Navbar from "@components/navbar";
import { Input } from "@components/forms";
type Props = {}; 

export const Frequence = (props: Props) => {
  const [Glass, setGlass] = useState<boolean>(true);
    const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");
  return (
    <div>
      {isAboveSmallScreens ? (
        <> 
          {Glass ? (
            <div className="ViewFrequence">
              <Navbar page="frequent"/>
              <div className="Frequence">
                <div className="titFre">Frecuentes</div> 
                <SwitchGlass
                name={"Gastos Próximos"}
                BtnFrec={'DesActiveBtnSw'}
                CirFrec={'DesActiveCir'}
                Click={()=>{
                  Glass? setGlass(false) : setGlass(true)
                }}
                TxtFrec={"DesActiveTextSw"}
                />
                <div className="titProx">Gastos Próximos</div>
                <div className="FreqLeft">
                  <GasProx
                  name={"Agua"}
                  balance={230}
                  time={5}
                  periodo={"Semanal"}
                  color={"Light"}
                  date={"23/09/2023"}
                  />
                  <GasProx
                  name={"Agua"}
                  balance={230}
                  time={5}
                  periodo={"Semanal"}
                  color={"Medium"}
                  date={"23/09/2023"}
                  />
                  <GasProx
                  name={"Agua"}
                  balance={230}
                  time={5}
                  periodo={"Semanal"}
                  color={"Hard"}
                  date={"23/09/2023"}
                  />
                </div>
                <div className="FreqRight"></div>
              </div>
            </div>
          ) : (
            <div className="ViewFrequence">
              <Navbar page="frequent"/>
                <div className="Frequence">
                <div className="titFre">Frecuentes</div> 
                <SwitchGlass
                name={"Editar Frecuentes"}
                CirFrec={'ActiveCir'}
                BtnFrec={'ActiveBtnSw'}
                Click={()=>{
                  Glass? setGlass(false) : setGlass(true)
                }}
                TxtFrec={"ActiveTextSw"}
                />
                <div className="titProx">Modifcar gastos</div>
                <div className="FreqLeft">
                  <GasFreq
                  name={'Luz'}
                  balance={59}
                  periodo={"Diaria"}
                  date={"23/08/2022"}
                  des={"Pago de la luz de la casa de mis padres."}
                  />
                  <GasFreq
                  name={'Luz'}
                  balance={59}
                  periodo={"Diaria"}
                  date={"23/08/2022"}
                  des={"Pago de la luz de la casa de mis padres."}
                  />
                  <GasFreq
                  name={'Luz'}
                  balance={59}
                  periodo={"Diaria"}
                  date={"23/08/2022"}
                  des={"Pago de la luz de la casa de mis padres."}
                  />
                </div>
                <div className="FreqRight">
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <>
          <div className='Big_container_white'>
              MODO DE MOVIL
          </div>
        </>
      )}
    </div>
    
  );
};