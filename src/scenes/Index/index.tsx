import IndexImg from "@/assets/IndexImg.png";
import useMediaQuery from "@hooks/useMediaQuery";
import { useState, useEffect} from "react";
import Navbar from "@components/nav";
import { Link } from "react-router-dom";
import "./index.css";
import { CardCarrousel } from "@components/cardCarrousel";

type Props = {};

const IndexPage = (props: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 770px)");

  const [dispShow, setDispShow] = useState<number>(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (dispShow === CarrData.length) {
        setDispShow(1);
      } else {
        setDispShow(dispShow + 1);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [dispShow]);

  const CarrData = [
    {id:1, title: 'hola', content:" holaaa contenido uwu"},
    {id:2, title: 'hola 2', content:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro possimus, distinctio voluptate totam nostrum harum quod vitae provident, esse adipisci rerum dolor dolorum dolores ipsum a quaerat corrupti reiciendis sunt, iusto assumenda soluta? Qui alias odit impedit, magni dolorum nesciunt, maiores commodi saepe, aperiam quisquam inventore excepturi sit laboriosam? Minus magni perspiciatis ad autem et fuga nemo, eum quisquam! Exercitationem blanditiis facilis minima harum obcaecati totam nisi modi commodi magni sed reiciendis ea corrupti eligendi iure ipsum nihil, enim quisquam? Aperiam ut ratione mollitia culpa praesentium laborum dicta recusandae voluptas voluptatem a ipsa, saepe tempore in quia impedit veritatis sed?    "},
    {id:3, title: 'hola 3', content:" holaaa contenido unu"},
    {id:4, title: 'hola 4', content:" holaaa contenido ono"},
    {id:5, title: 'hola 5', content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur saepe ut "},
  ]

  return (
    <div>
      {isAboveSmallScreens ? (
        <>
          <Navbar SesBtn="Iniciar Sesión" SesLink="/signin" />
          <div className="alRow">
            <div className="NewAcc">
              <p className="title">Empecemos desde aqui!</p>
              <Link to="/signup" className="NewAccBtn">
                  Crea una cuenta de baro
              </Link>
            </div>
            <div className="wrapper">
              {CarrData.map((item) => {
                return (
                dispShow === item.id ? <CardCarrousel tittle={item.title} content={item.content} key={item.id} /> : null
                )
              })
              }
            </div>
          </div>
          
        </>
      ) : (
        <>
          <Navbar SesBtn="Iniciar Sesión" SesLink="/signin" />

          <div className="carrousel">
              <p className="2">Empecemos desde aqui!</p>
              <Link to="/signup">
                <button className="NewAccBtn sec">
                  Crea una cuenta de bara
                </button>
              </Link>
            </div>
        </>
      )}
    </div>
  );
};

export default IndexPage;
