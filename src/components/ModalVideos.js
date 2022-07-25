import React from "react";
import "./ModalVideos.css";

export default function ModalVideos(
  linkYoutube,
  titulo,
  isOpenModalYT,
  closeModalYT
) {
  return (
    <>
      <div className={`modal ${isOpenModalYT && "active"}`}>
        <div className="modal__cerrar">
          <button onClick={closeModalYT}>x</button>
        </div>
        <iframe
          className="modal__iframe"
          title={titulo}
          src={`${linkYoutube}?autoplay=1&controls=1`}
        ></iframe>
      </div>
    </>
  );
}
