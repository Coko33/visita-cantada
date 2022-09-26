import React, { useState } from "react";
import flecha from "./../icons/flecha.svg";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export default function Nav({ manejarScroll }) {
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
              <NavLink to="/procuraduria">
                <li className="navBar__submenuItem">
                  Patio de la Procuraduría
                </li>
              </NavLink>
              <NavLink to="/procuraduriaGA">
                <li className="navBar__submenuItem" onClick={manejarScroll}>
                  Galerías Altas
                </li>
              </NavLink>

              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Galerías Bajas</li>
              </NavLink>
            </ul>
          </li>

          <li className="navBar__menuItem">
            <NavLink to="/pagina">
              <div className="navBar__textContainer">Exactas</div>
            </NavLink>
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
              <NavLink to="/salaArana">
                <li className="navBar__submenuItem">Sala Araña</li>
              </NavLink>
              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Sala Columnas</li>
              </NavLink>
              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Sala del Archivo</li>
              </NavLink>
              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Sala Rosas</li>
              </NavLink>
              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Patio Rosas</li>
              </NavLink>
              <NavLink to="/pagina">
                <li className="navBar__submenuItem">Patio de Representantes</li>
              </NavLink>
            </ul>
          </li>
          <li className="navBar__menuItem">
            <NavLink to="/pagina">
              <div className="navBar__textContainer">
                Sala de Representantes
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
