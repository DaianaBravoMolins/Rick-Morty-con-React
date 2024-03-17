import { Fragment } from "react";
import Filter from "../Filter/Filter";
import "./Filters.css";

export default function Filters({filterCharacter}){
   
    return(
        <Fragment>
           <h2 id="filtros">Filters</h2> 
           <form id="diferentesFiltros"> 
                <Filter filterName="Alive" title="Character Alive" filterCharacter={filterCharacter}/>
                <Filter filterName="Dead" title="Character Dead" filterCharacter={filterCharacter}/>
                <Filter filterName="Female" title="Female" filterCharacter={filterCharacter}/>
                <Filter filterName="Male" title="Male" filterCharacter={filterCharacter}/>
                <Filter filterName="Unknown" title="Origin Unknown" filterCharacter={filterCharacter}/>
           </form> 
        </Fragment> 
    )
}