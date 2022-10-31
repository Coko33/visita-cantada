import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import VideoWraper from "../components/VideoWraper";
import ModalVideos from "../components/ModalVideos";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import "./Representantes.css";
export default function Representantes() {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();

  let windowDimensions = useWindowDimensions();

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="representantes">
        {isOpenModalYT && (
          <ModalVideos
            closeModalYT={closeModalYT}
            isOpenModalYT={isOpenModalYT}
            linkVideo={linkVideo}
          ></ModalVideos>
        )}
        <h1 className="representantes__titulo">Sala de Representantes</h1>
        <p className="representantes__parrafo">
          Construida en 1820 durante la gobernación de Manuel de Sarratea, la
          Sala de Representantes fue la sede de la legislatura de la provincia
          de Buenos Aires hasta 1883. Durante un breve tiempo funcionó el
          Congreso Nacional. Aquí, juraron presidentes como Bernardino Rivadavia
          y Bartolomé Mitre.
          <br></br>
          <br></br>
          Más adelante, fue recinto del Consejo Deliberante de Buenos Aires y
          Aula Magna de la Facultad de Arquitectura.
          <br></br>
          <br></br>
        </p>
        <img
          className="representantes__imagen1"
          src={
            windowDimensions.width > 600
              ? "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/representates.png"
              : "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/representates_m.png"
          }
        ></img>
        <div className="representantes__containerVideos">
          <div>
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/RepreLoop.mp4"
              }
              clase={"videoHome videoHome--representantes"}
              titulo={"proximamente 🍎"}
              subtitulo={""}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/RepreBlur.jpg"
              }
              linkTo="#"
            ></VideoWraper>
          </div>
        </div>
      </div>
    </>
  );
}
