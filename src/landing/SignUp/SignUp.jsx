import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate  } from 'react-router-dom';
import { CgClose } from 'react-icons/cg'
import secure from '../../constants/images/secure.png'
import '../container/Menu/Menu.scss'
import './SignUp.scss'

import Web3 from 'web3'

const SignUp = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [hideBurger, setHideBurger] = useState(true)
    const [address, setAddress] = useState()
    
    const [accounts, setAccounts] = useState([])
    const [buttonClicked, setButtonClicked] = useState(false)
    let navigate = useNavigate(null)
    
    const backendMainUrl = 'http://195.189.226.95';

    useEffect(()=>{
        if(toggleMenu === true){
            document.querySelector('body').style.overflowY = 'hidden'
        }else {
            document.querySelector('body').style.overflowY = 'auto'
        }
    })

    const handleOpenMenu = ()=>{
        setToggleMenu(current => !current)
        setHideBurger(current => !current)
    }

    const connectMetamask = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum)
        try {
          await window.ethereum.enable()
          const accs = await web3Instance.eth.getAccounts()

          if (accs.length > 0) {
            setAddress(accs[0])
            sendAccountToBackend(accs[0])
          }

        } catch (error) {
          console.error('Access denied to MetaMask accounts:', error)
        }
      } else {
        console.error('Please install MetaMask extension')
      }
    }
    
    const sendAccountToBackend = async (account) => {
      const backendURL = `${backendMainUrl}/user/registration/`
    
      try {
        setAddress(account);
        const response = await fetch(`${backendURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ public_key: account }),
        })
    
        if (response.ok) {
          const data = await response.json()

          const captcha = data.captcha

          signMessageWithMetaMask(captcha, account)
        } else {
          console.error('Failed to send MetaMask account to backend')
        }
      } catch (error) {
        console.error('Error sending MetaMask account to backend:', error)
      }
    };
    
    const signMessageWithMetaMask = async (captcha, account) => {
      if (!window.ethereum) {
        console.error('MetaMask not available')
        return
      }
    
      try {
        const web3Instance = new Web3(window.ethereum)
        const signature = await web3Instance.eth.personal.sign(captcha, account, '')

        sendSignatureToBackend(account, signature)
        
      } catch (error) {
        console.error('Error signing message with MetaMask:', error)
      }
    }

    const sendSignatureToBackend = async (account, signature) => {
      const backendURL = `${backendMainUrl}/user/login/`
      try {
        const response = await fetch(`${backendURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ signature: signature, public_key: account }),
        })
    
        if (response.ok) {
          const data = await response.json()
          navigate('/profile')
        } else {
          console.error('Failed to send signature to backend')
        }
      } catch (error) {
        console.error('Error sending signature to backend:', error)
      }
    }

  return (
    <div>
        <div className='app__main' id='main'>
        <nav className={'nav__top-black flex__sb'}>
              <div className='app__main-logo'>Charity Auction</div>
              <ul className={'app__main-list app__list-black'}>
                  <li ><a href='#main'>Головна</a></li>
                  <li ><a href='#about'>Про проект</a></li>
                  <li ><a href='#price'>Фонди</a></li>
                  <li ><a href='#gallery'>Статистика</a></li>
                  <li ><a href='#contacts'>Навчання</a></li>
              </ul>
            

              <div className="app__navbar-smallscreen">

                  <GiHamburgerMenu className='burger__icon' fontSize={37} style={{display: hideBurger ? 'block' : 'none'}} onClick={handleOpenMenu} />
                  
                  {toggleMenu && (
                      <div className="app__navbar-smallscreen-overlay flex__center slide__bottom">
                          <CgClose className="overlay__close" color='#fff' fontSize={37} onClick={handleOpenMenu} />           
                          <ul className="app__navbar-smallscreen-links">
                              <li onClick={handleOpenMenu}><a href='#main'>Головна</a></li>
                              <li onClick={handleOpenMenu}><a href='#about'>Про проект</a></li>
                              <li onClick={handleOpenMenu}><a href='#price'>Фонди</a></li>
                              <li onClick={handleOpenMenu}><a href='#gallery'>Статистика</a></li>
                              <li onClick={handleOpenMenu}><a href='#contacts'>Навчання</a></li>
                          </ul>
                      </div>
                  )} 

            </div>
        </nav>

        <div className='container__meta flex__column'>
            <div className='overlay__meta flex__column'>
                <div className="container__meta-img">
                    <img src={secure} alt="1" />
                </div>
                <button className='connect__meta def__btn' onClick={connectMetamask}>Увійти</button>
                {buttonClicked && (
                    <div>
                        <h2>Connected accounts:</h2>
                        <ul>
                            {accounts.map((account, index) => (
                            <li key={index}>{account}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>

        </div>
    </div>
  )
}

export default SignUp
