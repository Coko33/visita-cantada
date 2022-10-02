import React, { useState } from "react";
import "./Secciones.css";
import VideoWraper from "../components/VideoWraper";
import { useModal } from "../hooks/useModal";
import ModalVideos from "../components/ModalVideos";

export default function SalaArana() {
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
        <h1 className="seccion__titulo">Sala Araña</h1>
        <p className="seccion__parrafo">
          Estas salas fueron parte de un conjunto de viviendas de renta que el
          Virrey Juan José de Vértiz y Salcedo encargó construir al arquitecto
          José Claudio de Sáa y Farías. Se las llamo casas redituantes.
          <br></br>
          <br></br>
        </p>
        <img
          className="seccion__imagen1"
          src="https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a2.jpg"
          alt="imagen de la sala de la araña"
        ></img>
        <div className="seccion__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/HHPUZknrbfY")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_carablanca_loop.mp4"
              }
              clase={"videoHome videoHome--salaArana1"}
              titulo={"Lidia Borda"}
              subtitulo={"No te apures Carablanca"}
              linkTo="#"
              /* linkTo={"https://www.youtube.com/watch?v=gA6WGYQWrKc"} */
            ></VideoWraper>
          </div>

          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_enUnCorralon_loop.mp4"
            }
            clase={"videoHome videoHome--salaArana2"}
            titulo={"Lidia Borda"}
            subtitulo={"En un corralon de Barracas"}
            linkTo={"#"}
          ></VideoWraper>
          <div className="columnas">
            <h2 className="seccion__titulo--columnas">Sala Columnas</h2>
            <p className="seccion__parrafo--columnas">
              Por estos espacios, pasaron múltiples instituciones del estado
              como el Concejo Deliberante de la Ciudad de Buenos Aires y las
              facultades de Ciencias Exactas y Naturales, Ingeniería y
              Arquitectura de la Universidad de Buenos Aires.
            </p>
            <img
              className="seccion__imagen2"
              src={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/columnas.png"
              }
              alt={"Sala columnas"}
            ></img>
          </div>
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Noelia_cuestaAbajo_loop.mp4"
            }
            clase={"videoHome videoHome--salaArana3"}
            titulo={"Noelia Moncada"}
            subtitulo={"Cuesta abajo"}
            linkTo={"#"}
          ></VideoWraper>
        </div>
      </div>
      <div className="Archivo">
        <h2 className="Archivo__titulo">Sala del archivo</h2>
        <p className="Archivo__parrafo">
          Luego de la Independencia, las casas redituantes albergaron las
          primeras sedes de varias instituciones históricas del país como: el
          Archivo General, el Tribunal de Cuentas, la Biblioteca Pública, la
          Administración de la Vacuna, el Departamento de Escuelas, el Banco de
          la Provincia de Buenos Aires, el Juzgado de Comercio, la Escribanía
          General de Gobierno, la Aduana de Buenos Aires, el Concejo Deliberante
          de la ciudad de Buenos Aires, la Academia Nacional de la Historia, y
          las facultades de Ciencias Exactas y Naturales, Ingeniería y
          Arquitectura de la Universidad de Buenos Aires.
          <br></br>
          <br></br>
          En el espacio en el que hoy está la biblioteca, se encontraba el
          Departamento Topográfico, institución que se encargó la importante
          misión de desarrollar los diferentes mapas del país y sus provincias.
        </p>
        <VideoWraper
          source1={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/JuanVilla_huahuais_loop.mp4"
          }
          clase={"videoHome videoHome--archivo"}
          titulo={"Juan Villareal"}
          subtitulo={"Huahuais"}
          linkTo={"#"}
        ></VideoWraper>
      </div>
      <div className="Patio">
        <div className="Patio__cajaTexto">
          <h2 className="Patio__titulo">Patio de Representantes</h2>
          <p className="Patio__parrafo">
            Durante el virreinato, a fines del siglo XVIII, el virrey Vértiz
            mandó a construir en este lugar más de 30 calabozos subterráneos
            para las y los prisioneros de la sublevación de Oruro en 1781. Al
            compartir el espacio con una cárcel, las casas redituantes se
            volvieron muy difíciles de alquilar.
            <br></br>
            <br></br>
            En 1839, ya construida la Sala de Representantes, fue asesinado a
            metros de este patio el ex gobernador de la provincia de Buenos
            Aires, Manuel Vicente Maza.
          </p>
        </div>
        <VideoWraper
          source1={
            "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Otml_mariposa_loop.mp4"
          }
          clase={"videoHome videoHome--patio"}
          titulo={"OT Manzana de las Luces"}
          subtitulo={"La mariposa"}
          linkTo={"#"}
        ></VideoWraper>
      </div>
    </>
  );
}
