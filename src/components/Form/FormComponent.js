import React, { useState } from 'react';
import './From.css';

function FormComponent() {
  // State to manage form data
  const [formData, setFormData] = useState({
    Name: '',
    email: '',
    Service:'',
    Message:'',
  });

  

  // Handle form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform actions with form data, like sending it to a server
    console.log(formData);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <label id='Name'>
          Your Name*:
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label id='Email'>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label id='Service'>
          Select Service:
          <select
          name="Service"
          value={formData.Service}
          onChange={handleInputChange}
          >
            <option value="Agile coaching">Agile coaching</option>
            <option value="Agile transformation">Agile transformation</option>
            <option value="Agile training">Agile training</option>
            <option value="Change management leadership coaching">Change management leadership coaching</option>
            <option value="Team coaching">Team coaching</option>
            <option value="Leadership development">Leadership development</option>
          </select>
        </label>
        <br />
        <label id='Message'>
          Your Message:
          <input
            type="Message"
            name="Message"
            value={formData.Message}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="Send" id='Send' >Send</button>
      </form>
    </div>
  );
}

export default FormComponent;
