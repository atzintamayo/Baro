import { Route, Routes } from "react-router-dom";
import { Home } from "@scenes/home/home";
import { Frequence } from "@scenes/frequence/frequence";
import Week from "@scenes/Analytics/index"
import { Config } from "@scenes/config/config";
import ROUTES from "@utils/ROUTES/index";

type Props = {};

const HomeNavigator = (props: Props) => {
  return (
    <Routes>
      <Route index path={"/"} element={<Home/>} />
      <Route path={ROUTES.Frequence} element={<Frequence/>} />
      <Route path={ROUTES.Analytics+'/*'} element={<Week/>} />
      <Route path={ROUTES.Config} element={<Config/>} />

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default HomeNavigator;
