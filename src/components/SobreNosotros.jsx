import React from "react";
import "../style/sobreNosotros.css"
import img from "../assets/img/carrusel/75247490_2077681332332184_5784328556863553536_n.jpg"

function SobreNosotros(){

    return(

        <>
            <div className="container d-flex justify-content-center">
                <div className="sobreNosotros d-flex align-items-center">
                    <div className="div-content d-flex flex-column gap-1">
                        <div className="imgSobreNosotros w-100">
                        <img className="img-sn" src={img} alt="" />
                    </div>
                    <div className="textoSobreNosotros  text-light ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia sed fuga repellat nobis. Similique minima fugiat ea, aperiam perferendis doloribus tenetur quis non laboriosam architecto 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, vel qui dolorum similique quam consequatur. Ipsum fugit magni sit illum itaque excepturi accusantium vitae vel deserunt, provident ex. Eaque, vitae?
                    </div>
                    </div>
                    
                </div>
            </div>
        </>

    )

}

export default SobreNosotros