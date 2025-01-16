import React, { useState } from 'react';
import './Home.css';
import Footer from '../components/Footer';
const Home = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('Aurumcare Departments');
  const [departmentDetails, setDepartmentDetails] = useState('At Aurumcare, our departments are designed to provide world-class medical services backed by cutting-edge technology and expert professionals. Each department is equipped with state-of-the-art facilities, ensuring precision, comfort, and excellence in patient care. We are committed to offering personalized treatments, fostering a compassionate environment, and delivering healthcare solutions that meet global standards. Whether it’s preventive care, diagnostics, or complex treatments, our departments strive to set benchmarks in quality and innovation for a healthier tomorrow');


  const [backgroundImage, setBackgroundImage] = useState('src/assets/pic16.jpg'); // Default background image

  const newsItems = [
    {
      image: "src/assets/new2.jpg", // Replace with actual image URL
      date: "March 15, 2024",
      title: "Understanding the Risk Factors for Diabetes and Heart Disease",
    },
    {
      image: "src/assets/new3.jpg", // Replace with actual image URL
      date: "March 8, 2024",
      title: "7 Insights into Elephantiasis",
    },
    {
      image: "src/assets/new5.jpg", // Replace with actual image URL
      date: "March 1, 2024",
      title: "NMRA and MDEC: Safeguarding Medical Device Safety in Sri Lanka",
    },
  ];
  const departmentsInfo = {
    "Dental Sciences": {
      description: `The Dental Sciences department offers comprehensive care in oral health, including preventive and restorative treatments. Our team of experienced dental professionals ensures your oral health is in the best hands, combining modern technology with personalized care.
  
      Key sections include Preventive Dentistry for routine check-ups, cleanings, and fluoride treatments, as well as Restorative Dentistry, which includes cavity fillings, crowns, and bridges. Orthodontics focuses on braces and aligners for teeth straightening, while Cosmetic Dentistry covers teeth whitening, veneers, and smile makeovers.
  
      For more advanced needs, Oral Surgery handles wisdom tooth extractions, dental implants, and other surgical procedures to restore oral functionality and aesthetics.`,
      image: "src/assets/dep1.jpg"
    },
    "Renal Medicine": {
      description: `Our Renal Medicine department specializes in kidney care, dialysis, and transplantation services. The team provides tailored treatments supported by advanced diagnostic techniques to meet individual patient needs.
  
      The department includes Chronic Kidney Disease (CKD) Management for regular monitoring and Dialysis Services offering both hemodialysis and peritoneal dialysis. Renal Transplantation provides pre- and post-transplant care to ensure the best outcomes, supported by Hypertension Clinics that manage kidney-related high blood pressure.
  
      In addition, the Nephrology Diagnostics unit performs kidney biopsies, ultrasounds, and lab tests, providing a strong foundation for effective treatment plans.`,
      image: "src/assets/dep17.jpg"
    },
    "Orthopedics and Joint Replacement": {
      description: `The Orthopedics and Joint Replacement department provides specialized care for bone and joint disorders, including surgical interventions and comprehensive rehabilitation. Patients benefit from state-of-the-art facilities and skilled expertise for improved mobility and quality of life.
  
      Key services include Joint Replacement surgeries, such as total hip, knee, and shoulder replacements. Sports Medicine focuses on injuries like ligament tears, while Spine Care offers both surgical and non-surgical solutions for spinal disorders. Arthroscopy procedures use minimally invasive techniques for joint care.
  
      Pediatric Orthopedics addresses congenital and developmental bone conditions in children, ensuring tailored care for the youngest patients.`,
      image: "src/assets/dep4.jpg"
    },
    "Paediatrics and Neonatology": {
      description: `Our Paediatrics and Neonatology department provides specialized care for children, from birth through adolescence. With a focus on nurturing growth and development, we combine compassion with medical excellence to meet every child's needs.
  
      The department includes General Pediatrics for vaccinations, routine check-ups, and growth monitoring. The Neonatal Intensive Care Unit (NICU) provides life-saving care for premature and critically ill newborns. Pediatric Cardiology focuses on heart conditions in children, while Developmental Clinics support early diagnosis and management of developmental delays.
  
      For common and chronic childhood illnesses, expert teams provide comprehensive treatment plans to ensure overall well-being and recovery.`,
      image: "src/assets/dep7.jpg"
    },
    "Surgery": {
      description: `Our Surgery department is equipped to handle a wide range of surgical procedures, from minor surgeries to complex operations. Our experienced surgeons ensure that every procedure is carried out with precision and care, using the latest techniques.
  
      The department specializes in General Surgery, including appendectomies, hernia repairs, and gastrointestinal surgeries. Laparoscopic Surgery is offered for minimally invasive procedures, ensuring quicker recovery times. Oncologic Surgery provides expertise in managing cancer through surgical interventions.
  
      For emergencies, the Trauma Surgery unit performs life-saving procedures for accident and injury cases, while Reconstructive Surgery focuses on restoring functionality and appearance.`,
      image: "src/assets/dep8.jpg"
    },
    "Cardiology": {
      description: `The Cardiology department offers comprehensive services for heart conditions, combining advanced diagnostics, cutting-edge treatments, and expert surgical interventions. Our focus is on improving heart health and preventing complications.
  
      Non-Invasive Cardiology provides ECG, echocardiography, and stress tests for early detection of heart issues. Interventional Cardiology includes procedures like angioplasty and stent placements. Electrophysiology focuses on diagnosing and treating arrhythmias, while Cardiac Surgery covers bypass surgery, valve replacements, and congenital heart defect repairs.
  
      For chronic heart conditions, Heart Failure Clinics offer long-term management plans to enhance quality of life and prevent hospitalizations.`,
      image: "src/assets/dep10.jpg"
    },
    "Respiratory Medicine": {
      description: `We specialize in the diagnosis and treatment of respiratory diseases, offering advanced care for conditions like asthma, COPD, and sleep disorders. The Respiratory Medicine department ensures better breathing and overall lung health.
  
      Key services include Pulmonary Function Testing, such as spirometry and other diagnostics, and Asthma Clinics for personalized management plans. Sleep Medicine addresses disorders like sleep apnea, while Bronchoscopy is available for diagnostic and therapeutic procedures.
  
      For chronic conditions like COPD, comprehensive management programs ensure effective treatment and support for improved quality of life.`,
      image: "src/assets/dep11.jpg"
    },
    "Urology": {
      description: `The Urology department provides specialized care for urinary tract issues and male reproductive health. With state-of-the-art technology and skilled expertise, we ensure accurate diagnosis and effective treatment.
  
      Services include Kidney Stone Management with lithotripsy and surgical removal, as well as Prostate Care for benign and malignant conditions. Pediatric Urology focuses on congenital and acquired urinary tract issues in children, while Andrology offers solutions for male fertility and reproductive health.
  
      For cancer care, the Uro-Oncology unit provides expert management of cancers affecting the urinary tract and male reproductive organs.`,
      image: "src/assets/dep12.jpg"
    },
    "Internal Medicine": {
      description: `Our Internal Medicine department provides comprehensive care for diseases affecting internal organs. With a focus on holistic treatment, the department combines expertise with personalized attention to patient needs.
  
      Chronic Disease Management covers diabetes, hypertension, and thyroid disorders, while Infectious Diseases specialists diagnose and treat bacterial, viral, and parasitic infections. Preventive Medicine emphasizes health check-ups and vaccinations, ensuring early detection and prevention.
  
      Additional services include Geriatric Care for elderly patients and Rheumatology for autoimmune and joint disorders, offering a broad range of medical care under one roof.`,
      image: "src/assets/dep13.jpg"
    },
    "Gynecology & Obstetrics": {
      description: `The Gynecology & Obstetrics department provides a wide range of services for women's health, from prenatal care to advanced gynecological surgery. With a patient-first approach, we ensure the best outcomes at every stage of life.
  
      Prenatal Care includes routine check-ups, ultrasounds, and high-risk pregnancy management. Gynecological Surgery covers procedures like hysterectomies and laparoscopic surgeries. Fertility Clinics offer assisted reproductive technologies and counseling for families seeking conception support.
  
      Additionally, Menopause Clinics help manage symptoms and ensure long-term health, while Cancer Screening programs focus on early detection through Pap smears and mammograms.`,
      image: "src/assets/dep15.jpg"
    },
    "Wellness Center": {
      description: `Our Wellness Center promotes holistic health, offering services aimed at improving overall well-being and preventing illness. The center provides a range of programs to enhance physical and mental health.
  
      Health and Wellness Programs include yoga, meditation, and stress management techniques. Preventive Health Packages feature regular health screenings and diagnostic services, while Diet and Nutrition Counseling provides personalized plans for healthy living.
  
      Physical Therapy focuses on rehabilitation and pain management, and Lifestyle Clinics offer support for smoking cessation, weight management, and other lifestyle improvements.`,
      image: "src/assets/dep16.jpg"
    }
  };
  
  

  const showDepartmentDetails = (department) => {
    setSelectedDepartment(department);
    setDepartmentDetails(departmentsInfo[department].description);
    setBackgroundImage(departmentsInfo[department].image); // Set background image when department is selected
  };

  return (
    <>
      {/* Green bar */}
      <div className="top-bar">
        <span> Find us | 📞 Hotline : +94 11 9153492</span>
      </div>

      {/* Main section */}
      <section className="home">
        <div className="home-content">
          <h6>
            Experience the best in healthcare <br />
            at Aurumcare Hospital's new Alfred place Wing
          </h6>
          <h1>Trust in us for all your healthcare needs.</h1>
          <button className="home-button">CALL US NOW</button>
        </div>
        <div className="home-image">
          <img src="src/assets/hospital03.png" alt="Hospital illustration" />
        </div>
      </section>

      {/* Welcome section */}
      <section className="welcome">
        <div className='welcome-img1'>
          <img src='src/assets/c.png'/>
        </div>

        <div className="welcome-content">
          <h1>Welcome to Aurumcare Hospital</h1>
          <h3>Dedicated to you</h3>
          <h4>Compassion, Innovation & Excellence</h4>
          <p>
            Since our foundation in 1945, we have built a reputation for regional
            leadership in medical excellence and innovation, based on a simple philosophy:
            that improving the health of our community should be driven by passion as well
            as compassion. We offer a range of spacious modern rooms and are equipped with
            state-of-the-art critical care units. At Aurumcare, the best consultants, specialists, and employees
            are dedicated to providing exceptional clinical outcomes and the utmost customer satisfaction.
          </p>
        </div>
        
      </section>

      {/* Departments section */}
      <div className="top-bar">
        <span>
          <h2> OUR DEPARTMENTS </h2>
        </span>
      </div>

      <div className="departments-section" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="departments-list">
          <ul>
            {Object.keys(departmentsInfo).map((department) => (
              <li key={department} onClick={() => showDepartmentDetails(department)}>
                {department}
              </li>
            ))}
          </ul>
        </div>

        {/* Right side department details */}
        <div className="department-details">
          <h2>{selectedDepartment}</h2>
          <p>{departmentDetails}</p>
        </div>
      </div>

      {/* Services section */}
      <div className="top-bar">
        <span>
          <h2> OUR SERVICES</h2>
        </span>
      </div>

      <div className="services-section">
  <div className="services-intro">
   
    <p>We’re committed to providing compassionate and high-quality medical care.</p>
  </div>
  <div className="services-list">
    {[
      
      { image: "src/assets/ser1.jpg", title: "Physiotherapy and Sports Medicine" },
      { image: "src/assets/ser2.jpg", title: "Pharmacy" },
      { image: "src/assets/ser3.jpg", title: "Wound and Foot Care Unit" },
      { image: "src/assets/ser4.jpg", title: "Lab Services" },
      { image: "src/assets/ser5.jpg", title: "Ambulance Services" },
      { image: "src/assets/ser6.jpg", title: "Emergency Unit" },
      { image: "src/assets/ser7.jpg", title: "Blood Transfusion Services" },
      { image: "src/assets/ser8.jpg", title: "ICU" },
    ].map((service, index) => (
      <div key={index} className="service-card">
        <img src={service.image} alt={service.title} className="service-image" />
        <div className="service-content">
          <h3>{service.title}</h3>
          
        </div>
      </div>
    ))}
  </div>
</div>

      

      <Footer />
    </>
  );
};

export default Home;
