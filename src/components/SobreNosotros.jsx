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
                        <p>
                        Suway (Corazón Joven) es una agrupación musical dedicada a fusionar la música tradicional ecuatoriana con el estilo andino, manteniendo vivas las tradiciones y costumbres de nuestra cultura, pero con una mirada actual y fresca. Nos esforzamos por conectar generaciones a través de sonidos que reflejan nuestras raíces y que hablan de quiénes somos.
                        </p>

                        <h4>Nuestra Historia</h4>
                        <p>
                            Fundada el 26 de octubre de 2012, Suway cuenta con ocho talentosos integrantes que han compartido escenario con grandes exponentes de la música ecuatoriana como Jayac, Puro Corazón, Los Amigos Millonarios, y Los Quitus, entre otros. Con años de trayectoria, seguimos llevando nuestra propuesta musical a nuevos escenarios y públicos.
                        </p>
                        
                        <h4>Experiencias Destacadas</h4>
                        <p>
                        Participación en el programa de las Flores y las Frutas en Ambato
                        Invitación a las festividades de Ibarra
                        Presentación de un tema inédito en el evento Maicito de Oro en Zámbiza
                        Misión
                        Nuestra misión es conectar con la gente a través de nuestra música, ofreciendo una fusión entre la tradición ecuatoriana y el folklore andino que resuene en el corazón de quienes nos escuchan.
                        </p>
                        

                        <h4>Visión</h4>
                        <p>
                            Aspiramos a que, a través de la música, podamos llegar a distintos rincones de Ecuador y el mundo, dejando un legado de esfuerzo y constancia.
                        </p>
                        

                        <h4>Síguenos</h4> 
                        <p>
                            ¡Conoce más sobre nosotros en nuestras redes sociales! Encuéntranos en Facebook como <a target="_blank" href="https://www.facebook.com/suwaycorazonjoven" className="link-sobre-nosotros">Suway</a> y en TikTok como <a target="_blank" href="https://www.tiktok.com/@suway.corazn.jove?_t=8rBXwf6oRXT&_r=1" className="link-sobre-nosotros">Suway Corazón Joven</a>.
                        </p>
                        
                        
                    
                    </div>
                    </div>
                    
                </div>
            </div>
        </>

    )

}

export default SobreNosotros