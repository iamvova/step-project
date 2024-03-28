import React from 'react'
import './DonateMainPage.scss'
import { Link } from 'react-router-dom'

const DonateMainPage = () => {
  return (
    <div className='wrapp'>
      <div className="donate-container">
        <Link to={'/foundation'}><div className="donate-page"><img src="https://i.ebayimg.com/images/g/gi4AAOSwObJkXkSa/s-l400.jpg" alt="1111" /><span>Lorem ipsum dolor sit amet.</span></div></Link>
        <Link to={'/foundation'}><div className="donate-page"><img src="https://i.ebayimg.com/images/g/gi4AAOSwObJkXkSa/s-l400.jpg" alt="1111" /><span>Lorem ipsum dolor sit amet.</span></div></Link>
        <Link to={'/foundation'}><div className="donate-page"><img src="https://i.ebayimg.com/images/g/gi4AAOSwObJkXkSa/s-l400.jpg" alt="1111" /><span>Lorem ipsum dolor sit amet.</span></div></Link>
        <Link to={'/foundation'}><div className="donate-page"><img src="https://i.ebayimg.com/images/g/gi4AAOSwObJkXkSa/s-l400.jpg" alt="1111" /><span>Lorem ipsum dolor sit amet.</span></div></Link>
      </div>
    </div>
  )
}

export default DonateMainPage
