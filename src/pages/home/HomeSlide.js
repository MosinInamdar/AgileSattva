import React from 'react'
import './Home.css'

const HomeSlide = (props) => {
    const { id, slideTitle, slideBg } = props
    return (
        <div className='slideWrap' style={{ backgroundImage: `url(${slideBg})` }}>
            <div className='textWrap'>
                <h2>{slideTitle}</h2>
            </div>
        </div>

    )
}

export default HomeSlide