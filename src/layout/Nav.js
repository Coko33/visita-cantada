import React, { useState } from "react";
import flecha from "./../icons/flecha.svg";
import "./Nav.css";

export default function Nav() {
  const [activeProcu, setActiveProcu] = useState(false);
  const [activeCasas, setActiveCasas] = useState(false);

  const activarProcu = (e) => {
    setActiveProcu(true);
  };
  const desactivarProcu = (e) => {
    setActiveProcu(false);
  };
  const activarCasas = (e) => {
    setActiveCasas(true);
  };
  const desactivarCasas = (e) => {
    setActiveCasas(false);
  };
  return (
    <>
      <div className="navBar">
        <ul className="navBar__menu">
          <li
            className="navBar__menuItem"
            onMouseEnter={activarProcu}
            onMouseLeave={desactivarProcu}
          >
            <div className="navBar__textContainer">
              Procuraduría <img className="navBar__icono" src={flecha}></img>
            </div>
            <ul className={`navBar__subMenu ${activeProcu && "active"}`}>
              <li className="navBar__submenuItem">Patio de la Procuraduría</li>
              <li className="navBar__submenuItem">Galerías Altas</li>
              <li className="navBar__submenuItem">Galerías Bajas</li>
            </ul>
          </li>
          <li className="navBar__menuItem">
            <div className="navBar__textContainer">Exactas</div>
          </li>
          <li
            className="navBar__menuItem"
            onMouseEnter={activarCasas}
            onMouseLeave={desactivarCasas}
          >
            <div className="navBar__textContainer">
              Casas Redituantes{" "}
              <img className="navBar__icono" src={flecha}></img>
            </div>
            <ul className={`navBar__subMenu ${activeCasas && "active"}`}>
              <li className="navBar__submenuItem">Sala Araña</li>
              <li className="navBar__submenuItem">Sala Columnas</li>
              <li className="navBar__submenuItem">Sala del Archivo</li>
              <li className="navBar__submenuItem">Sala Rosas</li>
              <li className="navBar__submenuItem">Patio Rosas</li>
              <li className="navBar__submenuItem">Patio de Representantes</li>
            </ul>
          </li>
          <li className="navBar__menuItem">
            <div className="navBar__textContainer">Sala de Representantes</div>
          </li>
        </ul>
      </div>
    </>
  );
}
