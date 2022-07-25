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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          Duis autem vel eum iriure{" "}
        </p>
        <img src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a2.jpg"></img>
        <div className="salaArana__containerVideos">
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/lidiaLoop_edit.mp4"
            }
            clase={"videoHome videoHome--salaArana1"}
            titulo={"Lidia Borda"}
            subtitulo={"No te apures carablanca"}
            linkTo={"#"}
          ></VideoWraper>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/lidiaLoop_edit.mp4"
            }
            clase={"videoHome videoHome--salaArana2"}
            titulo={"Lidia Borda"}
            subtitulo={"Titulo 2"}
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
