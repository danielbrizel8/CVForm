import React, { useEffect, useState } from "react";
import "../Styling/HomePage.css";
import recomends from "../images/recomends.jpg";
import fiveStars from "../images/fivestars.webp";
import rank6 from "../images/rank6.jpg";
import rank7 from "../images/rank7.jpg";
import rank10 from "../images/rank10.jpg";
import { useNavigate } from "react-router-dom";

function HomePage() {
    const navigate = useNavigate();
      
        function handleClick() {
            navigate("/CVForm");
        }
    
  return (
    <div className="page-container">
      <div className="top-section">
        <div className="left-part">
          <div className="contant">
            <h1>Build your professional CV in minutes</h1>
            <p>
              Start using the easiest and fastest CV builder with the advice of
              professionals
            </p>
          </div>
          <div className="women-div">
            <img
              className="women-pic"
              src="https://static.resumecoach.com/wp-content/uploads/sites/28/2023/01/09120457/jumbo_resumecoach2-1-368x441.webp"
              alt=""/>
              <div className="btn-to-cv-div">
                <button onClick={handleClick} className="btn-to-cv">Create A CV</button>
              </div>
          </div>
        </div>
        <div className="right-part">
          <img
            className="cv-pic"
            src="https://static.resumecoach.com/wp-content/uploads/sites/28/2023/02/21122626/resumecoach_templates-1-1278x1536.webp"
            alt=""
          />
        </div>
      </div>
      <div className="bottom-section">
        <div className="people-ranks">
          <div className="ranks-header">
            <p>
              Recommend Customers: Hear what others are saying about our
              platform!
            </p>
            <img className="recomend-img" src={recomends} alt="" />
          </div>
          <div className="ranks-content">
            <div className="top-ranks">
              <div className="rank1">
                <h2>Sophia</h2>
                <img className="img-rank1" src={rank6} alt="" />
                <h3>"Outstanding volunteer matching service!"</h3>
                <img className="five-stars" src={fiveStars} alt="" />
              </div>
              <div className="rank1">
                <h2>Nathan</h2>
                <h3>"Discover meaningful volunteer experiences!"</h3>
                <img className="img-rank1" src={rank10} alt="" />
                <img className="five-stars" src={fiveStars} alt="" />
              </div>
              <div className="rank1">
                <h2>James</h2>
                <img className="img-rank1" src={rank7} alt="" />
                <h3>
                  "The platform made me feel significant through volunteering"
                </h3>
                <img className="five-stars" src={fiveStars} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
