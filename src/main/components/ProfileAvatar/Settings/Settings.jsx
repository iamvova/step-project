import React from 'react'
import './Settings.scss'

const Settings = () => {
  return (
    <div className='set-container'>
      <div className="set-content">
        <input type="text" placeholder='Name' />
        <button className="white__btn-rev">Save</button>
      </div>
    </div>
  )
}

export default Settings
