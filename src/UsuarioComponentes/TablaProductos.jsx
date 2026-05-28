//props => propiedades del componente
//obj promp __ {}

function TablaProductos({info, color}) {
    //todo el codigo que sea js
    return(
        <table>
            <tr>
                <th>codigo</th>
                <th>nombre</th>
                <th>cantidad</th>
                <th>unidad</th>
            </tr>
            <tr>
                {
                    color.map((items)=>{
                        return (
                            <td>{items}</td>
                        )
                    })
                }
            </tr>
        </table>
    );
}



export default TablaProductos
