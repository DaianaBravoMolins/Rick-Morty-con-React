import "./navegacion.css";
import { Link } from "react-router-dom";

export default function Navegation({hoja}){
    return(
        <nav id="navGeneral" className="navbar-expand-lg w-100 text-decoration-none">
            <div className="container-fluid" id="general">
                    <Link to="/" className="text-decoration-none">
                        <h1 id="irParaHome" className="navbar-brand" >Rick & Morty</h1>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-end">
                    <ul id="botonesDerechosDelNav" className="navbar-nav">
                        <li id="paraIrACharacter" className={hoja === "characters" ? "nav-link active" : "nav-link"}aria-current="page"><Link to="/Characters" id="link-character"className="text-decoration-none ">Characters</Link>
                        </li>
                        <li id="paraIrAContact" className={hoja === "Contact" ? "nav-link active" : "nav-link"} aria-current="page"><Link to="/Contact"  id="link-contact"className="text-decoration-none">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
