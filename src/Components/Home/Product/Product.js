import React from 'react'
import './Product.css'

export const Product = () => {
    return (
        <div className="product">
            <div className="product_info">
                <p>The lean startup</p>
                <p className="product_price">
                 <small>$</small>
                 <strong>99.99</strong>
                </p>
                <div className="product_rating">
                    <p>🌟</p>
                    <p>🌟</p>
                    <p>🌟</p>
                </div>
            </div>
            <img 
            
            src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg" alt=""/>
       <button>Add to Cart</button>
        </div>
    )
}
