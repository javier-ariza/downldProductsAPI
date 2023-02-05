import Tarjetas from './Tarjetas';
import Location from "./Location";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";



export default function SearchPage(props) {


	const [search, setSearch] = useState("");
	const [producto, setProducto] = useState(props.theproducts);
	const [categorias, setCategorias] = useState(Array.from(new Set(producto.map((producto, index) =>  producto.category))));



	
	const filtrar = (search) => {  
		let strToString=search.toString().toLowerCase();
		let result = (props.theproducts.filter((el) => el.title.toLowerCase().includes((strToString))));
		setProducto(result);
	}



	
	return <div>
		<div class="text-center">
		<Header/>
        <Location />
		
		<h2 id="catalogo" class="card-title">Catálogo</h2>
		</div>    
		<div className="row">
		<div className="col-sm-6">
			<div className="card">
				<div className="card-body">
					<div className="text-center">
						<h5 className="card-title">Buscar</h5>
						<div className="input-group mb-3">
  							<input type="text" className="form-control" placeholder="Texto a buscar" id="filtro" aria-describedby="basic-addon2" onChange={e=>setSearch(e.target.value)}></input>
 							<div className="input-group-append">
 								<button onClick={()=>filtrar(search)} className="btn btn-outline-secondary" type="button" id="buscador">Button</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>




		<div className="col-sm-6">
			<div className="card">
			<div className="card-body">
				<div className="text-center">
					<h5 class="card-title">Filtrar</h5>
				</div>
				<select id="selector">
					<option value="All" selected>All</option>
					
					{categorias.map((products,index)=>
					
					<option value={products}>{products}</option>
			)}
				</select>
			</div>
			</div>
		</div>
		</div>
        <ul id="productosresultados">
		{producto.map((products,index)=>
			<Tarjetas  index={index} theproducts={products} id={products.id} titulo={products.title} description={products.description} thumbnail ={products.thumbnail} />)}
        </ul>
	</div>
}