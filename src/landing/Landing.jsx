import React from 'react'
import Menu from './container/Menu/Menu'
import AboutUs from './container/AboutUs/AboutUs'
import Welcome from './container/Welcome/Welcome'
import Partners from './container/Partners/Partners'
import AboutProjects from './container/AboutProjects/AboutProjects'
import Numbers from './container/Numbers/Numbers'
import Articles from './container/Articles/Articles'
import Footer from './container/Footer/Footer'

const Landing = () => {
  return (
    <div>
      <Menu/>
      <AboutUs />
      <Welcome />
      <AboutProjects />
      <Numbers />
      <Articles />
      <Partners />    
      <Footer />
    </div>
  )
}

export default Landing
