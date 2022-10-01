import React, { useState, useEffect } from "react";
import flecha from "./../icons/flecha.svg";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { Animated } from "react-animated-css";
import { useModal } from "./../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";

export default function Nav({ manejarScroll }) {
  let windowDimensions = useWindowDimensions();
  const [isOpenMenu, openMenu, closeMenu] = useModal(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [activeProcu, setActiveProcu] = useState(false);
  const [activeCasas, setActiveCasas] = useState(false);

  useEffect(() => {
    windowDimensions.width > 599 && openMenu();
  }, []);

  const toggleMenu = () => {
    if (isOpenMenu) {
      closeMenu();
      setTimeout(() => setIsActiveMenu(false), 400);
    } else {
      openMenu();
      setIsActiveMenu(true);
    }
  };

  const navegar = () => {
    if (windowDimensions.width < 600) {
      closeMenu();
      setTimeout(() => setIsActiveMenu(false), 400);
    }
  };

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
      <div className="bars" onClick={toggleMenu}>
        <FontAwesomeIcon className="bars-icon" icon={faLayerGroup} />
      </div>

      <Animated
        className={`navBar  ${isActiveMenu && "isActive"}`}
        animationIn={windowDimensions.width < 600 ? `${"fadeInRight"}` : ""}
        animationOut="fadeOutRight"
        isVisible={isOpenMenu}
      >
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
            <NavLink to="/exactas">
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
          <li className="navBar__menuItem">
            <NavLink to="/pagina">
              <div className="navBar__textContainer">Laboratorio</div>
            </NavLink>
          </li>
        </ul>
      </Animated>
    </>
  );
}
