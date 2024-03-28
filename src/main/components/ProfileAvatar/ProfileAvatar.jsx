import React, { useState } from 'react'
import './ProfileAvatar.scss'
import Items from './Items/Items';
import Settings from './Settings/Settings';

const ProfileAvatar = ({address}) => {
    const [activeButton, setActiveButton] = useState(1);

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
                    <div><img src="https://i.pinimg.com/originals/43/67/67/4367678a18ca980118e5404b2ae880e2.jpg" alt="111" /></div>
                </div>
                <div className="avatar-btns">
                    <span>{showCharacters(address)}</span>
                    <button className={`white__btn ${activeButton === 1 ? 'white__btn-rev' : ''}`} onClick={activateButton1}>Items</button>
                    <button className={`white__btn ${activeButton === 2 ? 'white__btn-rev' : ''}`} onClick={activateButton2}>Settings</button>
                </div>
            </div>
            {activeButton === 1 
                ? <Items />
                : <Settings />
            }
        </div>
    )
}

export default ProfileAvatar
