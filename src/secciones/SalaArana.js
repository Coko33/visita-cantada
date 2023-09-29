import React, { useState, useRef, useLayoutEffect } from "react";
import "./Secciones.css";
import VideoWraper from "../components/VideoWraper";
import { useModal } from "../hooks/useModal";
import ModalVideos from "../components/ModalVideos";
import useWindowDimensions from "./../hooks/useWindowDimensions";
import { useLocation } from "react-router-dom";

export default function SalaArana({
  scrollToCol,
  scrollToArch,
  scrollToRepre,
  scrollToRosas,
  resetScroll,
}) {
  const [isOpenModalYT, openModalYT, closeModalYT] = useModal(false);
  const [linkVideo, setLinkVideo] = useState();
  const Col = useRef();
  const Arch = useRef();
  const Repre = useRef();
  const Rosas = useRef();
  scrollToCol && Col.current.scrollIntoView({ behavior: "smooth" });
  scrollToArch && Arch.current.scrollIntoView({ behavior: "smooth" });
  scrollToRepre && Repre.current.scrollIntoView({ behavior: "smooth" });
  scrollToRosas && Rosas.current.scrollIntoView({ behavior: "smooth" });
  let windowDimensions = useWindowDimensions();

  let location = useLocation();

  useLayoutEffect(() => {
    if (location.pathname === "/salaAranaColumnas") {
      setTimeout(() => {
        Col.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    if (location.pathname === "/salaAranaArchivo") {
      setTimeout(() => {
        Arch.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    if (location.pathname === "/salaAranaSalaRosas") {
      setTimeout(() => {
        Rosas.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    if (location.pathname === "/salaAranaPatioRosas") {
      setTimeout(() => {
        Rosas.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
    if (location.pathname === "/salaAranaRepresentantes") {
      setTimeout(() => {
        Repre.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

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
          Las salas Araña y Columnas fueron parte de un conjunto de viviendas de
          renta que el Virrey Juan José de Vértiz y Salcedo encargó construir al
          arquitecto José Claudio de Sáa y Farías. Se las llamó casas
          redituantes.
          <br></br>
          <br></br>
        </p>
        <img
          className="seccion__imagen1"
          src={
            windowDimensions.width > 600
              ? "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a2.jpg"
              : "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/ara%C3%B1a_m.png"
          }
          alt="imagen de la sala de la araña"
        ></img>
        <div className="seccion__containerVideos">
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/lpCY236raq4")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_carablanca_loop.mp4"
              }
              clase={"videoHome videoHome--salaArana1"}
              titulo={"Lidia Borda"}
              subtitulo={"No te apures Carablanca"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/LidiaBlur1.jpg"
              }
              linkTo="#"
            ></VideoWraper>
          </div>
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/FyLV-t_KLBc")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Lidia_enUnCorralon_loop.mp4"
              }
              clase={"videoHome videoHome--salaArana2"}
              titulo={"Lidia Borda"}
              subtitulo={"En un corralon de Barracas"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/LidiaBlur1.jpg"
              }
              linkTo={"#"}
            ></VideoWraper>
          </div>
          <div className="columnas">
            <h2 className="seccion__titulo--columnas" ref={Col}>
              Sala Columnas
            </h2>
            <p className="seccion__parrafo--columnas">
              Por estos espacios, pasaron múltiples instituciones del estado
              como el Concejo Deliberante de la Ciudad de Buenos Aires y las
              facultades de Ciencias Exactas y Naturales, Ingeniería y
              Arquitectura de la Universidad de Buenos Aires.
            </p>
            <img
              className="seccion__imagen2"
              src={
                windowDimensions > 600
                  ? "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/columnas.png"
                  : "https://visita-cantada.s3.sa-east-1.amazonaws.com/img/columnas_m.png"
              }
              alt={"Sala columnas"}
            ></img>
          </div>
          <div
            onClick={() =>
              abrirVideo("https://www.youtube.com/embed/qss0UfAPLcU")
            }
          >
            <VideoWraper
              source1={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Noelia_cuestaAbajo_loop.mp4"
              }
              clase={"videoHome videoHome--salaArana3"}
              titulo={"Noelia Moncada"}
              subtitulo={"Cuesta abajo"}
              poster={
                "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/MoncadaBlur.jpg"
              }
              linkTo={"#"}
            ></VideoWraper>
          </div>
        </div>
      </div>
      <div className="Archivo">
        <h2 className="Archivo__titulo" ref={Arch}>
          Sala del archivo
        </h2>
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
        <div
          onClick={() =>
            abrirVideo("https://www.youtube.com/embed/8zzu-N-WNlg")
          }
        >
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/JuanVilla_huahuais_loop.mp4"
            }
            clase={"videoHome videoHome--archivo"}
            titulo={"Juan Villareal"}
            subtitulo={"Huahuais"}
            poster={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/VillarBlur.jpg"
            }
            linkTo={"#"}
          ></VideoWraper>
        </div>
      </div>
      <div className="Patio">
        <div className="Patio__cajaTexto">
          <h2 className="Patio__titulo" ref={Repre}>
            Patio de Representantes
          </h2>
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
        <div
          onClick={() =>
            abrirVideo("https://www.youtube.com/embed/cWDpBZKB3n4")
          }
        >
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Otml_mariposa_loop.mp4"
            }
            clase={"videoHome videoHome--patio"}
            titulo={"OT Manzana de las Luces"}
            subtitulo={"La mariposa"}
            poster={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/OtmlBlur.jpg"
            }
            linkTo={"#"}
          ></VideoWraper>
        </div>
      </div>
      <div className="Rosas">
        <h2 className="Rosas__titulo" ref={Rosas}>
          Patio Rosas
        </h2>
        <p className="Rosas__parrafo">
          Este patio de la Manzana de las Luces también formó parte de las casas
          redituantes construidas por del virrey Vértiz. Más tarde, se convirtió
          en la entrada por la cual Juan Manuel de Rosas llegaba a la Sala de
          Representantes. Según descubrimientos arqueológicos recientes, se pudo
          conocer que en este patio funcionó un importante sistema de desagües
          pluviales del siglo XIX.
          <br></br>
          <br></br>
          Con los años, se convirtió en el sitio para aulas y oficinas de la
          Facultad de Arquitectura de la Universidad de Buenos Aires.
        </p>
        <div
          onClick={() =>
            abrirVideo("https://www.youtube.com/embed/O3gC_uA6Lw8")
          }
        >
          <VideoWraper
            source1={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/videos/Payadores_loop.mp4"
            }
            clase={"videoHome videoHome--rosas"}
            titulo={"Payadores y Raperos"}
            subtitulo={""}
            poster={
              "https://visita-cantada.s3.sa-east-1.amazonaws.com/blurs/PayadoresBlur.jpg"
            }
            linkTo={"#"}
          ></VideoWraper>
        </div>
      </div>
    </>
  );
}
