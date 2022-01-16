import React from 'react'
import USAFlag from '../assets/images/usa-flag.png'
import CaretIcon from '../assets/images/caret-icon.svg'
import DiscordIcon from '../assets/images/discord-icon.svg'

import { footerNavigations } from '../utils/mock'
import { Link } from 'react-router-dom'

import '../styles/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className='social'>
                    <div>
                        <h2 className='social-title'>IMAGINE A <br /> PLACE</h2>
                        <div className='flag-container'>
                            <img className='flag-image' src={USAFlag} alt="usa-flag" />
                            <p className='social-language'>English, USA</p>
                            <img src={CaretIcon} alt="caret" />
                        </div>
                        <div className='social-logo-container'>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>
                    <div className='footer-navigations'>
                        {footerNavigations.map((navigationData, itemIndex) => {
                            return (
                                <div key={itemIndex} className='navigation-list'>
                                    <h5 className='navigation-title'>{navigationData.title}</h5>
                                    {navigationData.listItems.map((item, index) => {
                                        return <Link className='navigation-item' key={index} to="/">{item}</Link>
                                    })}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='footer-additional'>
                    <img className='footer-discord-icon' src={DiscordIcon} alt="discord" />
                    <a className='footer-open-discord' href="/">Open Discord</a>

                </div>

            </div>
        </div>
    )
}

export default Footer
