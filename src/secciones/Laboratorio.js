import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import VideoWraper from "../components/VideoWraper";
import ModalVideos from "../components/ModalVideos";
import useWindowDimensions from "./../hooks/useWindowDimensions";

import "./Laboratorio.css";
export default function Laboratorio() {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();

  let windowDimensions = useWindowDimensions();

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="Laboratorio">
        {isOpenModalYT && (
          <ModalVideos
            closeModalYT={closeModalYT}
            isOpenModalYT={isOpenModalYT}
            linkVideo={linkVideo}
          ></ModalVideos>
        )}
        <img
          className="Laboratorio__imagen1"
          src={
            windowDimensions.width > 600
              ? "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/laboratorio.jpg"
              : "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/laboratorio_m.png"
          }
        ></img>
        <h1 className="Laboratorio__titulo">Laboratorio</h1>
        <p className="Laboratorio__parrafo">
          Uno de los lugares más extraños de la Manzana de las Luces. Esta
          construcción, que perteneció a la Facultad de Arquitectura, según nos
          cuentan los datos recopilados hasta el momento, permiten sostener que
          allí se revelaban planos y copias heliográficas.
        </p>
        <div className="Laboratorio__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/dM4Zr86wQPU")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Electroch_musicaDePutos_loop+con+mas+ruido.mp4"
              }
              clase={"videoHome videoHome--Laboratorio1"}
              titulo={"Electrochongo"}
              subtitulo={"Música de putos"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/EchBlur2.jpg"
              }
              linkTo="#"
            ></VideoWraper>
          </div>
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/PjJttpxhK0c")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Electroch_teConozco_loop+con+mas+ruido.mp4"
              }
              clase={"videoHome videoHome--Laboratorio2"}
              titulo={"Electrochongo"}
              subtitulo={"Te conozco mas sin ropa"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/EchBlur1.jpg"
              }
              linkTo="#"
            ></VideoWraper>
          </div>
        </div>
      </div>
    </>
  );
}
