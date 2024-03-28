import React from 'react'
import Menu from '../components/Menu/Menu'
import DonateMainPage from '../components/DonateMainPage/DonateMainPage'

const Donate = () => {
  return (
    <div>
      <Menu address={'0x93eAE967E66CD2786577568DD4631824CEE38661'} menu={'Profile'}/>
      <DonateMainPage />
    </div>
  )
}

export default Donate
