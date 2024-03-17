import "./Home.css";
import BotonInicio from "../../Componentes/BotonInicio/boton";
import Characters from "../Characters/characters";

export default function Home(){
    return(
        <div id="paginaHome" className="d-flex justify-content-center aling-item-center">
            <div className="bg-home">
                <h1 id="tituloHome">Proyect Rick & Morty</h1>
                <h2 id="subtitulo">Welcome to Rick & Morty Proyect!</h2>
                <p id="texto1">This proyect was made for practising React and to made a functional website.</p>
                <p id="texto2">In this website you can know information of the characters of this animated series.</p>
                <p id="texto3">Also you can filter for diferent types of properties to find the character that you are looking for or send us a</p>
                <p id="texto4">massage for any concern o sugestion.</p>
                <h2 id="subtitulo2">Lets go!</h2>
                <div id="botonesIniciales">
                    <BotonInicio nombreBoton="Characters" Pasaje="/Characters"/>
                    <div id="segundoBoton">
                        <BotonInicio nombreBoton="Contact" Pasaje="/Contact"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
