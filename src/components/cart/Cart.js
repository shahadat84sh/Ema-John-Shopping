import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let Shipping = 0;
    let quantity = 0;

    for (const product of cart){
        quantity = quantity + product.quantity
        total = total + product.price* product.quantity;
        Shipping = Shipping + product.shipping
    }
    const tax = parseFloat((total * 0.1 ).toFixed(2));
    const grandTotal = total + Shipping + tax
    return (
        <div className='cart'>
            <h4>Order for Summary</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price: ${total} </p>
            <p>Shipping : ${Shipping} </p>
            <p>Tax: ${tax} </p>
            <h4>Grand Total : {grandTotal.toFixed(2)} </h4>
        </div>
    );
};

export default Cart;