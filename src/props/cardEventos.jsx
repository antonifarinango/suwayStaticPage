
import React from "react";

function CardEventos ({img}){

    return(
        <div className="carta-eventos card col-xl-3 d-flex justify-content-center ">
            <img className="img-carta" src={img} alt="Card image cap" />
          </div>
    )

}


export default CardEventos;
