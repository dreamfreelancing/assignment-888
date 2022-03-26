import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart)
    const {removeHandel} = cart;
    return (
        <div className='cart'>
            <h1> Your Order</h1>
            <h2>Selected Items:={cart}</h2>

            <div className="button">
            <button>
                <p>CHOOSE 1 FOR ME</p>
            </button>
            <button onClick={ () =>removeHandel (cart)} className='btn-2'>
                <p>REMOVE</p>
            </button>
            </div>
        </div>
    );
};

export default Cart;