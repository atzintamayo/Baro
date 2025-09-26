import React from "react";
import { Formik } from "formik";
import Input from "@components/Input";

const AgregarGastos = () => {

  return (
    <>
      <div className="containerTitleGastosRecientes">
        <div className="titleGastosRecientes">Agregar Gasto</div>
      </div>
      <hr className="hrMain" />
      <div className="containerFormAgregarGasto">
        <form className="formAgregarGasto">
          <label htmlFor="" className="labelForm">Nombre del Cargo</label>
          <input type="text" placeholder="Nombre del Gasto" className="inputForm"/>
          <label htmlFor="" className="labelForm">Cargo</label>
          <input type="number" placeholder="Cargo" className="inputForm"/>
          <label htmlFor="" className="labelForm">Descripcion del Gasto</label>
          <input type="text" placeholder="Descripcion del gasto" className="inputForm"/>
          <button type="submit" className="btnAgregarGasto">Agregar</button>
        </form>
          
      </div>
    </>
  );
};

export default AgregarGastos;
