import React from 'react'
import './Footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <p className='t__center'>&copy; {new Date().getFullYear()} Crated by <span className='yellow__p'>Volodymyr Pindak</span> and <span className='yellow__p'>Denys Sanotskyi</span></p>
    </div>
  )
}

export default Footer
