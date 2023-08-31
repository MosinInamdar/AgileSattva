import React, { useState, useEffect, useCallback } from 'react'
import { client } from '../../client'
import AboutSlide from './AboutSlide'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'


const About = () => {
  const [isAboutloading, setIsAboutLoading] = useState(false)
  const [AboutSlides, setAboutSlides] = useState([])

  const cleanUpAboutSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide
      const { id } = sys
      const slideTitle = fields.title
      const slideDescription = fields.Description
      const slideBg = fields.profilImage.fields.file.url
      const updatedSlide = { id, slideTitle, slideBg, slideDescription }
      return updatedSlide
    })

    setAboutSlides(cleanSlides)
  }, [])

  const getAboutSlides = useCallback(
    async () => {
      setIsAboutLoading(true)
      try {
        const respone = await client.getEntries({ content_type: 'about' })
        const responeData = respone.items
        if (responeData) {
          cleanUpAboutSlides(responeData)
        } else {
          setAboutSlides([])
        }
        setIsAboutLoading(false)
      } catch (error) {
        console.log(error)
        setIsAboutLoading(false)
      }
    }, [cleanUpAboutSlides]
  )

  useEffect(() => {
    getAboutSlides()
  }, [getAboutSlides])

  return (
    <div className='about-container'>
      <Navbar/>
      {AboutSlides.map((item) => {
        const { id, slideTitle, slideBg, slideDescription } = item
        return (
          <AboutSlide key={id} slideTitle={slideTitle} slideBg={slideBg} slideDescription={slideDescription}/>
        )
      })}
      <Footer/>
    </div>
  )
}

export default About