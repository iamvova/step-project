import React from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom';

const Menu = ({address, menu}) => {

  const showCharacters = (address) => {
      const firstFour = address.slice(0, 5);
      const lastFour = address.slice(-4);
      return `${firstFour}...${lastFour}`;
  }
  return (
    <div>
        <div className="menu">
            <div className='menu__navbar'>
              <Link to={'/profile'}><div className="logo">
                  {/* <img src="/path/to/logo.png" alt="Logo" /> */}
                  <div></div>
              </div></Link>
              <Link to={menu === 'Donate' ? '/donate' : '/profile'}><div className='menu__navbar-text'>{menu}</div></Link>
            </div>
            <div className="text">{showCharacters(address)}</div>
        </div>
    </div>
  )
}

export default Menu
