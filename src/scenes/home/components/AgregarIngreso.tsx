import React from 'react'

const AgregarIngreso = () => {
  return (
    <>
      <div className="containerTitleGastosRecientes">
        <div className="titleGastosRecientes">Agregar Ingreso</div>
      </div>
      <hr className="hrMain" />
      <div className="containerFormAgregarGasto">
        <form className="formAgregarGasto">
          <label htmlFor="" className="labelForm2">Cargo</label>
          <input type="number" placeholder="Cargo" className="inputForm2"/>
          <button type="submit" className="btnAgregarGasto">Agregar</button>
        </form>
          
      </div>
    </>
  )
}

export default AgregarIngreso
