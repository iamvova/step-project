import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProfileAvatar.scss'
import Items from './Items/Items';
import Settings from './Settings/Settings';
import AvatarIcon from '../../../constants/images/avatar.png'

const ProfileAvatar = ({address}) => {
    const [activeButton, setActiveButton] = useState(1)
    const [accessToken, setAccessToken] = useState(null)
    const [userDataSet, setUserDataSet] = useState({})
    const [error, setError] = useState(null)
    const backendUserSettingsUrl = 'http://195.189.226.95/user/data/'
    const backendRefreshUrl = 'http://195.189.226.95/user/token/refresh/'
    

    useEffect(()=>{
        const refreshAccessToken = async () => {
            try {
                const response = await axios.post(backendRefreshUrl, {refresh: localStorage.getItem('refresh')})
                const data = response.data;
                console.log(data);
                if (data) {
                    console.log(data);
                    localStorage.setItem('access', data.access);
                }
            } catch (error) {
                console.error('Помилка при оновленні access токену:', error);
            }
        };
        refreshAccessToken()
    }, [])

    

    // Функції для зміни активної кнопки
    const activateButton1 = () => {setActiveButton(1)}
    const activateButton2 = () => {setActiveButton(2)}
    
    // Редактор адресу метамаску
    const showCharacters = (address) => {
        return `${address.slice(0, 5)}...${address.slice(-4)}`;
    }
    return (
        <div className='wrapp'>
            <div className='container-avatar'>
                <div className='avatar-img'>
                    <div><img src={AvatarIcon} alt="111" /></div>
                </div>
                <div className="avatar-btns">
                    <span>{showCharacters(address)}</span>
                    <button className={`white__btn ${activeButton === 1 ? 'white__btn-rev' : ''}`} onClick={activateButton1}>NFTs</button>
                    <button className={`white__btn ${activeButton === 2 ? 'white__btn-rev' : ''}`} onClick={activateButton2}>Налаштування</button>
                </div>
            </div>
            {activeButton === 1 
                ? <Items />
                : <Settings error={error} userDataSet={userDataSet} />
            }
        </div>
    )
}

export default ProfileAvatar
