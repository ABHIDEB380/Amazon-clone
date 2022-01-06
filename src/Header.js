import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
  const [{basket}]=useStateValue();

  
    return (
        <div className= 'header'>
           <Link to="/">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="header_logo" className='header_logo' />
          </Link>
            <div className="header_search">
                <input className="header_searchInput"  type="text" />
                <SearchIcon className="header_searchIcon">

                </SearchIcon>

            </div>
            <div className="header_nav"></div>

            <Link to = '/login'>
            <div className="header_option">

                <span className="header_optionOne">Hello Guest </span>
                <span className="header_optionTwo">Sign In</span>

            </div>
            </Link>

            <div className="header_option">

              <span className="header_optionOne">Returns and </span>
              <span className="header_optionTwo">Orders</span>

            </div>

            <div className="header_option">

              <span className="header_optionOne">Your</span>
              <span className="header_optionTwo"> Prime</span>
            
            </div>
            <Link to ="/checkout">
            <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="header_optionTwo header_basketCount">
              {basket?.length}
            </span>

            </div>
            </Link>

        </div>
        )
      }

export default Header
