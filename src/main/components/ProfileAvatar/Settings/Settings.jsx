import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Settings.scss'

const Settings = () => {
  const navigate = useNavigate(); // Хук для редіректу
  const [isConnected, setIsConnected] = useState(false); // Початковий стан підключення MetaMask

  const handleDisconnect = () => {
    navigate('/')
  }
  
  return (
    <div className='set-container'>
      <div className="set-content">
        <input type="text" placeholder='Name' />
        <>
          {isConnected ? (
            <p>MetaMask від'єднано. Перенаправлення на іншу сторінку...</p>
          ) : (
            <button onClick={handleDisconnect} className="white__btn">Від'єднати MetaMask</button>
          )}
        </>
        
        <button className="white__btn-rev">Save</button>
      </div>
    </div>
  )
}

export default Settings
