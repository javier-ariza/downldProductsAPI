import {Link, useParams} from "react-router-dom";
import Location from "./Location";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

export default function ProductoInfo(props) {
    let { productId } = useParams();
	let productoAR = productId;
	let arrayRX = props.theproducts; // OK
	return (<div id="main">
		<Location />
		<div class="card">
  <h5 class="card-header" id="titulo">{props.theproducts.find(({id})=>{ return id===Number(productoAR)}).title} </h5>
  <div class="card-body">
  <img class="img-thumbnail"  id="izquierda" align="left" src={props.theproducts.find(({id})=>{ return id===Number(productoAR)}).thumbnail} alt="Card image cap" ></img>
	<div className="derecha">
    <p class="card-text" >{props.theproducts.find(({id})=>{ return id===Number(productoAR)}).description} </p>
	<p class="card-text" >Precio: {props.theproducts.find(({id})=>{ return id===Number(productoAR)}).price} € </p>
	<p class="card-text" >Descuento: {props.theproducts.find(({id})=>{ return id===Number(productoAR)}).discountPercentage}%</p>
	<p class="card-text" >Stock: {props.theproducts.find(({id})=>{ return id===Number(productoAR)}).stock} </p>
	<p class="card-text" >Ranking: {props.theproducts.find(({id})=>{ return id===Number(productoAR)}).rating} </p>
	</div>
	

  </div>
</div>
		<Link to="/"><button className="btn btn-primary" id="volver">Volver</button></Link>
	</div>)
}

