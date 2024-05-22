import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../../Loader/Loader'
import './Settings.scss'

const Settings = () => {
  const navigate = useNavigate()
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState(null)

  const [data, setData] = useState(null)
  const [message, setMessage] = useState(null)
  const [userData, setUserData] = useState({});
  const backendUserSettingsUrl = 'http://195.189.226.95/user/data/'
  
  

useEffect(() => {
    const fetchBackendData = async () => {
        try {
            const access_token = localStorage.getItem('access');
            if (access_token) {
                const response = await axios.get(backendUserSettingsUrl, {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                });
                setUserData(response.data);
                console.log(response.data);
            }
        } catch (error) {
            console.error('Помилка при отриманні даних з бекенду:', error);
        }
    };

    fetchBackendData();
}, []);

const handleChange = (e) => {
    const { name, value, files } = e.target
    setUserData(prevData => ({
        ...prevData,
        [name]: files ? files[0] : value
    }))
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setError(null);

    try {
        const accessToken = localStorage.getItem('access');
        const config = {
            headers: {
                "Content-Type": "text/plain",
                'Authorization': `Bearer ${accessToken}`
            }
        };

        const formData = new FormData()
        for (const key in userData) {
            formData.append(key, userData[key])
        }

        const response = await axios.put(backendUserSettingsUrl, formData, config)

        if ([200, 201, 202, 204].includes(response.status)) {
            setMessage('User data updated successfully')
            console.log(response.data);
        } else {
            setError('Failed to update user data')
        }
    } catch (error) {
        setError('Error updating user data: ' + error.message)
    }
}

  const handleDisconnect = () => {
    navigate('/')
  }
  
  return (
      (userData ? (
        
    <div className='set-container'>

      
        <div className="set-content">
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">Ім'я: {userData.first_name}</label>
          <input type="text" name='first_name' placeholder="Ім'я" onChange={handleChange}/>

          <label htmlFor="last_name">Прізвище</label>
          <input type="text" name='last_name' placeholder='Прізвище' onChange={handleChange}/>

          <label htmlFor="username">Нікнейм</label>
          <input type="text" name='username' placeholder='Нікнейм' onChange={handleChange}/>

          <label htmlFor="eamil">Пошта</label>
          <input type="text" name='email' placeholder='example@gmail.com' onChange={handleChange}/>

          <label htmlFor="profile_image">Зображення профілю</label>
          <input type="file" name='profile_image' accept="image/*" onChange={handleChange}/>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {message && <p style={{ color: 'green' }}>{message}</p>}

          <>
            {isConnected ? (
              <p>MetaMask від'єднано. Перенаправлення на іншу сторінку...</p>
            ) : (
              <button onClick={handleDisconnect} className="white__btn">Від'єднати MetaMask</button>
            )}
          </>
          
          <button className="white__btn-rev" type="submit">Зберегти</button>
        </form>
      </div>
    </div>
    ):(
      <Loader></Loader>
    ))
  )
}

export default Settings