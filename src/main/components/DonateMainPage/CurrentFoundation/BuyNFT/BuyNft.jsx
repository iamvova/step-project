import React from 'react'
import './BuyNft.scss'

const BuyNft = ({details}) => {

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapp">
      <div className='buy-container'>
        <div className="buy-container__img"><img src={details.image} alt="11" /></div>
        <div className="buy-content">
            <h2 className="buy-name">{details.name}</h2>
            <p className="buy-description">{details.description}</p>
              <div className="progress-container">
                <div className="progress-labels">
                  <span>344</span>
                  <span>10 000</span>
                </div>
                <div className="progress-bar">
                  <progress value={344} max={10000}></progress>
                </div>
              </div>
            <div className='buy-btns'>
                <input type="text" placeholder={details.min_price} />
                <button className='buy-donate__btn'>Donate</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default BuyNft
