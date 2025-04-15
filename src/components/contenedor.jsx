import React from 'react';
import '../styles/contenedor.css';

function Contenedor({ mensaje }) {
  return (
    <div className="contenedor">
      <h2>{mensaje}</h2>
      <p>Próximamente: nuestro increíble catálogo de productos.</p>
    </div>
  );
}

export default Contenedor;