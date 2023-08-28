import React, { useState, useEffect, useCallback } from 'react'
import OfferingSlide from './OfferingSlide'
import { client } from '../../client'

import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image'



const Offerings = () => {
  const [isOfferingsloading, setIsOfferingsLoading] = useState(false)
  const [OfferingsSlides, setOfferingsSlides] = useState([])

  const cleanUpOfferingsSlides = useCallback((rawData) => {
    const cleanSlides = rawData.map((slide) => {
      const { sys, fields } = slide
      const { id } = sys
      const slideTitle = fields.title
      const slideDescription = fields.description
      const slideBg = fields.image.fields.file.url
      const updatedSlide = { id, slideTitle, slideBg , slideDescription}
      return updatedSlide
    })

    setOfferingsSlides(cleanSlides)
  }, [])

  const getOfferingsSlides = useCallback(
    async () => {
      setIsOfferingsLoading(true)
      try {
        const respone = await client.getEntries({ content_type: 'offerings' })
        const responeData = respone.items
        if (responeData) {
          cleanUpOfferingsSlides(responeData)
        } else {
          setOfferingsSlides([])
        }
        setIsOfferingsLoading(false)
      } catch (error) {
        console.log(error)
        setIsOfferingsLoading(false)
      }
    }, [cleanUpOfferingsSlides]
  )

  useEffect(() => {
    getOfferingsSlides()
  }, [getOfferingsSlides])



  return (
    <div className='Offerings'>
        {OfferingsSlides.map((item) => {
          const { id, slideTitle, slideBg } = item
          return (
            <OfferingSlide key={id} slideTitle={slideTitle} slideBg={slideBg} />
          )
        })}
    </div>

  )
}

export default Offerings