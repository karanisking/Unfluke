import React from 'react'
import './header.css'
import logo from '../Assets/logo1.png'
import notify from '../Assets/notification.png'
import coin from '../Assets/coin.jpeg'
import user_profile from '../Assets/user_profile.jpg'

const Header = () => {
  return (
    <div className='head'>
      <div className='header'>
      <img className='logo' src={logo} alt='' />
      <ul>
        <li><img className='logo-li1' src={notify} alt=''/></li>
        <li><img className='logo-li2' src={coin} alt='' ></img></li><span>0</span>
        <li><img className='logo-li3' src={user_profile} alt='' /></li>
      </ul>
      </div>
         <hr />
    </div>
  )
}

export default Header
