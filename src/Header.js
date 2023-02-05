export default function Header(props) {  
    return (<div id="cabecera">
      <img className="logo" src={process.env.PUBLIC_URL + "/logo.PNG"} alt="logo" />
      <h3 className="mensaje">Bienvenido a la página de Javier Ariza</h3>      
    </div>)
  }