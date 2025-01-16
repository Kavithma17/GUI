import React from 'react';
import './AboutUs.css';
import Footer from '../components/Footer';





const AboutUs = () => {
  return (
    <>
    <div className='top'>

       <h2> The Aurumcare Story</h2>
       

    </div>

    <div className="container">
      <div className="workout-section">
        <div className="text-content">
          <h2>OUR STORY</h2>
          <p>
          Aurumcare Hospital has been a trusted name in Sri Lankan healthcare for more than seven decades. Since our foundation in 1945, we have built a reputation for regional leadership in medical excellence and innovation, based on a simple philosophy: improving the health of our community should be driven by passion as well as compassion.
     Aurumcare Hospital offers 260 beds, including 60 in our critical care department, across a range of spacious, modern rooms. We provide access to the best consultants, specialists, and employees, all of whom are dedicated to delivering exceptional clinical outcomes and ensuring utmost customer satisfaction. With cutting-edge technology, Aurumcare Hospital has evolved into a world-class tertiary care institute.
         Our facilities include an ultramodern theatre complex with eight state-of-the-art theatres and advanced intensive care units (ICUs). We also boast a modern radiology unit, a fully equipped physiotherapy unit, and two catheterisation laboratories to meet the diverse medical needs of our patients.
         
          </p>
          
        </div>
        <img src="src/assets/d.jpg" alt="Workout Plan" />
      </div>

      <div className="workout-section reverse-layout">
      <div className="text-content">
        <h2>....</h2>
        <p>
        Aurumcare Hospital is proud to offer an industry-leading Heart Command Centre and Heart Station, supported by the country’s finest cardiologists and cardiac surgeons. With 15 beds and world-class facilities, the centre offers a comprehensive range of diagnostic tests, advanced surgical treatments, cardiac rehabilitation, and post-operative counselling.
         At Aurumcare Hospital, we employ more than 2,000 dedicated and talented professionals across our departments, all of whom serve patients and their families with empathy and compassion. Our team includes 350 specialist consultants, 15 resident consultants, and approximately 50 senior medical officers, supported by highly trained nurses, paramedics, and non-medical staff.
          Aurumcare Hospital is proud to be the first healthcare institution in Sri Lanka endorsed by Joint Commission International (JCI) for meeting the Gold Standard in Global Healthcare. In 2017, we were re-accredited with the Gold Seal of Approval by JCI, the world’s leading accreditation organisation based in the United States of America.
      
         
        </p>
      </div>
       <img src="src/assets/d.jpg" alt="Exercise Library" />
     </div>

     <div className="workout-section">
        <div className="text-content">

          <h2>OUR VISION</h2>
          <p>
          "To be the leading healthcare provider in the region, recognized for our exceptional care, medical excellence, 
          and unwavering commitment to our patients"
          </p>
          
        </div>
        <img src="src/assets/d.jpg" alt="Workout Plan" />
      </div>

      <div className="workout-section reverse-layout">
      <div className="text-content">
        <h2>OUR MISSION</h2>
        <p>
        "To provide compassionate, high-quality healthcare services that meet the needs of our patients, their families, and the community"
        </p>
      </div>
       <img src="src/assets/d.jpg" alt="Exercise Library" />
     </div>

    </div>
     
    

    <div className="workout-section">
        <div className="text-content">

          <h2> WHY CHOOSE US?</h2>
         
          <ul>
            <li>Highly qualified and experienced medical professionals</li>
            <li>State-of-the-art medical equipment and facilities</li>
            <li>24/7 emergency and critical care services</li>
            <li>Comprehensive range of healthcare specialties</li>
            <li>Patient-centered approach and compassionate care</li>
          </ul>
        
          
        </div>
        
      </div>


       

      
       
      
  
    <Footer />

    </>
  
  );
};

export default AboutUs;





   


