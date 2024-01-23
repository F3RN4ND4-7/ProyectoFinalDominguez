import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ id, nombre, stock, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img src={img} alt={nombre} />
      <h3>Nombre: {nombre} </h3>
      <p>Precio: {precio} </p>
      <div className='flex'>
      <p>ID: {id} </p>
      <p>STOCK: {stock} </p>
      </div>
      <div className='container-btn'>
      <Link className='btn' to={`/item/${id}`}> Ver Detalles </Link>
      </div>
    </div>
  )
}

export default Item