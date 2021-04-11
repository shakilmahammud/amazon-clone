import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../../../firebase';

export const Header = () => {
    const [{basket,user},dispatch]=useStateValue();
    const handleSignout=()=>{
        if(user){
        auth.signOut()
        }
    }
    return (
        <div className="header">
          <Link to="/">
          <img className="header_logo"
            src=
            "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
          </Link>
            <div className="header_search">
           
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to={!user&&"/login"}>
                <div className="header_option" onClick={handleSignout}>
                    <span className="header_optionlineone">
                        hello shakil
                    </span>
                    <span className="header_optionlineTwo">
                      {user?'Sign-out':'Sign In'}
                    </span>
                </div>
                </Link>
                <div className="header_option">
                <span className="header_optionlineone">
                        Returns
                    </span>
                    <span className="header_optionlineTwo">
                       Order
                    </span>
                </div>
                <div className="header_option">
                <span className="header_optionlineone">
                        Your
                    </span>
                    <span className="header_optionlineTwo">
                       Prime
                    </span>
                </div>
               <Link to="/checkout">
               <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="hearder_optionlineTwo header_basketCount">
                        {basket?.length}
                    </span>
                </div>
               </Link>
            </div>
        </div>
    )
}
