import React, { useEffect, useState } from "react";
import "../Styling/Template.css";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate } from "react-router-dom";

function Template() {
  const [info, setInfo] = useState();
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post("http://localhost:5000/register/getdata", {
        token: localStorage.getItem("loggedUser"),
      })
      .then(({ data }) => setInfo(data.CVInfo))
      .catch((err) => console.log(err));
  }, []);

  function editCVForm() {
    navigate("/CVForm");
    axios.patch("http://localhost:5000/CV/replace",{
      info
    })
  }
 
 

  function downloadPDF() {
    const capture = document.getElementById("main-div");
    setLoader(true);
    
    html2canvas(capture, {
      allowTaint: true,
      useCORS: true,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgWidth = pdf.internal.pageSize.getWidth();
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("cv.pdf");

      setLoader(false);
    });
  }

  // function downloadPDF() {
  //   let jsPdf = new jsPDF("p", "pt", "letter");
  //   var htmlElement = document.getElementById("main-div");
  //   setLoader(true);

  //   jsPdf.html(htmlElement, {
  //     callback: function (jsPdf) {
  //       jsPdf.save("Test.pdf");
  //       setLoader(false);
  //     },
  //     x:0,
  //     y:0,
  //     autoPaging: "text",
  //     html2canvas: {
  //       allowTaint: true,
  //       useCORS: true,
  //     },
  //   });
  // }

  return (
    <div className="background">
      <div id="main-div">
        <div className="top-page">
          <div className="img">
            <img src={`${info?.image}`} alt="" />
          </div>
          <div className="introduction">
            <p>{info?.introduction}</p>
          </div>
          <div className="name">
            <h4>{info?.fullName}</h4>
          </div>
        </div>
        <div className="bottom-page">
          <div className="left-page">
            <div className="phone">
              <h5>Phone:</h5>
              <p>{info?.phoneNumber}</p>
            </div>
            <div className="e-mail">
              <h5>Email:</h5>
              <p>{info?.email}</p>
            </div>
            <div className="linkedin">
              <h5>Linkedin:</h5>
              <a href={`${info?.linkedin}`}>{`${info?.linkedin}`}</a>
            </div>
            <div className="skills">
              <h3 className="header-skills">Skill Highlights</h3>
              <ul>
                {info?.skills.map((item, index) => (
                  <li key={index}>{info?.skills[index].skill}</li>
                ))}
              </ul>
            </div>
            <div className="languages">
              <h3 className="header-languages">Languages</h3>
              <ul>
                {info?.languages.map((item, index) => (
                  <div key={index}>
                    <li>
                      {info?.languages[index].language}-{" "}
                      {info?.languages[index].level}
                    </li>
                  </div>
                ))}
              </ul>
            </div>
            <div className="PLanguages">
              <h4 className="header-PLanguages">Tech Stack</h4>
              <ul>
                {info?.TechStacks.map((item, index) => (
                  <li key={index}>{info?.TechStacks[index].TechStack}</li>
                ))}
              </ul>
            </div>
            {/* style={{display:'flex',justifyContent:'space-around',width:'100%', margin: 'auto'}} */}
          </div>
          <div className="right-page">
            <div className="experience">
              <h3 className="header-experience">Experience</h3>
              <div className="date-ex"></div>
              {/* <div className="seconed-header-ex"></div> */}
              <ul>
                {info?.experience.map((item, index) => (
                  <div key={index}>
                    <h5
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "95%",
                      }}
                    >
                      {info?.experience[index].startYear} to{" "}
                      {info?.experience[index].finishYear}
                    </h5>
                    <div className="seconed-header-ex">
                      <h4>{info?.experience[index].title}- {info?.experience[index].company}, {info?.experience[index].location}</h4>
                    </div>
                    <li className="li-all">{info?.experience[index].details}</li>
                  </div>
                ))}{" "}
              </ul>
            </div>
            <div className="education">
              <h3 className="header-education">Education</h3>
              <div className="date-ed"></div>
              <ul>
                {info?.education.map((item, index) => (
                  <div key={index}>
                    <h5
                      style={{
                        display: "flex",
                        justifyContent: "end",
                        width: "95%",
                      }}
                    >
                      {info?.education[index].startYear} to{" "}
                      {info?.education[index].finishYear}
                    </h5>
                    <div className="seconed-header-ed">
                      <h4>{info?.education[index].title}- {info?.education[index].location}</h4>
                  </div>
                    <li>{info?.education[index].studies}</li>
                  </div>
                ))}{" "}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => downloadPDF()}
        disabled={loader}
        id="to-pdf"
      >
        convert To PDF
      </button>
      {/* <button id="edit-btn" onClick={()=>editCVForm()}>Edit</button> */}
    </div>
  );
}

export default Template;
