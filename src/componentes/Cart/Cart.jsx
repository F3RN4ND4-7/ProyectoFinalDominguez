import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2>No hay productos en el carrito. Qué, ¿te regañan?</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div className="contenedorItem" >
            {
                carrito.map(producto => <CartItem key={producto.item.id} {...producto} />)
            }
            <div className="item">
                <h3>Cantidad Total: {cantidadTotal} </h3>
                    <button onClick={() => vaciarCarrito()}> Vaciar Carrito</button>
            </div>
                <h3 className="precio">Total: $ {total} </h3>
                <div className="container-btn">
            <Link className='btn' to="/checkout"> Finalizar Compra </Link>
                </div>
        </div>
    )
}

export default Cart