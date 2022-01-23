import React from 'react';
import '../styles/Bubble.css'

const Bubble = ({ data }) => {

    const { img, title, notifications } = data

    return (
        <div className='bubble-container'>
            <div className='bubble'>
                <img className='bubble__icon' src={img} alt={title} />
                <p className='bubble__title'>{title}</p>
                <p className='bubble__notifications'>{notifications}</p>
            </div>
        </div>
    );
};

export default Bubble;
