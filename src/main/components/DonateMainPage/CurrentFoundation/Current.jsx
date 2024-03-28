import React from 'react'
import './Current.scss'
import Menu from '../../Menu/Menu'
import BuyNft from './BuyNFT/BuyNft'

const Current = () => {
  return (
    <div>
      <Menu address={'0x93eAE967E66CD2786577568DD4631824CEE38661'} menu={'Profile'}/>
      <BuyNft />
    </div>
  )
}

export default Current
