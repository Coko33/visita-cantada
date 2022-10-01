import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import "./Secciones.css";
import VideoWraper from "../components/VideoWraper";
import { useModal } from "../hooks/useModal";
import ModalVideos from "../components/ModalVideos";
import { useLocation } from "react-router-dom";

export default function Procuraduria({ scrollToGA, resetScroll }) {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();
  const GA = useRef();
  scrollToGA && GA.current.scrollIntoView({ behavior: "smooth" });
  let location = useLocation();

  useLayoutEffect(() => {
    location.pathname == "/procuraduriaGA" &&
      GA.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="seccion" onScroll={resetScroll()}>
        {isOpenModalYT && (
          <ModalVideos
            closeModalYT={closeModalYT}
            isOpenModalYT={isOpenModalYT}
            linkVideo={linkVideo}
          ></ModalVideos>
        )}
        <h1>Patio de la Procuraduria</h1>
        <p className="seccion__parrafo">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Construido en 1730, los planos de este
          sitio se adjudican al arquitecto jesuita Juan Bautista Prímoli. Fue la
          sede administrativa del comercio generado por las Misiones Jesuíticas.
          Funcionó aquí un depósito, oficinas, alojamiento y una botica. También
          se daban clases de teología, matemáticas y filosofía. El baño más
          antiguo de Buenos Aires se encuentra en este sitio.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Durante el virreinato, funcionó el
          Protomedicato del Río de la Plata, la Real Imprenta de Niños Expósitos
          y la primera escuela de medicina, entre otras actividades.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ya en la época republicana, fue espacio
          para las primeras aulas de la Universidad de Buenos Aires y el Museo
          Público.
        </p>
        <img
          src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/procu.jpg"
          alt="imagen del patio de la procuraduría"
        ></img>
        <div className="seccion__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/HHPUZknrbfY")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/ElGuapo_loop.mp4"
              }
              clase={"videoHome videoHome--procu1"}
              titulo={"El Guapo"}
              subtitulo={"Nombre del tema"}
              linkTo="#"
              /* linkTo={"https://www.youtube.com/watch?v=gA6WGYQWrKc"} */
            ></VideoWraper>
          </div>
        </div>
        <div className="seccion__galeriasAltas--titulo">
          {" "}
          <h2 className="seccion__titulo--gAltas" ref={GA}>
            Galerias Altas
          </h2>
        </div>
        <div className="seccion__galeriasAltas--parrafo">
          <p className="seccion__parrafo gAltas">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En el primer piso de Procuraduría,
            funcionó el Museo Público (hoy, Museo Argentino de Ciencias
            Naturales Bernardino Rivadavia). Su primer director, Karl Burmeister
            ocupó el cargo por 30 años y murió a los 85 por un accidente laboral
            luego de caer por unas escaleras.
            <br></br>
            <br></br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Al mismo tiempo y hasta principios de
            la década de 1970, funcionaron aulas y salones de la Facultad de
            Ciencias Exactas y Naturales.
          </p>
        </div>
      </div>
    </>
  );
}
