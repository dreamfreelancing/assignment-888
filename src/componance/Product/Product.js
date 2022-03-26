import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {handleAddToCart} = props;
    const{img, name, price, ratings, id} = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="info">
                <h1>{name}</h1>
                <h3>Price:${price}</h3>
                <h3>Id:{id}</h3>
                <h4>Ratings:{ratings}</h4>
            </div>
            <button onClick={()=>handleAddToCart(props.product.name)} className='btn'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;