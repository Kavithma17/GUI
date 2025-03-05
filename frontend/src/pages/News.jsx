import React from "react";
import "./News.css";
import Footer from "../components/Footer";

const News = () => {
  const newsItems = [
    {
      title: "New Advanced MRI Scanner Installed",
      date: "January 10, 2025",
      description:
        "Our hospital is delighted to announce the installation of a state-of-the-art MRI scanner, a significant step forward in providing advanced medical imaging technology to our community. This cutting-edge equipment is designed to deliver faster, clearer, and more accurate diagnostic results, enhancing the precision of medical evaluations and ensuring timely and effective treatment plans. The new scanner incorporates the latest innovations in imaging, allowing our medical professionals to detect even the smallest anomalies with remarkable clarity, improving the accuracy of diagnoses and patient outcomes. With this upgrade, patients can experience reduced scan times and greater comfort during procedures, while our healthcare team gains access to enhanced tools for analyzing complex medical conditions. This investment reaffirms our commitment to offering the highest quality of care, leveraging advanced technology to support the health and well-being of every individual we serve. We remain dedicated to keeping pace with modern medical advancements to meet the growing healthcare needs of our community.",
      image: "src/assets/news1.jpg", 
      link: "#",
    },
    {
      title: "Free Health Camp This Weekend",
      date: "January 15, 2025",
      description:
        "Our hospital is excited to host a Free Health Camp this weekend, aimed at promoting community well-being and providing access to essential healthcare services. This initiative offers an opportunity for individuals to receive free health check-ups, consultations with top specialists, and guidance on maintaining a healthy lifestyle. The camp will cover a range of medical assessments, including blood pressure checks, diabetes screening, and general wellness evaluations, all at no cost. Our dedicated team of doctors and healthcare professionals will be on-site to address health concerns and provide expert advice. We encourage everyone to take advantage of this event and join us in prioritizing their health and well-being. Together, let’s build a healthier community.",
      image: "src/assets/news2.jpg", 
      link: "#",
    },
    {
      title: "24/7 Emergency Care Expanded",
      date: "January 20, 2025",
      description:
        "Our hospital is proud to announce the significant expansion of our emergency department to better serve the critical needs of our community. This upgrade includes the addition of advanced ICU beds equipped with cutting-edge technology to provide enhanced care for patients requiring intensive monitoring and treatment. Furthermore, we have introduced specialized trauma care facilities designed to handle complex emergencies with speed and precision. These improvements are part of our ongoing commitment to delivering prompt, high-quality medical attention in times of urgent need. With this expansion, we aim to ensure that every patient receives the best possible care in a state-of-the-art environment, reinforcing our dedication to saving lives and improving health outcomes",
      image: "src/assets/news3.jpg",
      link: "#",
    },
   
  ];

  return (
    <>
    <div className="news-container">
      <h3>Latest News</h3>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div className="news-card" key={index}>
            <img src={item.image} alt={item.title} className="news-image" />
            <h2>{item.title}</h2>
            <p className="news-date">{item.date}</p>
            <p className="news-description">{item.description}</p>
           
          </div>
        ))}
      </div>
    
    </div>
    <Footer/>
    </>
   
  );
};

export default News;