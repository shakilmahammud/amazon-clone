import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../../firebase'
import './Signup.css'

export const Signup = () => {
    const history=useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const register=e=>{
    e.preventDefault()
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        if(auth){
            history.push('/login')
        }
    }).catch(error=>alert(error.message))
}
    return (
        <div className="login">
           <Link to="/  ">
           <img 
            className="login_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG24.png" alt=""/>
           </Link>
           <div className="login_container">
               <h1>Create New Account</h1>
               <form >
                   <h5>E-mail</h5>
                   <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Your Email"/>
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Your password"/>
                   <button className="login_signin" type="submit" onClick={register}>SignUp</button>
                   <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                 <Link to="/login">  <button className="login_reg">Already Have an acccount?</button></Link>
               </form>
           </div>
        </div>
    )
}