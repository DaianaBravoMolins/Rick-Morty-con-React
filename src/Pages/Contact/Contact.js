import Navegation from "../../Componentes/Navegacion/navegacion";
import "./Contact.css";
export default function Contact(){
    return(
        <div>
            <Navegation hoja="Contact"/>
                <main id="contacto">
                    <h2 id="tituloContacto">Contact</h2>
                    <p id="mensajeDejarInfo">Leave us your information so we can contact you</p>
                    <form>
                        <div id="nombreEmail" className="row g-3">
                        <div className="col">
                            <label className="Data" htmlFor="name">Name</label>
                            <input type="text shadow-lg" className="form-control" aria-label="First name" id="name"/>
                        </div>
                        <div className="col">
                            <label className="Data" htmlFor="email">Email</label>
                            <input type="email" className="form-control bg-body-black" aria-label="Last name" id="email"/>
                        </div>
                        </div>
                        <div id="mensaje" className="mb-3">
                            <label className="Data form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <input id="paraContactar" type="submit" value="Send"/>
                    </form>
                </main>
        </div>
    )
}