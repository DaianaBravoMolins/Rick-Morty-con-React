import './boton.css'
import { Link } from 'react-router-dom';

export default function BotonInicio({nombreBoton, Pasaje}){
    return(
        <Link className="btn-inicio btn" to={Pasaje}>{nombreBoton}</Link>
    )
} 
