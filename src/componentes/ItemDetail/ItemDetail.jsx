import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import { CarritoContext } from '../../context/CarritoContext'
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  }

  return (
    <div className='contenedorItem'>
        <h2 className='nombre'>{nombre} </h2>
        <div className='flex-detail'>
          <p> $ {precio} MXN</p>
          <p>ID:{id} </p>
        </div>
        <p className='left'>¡Bienvenido al mágico mundo de la saga de Wizarding World! Sumérgete en la magia con una amplia gama de productos originales que capturan la esencia única de este universo encantado. Desde la mística Escuela de Magia y Hechicería de Hogwarts hasta los oscuros callejones del Diagon Alley, descubre artículos extraordinarios que te transportarán a un lugar donde la magia es real.
        </p>
        <div>
          <img src={img} alt={nombre} />
          {
            agregarCantidad > 0 ? (<Link className='btn' to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
          }
        </div>
      </div>
  )
}

export default ItemDetail