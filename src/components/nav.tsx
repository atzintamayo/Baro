import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import useMediaQuery from "@hooks/useMediaQuery"
import logo from '@assets/logo.png'
import blueName from '@assets/blueName.png'

type Props = {
    SesBtn: string
    // sesBtn_class: string
    SesLink: string
}

const Navbar = ({ SesBtn, SesLink }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 770px)")
    const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <>
        {isAboveMediumScreens ? (   
            <div className="nav">
                <img src={logo} alt="logo" className='logo' />
                <div className="info">
                    <Link className="sm" to="/">¿Quienes somos?</Link>
                    <Link className="sm" to="/">¿Quieres apoyarnos?</Link>
                    <Link className="sm" to="/">Ayuda</Link>
                    
                </div>
                <div className="btns sm">
                    <Link to={SesLink}>
                        {SesBtn}
                    </Link>
                    {/* <button className="prime sm">Registrarse</button> */}
                </div>
            </div>
        ) : (
            <div className="nav">
                <img src={blueName} alt="logo" className='logo' />
                <div className='show' onClick={() => setIsOpen(true)}>
                    <Bars3Icon></Bars3Icon>
                </div>
                
                {isOpen ? (
                    <div className="info">
                        <div className="x" onClick={() => setIsOpen(false)}>
                            <XMarkIcon ></XMarkIcon>
                        </div>

                        <div className="list">
                            <Button Section='¿Quienes somos?' SectionLink='/' />
                            <Button Section='¿Quieres apoyarnos?' SectionLink='/' />
                            <Button Section='Ayuda' SectionLink='/' />
                            {SesBtn === 'Iniciar Sesión' ? (
                                    <Button Section='Iniciar Sesión' SectionLink='/signin' />
                                ):(
                                    <Button Section='Registrarse' SectionLink='/signup' />
                                )}
                        </div>
                    </div>
                ) : null
                }
            </div>
        )}
    </>
    )
}

export default Navbar

type PropsB = {
    Section: string
    SectionLink: string
}

const Button = ({ Section, SectionLink }: PropsB) => {
    return (
        <Link to={SectionLink}>
            <button className="sec">{Section}</button>
        </Link>
    )
}