import React from 'react'
import DiscordLogo from '../assets/images/discord-icon.svg'
import { menuItems } from '../utils/mock'
import { Link } from 'react-router-dom'

import '../styles/Header.css'

const Header = () => {
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
        </div>
    )
}

export default Header
