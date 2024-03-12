import React from 'react'
import { Routes, Route, BrowserRouter} from "react-router-dom";
import Landing from './landing/Landing';
import SignUp from './landing/SignUp/SignUp';
import Profile from './main/profile/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Landing}/>
        <Route path='/signup' Component={SignUp}/>
        <Route path='/profile' Component={Profile}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
