import React from 'react'
import './BuyNft.scss'

const BuyNft = () => {
  return (
    <div className="wrapp">
      <div className='buy-container'>
        <div className="buy-container__img"><img src="https://i.ebayimg.com/images/g/gi4AAOSwObJkXkSa/s-l400.jpg" alt="11" /></div>
        <div className="buy-content">
            <h2 className="buy-name">Lorem, ipsum dolor.</h2>
            <p className="buy-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam vero consequuntur praesentium illum repellendus corporis ex minus id inventore.</p>
            <div className='buy-btns'>
                <input type="text" placeholder='0.1ETH' />
                <button className='buy-donate__btn'>Donate</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNft
