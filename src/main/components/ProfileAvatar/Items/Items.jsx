import React from 'react'
import nftExp1 from '../../../../constants/images/nft-exp1.jpg'
import nftExp2 from '../../../../constants/images/nft-exp2.jpg'
import nftExp3 from '../../../../constants/images/nft-exp3.jpg'
import nftExp4 from '../../../../constants/images/nft-exp4.jpg'
import nftExp5 from '../../../../constants/images/nft-exp5.jpg'
import './Items.scss'

const Items = () => {
  return (
    <div className='wrapp'>
      <div className="items-container">
        <div className="item-block">
            <img src={nftExp1} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp2} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp3} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp4} alt="111" />
        </div>
        <div className="item-block">
            <img src={nftExp5} alt="111" />
        </div>
      </div>
    </div>
  )
}

export default Items
