import React from 'react'
import Navbar from '@components/nav'
import { Input } from '@components/forms'
import useMediaQuery from "@hooks/useMediaQuery"
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/react/24/solid'
import './sesions.css'
import { Link } from 'react-router-dom'

type Props = {}

export const SignIn = (props: Props) => {
    const isAboveSmallScreens = useMediaQuery("(min-width: 770px)")

return (
<>
    <Navbar SesBtn='Crear una cuenta' SesLink='/signup' />
        <>

            <div className="center">
                <form action="">
                    <h1 className='title'>Hola de nuevo!</h1>
                    <div className="lbl">
                        <Input Tipe='email' Section='Correo' />
                        <AtSymbolIcon className='icon' />
                    </div>
                    <div className="lbl">
                        <Input Tipe='password' Section='Contraseña' />
                        <LockClosedIcon className='icon' />
                    </div>
                    <Link to='/home'>
                        <button className='sec sm'>Iniciar Sesión</button>
                    </Link>

                </form>
            </div>
        </>
    
</>
  )
}

export default SignIn