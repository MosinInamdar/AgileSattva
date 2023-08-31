import React from 'react'
import FormComponent from '../../components/Form/FormComponent'
import './Contact_Us.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Contact_Us = () => {
  return (
    <div className='contact-container'>
      <Navbar />
      <h1 >CONTACT</h1>
      <div className='contact-body'>
        <h2>DROP US A LINE</h2>
        <div className='contact-main'>
          <FormComponent />
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact_Us