import Navbar from "@components/nav";
import { Input } from "@components/forms";
import useMediaQuery from "@hooks/useMediaQuery";
import {
  AtSymbolIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type Props = {};

export const SignUp = (props: Props) => {
  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");

  return (
    <>
      <Navbar SesBtn="Iniciar Sesión" SesLink="/signin" />
      {/* {isAboveSmallScreens ? ( */}
      <>
        <div className="center">
          <form action="">
            <h1 className="title">Bienvenido a Baro</h1>
            <div className="lbl">
              <Input Tipe="text" Section="Nombre" />
              <UserIcon className="icon" />
            </div>
            <div className="lbl">
              <Input Tipe="email" Section="Correo" />
              <AtSymbolIcon className="icon" />
            </div>
            <div className="lbl">
              <Input Tipe="password" Section="Contraseña" />
              <LockClosedIcon className="icon" />
            </div>
            <div className="lbl">
              <Input Tipe="password" Section="Confirmar contraseña" />
              <LockClosedIcon className="icon" />
            </div>
            <div className="lbl">
              <Link to="/signin">
                <button className="subm">Continuar</button>
              </Link>
            </div>
          </form>
        </div>
      </>
      {/* ) : (null)} */}
    </>
  );
};
