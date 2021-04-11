import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const Header = () => {
    return (
        <div className="header">
            <img className="header_logo"
            src=
            "http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            <div className="header_search">
           
                <input type="text" className="header_searchInput"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <div className="header_option">
                    <span className="header_optionlineone">
                        hello shakil
                    </span>
                    <span className="header_optionlineTwo">
                       Sign In
                    </span>
                </div>
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
                <div className="header_optionBasket">
                    <ShoppingBasketIcon />
                    <span className="hearder_optionlineTwo header_basketCount">
                        0
                    </span>
                </div>
            </div>
        </div>
    )
}
