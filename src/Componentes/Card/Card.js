import "./Card.css";
import { useState } from "react";
import Description from "../Description/Description"

export default function Card({infoPersonaje}){
    let [hide, setHide]= useState(true);

    const showMore=()=>{
        setHide(false)
    }

    return(
        <main> 
        <div id="contenedor" className="rounded card aling-items-center">
            <div id="carta">
                <img src={infoPersonaje.image}/>
                <h2 id="tituloPersonaje">{infoPersonaje.name}</h2>
                <div id="contenedorKnowMore">
                {hide === false? "":<button id="botonKnowMore" onClick={showMore}>Know More...</button>}
                </div>
            </div>
            <div>
                {
                hide === false? <Description status={infoPersonaje.status} especie={infoPersonaje.species} genero={infoPersonaje.gender} origen={infoPersonaje.origin.name } setHide={setHide}/>:'' 
                }
                </div>
        </div> 
        </main>
         )
}