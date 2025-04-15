import React from 'react';
import NavBar from './components/navBar';
import ItemListContainer from './components/itemListConteiner';
import Contenedor from './components/contenedor';

function App() {
  let cantidadEnCarrito= 0;

  return (
    <>
      <NavBar tienda="The Punisher - SHOP" cantidadEnCarrito={cantidadEnCarrito} />
      <ItemListContainer mensajeBienvenida="¡Bienvenido a nuestra tienda online!" />
      <Contenedor mensaje="¡Descubre lo mejor de nuestra tienda aquí abajo!" />
    </>
  );
}

export default App;