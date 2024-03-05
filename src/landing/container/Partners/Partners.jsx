import React from 'react'
import './Partners.scss'
const Partners = () => {
  return (
    <div className='partners__container flex__center'>
        <div className='partners__overlay'>
            <h2 className="headtext flex__center">Lorem ipsum dolor sit.</h2>
            <div className="partners__images">
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/logo_1.png" alt="1" />
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/logo_1.png" alt="1" />
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/logo_1.png" alt="1" />
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/logo_1.png" alt="1" className='partners_hide'/>
                    <img src="https://theme.creativemox.com/digimax/wp-content/uploads/sites/7/2024/01/logo_1.png" alt="1" className='partners_hide'/>
            </div>
        </div>
    </div>
  )
}

export default Partners
