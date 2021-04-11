import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../../firebase'
import './Login.css'

export const Login = () => {
    const history=useHistory()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
const signIn=e=>{
   e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
    .then(results=>{
        if(results){
            history.push('/')
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
               <h1>Sign-in</h1>
               <form >
                   <h5>E-mail</h5>
                   <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Your Email"/>
                   <h5>Password</h5>
                   <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter Your Password"/>
                   <button className="login_signin" type="submit" onClick={signIn}>Login</button>
                   <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                 <Link to="/signup">  <button className="login_reg">Don't Have an account?</button></Link>
               </form>
           </div>
        </div>
    )
}
