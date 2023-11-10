import React, { useEffect } from 'react';
import './App.css';
import { ActionTypes, useContextState } from "./contextState";
import axios from 'axios'; 

function Detalle() {
  const { contextState, setContextState } = useContextState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setContextState({ newValue: true, type: ActionTypes.setLoading });

        const response = await axios.get(`https://dummyjson.com/cars/1`);
        
        if (response.status === 200) {
          const detallesAuto = response.data; 
          setContextState({
            newValue: detallesAuto,
            type: ActionTypes.setDetallado,
          });
        } else {
          alert('Error al obtener detalles del automóvil');
          console.error('Error al obtener detalles del automóvil');
        }

        setContextState({ newValue: false, type: ActionTypes.setLoading });
      } catch (error) {
        alert(JSON.stringify(error));
        console.error(error);
      }
    };

    fetchData();
  }, [setContextState]);

  return (
    <>
      <div className="container text-center detalle">
        <div className="row">
          <div className="col">
            <img src={contextState.image} className="card-img-top imagenDetalle" alt="Auto" />
          </div>
          <div className="col">
            <ul className='text-center centrar'>
              <h2>Detalles del Auto</h2>
              <br /><br /><br /><br />
              <li>Marca: {contextState.marca}</li>
              <li>Modelo: {contextState.modelo}</li>
              <li>Año: {contextState.año}</li>
              <li>Color: {contextState.color}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detalle;
