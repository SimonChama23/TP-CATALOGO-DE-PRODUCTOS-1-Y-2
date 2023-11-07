import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Productos from './Productos';
import Detalle from './Detalle';
import axios from 'axios';

function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10); 

  useEffect(() => {
    axios.get('https://dummyjson.com/docs/products')
      .then(response => {
        setProductos(response.data); 
      })
      .catch(error => {
        console.error('Error al obtener productos desde la API', error);
      });

  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="productos"
            element={
              <Productos
                productos={currentProducts}
                categorias={categorias}
                categoriaSeleccionada={categoriaSeleccionada}
                setCategoriaSeleccionada={setCategoriaSeleccionada}
                handlePageChange={handlePageChange}
                productsPerPage={productsPerPage}
                totalProducts={productos.length}
                currentPage={currentPage}
              />
            }
          />
          <Route path="detalle" element={<Detalle />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
