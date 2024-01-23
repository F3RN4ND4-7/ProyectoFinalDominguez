import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, where, query } from "firebase/firestore";
import './ItemListContainer.css';

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  useEffect(() => {
    const misProductos = idCategoria ? query(collection(db, "producto"), where("idCat", "==", idCategoria)) : collection(db, "producto");

    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data }
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log("Muggle alert! Esta página no puede ser vista", error))
  }, [idCategoria])

  return (
    <div>
      <h2 className="titulo-tienda">Tienda mágica</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer