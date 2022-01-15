import React from 'react'
import '../styles/Banner.css';
import ForegroundImage from '../assets/images/landing-page-foreground.svg'
import BannerLeftImage from '../assets/images/landing-first-banner-left-image.svg'
import BannerRightImage from '../assets/images/landing-first-banner-right-image.svg'

const Banner = ({isForegroundRequired}) => {
    return (
        <div className='banner'>
            {isForegroundRequired && (
            <img className='banner-foreground' src={ForegroundImage} alt='foreground' />            
            )}
            <img className='banner-left-image' src={BannerLeftImage} alt="banner-left" />
            <img className='banner-right-image' src={BannerRightImage} alt="banner-right" />
        </div>
    )
}

export default Banner
