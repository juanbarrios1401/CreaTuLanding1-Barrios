import React from 'react';
import CartWidget from './cartWidget';
import '../styles/navBar.css';

function NavBar({ tienda, cantidadEnCarrito }) {
    return (
        <nav>
            <div>
                <img src="https://www.qualityartworks.com.ar/wp-content/uploads/pi/pi0209/0209pi_negro_estampa.jpg" alt="Logo" />
                <h1>{tienda}</h1>
            </div>
            <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/productos">Productos</a></li>
                <li><a href="/contacto">Contacto</a></li>
            </ul>
        
            <CartWidget cantidad={cantidadEnCarrito} />
        </nav>
    );
}

export default NavBar;