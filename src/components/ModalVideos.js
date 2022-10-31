import React, { useState, useRef } from "react";
import "./ModalVideos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

export default function ModalVideos({
  linkVideo,
  titulo,
  isOpenModalYT,
  closeModalYT,
}) {
  return (
    <>
      <div
        onClick={() => closeModalYT()}
        className={`modal ${isOpenModalYT && "active"}`}
      >
        <iframe
          className="modal__iframe"
          title={titulo}
          src={`${linkVideo}?autoplay=1&controls=1&mute=0`}
          allow="autoplay"
        ></iframe>

        <div className="modal__cerrar">
          <button onClick={() => closeModalYT()}>
            <FontAwesomeIcon
              className="volver-icon"
              icon={faArrowLeft}
            ></FontAwesomeIcon>
            Volver
          </button>
        </div>
      </div>
    </>
  );
}
