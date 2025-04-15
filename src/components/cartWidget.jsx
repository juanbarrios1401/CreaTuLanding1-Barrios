import React from 'react';


function CartWidget({cantidad}) {
    return (
        <div>
            <span role="img" aria-label="carrito">🛒</span>
            <h1>({cantidad})</h1>
        </div>
        //el carrito sera dinamico
    );
}

export default CartWidget;
