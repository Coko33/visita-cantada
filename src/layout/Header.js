import React from "react";
import { NavLink } from "react-router-dom";
import "./../App.css";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="tituloContainer tituloContainer--header">
        <NavLink to="/home">
          <h1>
            <span className="span_black">Visita</span> cantada
          </h1>
        </NavLink>
      </div>
    </>
  );
}
