import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { useContextState } from "./contextState";
import axios from "axios";

export default function Card() {
  const { contextState } = useContextState();
  const [productos, setProductos] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    axios.get('https://dummyjson.com/docs/products')
      .then(response => {
        setProductos(response.data);
      })
      .catch(error => {
        console.error('Error al obtener productos desde la API', error);
      });
  }, []);

  const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
    : productos;

  const Tarjeta = ({ producto }) => {
    return (
      <div className="col">
        <div className="card">
          <img src={producto.thumbnail} className="card-img-top imagen" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{producto.title}</h5>
            <p className="card-text">Precio: ${producto.price}</p>
            <button className="btn btn-primary">ver detalles</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container text-center">
      <div className="categoria-filter">
        <select
          value={categoriaSeleccionada}
          onChange={(e) => setCategoriaSeleccionada(e.target.value)}
        >
          <option value="">Todas las categorías</option>
          <option value="categoria1">Categoría 1</option>
          <option value="categoria2">Categoría 2</option>
        </select>
      </div>
      <div className="row">
        {productosFiltrados.map((producto) => (
          <Tarjeta key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  );
}
