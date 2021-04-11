import React from 'react'
import { CheckoutProduct } from '../CheckoutProduct/CheckoutProduct';
import { useStateValue } from '../StateProvider';
import { Subtotal } from '../Subtotal/Subtotal'
import './Checkout.css'

export const Checkout = () => {
    const [{basket,user},dispatch]=useStateValue();
    return (
        <div className="chcekout">
             <div className="checkout_left">
                 <img
                 className="checkout_ad"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt=""/>
             
             <div>
             <h3>Hello,{user.email}</h3>
                 <h2 className="checkout_title">
                     Your shopping Cart
                 </h2>
                {
                    basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))
                }
             </div>
             </div>
             <div className="checkout_right">
                <Subtotal/>
             </div>
        </div>
    )
}
