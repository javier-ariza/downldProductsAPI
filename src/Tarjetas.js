import React from 'react';
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
const SERVER_URL = "https://dummyjson.com/image/i/products/";




export default function Tarjetas(props) {

		return <div id="resultados">
			<li className="unproducto" >
				<Card style={{ width: '21rem' }}>
				 <Card.Img variant="top" src={props.thumbnail} />
				<Card.Body>
				 <Card.Title> {props.titulo} </Card.Title>
					<div className="actions">
						<Link to={"/products/"+props.id}><Button variant="primary">Ver</Button></Link>
					</div>
				 </Card.Body>
				</Card>
			</li>
	</div>
}





        

