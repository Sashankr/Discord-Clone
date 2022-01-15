import React from 'react'
import '../styles/AlternateImageContent.css';

const AlternateImageContent = ({ data }) => {

    const { imageUrl, title, content, isImageRight, background } = data


    return (
        <div className='alternate-content' style={{ backgroundColor: background }}>
            <div className="container">
                <div className='alternate-content-wrapper' style={{ flexDirection: isImageRight && 'row-reverse' }}>
                    <img className='alternate-content-image' src={imageUrl} alt={title} />
                    <div className='alternate-content-info' >
                        <h2 className='alternate-content-title'>{title}</h2>
                        <p className='alternate-content-para'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AlternateImageContent
