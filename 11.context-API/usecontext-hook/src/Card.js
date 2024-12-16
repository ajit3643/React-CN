import React, { useContext } from "react";
import { cardContext } from "./context";

export const Card = () => {
  const { text, color } = useContext(cardContext);

  return (
    <div className="card" style={{ backgroundColor: color }}>
      <h3>{text}</h3>
    </div>
  );
};