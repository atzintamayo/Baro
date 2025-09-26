import React from "react";
import { useState, useContext } from "react";
import "./home.css";
import useMediaQuery from "@hooks/useMediaQuery";
import ItemGastoReciente from "./components/ItemGastoReciente";
import GastosRecientes from "./components/GastosRecientes";
import AgregarGastos from "./components/AgregarGastos";
import AgregarIngreso from "./components/AgregarIngreso";
import Navbar from "../../components/navbar";
import { BsBoxArrowUp, BsBoxArrowInRight } from "react-icons/bs";
import { CgArrowDownR, CgArrowUpR } from "react-icons/cg";
import { RxCounterClockwiseClock} from "react-icons/rx";
import { TbPigMoney} from "react-icons/tb";
import { MdFormatListBulleted } from "react-icons/md"
import { HiOutlinePlusCircle } from "react-icons/hi";
import { TbMoneybag } from "react-icons/tb";


type Props = {};

export const Home = (props: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");

  const [gastosRecientes, setGastosRecientes] = useState(true);
  const [agregarGastos, setAgregarGastos] = useState(false);
  const [agregarIngresos, setAgregarIngresos] = useState(false);

  const handleGastosRecientes = () => {
    setGastosRecientes(true);
    setAgregarGastos(false);
    setAgregarIngresos(false);
  };
  const handleAgregarGastos = () => {
    setGastosRecientes(false);
    setAgregarGastos(true);
    setAgregarIngresos(false);
  };
  const handleAgregarIngresos = () => {
    setGastosRecientes(false);
    setAgregarGastos(false);
    setAgregarIngresos(true);
  };

  return (
    <>
      {isAboveSmallScreens ? (
        <div className="container">
          <Navbar page='home'/>
          <div className="containerMain">
            <div className="containerMainTop">
              <div className="containerProfile">
                <div className="divCirImg1">
                  <img
                    className="imgProfile"
                    src="https://baro.up.railway.app/assets/PFP.4330773c.png"
                  />
                </div>
                <div className="textProfile">
                  <div className="textWelcome">Bienvenido</div>
                  <div className="textName">Ian Daniel</div>
                </div>
              </div>
            </div>
            <div className="containerMainMid">
              <div className="containerBalance">
                <div className="containerIntBalance">
                  <h1 className="amountBalance">$ 0</h1>
                  <h6 className="textBalance">Balance Disponible</h6>
                  <hr className="barButBalance" />
                </div>
              </div>
            </div>
            <div className="containerMainBot">
              <div className="containerMainBotIcon">
                <div className="divIcon" onClick={handleGastosRecientes}>
                  <MdFormatListBulleted className="item"/>
                </div>
                <div className="divIcon" onClick={handleAgregarGastos}>
                  <BsBoxArrowUp className="item"/>
                </div>
                <div className="divIcon" onClick={handleAgregarIngresos}>
                  <BsBoxArrowInRight className="item"/>
                </div>
              </div>
            </div>
          </div>
          <div className="containerRight">
            {gastosRecientes ? (
              <GastosRecientes></GastosRecientes>
            ) : agregarGastos ? (
              <AgregarGastos></AgregarGastos>
            ) : (
              <AgregarIngreso></AgregarIngreso>
            )}
          </div>
        </div>
      ) : (
        <>Adios</>
      )}
    </>
  );
};
