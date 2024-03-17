import "./Filter.css";

export default function Filter({title, filterName,filterCharacter}){
    return( 
        <div id="filtro" className="form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id={filterName} value={filterName} onClick={(event)=>filterCharacter(event.target)}/>
            <label id="obalo" className="form-check-label" htmlFor={filterName}>{title}</label>
        </div>
    )
}