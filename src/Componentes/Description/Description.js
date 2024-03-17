 export default function Description({status, especie, genero, origen, setHide}){
    return(
        <div>
            <button id="x" onClick={()=>setHide(true)}>X</button>
            <ul className="list-group">
                <li className="list-group-item fw-bold">Character Status:{status}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Species</span>{especie}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Origin</span>{origen}</li>
                <li className="list-group-item fw-bold"><span className="fw-normal">Gender</span>{genero}</li>
            </ul>
        </div>
    )

 }