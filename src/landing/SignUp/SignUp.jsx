import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useNavigate  } from 'react-router-dom';
import { CgClose } from 'react-icons/cg'
import '../container/Menu/Menu.scss'
import './SignUp.scss'

import Web3 from 'web3'

const SignUp = () => {
    const [address, setAddress] = useState()
    const [toggleMenu, setToggleMenu] = useState(false)
    const [hideBreger, setHideBreger] = useState(true)
    const [web3, setWeb3] = useState(null)
    const [accounts, setAccounts] = useState([])
    const [buttonClicked, setButtonClicked] = useState(false)
    let navigate = useNavigate(null);
    
    useEffect(()=>{
        if(toggleMenu === true){
            document.querySelector('body').style.overflowY = 'hidden'
        }else {
            document.querySelector('body').style.overflowY = 'auto'
        }
    })

    const handleOpenMenu = ()=>{
        setToggleMenu(current => !current)
        setHideBreger(current => !current)
    }

    const connectMetamask = async () => {
      if (window.ethereum) {
        const web3Instance = new Web3(window.ethereum)
        try {
          // Запит на отримання дозволу на доступ до рахунків MetaMask
          await window.ethereum.enable()
          // Отримання списку рахунків MetaMask
          const accs = await web3Instance.eth.getAccounts()
          // Відправка зв'язаного рахунку на бекенд
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
    };
    
    const sendAccountToBackend = async (account) => {
      const backendURL = 'http://195.189.226.95/user/registration/'
    
      try {
        setAddress(account);
        const response = await fetch(`${backendURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ public_key: account }),
        });
    
        if (response.ok) {
          const data = await response.json()
          // Отримати капчу з відповіді сервера
          const captcha = data.captcha
          // Підписати капчу MetaMask
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
        console.log('Signature:', signature)
        sendSignatureToBackend(account, signature)
      } catch (error) {
        console.error('Error signing message with MetaMask:', error)
      }
    }

    const sendSignatureToBackend = async (account, signature) => {
      const backendURL = 'http://195.189.226.95/user/login/'
      try {
        console.log("121212121", account)
        const response = await fetch(`${backendURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ signature: signature, public_key: account }),
        })
    
        if (response.ok) {
          const data = await response.json()
          console.log('Access Token:', data)
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
                <button className='connect__meta def__btn' onClick={connectMetamask}>Connect Metamask</button>
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
