import React, { useState, useEffect } from "react";
export default function VideoWraper({ source1, clase }) {
  /* const [source, setSource] = useState(null)

    useEffect(() => {

    }, [])
 */
  return (
    <>
      <video className={clase} autoPlay muted loop>
        <source src={source1} type="video/mp4"></source>
        {/*         <source src={source2} type="video/ogg"></source> */}
        tu navegador no es compatible con videos en html5
      </video>
    </>
  );
}
