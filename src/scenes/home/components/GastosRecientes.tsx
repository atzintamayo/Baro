import React from "react";
import ItemGastoReciente from "./ItemGastoReciente";

const GastosRecientes = () => {
  return (
    <>
      <div className="containerTitleGastosRecientes">
        <div className="titleGastosRecientes">Gastos Recientes</div>
      </div>
      <hr className="hrMain"/>

      <div className="containerGastosRecientes">
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
        <ItemGastoReciente></ItemGastoReciente>
      </div>
    </>
  );
};

export default GastosRecientes;
