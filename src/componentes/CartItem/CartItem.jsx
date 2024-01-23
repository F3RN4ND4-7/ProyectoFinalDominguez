import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import './CartItem.css';

const CartItem = ({ item, cantidad, img }) => {
    const { eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="contenedorItem">
            <div className="item">
            <h4> {item.nombre} </h4>
            <p> Cantidad: {cantidad} </p>
            <p> Precio: {item.precio} </p>
            </div>
            <div className="end">
            <button onClick={() => eliminarProducto(item.id)}> Eliminar Producto </button>
            </div>
            <hr />
        </div>
    )
}

export default CartItem