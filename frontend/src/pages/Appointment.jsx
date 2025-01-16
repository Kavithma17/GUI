import React, { useState } from 'react';
import './Appointment.css';
import Footer from '../components/Footer';




const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Details:', formData);
    alert('Appointment successfully booked!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      doctor: '',
      message: '',
    });
    
  };

  return (

    <>
    <div className='top'>

           <h2> Make your Appointment</h2>
       </div>

    <div className="appointment">
     
      <form className="appointment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Appointment Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="time">Preferred Time</label>
          <input
            type="time"
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
  <label htmlFor="doctor">Select Doctor</label>
  <select
    id="doctor"
    name="doctor"
    value={formData.doctor}
    onChange={handleChange}
    required
  >
    <option value="">--Select a Doctor--</option>
    <option value="1">Dr. John Doe - Cardiologist</option>
    <option value="2">Dr. Jane Smith - Neurologist</option>
    <option value="3">Dr. Emily Johnson - Pediatrician</option>
    <option value="4">Dr. Michael Lee - Orthopedist</option>
    <option value="5">Dr. Sarah Brown - Dermatologist</option>
    
  </select>
</div>


        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">
          Book Appointment
        </button>
      </form>
    </div>
  <Footer/>
   
    </>
  );
};


export default Appointment;