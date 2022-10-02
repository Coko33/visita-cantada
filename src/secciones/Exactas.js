import React, { useState } from "react";
import { useModal } from "../hooks/useModal";
import VideoWraper from "../components/VideoWraper";
import "./Exactas.css";
export default function Exactas() {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();

  const abrirVideo = (linkTo) => {
    openModalYT();
    setLinkVideo(linkTo);
  };

  return (
    <>
      <div className="exactas">
        <h1 className="exactas__titulo">Exactas</h1>
        <p className="exactas__parrafo">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hasta 1971, en este lugar funcionó la
          Facultad de Ciencias Exactas y Naturales. Por sus salones, pasaron las
          mentes más brillantes de la ciencia argentina e incluso del mundo. En
          1926, Albert Einstein dio una clase magistral en su aula magna.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;El 29 de julio 1966, la policía del
          gobierno dictatorial que derrocó al presidente Arturo Illia irrumpió
          en la ​Facultad. Estudiantes, graduadxs y docentes, que ocupaban
          pacíficamente las aulas en defensa de la autonomía universitaria,
          fueron víctimas de gases lacrimógenos, golpes al por mayor, cientos de
          detenciones, destrucción por doquier y el consiguiente
          desmantelamiento de la ciencia y la universidad argentina. Este
          incidente se conoce como La Noche de los Bastones Largos.
          <br></br>
          <br></br>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;En 1972, las autoridades a cargo
          decidieron demoler el edificio por no considerarlo original de la
          época jesuita y, de forma indirecta, borrar su historia universitaria.
          <br></br>
          <br></br>
        </p>
        <img
          className="exactas__imagen1"
          src={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/exactas.png"
          }
        ></img>
        <div className="exactas__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/HHPUZknrbfY")
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
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/GuapoBlur.jpg"
              }
              linkTo="#"
              /* linkTo={"https://www.youtube.com/watch?v=gA6WGYQWrKc"} */
            ></VideoWraper>
          </div>
        </div>
      </div>
    </>
  );
}
