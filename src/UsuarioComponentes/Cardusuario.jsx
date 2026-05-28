import '../estilosCss/UsuariosEstilos.css';
const CardUsuario = () =>{
    let nombreUsuario ="Maikol Wilfredo";
    let apellidoUsuario = "Holguin Soler";
    let celularUsuario = "318-5446685";
    return(
        <div>
            <img />
            <p>nombre usuario: <span>{nombreUsuario}</span></p>
            <p>apellido usuario: <span>{apellidoUsuario}</span></p>
            <p>Celular usuario: <span>{celularUsuario}</span></p>
            <button>Ver mas</button>
        </div>

    );
}
export default CardUsuario