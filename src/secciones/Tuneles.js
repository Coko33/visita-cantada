import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import VideoWraper from "../components/VideoWraper";
import ModalVideos from "../components/ModalVideos";
import useWindowDimensions from "./../hooks/useWindowDimensions";

import "./Exactas.css";
export default function Exactas() {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();
  let windowDimensions = useWindowDimensions();

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="exactas">
        {isOpenModalYT && (
          <ModalVideos
            closeModalYT={closeModalYT}
            isOpenModalYT={isOpenModalYT}
            linkVideo={linkVideo}
          ></ModalVideos>
        )}
        <h1 className="exactas__titulo">Túneles</h1>
        <p className="exactas__parrafo">
          Durante más de 300 años, los Túneles de la Manzana se han envuelto en
          misterios. ¿Para qué se construyeron? ¿Por quiénes? ¿Funcionaron para
          guardar tesoros? ¿Armas? ¿Ocultar asesinatos?
          <br></br>
          <br></br>
          En febrero de 1848, Klaus Stegmann decidió comenzar las obras para la
          construcción de un pozo en el fondo de su residencia (hoy estaría
          situada en la calle Moreno al 550). Pero al comenzar a trabajar, los
          obreros tropezaron con un túnel subterráneo del que no tenían
          conocimiento y llevaba hacía la casa de Juan Manuel de Rosas.
          <br></br>
          <br></br>
          El hecho se comentó en los diarios de la época, los cuales
          aprovecharon para alimentar la idea de un intento de asesinato al
          Restaurador de las Leyes y Stegmann, los obreros y el antiguo dueño de
          la propiedad terminaron arrestados.
          <br></br>
          <br></br>
          En mayo de ese año, fueron puestos en libertad luego de que un
          peritaje estableció que los túneles fueron construidos en 1806 durante
          la primera invasión inglesa.
          <br></br>
          <br></br>
        </p>
        <div className="exactas__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/pZWs-7UK38Q")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/OperaQ_Carmen_loop.mp4"
              }
              clase={"videoHome videoHome--exactas"}
              titulo={"Opera Queer"}
              subtitulo={"Carmen"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/OperaBlur.jpg"
              }
              linkTo="#"
            ></VideoWraper>
          </div>
        </div>
        <img
          className="exactas__imagen1"
          src={
            windowDimensions.width > 600
              ? "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/exactas.png"
              : "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/exactas_m.png"
          }
        ></img>
      </div>
    </>
  );
}
