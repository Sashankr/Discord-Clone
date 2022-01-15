import React from 'react'
import '../styles/Banner.css';

const Banner = ({ data }) => {
    const { foregroundImage, bannerLeftImage, buttonDecoration, bannerImage, buttonHeading, buttonTitle, bannerRightImage, isForegroundRequired, downloadIcon, bannerTitle, bannerInfo, button1Title, button2Title } = data
    return (
        <>
            {isForegroundRequired ? (
                <div className='banner-with-foreground'>
                    <img className='banner-foreground' src={foregroundImage} alt='foreground' />

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
            ) : (
                <div className='banner-footer'>
                    <div className="container">
                        <div className="banner-footer-wrapper">
                            <div className="banner-footer-title-container">
                                <h2 className='banner-footer-title'>{bannerTitle}</h2>
                                <p className='banner-footer-info'>{bannerInfo}</p>
                            </div>
                            <img className='banner-footer-image' src={bannerImage} alt="banner-image" />
                            <div className='banner-footer-decoration'>
                                <img className='banner-footer-decoration-image' src={buttonDecoration} alt="decoration" />
                                <h3 className='banner-footer-decoration-title'>{buttonHeading}</h3>
                            </div>
                            <button className='banner-footer-download-button'> <img className='download-icon' src={downloadIcon} alt="download" /> {buttonTitle}</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Banner
