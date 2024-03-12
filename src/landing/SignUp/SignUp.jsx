import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import '../container/Menu/Menu.scss'
import './SignUp.scss'

const SignUp = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [hideBreger, setHideBreger] = useState(true)
    useEffect(()=>{
        if(toggleMenu === true){
            document.querySelector('body').style.overflowY = 'hidden';
        }else {
            document.querySelector('body').style.overflowY = 'auto';
        }
    })

    const handleOpenMenu = ()=>{
        setToggleMenu(current => !current)
        setHideBreger(current => !current)
    }

  return (
    <div>
        <div className='app__main' id='main'>
        <nav className={'nav__top-black flex__sb'}>
              <div className='app__main-logo'>Logo</div>
              <ul className={'app__main-list app__list-black'}>
                  <li ><a href='#main'>Home</a></li>
                  <li ><a href='#about'>About us</a></li>
                  <li ><a href='#price'>About projects</a></li>
                  <li ><a href='#gallery'>Partners</a></li>
                  <li ><a href='#contacts'>Education</a></li>
              </ul>
            

              <div className="app__navbar-smallscreen">
                  <GiHamburgerMenu className='burger__icon' fontSize={37} style={{display: hideBreger ? 'block' : 'none'}} onClick={handleOpenMenu} />
                  {toggleMenu && (
                      <div className="app__navbar-smallscreen-overlay flex__center slide__bottom">
                          <CgClose className="overlay__close" color='#fff' fontSize={37} onClick={handleOpenMenu} />           
                          <ul className="app__navbar-smallscreen-links">
                              <li onClick={handleOpenMenu}><a href='#main'>Home</a></li>
                              <li onClick={handleOpenMenu}><a href='#about'>About us</a></li>
                              <li onClick={handleOpenMenu}><a href='#price'>About founds</a></li>
                              <li onClick={handleOpenMenu}><a href='#gallery'>Partners</a></li>
                              <li onClick={handleOpenMenu}><a href='#contacts'>Education</a></li>
                          </ul>
                      </div>
                  )}          
            </div>
        </nav>

        <div className='container__meta flex__column'>
            <div className='overlay__meta flex__column'>
                <div className="container__meta-img">
                    <img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/secure.png" alt="1" />
                </div>
                <Link to="/profile"> <button className='connect__meta def__btn'>Connect Metamask</button></Link>
            </div>
        </div>

        </div>
    </div>
  )
}

export default SignUp
