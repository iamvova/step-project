import React from 'react'
import './Articles.scss'

const Articles = () => {
  return (
    <div className='articles__container'> 
      <div className="wrapp">
      <p className="pre__title t__center">Lorem ipsum dolor sit.</p>
      <h2 className="headtext t__center">Lorem, ipsum.</h2>
      <div className="articles__content">

        <div className="article__block">
            <div className="article__img">
                <img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" />
            </div>
            <h6 className="article__title">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
            <p className="p__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia itaque quae. Quos, quaerat rem! <span className='yellow__p'>Read more...</span></p>
        </div>

        <div className="article__block">
            <div className="article__img">
                <img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" />
            </div>
            <h6 className="article__title">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
            <p className="p__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia itaque quae. Quos, quaerat rem! <span className='yellow__p'>Read more...</span></p>
        </div>

        <div className="article__block">
            <div className="article__img">
                <img src="https://bakrietheme.net/traveliz/wp-content/uploads/sites/7/2024/01/bachalpsee-lake-in-swiss-alps-mountains-e1706115296642.jpg" alt="1" />
            </div>
            <h6 className="article__title">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
            <p className="p__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita officia itaque quae. Quos, quaerat rem! Quos, quaerat rem! <span className='yellow__p'>Read more...</span></p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Articles
