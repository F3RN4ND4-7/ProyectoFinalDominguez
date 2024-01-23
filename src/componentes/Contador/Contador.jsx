import { useState } from "react";
import './Contador.css';

const Contador = ({ inicial, stock, funcionAgregar }) => {
    const [contador, setContador] = useState(inicial);


    const sumarContador = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const restarContador = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
        <div className="add-items">
            <button onClick={restarContador}> - </button>
            <p> {contador} </p>
            <button onClick={sumarContador}> + </button>

            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito Mágico </button>
        </div>
        </>
    )
}

export default Contador