import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    return (
        <div className='cart'>
            <h4>Order for Summary</h4>
            <p>Selected Items : {cart.length}</p>
        </div>
    );
};

export default Cart;