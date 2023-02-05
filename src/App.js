import { useState, useEffect } from "react";
import SearchPage from "./SearchPage";
import ProductoInfo from "./ProductoInfo.js";
import NotMatch from "./NotMatch";
import {mockdata} from "./constants/products.js";
//import { myInitialMovies } from "./constants/constants.js";
import CONFIG from './config/config.js';
import { Routes, Route} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const USE_SERVER = CONFIG.use_server;
let arr = [];



export default function App() {
	const [loading, setLoading] = useState(true);
	const [producto, setProducto] = useState([]);
	const [categorias, setCategorias] = useState([]);
	const navigate = useNavigate();


	const download = async () => {
	if(USE_SERVER) {
		let downloadedProducts;
		try {
			const response = await fetch(CONFIG.server_url);
			downloadedProducts = await response.json();
			if(response.status==200){
				console.log("200 OK");      
				setProducto(downloadedProducts.products);
				setCategorias(Array.from(new Set(downloadedProducts.products.map((productos, index) =>  productos.category))));
				
		    } else {
				console.log("error");
	
		    }
		} catch (error) {
		  console.log("error");
		}
		  } else {
			setProducto(mockdata.products);
			setCategorias(Array.from(new Set(mockdata.products.map((productos, index) =>  productos.category))));
		  }
	  }	




	useEffect(() => {
    async function fetchData() {
      await download();

	 
				
			setTimeout(()=>{
				setLoading(false);
			},1000);		
    }

    fetchData();
	
  }, []);








	  	return (
					<div className="root">

						{loading ? <img src={process.env.PUBLIC_URL + "/spinner.gif"} className="spinner" alt="spinner" id="loading"/>: 
						
							<Routes>
								<Route path="/products/:productId" element={<ProductoInfo theproducts={producto} />}/>
								<Route path="/" element={<SearchPage theproducts={producto} categorias={categorias}/>}/>
								<Route path="*" element={<NotMatch />} />
							</Routes>}
					</div>
	  );
	}

