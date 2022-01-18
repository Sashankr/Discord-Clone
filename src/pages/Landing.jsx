import React from 'react'

import Header from '../components/Header';
import Banner from '../components/Banner';
import AlternateImageContent from '../components/AlternateImageContent';
import Footer from '../components/Footer';

import { landingPageAlternateImageContent } from '../utils/mock'
import { landingPageHeaderBanner } from '../utils/mock';
import { landingPageFooterBanner } from '../utils/mock';



const Landing = () => {
    return (
        <div className='banner-wrapper'>
            <div>
                <div className="container">
                    <Header />
                    <Banner data={landingPageHeaderBanner} />
                </div>
            </div>
            <div>
                {landingPageAlternateImageContent.map((alterateImageContent, index) => {
                    return <AlternateImageContent key={index} data={alterateImageContent} />
                })}
            </div>
            <Banner data={landingPageFooterBanner} />
            <Footer />
        </div>
    )
}

export default Landing
