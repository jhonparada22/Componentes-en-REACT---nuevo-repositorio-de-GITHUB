import logo from './logo.svg';
import './App.css';
//import CardUsuario from './UsuarioComponentes/UsuariosCard';
import TablaProductos from './UsuarioComponentes/TablaProductos'

function App() {
  // info tomadas API
  const ListaProducto = [
    {codigo:"c0001",
      nombre: "mantequilla",
      cantidad: "30",
      unidad: "kg"
    }
  ]
  const colores = ["azul" , "verde" , "rojo"]
  return (
    <div>
      <h1 className='texto'> lista de producto</h1>
      <TablaProductos info = {ListaProducto} color={colores}/>
    </div>
    
  );
}

export default App;