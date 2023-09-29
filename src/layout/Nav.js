import React, { useState, useEffect } from "react";
import flecha from "./../icons/flecha.svg";
import { NavLink } from "react-router-dom";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useModal } from "./../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Nav.css";
import "@animxyz/core";
import { XyzTransition } from "@animxyz/react";

export default function Nav({ manejarScroll }) {
  let windowDimensions = useWindowDimensions();
  const [isOpenMenu, openMenu, closeMenu] = useModal(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [activeProcu, setActiveProcu] = useState(false);
  const [activeCasas, setActiveCasas] = useState(false);

  useEffect(() => {
    if (windowDimensions.width > 599) {
      openMenu();
      setIsActiveMenu(true);
    } else {
      closeMenu();
      setIsActiveMenu(false);
    }
  }, []);

  const toggleMenu = () => {
    if (windowDimensions.width < 599) {
      if (!isOpenMenu) {
        openMenu();
        setIsActiveMenu(true);
      } else {
        closeMenu();
        setTimeout(() => setIsActiveMenu(false), 400);
      }
    }
  };

  const activarProcu = (e) => {
    setActiveProcu(true);
  };
  const desactivarProcu = (e) => {
    setActiveProcu(false);
  };
  const toggleProcu = (e) => {
    if (!activeProcu) {
      setActiveProcu(true);
    } else {
      setActiveProcu(false);
    }
  };
  const activarCasas = (e) => {
    setActiveCasas(true);
  };
  const desactivarCasas = (e) => {
    setActiveCasas(false);
  };
  const toggleCasas = (e) => {
    if (!activeCasas) {
      setActiveCasas(true);
    } else {
      setActiveCasas(false);
    }
  };

  return (
    <>
      <div className="bars" onClick={toggleMenu}>
        <FontAwesomeIcon className="bars-icon" icon={faBars} />
      </div>

      <XyzTransition mode="out-in">
        {isOpenMenu && (
          <div xyz="right-100%" className="navbar">
            <ul className="navBar__menu">
              <li
                className="navBar__menuItem"
                onMouseEnter={activarProcu}
                onMouseLeave={desactivarProcu}
                onClick={toggleProcu}
              >
                <div className="navBar__textContainer">
                  Procuraduría{" "}
                  <img className="navBar__icono" src={flecha}></img>
                </div>
                <ul className={`navBar__subMenu ${activeProcu && "active"}`}>
                  <NavLink to="/procuraduria">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Patio de la Procuraduría
                    </li>
                  </NavLink>
                  <NavLink to="/procuraduriaGA">
                    <li
                      onClick={() => {
                        toggleMenu();
                        manejarScroll();
                      }}
                      className="navBar__submenuItem"
                    >
                      Galerías Altas
                    </li>
                  </NavLink>
                  <NavLink to="/procuraduriaGB">
                    <li
                      onClick={() => {
                        toggleMenu();
                        manejarScroll();
                      }}
                      className="navBar__submenuItem"
                    >
                      Galerías Bajas
                    </li>
                  </NavLink>
                </ul>
              </li>

              <li onClick={toggleMenu} className="navBar__menuItem">
                <NavLink to="/exactas">
                  <div className="navBar__textContainer">Exactas</div>
                </NavLink>
              </li>

              <li
                className="navBar__menuItem"
                onMouseEnter={activarCasas}
                onMouseLeave={desactivarCasas}
                onClick={toggleCasas}
              >
                <div className="navBar__textContainer">
                  Casas Redituantes{" "}
                  <img className="navBar__icono" src={flecha}></img>
                </div>
                <ul className={`navBar__subMenu ${activeCasas && "active"}`}>
                  <NavLink to="/salaArana">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Sala Araña
                    </li>
                  </NavLink>
                  <NavLink to="/salaAranaColumnas">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Sala Columnas
                    </li>
                  </NavLink>
                  <NavLink to="/salaAranaArchivo">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Sala del Archivo
                    </li>
                  </NavLink>
                  <NavLink to="/salaAranaSalaRosas">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Sala Rosas
                    </li>
                  </NavLink>
                  <NavLink to="/salaAranaPatioRosas">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Patio Rosas
                    </li>
                  </NavLink>
                  <NavLink to="/salaAranaRepresentantes">
                    <li onClick={toggleMenu} className="navBar__submenuItem">
                      Patio de Representantes
                    </li>
                  </NavLink>
                </ul>
              </li>
              <li onClick={toggleMenu} className="navBar__menuItem">
                <NavLink to="/representantes">
                  <div className="navBar__textContainer">
                    Sala de Representantes
                  </div>
                </NavLink>
              </li>
              <li onClick={toggleMenu} className="navBar__menuItem">
                <NavLink to="/laboratorio">
                  <div className="navBar__textContainer">Laboratorio</div>
                </NavLink>
              </li>
              <li onClick={toggleMenu} className="navBar__menuItem">
                <NavLink to="/tuneles">
                  <div className="navBar__textContainer">Túneles</div>
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </XyzTransition>
    </>
  );
}
