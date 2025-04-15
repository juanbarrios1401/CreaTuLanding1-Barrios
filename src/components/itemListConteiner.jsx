import React from 'react';
import '../styles/itemListContainer.css';

function ItemListContainer({ mensajeBienvenida }) {
  return (
    <div>
      <h1 class ='bienvenida'>{mensajeBienvenida}</h1>
      <div>
        {/*guardado para catalogo*/}
      </div>
    </div>
  );
}

export default ItemListContainer;