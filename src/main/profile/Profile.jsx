import React, { useEffect, useState }  from 'react'
import Menu from '../components/Menu/Menu'
import ProfileAvatar from '../components/ProfileAvatar/ProfileAvatar';
import './Profile.scss'

const Profile = () => {
  const [address, setAddress] = useState(null)

  useEffect(() => {
    const getAddress = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' })
          const accounts = await window.ethereum.request({ method: 'eth_accounts' })
          setAddress(accounts[0])
          localStorage.setItem('address', accounts[0])
        } else {
          setAddress(null)
        }
      } catch (error) {
        console.error('Помилка отримання адреси MetaMask:', error)
        setAddress(null)
      }
    }

    getAddress()
  }, [])

  return (
    <div className='profile-main'>
      {address ? (
        <>
          <Menu address={address} menu={'Donate'}/>
          <ProfileAvatar address={address}/>
        </>
      ) : (
        <p>Мета-маска не підключено</p>
      )}
        
    </div>
  )
}

export default Profile
