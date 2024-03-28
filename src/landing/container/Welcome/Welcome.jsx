import React from 'react'
import './Welcome.scss'

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="wrapp">
        <div className="welcome__container flex__sb">
            <div className="welcome__text">
                <p className="pre__title">Lorem, ipsum.</p>
                <h2 className='headtext'>Welcome</h2>
                <p className="p__text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae corporis mollitia distinctio corrupti. Possimus asperiores nemo quos vero beatae amet vitae debitis tempore molestias. Consequatur dolorum autem illum cumque tempore?</p>
                <button className='def__btn'>Continue</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
