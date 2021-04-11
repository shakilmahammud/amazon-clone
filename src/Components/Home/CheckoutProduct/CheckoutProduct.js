import React from 'react'
import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css'

export const CheckoutProduct = ({id,title,image,price,rating}) => {
    const [{basket},dispatch]=useStateValue();

    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
        })
    }
   
    return (
        <div className="checkoutProduct">
            <img 
            src={image} alt="" className="checkoutProduct_image"/>
        <div className="checkoutProduct_info">
            <p className="checkoutProduct_title">
                {title}
            </p>
            <p className="checkoutProduct_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct_rating">
                {Array(rating)
                .fill()
                .map((_,i)=>(
                    <p>🌟</p>
                ))}
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>
        </div>
    )
}
