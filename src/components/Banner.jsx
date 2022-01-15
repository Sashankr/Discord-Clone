import React from 'react'
import '../styles/Banner.css';
import ForegroundImage from '../assets/images/landing-page-foreground.svg'
import BannerLeftImage from '../assets/images/landing-first-banner-left-image.svg'
import BannerRightImage from '../assets/images/landing-first-banner-right-image.svg'
import DownloadIcon from '../assets/images/download-icon.svg'

const Banner = ({ isForegroundRequired }) => {
    return (
        <div className='banner-center'>
            {isForegroundRequired && (
                <img className='banner-foreground' src={ForegroundImage} alt='foreground' />
            )}
            <img className='banner-left-image' src={BannerLeftImage} alt="banner-left" />
            <img className='banner-right-image' src={BannerRightImage} alt="banner-right" />
            <div className='banner-content-center'>
                <h2 className='banner-title'>Imagine a place...</h2>
                <p className='banner-info'>
                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                </p>
                <div className='banner-button-container'>
                    <button className='banner-download-button'> <img className='download-icon' src={DownloadIcon} alt="download" /> Download for Windows</button>
                    <button className='banner-redirect-button'>Open Discord in your browser</button>
                </div>
            </div>

        </div>
    )
}

export default Banner
