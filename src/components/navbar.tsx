import "./styles.css";
import { Link } from "react-router-dom";
import { HiHome, HiChartBar, HiClock, HiLogout } from "react-icons/hi";
import { HiCog6Tooth } from "react-icons/hi2";
import { useState } from "react";

export default function Navbar(props: { page: string; }) {
  const [homeColor, sethomeColor] = useState('containerItemsMenuActive');
  const [analyticsColor, setAnalyticsColor] = useState('containerItemsMenu');
  const [frequentColor, setFrequentColor] = useState('containerItemsMenu');
  const [configColor, setConfigColor] = useState('containerItemsMenu');
  const [itemActiveHome, setItemActiveHome] = useState('itemIconActive');
  const [itemActiveAnalytics, setItemActiveAnalytics] = useState('itemIcon');
  const [itemActiveFrequent, setItemActiveFrequent] = useState('itemIcon');
  const [itemActiveConfig, setItemActiveConfig] = useState('itemIcon');

  const page = props.page;

  const changeColor = (e: any) => {
    if (page == "home") {
      sethomeColor('containerItemsMenuActive');
      setAnalyticsColor('containerItemsMenu');
      setFrequentColor('containerItemsMenu');
      setConfigColor('containerItemsMenu');
      setItemActiveHome('itemIconActive');
      setItemActiveAnalytics('itemIcon');
      setItemActiveFrequent('itemIcon');
      setItemActiveConfig('itemIcon');

    } else if (page == "analytics") {
      sethomeColor('containerItemsMenu');
      setAnalyticsColor('containerItemsMenuActive');
      setFrequentColor('containerItemsMenu');
      setConfigColor('containerItemsMenu');
      setItemActiveHome('itemIcon');
      setItemActiveAnalytics('itemIconActive');
      setItemActiveFrequent('itemIcon');
      setItemActiveConfig('itemIcon');

    } else if (page == "frequent") {
      sethomeColor('containerItemsMenu');
      setAnalyticsColor('containerItemsMenu');
      setFrequentColor('containerItemsMenuActive');
      setConfigColor('containerItemsMenu');
      setItemActiveHome('itemIcon');
      setItemActiveAnalytics('itemIcon');
      setItemActiveFrequent('itemIconActive');
      setItemActiveConfig('itemIcon');
    }
    else{
      sethomeColor('containerItemsMenu');
      setAnalyticsColor('containerItemsMenu');
      setFrequentColor('containerItemsMenu');
      setConfigColor('containerItemsMenuActive');
      setItemActiveHome('itemIcon');
      setItemActiveAnalytics('itemIcon');
      setItemActiveFrequent('itemIcon');
      setItemActiveConfig('itemIconActive');
    }
  }

  return (
    <div className="containerNavbar">
      <div className="containerMenu">
        <div className={homeColor} id="home">
          <Link className="itemLink" to="/home">
            <HiHome className={itemActiveHome}/>
          </Link>
          <div className="nameLink">INICIO</div>
        </div>
        <div className={analyticsColor} id="analytics">
          <Link className="itemLink" to="/home/analytics">
            <HiChartBar className={itemActiveAnalytics} />
          </Link>
          <div className="nameLink">GRÁFICAS</div>
        </div>
        <div className={frequentColor} id="frequent">
          <Link className="itemLink" to="/home/frequence">
            <HiClock className={itemActiveFrequent} />
          </Link>
          <div className="nameLink">FRECUEN</div>
        </div>
        <div className={configColor}>
          <Link className="itemLink" to="/home/config">
            <HiCog6Tooth className={itemActiveConfig} />
          </Link>
          <div className="nameLink">CONFIG</div>
        </div>
        <div className="containerItemsMenu">
          <Link className="itemLink" to="/">
            <HiLogout className="itemIcon" />
          </Link>
          <div className="nameLink">SALIR</div>
        </div>
      </div>
    </div>
  );
}
