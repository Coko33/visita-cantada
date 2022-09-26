import React from "react";
import "./ModalVideos.css";

export default function ModalVideos({
  linkVideo,
  titulo,
  isOpenModalYT,
  closeModalYT,
}) {
  return (
    <>
      <div className={`modal ${isOpenModalYT && "active"}`}>
        <div className="modal__cerrar">
          <button onClick={() => closeModalYT()}>x</button>
        </div>
        <iframe
          className="modal__iframe"
          title={titulo}
          src={`${linkVideo}?autoplay=1&controls=1`}
          allow="autoplay"
        ></iframe>
      </div>
    </>
  );
}
