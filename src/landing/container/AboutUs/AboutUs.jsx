import React from 'react'
import './AboutUs.scss'

const AboutUs = () => {
  return (
    <div className='about__container'>
        <div className="wrapp">
            <div className="about__container-wrap flex__sb">
                <div className="about__text">
                    <p className="pre__title">Lorem, ipsum.</p>
                    <h2 className='headtext'>Lorem, ipsum dolor.</h2>
                    <ul>
                        <li><img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/secure.png" alt='1'></img> <p>Lorem ipsum dolor <span className="span yellow__p"> Lorem ipsum, dolor</span> sit amet consectetur adipisicing elit. Sequi. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></li>
                        <li><img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/credibility.png" alt='2'></img> <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi illum eligendi recusandae veritatis.</p></li>
                        <li><img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/analysis.png" alt='3'></img> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur <span className='yellow__p'>adipisicing elit.</span> Aut ea odit officiis culpa reprehenderit quisquam!</p></li>
                        <li><img src="https://kit.baliniz.com/cryptoxo/wp-content/uploads/sites/9/2021/05/buy.png" alt='4'></img> <p>Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, animi.</p></li>
                    </ul>
                </div>
                <div className="about__image flex__center">
                    <p className=''>some image</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
