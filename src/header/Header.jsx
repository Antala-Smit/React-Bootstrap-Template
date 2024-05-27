import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

function Header() {
  return (
    <header>
      <div className='container'>
        <div className='d-flex header'>
          {/* logo */}
          <div className="col-3">
            <img src="src/img/logo.png" alt="" />
          </div>
          {/* search */}
          <div className='search d-flex'>
            <input className='search-input' type="text" placeholder='Search For item...' />
            <select className='select' name="" id="">
              <option value="selected">All Categories</option>
              <option value="1">Mens</option>
              <option value="2">Womens</option>
              <option value="3">Electronics</option>
            </select>
            <a href="#">
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </a>
          </div>
          {/* bars */}
          <div className='bar d-flex'>
            <div className="menu">
              <ul className='d-flex justify-content-end'>
                <li className='menu-item'>
                  <button className="btn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faUser} />
                    <span>Account</span>
                  </button>
                  <ul className="dropdown">
                    <li><a className="dropdown-item" href="#">Register</a></li>
                    <li><a className="dropdown-item" href="#">Checkout</a></li>
                    <li><a className="dropdown-item" href="#">Login</a></li>
                  </ul>
                </li>
                <div className='wishlist'>
                  <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faHeart} />
                    <span>Wishlist</span>
                  </button>
                </div>
                <div className='cart'>
                  <button className="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>Wishlist</span>
                  </button>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className='nav-bar mt-3 d-flex justify-content-space-beetween align-item-center'>
          <div className='col-2 toggle '>
            <a href="#"><FontAwesomeIcon icon={faBarsStaggered} /></a>
          </div>
          <div className='col-7 d-flex menu-bar'>
                <a href="#"><p>Home</p></a>
                <a href="#"><p>Category <FontAwesomeIcon icon={faAngleDown} /></p></a>
                <a href="#"><p>Products <FontAwesomeIcon icon={faAngleDown} /></p></a>
                <a href="#"><p>Pages <FontAwesomeIcon icon={faAngleDown} /></p></a>
                <a href="#"><p>Blog <FontAwesomeIcon icon={faAngleDown} /></p></a>
                <a href="#"><p>Elements <FontAwesomeIcon icon={faAngleDown} /></p></a>
          </div>
          <div className='col-3 d-flex phone justify-content-end'>
              <p><FontAwesomeIcon icon={faPhone} /></p>
              <a href="#">+123 (456) (7890)</a>
          </div>
        </div>
      </div>
    </header>

  )
}

export default Header
