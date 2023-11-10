import React from "react";
import "./App.css";
import { useContextState, ActionTypes } from "./contextState";
import axios from 'axios'; 

export default function Card() {
  const { contextState, setContextState } = useContextState();

  const Tarjeta = ({ producto }) => {
    return (
      <div className="col" key={producto.id}>
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
      <div className="row">
        {Array.isArray(contextState.busqueda) &&
          contextState.busqueda.map((producto) => (
            <Tarjeta key={producto.id} producto={producto} />
          ))}
      </div>
    </div>
  );
}
