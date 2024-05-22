import React from 'react'
import study1 from '../../../constants/images/study1.jpg'
import study2 from '../../../constants/images/study2.jpg'
import study3 from '../../../constants/images/study3.jpg'
import './Articles.scss'

const Articles = () => {
  return (
    <div className='articles__container' id='study'> 
      <div className="wrapp">
      <p className="pre__title t__center">Як користуватися платформою</p>
      <h2 className="headtext t__center">Навчання</h2>
      <div className="articles__content">

        <div className="article__block">
            <div className="article__img">
                <img src={study1} alt="1" />
            </div>
            <h6 className="article__title">Вступ до Платформи</h6>
            <p className="p__text">Вітаємо на нашій платформі благодійного NFT аукціону! Ця стаття призначена для нових користувачів, які хочуть дізнатися, як користуватися нашою платформою. Перш ніж розпочати, будь ласка, зареєструйтесь на сайті через свій крипто гаманець. <span className='yellow__p'> Читати далі...</span></p>
        </div>

        <div className="article__block">
            <div className="article__img">
                <img src={study2} alt="1" />
            </div>
            <h6 className="article__title">Здійснення благодійних пожертв</h6>
            <p className="p__text">Ми пишаємося тим, що наша платформа дозволяє вам не лише насолоджуватися мистецтвом, але й робити добрі справи. Якщо ви бажаєте пожертвувати частину вашого доходу на благодійні цілі, перейдіть <span className='yellow__p'> Читати далі...</span></p>
        </div>

        <div className="article__block">
            <div className="article__img">
                <img src={study3} alt="1" />
            </div>
            <h6 className="article__title">Використання Криптогаманця</h6>
            <p className="p__text">Криптогаманець - це програмне забезпечення або пристрій, яке дозволяє зберігати та управляти вашими криптовалютними активами, включаючи Ethereum (ETH) для покупки NFT на нашій платформі. Ось кілька кроків, які допоможуть вам розпочати використання криптогаманця: <span className='yellow__p'> Читати далі...</span></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Articles
