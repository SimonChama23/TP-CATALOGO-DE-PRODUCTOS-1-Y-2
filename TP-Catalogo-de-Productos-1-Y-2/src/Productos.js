import React, { useEffect } from 'react';
import './App.css';
import Card from './Card';
import { ActionTypes, useContextState } from './contextState';
import axios from 'axios'; 

function Productos() {
  const { contextState, setContextState } = useContextState();
  const [buscado, setBuscado] = React.useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        setContextState({ newValue: true, type: ActionTypes.SET_LOADING });
        const response = await axios.get(`https://dummyjson.com/products?limit=10&skip=10&select=title,price,thumbnail/search?q=${buscado}`);
        setContextState({ newValue: response.data.products, type: ActionTypes.setBusqueda });
      } catch (error) {
        alert(JSON.stringify(error));
        console.error(error);
      } finally {
        setContextState({ newValue: false, type: ActionTypes.SET_LOADING });
      }
    };

    fetchProductos();
  }, [buscado, setContextState]);

  const handleSearch = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const nuevaBusqueda = data.get('busqueda');
    setBuscado(nuevaBusqueda);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="searchform order-lg-last">
        <div className="form-group d-flex">
          <input name="busqueda" type="text" className="form-control pl-3" placeholder="Search" />
          <input type="submit" className="form-control search" />
          <select className="form-select form-select-lg mb-1" aria-label="Small select example">
            <option defaultValue="0">Categorias</option>
            <option value="1">De menor a mayor precio</option>
            <option value="2">Novedades</option>
            <option value="3">Descuento</option>
          </select>
        </div>
      </form>
      <br />
      <Card />
    </>
  );
}

export default Productos;
