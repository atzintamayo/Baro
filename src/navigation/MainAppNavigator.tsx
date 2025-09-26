import React from "react";
import IndexPage from "@scenes/Index";
import { Routes, Route } from "react-router-dom";
// import dashboard
import { SignIn } from "@scenes/sesions/signIn";
import { SignUp } from "@scenes/sesions/signUp";
import ROUTES from "@utils/ROUTES/index";
import HomeNavigator from "./HomeNavigation";
import AnalyticsNavigator from "./AnalyticsNavigator";

type Props = {};

export const App = (props: Props) => {
  return (
    <Routes>
      <Route index path={ROUTES.Index} element={<IndexPage />} />
      <Route path={ROUTES.SignIn} element={<SignIn />} />
      <Route path={ROUTES.SignUp} element={<SignUp />} />
      <Route path={`${ROUTES.Home}/*`} element={<HomeNavigator />} />
      <Route path={`${ROUTES.Analytics}/*`} element={<AnalyticsNavigator />}/>

      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
};