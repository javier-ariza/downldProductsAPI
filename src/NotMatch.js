import {Link} from "react-router-dom";

export default function NotMatch(props){
  return <div>
    <br/>
    <div id="info"><p>Ruta no encontrada</p></div>  
    <Link to="/"><button className="show" id="volver">VOLVER</button></Link>  
    </div>
}