import {CardElement,useStripe, useElements } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom'
import { CheckoutProduct } from '../Home/CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../Home/StateProvider'
import './Payment.css'
import axios from '../../axios'

export const Payment = () => {
    const[{basket,user},dispatch]=useStateValue()
    const total=basket.reduce((ammount,item)=>ammount+item.price,0)
    const stripe=useStripe()
    const elements=useElements()
    const [error,setError]=useState(null)
    const [disabled,setDisabled]=useState(null)
     const [success,setSuccess]=useState(false)
     const [processing,setProcessing]=useState("")
     const [clientSecret,setClientSecret]=useState('sk_test_51IfFw0LtfUFU3AzErKVVCb1P8rGxEzzNgGNpkmJVov7RwAtv2IO14p9mgh6TiQsWPdIWBvFE6WFZ42ZEAduB9cSY00dw6uGEKL')
     const history=useHistory()


    const handleSubmit=async e=>{
        e.preventDefault()
        setProcessing(true)
        const payload=await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(res=>{
            setSuccess(true)
            setError(null)
            setProcessing(false)
            history.replace('/order')
            console.log(res)
        })
               
    }
    const handleChange=event=>{
        setDisabled(event.empty)
        setError(event.error?event.error.message:"")
    }
    return (
        <div className="payment">
        <div className="payment_container">
        <h1>Checkout(<Link to="/checkout">{basket?.length} Items</Link>)</h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>1216 mirpur</p>
                    <p>Dhaka</p>
                </div>
            </div>
            <div className="payment_section">
           <div className="payment_title">
           <h3>Review Items  add Delivery</h3>
           </div>
           <div className="payment_items">
               {basket.map(item =>(<CheckoutProduct
                   id={item.id}
                   title={item.title}
                   image={item.image}
                   price={item.price}
                   rating={item.rating}
               />))}
           </div>
            </div>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    <form onSubmit={handleSubmit} >
                        <CardElement onChange={handleChange}/>
                        <div className="payment_pice">
                        <CurrencyFormat
             renderText={(value)=>(
            <h3>Order Total: {value}</h3>
             )}
            decimalScale={2}
            value={total} displayType={'text'} thousandSeparator={true} prefix={'$'}
            />  
            <button disabled={processing || disabled || success} >
                <span>{processing?<p>Processing</p>:"Buy Now"}</span>
            </button>
                        </div>
                        {error&&<div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
            
        </div>
    )
}
