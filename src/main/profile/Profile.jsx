import React from 'react'
import Menu from '../components/Menu/Menu'
import ProfileAvatar from '../components/ProfileAvatar/ProfileAvatar';

const Profile = () => {
  const address = '0x93eAE967E66CD2786577568DD4631824CEE38661';
  return (
    <div>
        <Menu address={address} menu={'Donate'}/>
        <ProfileAvatar address={address}/>
    </div>
  )
}

export default Profile
