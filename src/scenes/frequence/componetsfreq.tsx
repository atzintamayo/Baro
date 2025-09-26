import { useState } from "react";
import { type } from "os";
import React from "react";
import { BsCalendar3 } from "react-icons/bs";
import {RiEditBoxLine,RiDeleteBin7Line} from "react-icons/ri";

type Proxi ={
  name:string
  balance:number
  time:number
  periodo:"Semanal" | "Quincenal" | "Diario"
  color:"Light"|"Medium"|"Hard"
  date:string
}
export const GasProx = ({name, balance, time, periodo,color,date}:Proxi) => {
    return (
      <div className="GasProx ">
        <div className="nameProx">{name}</div>
        <div className="balanceProx TitleValProx">El costo del gasto es: <p className="ValProx">{balance}</p></div>
        <div className="timeProx TitleValProx">Días restantes: <p className="ValProx">{time}</p></div>
        <div className="periodoProx TitleValProx">Se cobra de forma:<p className="ValProx">{periodo}</p></div>
        <div className="colorProx">
          <div className={"circleProx "+color}></div>
        </div>
        <div className="dateProx TitleValProx">Fecha de cobro: <p className="ValProx">{date}</p></div>
      </div>
    );
  };
  type Freq ={
    name:string
    balance:number
    periodo:"Semanal" | "Quincenal" | "Diaria"
    date:string
    des:string
  }
  export const GasFreq = ({name, balance, periodo,date, des}:Freq) => {
      return (
        <div className="GasFreq">
          <div className="UpFreq">
            <div className="nameFreq">{name}</div>
            <div className="dateFreq TitleValFreq">Fecha de cobro: <p className="ValFreq">{date}</p></div>
          </div>
          <div className="TitledesFreq">Descripción</div>
          <div className="desFreq ">{des}</div>
          <div className="balFreq TitleValFreq"><div className="InContentFreq">{balance}$</div></div>
          <div className="periodoFreq TitleValFreq"><div className="InContentFreq">{periodo}</div></div>
          <div className="BtnsFreq">
            <button className="BtnDiasFac BtsFreqSy"> <BsCalendar3 className="IconsFreq"/>Ver días de facturación</button>
            <button className="BtnEditFreq BtsFreqSy"><RiEditBoxLine className="IconsFreq"/>Editar gasto</button>
            <button className="BtnDelFreq BtsFreqSy"><RiDeleteBin7Line className="IconsFreq"/>Eliminar gasto</button>
          </div>
        </div>
      );
    };
  type Rotate ={
    name:string
    BtnFrec:string
    CirFrec:string
    Click:any
    TxtFrec:string
  }
export const SwitchGlass = ({name, BtnFrec,CirFrec,Click,TxtFrec}:Rotate) => {
  return (
    <div className="SettingsFrec">
      <button className={"BtnSettingsFrec "+BtnFrec} onClick={Click}>
        <div className={"SettingsFrecCir "+CirFrec} ></div>
        <div className={"TextFrec "+TxtFrec}>{name}</div>
      </button>
    </div>
  );
};