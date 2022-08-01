import React from "react";
import "./SalaArana.css";
import VideoWraper from "../components/VideoWraper";
import { useModal } from "../hooks/useModal";
import ModalVideos from "../components/ModalVideos";

export default function SalaArana() {
  const [isOpenModalYT, openModalYt, closeModalYT] = useModal();
  return (
    <>
      <div className="salaArana">
        <h1>Sala Araña</h1>
        <p className="salaArana__parrafo">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Estas salas fueron parte de un conjunto
          de viviendas de renta que el Virrey Juan José de Vértiz y Salcedo
          encargó construir al arquitecto José Claudio de Sáa y Farías. Se las
          llamo casas redituantes.<br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Por estos espacios, pasaron múltiples
          instituciones del estado como el Concejo Deliberante de la Ciudad de
          Buenos Aires y las facultades de Ciencias Exactas y Naturales,
          Ingeniería y Arquitectura de la Universidad de Buenos Aires.
        </p>
        <img src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a2.jpg"></img>
        <div className="salaArana__containerVideos">
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_carablanca_loop.mp4"
            }
            clase={"videoHome videoHome--salaArana1"}
            titulo={"Lidia Borda"}
            subtitulo={"No te apures Carablanca"}
            linkTo={"https://www.youtube.com/watch?v=gA6WGYQWrKc"}
          ></VideoWraper>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_enUnCorralon_loop.mp4"
            }
            clase={"videoHome videoHome--salaArana2"}
            titulo={"Lidia Borda"}
            subtitulo={"En un corralon de Barracas"}
            linkTo={"#"}
          ></VideoWraper>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/lidiaLoop_edit.mp4"
            }
            clase={"videoHome videoHome--salaArana3"}
            titulo={"Lidia Borda"}
            subtitulo={"Titulo 3"}
            linkTo={"#"}
          ></VideoWraper>
        </div>
      </div>
    </>
  );
}
