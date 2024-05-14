import React, { useEffect, useState } from 'react'
import Menu from '../components/Menu/Menu'
import DonateMainPage from '../components/DonateMainPage/DonateMainPage'

const Donate = () => {
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
          <Menu menu={'Profile'} address={address} />
          <DonateMainPage  />
        </>
      ) : (
        <p>Мета-маска не підключена</p>
      )}
      
    </div>
  )
}

export default Donate
