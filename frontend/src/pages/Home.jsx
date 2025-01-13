import React from 'react';
import './Home.css';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            {/* Green bar */}
            <div className="top-bar">
                
                    <span> Find us | 📞 Hotline : +94 11 9153492</span>
                
            </div>

            {/* Main section */}
            <section className="home">
                <div className="home-content">
                    
                    <h6>Experinece the best in healthcare <br></br>
                    at Aurumcare Hospital's new Alfred 
                    place Wing</h6>
                    <h1>Trust in us for all your healthcare needs.</h1>
                      <button className="home-button">CALL US NOW</button>

                </div>
                        <div className="home-image">
                                 <img src="src/assets/hospital03.png" alt="Hospital illustration" />
                          </div>
               

                
                

            </section>

            
            
            <section className="welcome">
                <div className="welcome-content">
                            <h1> Welcome to Aurumcare Hospital</h1>
                            <h3>Dedicated to you</h3>
                            <h4>Compassion, Innovation & Excellence</h4>

                            <p>Since our foundation in 1945, we have built a reputation for regional 
                                leadership in medical excellence and innovation, based on a simple philosophy:
                                 that improving the health of our community should be driven by passion as well
                                  as compassion.<br></br> We offer a range of spacious modern rooms and are equipped with
                                   state of critical care units. At Aurumcare the best consultants, specialists and employees 
                                   are dedicated to providing exceptional clinical outcomes and the utmost customer satisfaction. </p>
              </div>
            
                <div className="welcome-video">
                    <video src='src/assets/inteonew.mp4' autoplay muted loop> </video>
                </div> 

            </section>


            <div className="top-bar">
                
                <span><h2>  OUR DEPARTMENTS   </h2> </span>
            
        </div>  
     
      <div className="departments-section">
             
      
        <div className="departments-list">
          <ul>
            <li>Dental Sciences</li>
            <li>Renal Medicine</li>
            <li>Orthopedics and Joint Replacement</li>
            <li>Paediatrics and Neonatology</li>
            <li>Surgery</li>
            <li>Cardiology</li>
            <li>Respiratory Medicine</li>
            <li>Urology</li>
            <li>Internal Medicine</li>
            <li>Gynecology & Obstetrics</li>
            <li>Wellness Center</li>
          </ul>
        </div>
        <div className="department-details">
          <h3>Department of Gynecology and Obstetrics</h3>
          <p>
            The Department of Obstetrics and Gynecology at Aurumcare Hospital will guide and stand by
            you on your lifelong journey from childbearing age to menopause and beyond. Team
            approach at Kings Hospital will include you as a partner in care and healing.
          </p>
          <ul>
            <li>Exclusive Day Care centre for mother and baby</li>
            <li>Specialized Mother-Focused Services</li>
          </ul>
        </div>
      </div>


      <div className="top-bar">
                
                <span> <h2> OUR SERVICES</h2></span>
            
        </div>
     
<div className="services-section">
 
  <div className="services-intro">
    <p>We’re committed to providing compassionate and high-quality medical care</p>
  </div>
  <div className="services-list">
    
    <div className="service-card">
      <div className="service-icon">🩺</div>
      <h3>Kidney Transplantation</h3>
    </div>
    <div className="service-card">
      <div className="service-icon">🏋️‍♀️</div>
      <h3>Physiotherapy and Sports Medicine</h3>
    </div>
    {/* New Service: Pharmacy */}
    <div className="service-card">
      <div className="service-icon">💊</div>
      <h3>Pharmacy</h3>
    </div>
    {/* New Service: Wound and Foot Care Unit */}
    <div className="service-card">
      <div className="service-icon">🦶</div>
      <h3>Wound and Foot Care Unit</h3>
    </div>
    {/* New Service: Lab Services */}
    <div className="service-card">
      <div className="service-icon">🔬</div>
      <h3>Lab Services</h3>
    </div>
    {/* New Service: Ambulance Services */}
    <div className="service-card">
      <div className="service-icon">🚑</div>
      <h3>Ambulance Services</h3>
    </div>
    {/* New Service: Emergency Unit */}
    <div className="service-card">
      <div className="service-icon">🚨</div>
      <h3>Emergency Unit</h3>
    </div>
    {/* New Service: Blood Transfusion Services */}
    <div className="service-card">
      <div className="service-icon">🩸</div>
      <h3>Blood Transfusion Services</h3>
    </div>
    {/* New Service: ICU */}
    <div className="service-card">
      <div className="service-icon">🏥</div>
      <h3>ICU</h3>
    </div>
  </div>
</div>

            <Footer />    
               
            
        </>
    );
};
export default Home;

