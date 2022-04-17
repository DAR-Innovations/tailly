import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HomeImage from "../../assets/aboutHomeImage.png";
import FindImage from "../../assets/aboutFindImage.png";
import ServiceImage from "../../assets/aboutServiceImage.png";
import AdviceImage from "../../assets/aboutAdvice.png";
import "./aboutStyle.css";

const AboutPage = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-home">
        <img src={HomeImage} alt="dog" />
        <div className="home-text">
          <div className="home-title">Little pets for big heart</div>
          <div className="home-body body">
            If you have lost your beloved pet, you have come to the right place.
            Here you can find all the best services for your pets
          </div>
        </div>
      </div>

      <div className="about-content">
        <div className="about-description">
          <div className="about-facilities">
            <img src={ServiceImage} alt="dog" className="descrip-image" />
            <div className="facilities-text">
              <div className="facilities-title titleMini">
                The best facilities one the map
              </div>
              <div className="facilities-body bodyMini">
                Our map marks the nearest services for your pet: grooming,
                stores, veterinary clinics and more
              </div>
            </div>
          </div>
          <div className="about-findPet">
            <img src={FindImage} alt="dog" className="descrip-image" />
            <div className="findPet-text">
              <div className="findPet-title titleMini">
                Find your pet with our interactive map
              </div>
              <div className="findPet-body bodyMini">
                On our site you will be able to leave data about your pet on our
                map and find it with the help of “Find a Pet”
              </div>
            </div>
          </div>
        </div>
        <div className="about-advice">
          <img src={AdviceImage} alt="dog" />
          <div className="advice-text">
            <div className="advice-title">
              The best care advice for your pet
            </div>
            <div className="advice-body body">
              If you are a new pet owner and you have never had any experience,
              our tips will help you with what to feed, how to care for and what
              nuances to know about your pet
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
