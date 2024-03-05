import React from 'react'
import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="wrapp">
        <div className="welcome__container flex__sb">
            <div className="welcome__image">
                <img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/Bitcoin-Analysis2.png" alt="some img" />
            </div>
            <div className="welcome__text">
                <p className="pre__title">Lorem, ipsum.</p>
                <h2 className='headtext'>Welcome</h2>
                <p className="p__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. <span className="yellow__p"> Beatae corporis mollitia </span> distinctio corrupti. Possimus asperiores nemo quos vero beatae amet vitae debitis tempore molestias. Consequatur dolorum autem illum cumque tempore?</p>
                <button className='def__btn'>Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
