import React from 'react'
import Menu from './landing/container/Menu/Menu'
import AboutUs from './landing/container/AboutUs/AboutUs'
import Welcome from './landing/container/Welcome/Welcome'
import Partners from './landing/container/Partners/Partners'
import AboutProjects from './landing/container/AboutProjects/AboutProjects'
import Numbers from './landing/container/Numbers/Numbers'
import Articles from './landing/container/Articles/Articles'
import Footer from './landing/container/Footer/Footer'

const App = () => {
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

export default App
