import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./VideoWrapper.css";
export default function VideoWraper({ source1, clase, titulo, linkTo }) {
  /* const [source, setSource] = useState(null)

    useEffect(() => {

    }, [])
 */
  return (
    <>
      <NavLink to={`${linkTo}`}>
        <div className={`videoWrapper ${clase}`}>
          <h2>{titulo}</h2>
          <video autoPlay muted loop>
            <source src={source1} type="video/mp4"></source>
            {/*         <source src={source2} type="video/ogg"></source> */}
            tu navegador no es compatible con videos en html5
          </video>
        </div>
      </NavLink>
    </>
  );
}
