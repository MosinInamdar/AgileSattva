import React from 'react'
import './About.css'

const AboutSlide = (props) => {
    const { id, slideTitle, slideBg, slideDescription } = props
    return (
        <div className='slideWrap'>
            <img src={slideBg} />
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
                <p>{slideDescription}</p>
            </div>
        </div>

    )
}

export default AboutSlide