import React, { useState } from "react";
import "./Secciones.css";
import VideoWraper from "../components/VideoWraper";
import { useModal } from "../hooks/useModal";
import ModalVideos from "../components/ModalVideos";

export default function Procuraduria() {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="seccion">
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
            <h2>Galerias Altas</h2>
          </div>
        </div>
      </div>
    </>
  );
}
