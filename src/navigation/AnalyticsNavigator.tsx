import { Route, Routes } from "react-router-dom";
import { Home } from "@scenes/home/home";
import ROUTES from "@utils/ROUTES/index";
import { WeekGraph } from "@scenes/Analytics/graphsWeek/weekGraph";
import Day from "@scenes/Analytics/Day";

type Props = {};

const AnalyticsNavigator = (props: Props) => {
  return (
    <Routes>
      <Route path={"/:day"} element={<Day />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};

export default AnalyticsNavigator;
