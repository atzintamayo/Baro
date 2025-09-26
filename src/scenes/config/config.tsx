import React from 'react'
import useMediaQuery from '@hooks/useMediaQuery'
import Navbar from '../../components/navbar'

export const Config = () => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");
  return (
    <>
      {isAboveSmallScreens ? (
        <div className="container">
          <Navbar></Navbar>
        </div>
      ) : (
        <>
        Adios
        </>
      )}
    </>
  );
};
