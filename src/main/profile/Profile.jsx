import React, { useEffect, useState }  from 'react'
import Menu from '../components/Menu/Menu'
import ProfileAvatar from '../components/ProfileAvatar/ProfileAvatar';

const Profile = () => {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const getAddress = async () => {
      try {
        if (window.ethereum) {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          setAddress(accounts[0]);
        } else {
          setAddress(null);
        }
      } catch (error) {
        console.error('Помилка отримання адреси MetaMask:', error);
        setAddress(null);
      }
    };

    getAddress();
  }, []);

  return (
    <div>
      {address ? (
        <>
        <Menu address={address} menu={'Donate'}/>
        <ProfileAvatar address={address}/>
        </>
      ) : (
        <p>Мета-маска не підключена</p>
      )}
        
    </div>
  )
}

export default Profile
