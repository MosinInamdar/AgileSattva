import React from 'react'
import './About.css'

const AboutSlide = (props) => {
    const { id, slideTitle, slideBg, slideDescription } = props
    return (
        <div className='slideWrap' style={{ backgroundImage: `url(${slideBg})` }}>
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>

    )
}

export default AboutSlide