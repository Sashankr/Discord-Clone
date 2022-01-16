import React, { useState } from 'react'
import DiscordLogo from '../assets/images/discord-icon.svg'
import DiscordDarkLogo from '../assets/images/discord-icon-dark.svg'
import DownloadIcon from '../assets/images/download-icon-light.svg'

import { menuItems } from '../utils/mock'
import { menuItemsMobile } from '../utils/mock'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Sidebar = ({ show, toggler }) => {
    return (
        <div className={`sidebar ${show ? 'sidebar-show' : 'sidebar-hide'}`}>
            <div className="sidebar-header">
                <img src={DiscordDarkLogo} alt="discord-dark" />
                <i onClick={() => { toggler(false) }} class="fas fa-times"></i>
            </div>
            <div className='sidebar-nav-items'>
                {menuItemsMobile.map((item,index) => {
                    return <a href="">{item.title} {item.expandable && <i class="fas fa-chevron-right"></i>}</a> 
                })}
            </div>

            <button className='header-download-button'> <img className='download-icon' src={DownloadIcon} alt="download" />Download for Windows</button>

        </div>
    )
}

const Overlay = ({show}) => {
    return <div className={`overlay ${show ? 'show' : 'hide'}`}></div>
}

const Header = () => {

    const [isSidebarShown, setIsSidebarShown] = useState(false);

    if (isSidebarShown) {
        document.body.style.overflowY= 'hidden';
    }
    else {
        document.body.style.overflowY = 'scroll';
    }

    const toggleSidebar = (state) => {
        return setIsSidebarShown(state)
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className='header-logo' src={DiscordLogo} alt="discord-icon" />
            </Link>
            <nav>
                <ul className='header-menu-items'>
                    {menuItems.map((item, index) => {
                        return <li className='header-menu-item' key={index}>
                            <a className='header-menu-item-link' href={item.url}>{item.title}</a>
                        </li>
                    })}
                </ul>

            </nav>
            <div>
                <a className='header-open-discord' href="">Open Discord</a>
            </div>
            <div onClick={() => { setIsSidebarShown(state => !state) }} className='header-menu-toggler'>
                <i class="fas fa-bars"></i>
            </div>
            <Sidebar show={isSidebarShown} toggler={toggleSidebar} />
            <Overlay show={isSidebarShown}/>

        </div>
    )
}

export default Header
