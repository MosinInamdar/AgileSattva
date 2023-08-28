import React from 'react'
import './Offerings.css'

const OfferingSlide = (props) => {
    const { id, slideTitle, slideBg , slideDescription } = props
    return (
        <div className='slideWrap' style={{ backgroundImage: `url(${slideBg})` }}>
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>

    )
}

export default OfferingSlide