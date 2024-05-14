import React from 'react'
import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="wrapp">
        <div className="welcome__container flex__sb">
            <div className="welcome__text">
                <p className="pre__title">Здійснити пожертвування</p>
                <h2 className='headtext'>Вітаємо !</h2>
                <p className="p__text">Реєстрація на нашому сайті - це перший крок до того, щоб допомогти тим, хто цього потребує, та насолоджуватися красою та значимістю кожного NFT.</p>
                <button className='def__btn'>Увійти</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
