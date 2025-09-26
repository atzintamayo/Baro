import ROUTES from "@utils/ROUTES";
import { Days } from "@utils/types/Days";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

type Expday = {
  day: Days;
  date: string;
  amount: number;
};

export const SotDay = ({ day, date, amount }: Expday) => {
  const nav = useNavigate();
  const dispatchDay = useCallback(() => {
    nav(`${ROUTES.Analytics}/${day}`);
  }, []);
  return (
    <button type="button" onClick={dispatchDay} className="DatGrap">
      <span>{day}</span>
      <span>{date}</span>
      <span>$ {amount}</span>
    </button>
  );
}; 

