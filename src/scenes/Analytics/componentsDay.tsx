import React from "react";


type datos ={
    ClassBig: string
    ClassSmall: string
    ClassBigText : string
    nombre : string
    infonum : number

}
export const DatosDash = ({ClassBig, ClassSmall, ClassBigText, nombre, infonum}:datos) => {
    return (
        <>
        <div className={ClassBig}>
            <span className={ClassBigText}>{nombre}</span>
            <div className={ClassSmall}>
                <p className="DayTitle3">${infonum}</p>
            </div>  
        </div>
            </>
    );
};




