
import React from "react";
import "./Doctors.css"; 
import Footer from "../components/Footer";

const doctorsData = [
    {
        name: "Dr. Krishan Dissanayaka",
        specialization: "Cardiology",
        department: "Cardiology",
        image: "https://i.pinimg.com/736x/d2/7b/28/d27b284d45147b17d8fedd8fd3999a05.jpg",
    },
    {
        name: "Dr. Nishan Abeykon",
        specialization: "Pediatrics",
        department: "Pediatrics and Neonatology",
        image: "https://i.pinimg.com/736x/4a/b0/ce/4ab0ceaad47b4219304029437f4424f2.jpg",
    },
    {
        name: "Dr. Nisha Rajapaksha",
        specialization: "Dentistry",
        department: "Dental Sciences",
        image: "https://i.pinimg.com/736x/db/e8/c1/dbe8c143da13a01fa3517a6ee0e4723f.jpg",
    },
    {
        name: "Dr. Kapila Fernando",
        specialization: "Transplant Nephrology ",
        department: "Renal Medicine",
        image: "https://i.pinimg.com/736x/79/aa/6f/79aa6f9ace147ce8ccc9eb6fc8c559f6.jpg",
    },
    {
        name: "Dr. Amila Jagath",
        specialization: "Neurology",
        department: "Paediatrics and Neonatology",
        image: "https://i.pinimg.com/736x/51/fe/e2/51fee2a4c33c469bc0522852c1c993df.jpg",
    },
    {
        name: "Dr. Sameera Thennakon",
        specialization: "Orthopedics",
        department: "Orthopedics and Joint Replacement",
        image: "https://i.pinimg.com/736x/19/3c/af/193caf736331b05dc332983628766d63.jpg",
    },
    {
        name: "Dr.Dhammika Wijekoon",
        specialization: "Rheumatology ",
        department: "Internal Medicine",
        image: "https://i.pinimg.com/736x/61/13/d4/6113d40d3471fbf54d55a0af43aa3008.jpg",
    },
    {
        name: "Dr. Ahmed Raza",
        specialization: "General Surgery",
        department: "Gynecology & Obstetrics",
        image: "https://i.pinimg.com/736x/4a/b9/3e/4ab93ecfc2c66ed78eda01b78aa17ded.jpg",
    },
    {
        name: "Dr. Tiya Fernando",
        specialization: "Preventive Medicine",
        department: "Wellness Center",
        image: "https://i.pinimg.com/736x/24/15/f4/2415f42f124a2770bc9bc00288369d0b.jpg",
    },
    {
        name: "Dr. Ravi Kumar",
        specialization: "Urology",
        department: "Urology",
        image: "https://i.pinimg.com/736x/c1/86/21/c18621025afa13a51fb9d82cf186b471.jpg",
    },
    {
        name: "Dr. Gagana Sampath",
        specialization: "Pulmonology",
        department: "Respiratory Medicine",
        image: "https://i.pinimg.com/736x/6e/0f/90/6e0f904b8c96483f028e0372c2f9f3be.jpg",
    },
    {
        name: "Dr. Upul Rajapaksha",
        specialization: "General Surgery",
        department: "Surgery",
        image: "https://i.pinimg.com/736x/4c/ff/d5/4cffd55a50b58d6fd72a1cac0d29f8dc.jpg",
    },
];


const Doctors = () => {
    
  return (
    <>
    <div className="doctors-page">
      <div className='top'>

       <h2> Our Doctors</h2>


       </div>

      <div className="doctors-grid">
        {doctorsData.map((doctor, index) => (
          <div className="doctor-card" key={index}>
            <img
              src={doctor.image}
              alt={doctor.name}
              className="doctor-image"
            />
            <div className="doctor-details">
              <h3>{doctor.name}</h3>
              <p>{doctor.specialization}</p>
              <p><strong>Department:</strong> {doctor.department}</p>
              <button className="appointment-button"> <a href="/appointment">Make Appointment</a>
          </button>
              
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
    
   
    </>
  );
};

export default Doctors;