import { useState, useEffect } from "react";
import Card from  "../Card/Card";
import "./SectionCards.css";
import Filters from "../Filters/Filsters";
import { BsFillTriangleFill } from "react-icons/bs";


export default function SectionCards(){
    let [listaPersonajes,setListaPersonajes]=useState([]);
    let [personajesCompleto,setPersonajesCompleto]=useState([]);
    let [filtrosAplicados, setFiltrosAplicados]= useState([])
 
    const traerPersonajes=async()=>{
        let info= await fetch("https://rickandmortyapi.com/api/character")
        .then((resp)=>{return resp.json()})
        .then((data)=>{return data.results})
        .catch((error)=>{console.log(error)})

        console.log(info);
        
        setListaPersonajes(info); 
        setPersonajesCompleto(info);
    };

    const filterCharacter=(target)=>{
        if(target.checked === true){
            setFiltrosAplicados([...filtrosAplicados,target.value])
    
        
        }else{
            setListaPersonajes(personajesCompleto)
            let filtrosNuevos=filtrosAplicados.filter((filtro)=>filtro !==target.value);
            setFiltrosAplicados(filtrosNuevos)
        }
    } 

    useEffect(()=>{
        setListaPersonajes(personajesCompleto)
        console.log(filtrosAplicados)
        filtrosAplicados.forEach((data)=>{ 
    
            if(data === "Dead" || data === "Alive")
            {
                let dataFiltrada = listaPersonajes.filter((personaje)=>personaje.status === data);  
                setListaPersonajes(dataFiltrada)
            }else if(data === "Female" || data === "Male")
            {
                let dataFiltrada = listaPersonajes.filter((personaje)=>personaje.gender === data);   
                setListaPersonajes(dataFiltrada)
            }else if(data === "Unknown" )
            {
                let dataFiltrada = listaPersonajes.filter((personaje)=>personaje.origin.name === "unknown");
                setListaPersonajes(dataFiltrada)
            }})
    },[filtrosAplicados])

    useEffect(()=>{
        traerPersonajes() 
    },[])

    return(
        <section className="fuenteBlanca">
            <Filters filterCharacter={filterCharacter}/>
        {
            listaPersonajes.length !== 0?
            listaPersonajes.map((personaje)=>{
               return <Card key={personaje.id} infoPersonaje={personaje}/>
            }):
 
            <div id="mensajeNoCharacters" class="alert alert-success" role="alert">    
                <div>
                <BsFillTriangleFill />  
                </div>
                <div id="mensajeWarning">
                Sorry! There are no characters with all those properties. 
                </div>
            </div>
        }  
        </section>
    )
}

  