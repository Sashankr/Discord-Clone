import React from 'react'
import '../styles/Banner.css';

const Banner = ({ data }) => {
    const {foregroundImage,bannerLeftImage,bannerRightImage,isForegroundRequired,downloadIcon,bannerTitle,bannerInfo,button1Title,button2Title} = data
    return (
        <div className='banner-center'>
            {isForegroundRequired && (
                <img className='banner-foreground' src={foregroundImage} alt='foreground' />
            )}
            <img className='banner-left-image' src={bannerLeftImage} alt="banner-left" />
            <img className='banner-right-image' src={bannerRightImage} alt="banner-right" />
            <div className='banner-content-center'>
                <h2 className='banner-title'>{bannerTitle}</h2>
                <p className='banner-info'>
                    {bannerInfo}
                </p>
                <div className='banner-button-container'>
                    <button className='banner-download-button'> <img className='download-icon' src={downloadIcon} alt="download" /> {button1Title}</button>
                    <button className='banner-redirect-button'>{button2Title}</button>
                </div>
            </div>

        </div>
    )
}

export default Banner
