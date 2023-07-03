// import React, { useState } from "react";
// import "../Styling/CVForm.css";

// const CVForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     education: "",
//     workExperience: "",
//     skills: "",
//   });
//   const [show, setshow] = useState(false);
//   const [show1, setshow1] = useState(false);
//   const [show2, setshow2] = useState(false);
//   const [show3, setshow3] = useState(false);
//   const handleChange = (e) => {
//     const { name, defaultValue } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="cv-container">
//       <h2>CV Form</h2>
//       <form className="cv-form" onSubmit={handleSubmit}>
//         <div className="left-part">
//           <div className="personal-info">
//             <h3>Personal Information:</h3>
//             <div>
//               <input
//                 className="all-input"
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 placeholder="Full Name:"
//                 value={formData.fullName}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 className="all-input"
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 placeholder="Phone:"
//                 value={formData.phone}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 className="all-input"
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Email:"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//             <div>
//               <input
//                 className="all-input"
//                 type="text"
//                 id="linkedin"
//                 name="linkedin"
//                 placeholder="Linkedin:"
//                 value={formData.linkedin}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div>
//             <div className="introduction">
//               <h3>Introduction:</h3>
//               <textarea
//                 type="text"
//                 id="introduction"
//                 name="introduction"
//                 value={formData.introduction}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>
//           <div className="work-Experience">
//             <h3>work Experience:</h3>
//             <input
//               className="all-input"
//               type="text"
//               id="workExperience"
//               name="workExperience"
//               value={formData.workExperience}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="for-more" onClick={() => setshow(!show)}>
//             {!show ? "+" : "-"}
//           </div>
//           {show && (
//             <div className="options">
//               <div className="pair">
//                 <input placeholder="option1" id="option" type="text" />
//                 <input placeholder="option2" id="option" type="text" />
//               </div>
//               <div className="pair">
//                 <input placeholder="option3" id="option" type="text" />
//                 <input placeholder="option4" id="option" type="text" />
//               </div>
//             </div>
//           )}
//         </div>
//         <div className="right-part">
//           <div className="work-Experience">
//             <h3>Skills Highlights:</h3>
//             <textarea
//               type="text"
//               id="skills"
//               name="skills"
//               placeholder="Skills Highlights:"
//               value={formData.skills}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="for-more" onClick={() => setshow1(!show1)}>
//             {!show1 ? "+" : "-"}
//           </div>
//           {show1 && (
//             <div className="options">
//               <div className="pair">
//                 <input placeholder="option1" id="option" type="text" />
//                 <input placeholder="option2" id="option" type="text" />
//               </div>
//               <div className="pair">
//                 <input placeholder="option3" id="option" type="text" />
//                 <input placeholder="option4" id="option" type="text" />
//               </div>
//             </div>
//           )}
//           <div>
//             <textarea
//               type="text"
//               id="education"
//               name="education"
//               placeholder="Education:"
//               value={formData.education}
//               onChange={handleChange}
//             />
//           </div>
//           <div className="for-more" onClick={() => setshow2(!show2)}>
//             {!show2 ? "+" : "-"}
//           </div>
//           {show2 && (
//             <div className="options">
//               <div className="pair">
//                 <input placeholder="option1" id="option" type="text" />
//                 <input placeholder="option2" id="option" type="text" />
//               </div>
//               <div className="pair">
//                 <input placeholder="option3" id="option" type="text" />
//                 <input placeholder="option4" id="option" type="text" />
//               </div>
//             </div>
//           )}
//           <div>
//             <textarea
//               type="text"
//               id="PrLanguages"
//               name="PrLanguages"
//               placeholder="Programming Languages:"
//               value={formData.PrLanguages}
//               onChange={handleChange}
//             />
//           </div>
//           <div>
//             <input
//               type="text"
//               id="languages"
//               name="languages"
//               placeholder="Languages:"
//               value={formData.languages}
//               onChange={handleChange}
//             />
//             <div>
//               <button type="submit">Submit</button>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CVForm;

import React, { useState, useEffect } from "react";
import "../Styling/CVForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CVForm = () => {
  
  useEffect(() => {
    axios
      .post("http://localhost:5000/register/getdata", {
        token: localStorage.getItem("loggedUser"),
      })
      .then(({ data }) => setInfo(data.CVInfo))
      .catch((err) => console.log(err));
  }, []);

  const [userData, setUserData] = useState();
  useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      const loggedToken = localStorage.getItem("loggedUser");
      axios
        .post("http://localhost:5000/register/getdata", { token: loggedToken })
        .then((data) => {
          setUserData(data.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    job: "",
    image: "",
    linkedin: "",
    phoneNumber: "",
    email: "",
    introduction: "",
    experience: [
      {
        title: "",
        company: "",
        location: "",
        startYear: "",
        finishYear: "",
        details: "",
      },
    ],
    education: [
      {
        title: "",
        studies: "",
        location: "",
        startYear: "",
        finishYear: "",
        details: "",
      },
    ],
    languages: [
      {
        language: "",
        level: "",
      },
    ],
    skills: [
      {
        skill: "",
      },
    ],
    TechStacks: [
      {
        TechStack: "",
      },
    ],
  });

  const handleInputChange = (e, field, index) => {
    console.log(formData);
    const { name, value } = e.target;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    setFormData(updatedFormData);
    // console.log(name, value);
    if (field) {
      if(index) {
        updatedFormData[field][index][name] = value;
      }else updatedFormData[field][0][name] = value;
    }

  };

  const handleAddField = (field) => {
    const updatedFormData = { ...formData };
    updatedFormData[field].push({});

    setFormData(updatedFormData);
  };

  const handleRemoveField = (field, index) => {
    const updatedFormData = { ...formData };
    updatedFormData[field].splice(index, 1);

    setFormData(updatedFormData);
  };
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData, "This is the userData");
    console.log(formData, "This is the form data");
    axios
      .post("http://localhost:5000/cv/create", {
        userId: userData._id,
        formData,
      })
      .then(({ data }) => {
        console.log(data);
        navigate("/Template");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form className="cv-form" onSubmit={handleSubmit}>
      {/* <div>{userData?.email}</div> */}
      <div className="section">
        <h2>Personal Information</h2>
        <div className="input-group">
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              defaultValue={formData?.fullName}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Job Title:
            <input
              type="text"
              name="job"
              defaultValue={formData?.job}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Image URL:
            <input
              type="text"
              name="image"
              defaultValue={formData?.image}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Linkedin:
            <input
              type="text"
              name="linkedin"
              defaultValue={formData?.linkedin}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              defaultValue={formData?.phoneNumber}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              defaultValue={formData?.email}
              onChange={(e) => handleInputChange(e)}
              required
            />
          </label>

          <label>
            Introduction:
            <textarea
              name="introduction"
              defaultValue={formData?.introduction}
              onChange={(e) => handleInputChange(e)}
              required
            ></textarea>
          </label>
        </div>
      </div>

      <div className="section">
        <h2>Experience</h2>
        {formData?.experience?.map((exp, index) => (
          <div className="input-group" key={index}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                defaultValue={exp?.title}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              />
            </label>

            <label>
              Company:
              <input
                type="text"
                name="company"
                defaultValue={exp?.company}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                name="location"
                defaultValue={exp?.location}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              />
            </label>

            <label>
              Start Year:
              <input
                type="text"
                name="startYear"
                defaultValue={exp?.startYear}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              />
            </label>

            <label>
              Finish Year:
              <input
                type="text"
                name="finishYear"
                defaultValue={exp?.finishYear}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              />
            </label>

            <label>
              Details:
              <textarea
                name="details"
                defaultValue={exp?.details}
                onChange={(e) => handleInputChange(e, "experience", index)}
                required
              ></textarea>
            </label>

            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveField("experience", index)}
              >
                Remove Experience
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddField("experience")}>
          Add Experience
        </button>
      </div>

      <div className="section">
        <h2>Education</h2>
        {formData?.education.map((edu, index) => (
          <div className="input-group" key={index}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                defaultValue={edu?.title}
                onChange={(e) => handleInputChange(e, "education", index)}
                required
              />
            </label>

            <label>
              Studies:
              <input
                type="text"
                name="studies"
                defaultValue={edu?.studies}
                onChange={(e) => handleInputChange(e, "education", index)}
                required
              />
            </label>

            <label>
              Location:
              <input
                type="text"
                name="location"
                defaultValue={edu?.location}
                onChange={(e) => handleInputChange(e, "education", index)}
                required
              />
            </label>

            <label>
              Start Year:
              <input
                type="text"
                name="startYear"
                defaultValue={edu?.startYear}
                onChange={(e) => handleInputChange(e, "education", index)}
                required
              />
            </label>

            <label>
              Finish Year:
              <input
                type="text"
                name="finishYear"
                defaultValue={edu?.finishYear}
                onChange={(e) => handleInputChange(e, "education", index)}
                required
              />
            </label>

            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveField("education", index)}
              >
                Remove Education
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddField("education")}>
          Add Education
        </button>
      </div>

      <div className="section">
        <h2>Languages</h2>
        {formData?.languages.map((lang, index) => (
          <div className="input-group" key={index}>
            <label>
              Language:
              <input
                type="text"
                name="language"
                defaultValue={lang?.language}
                onChange={(e) => handleInputChange(e, "languages", index)}
                required
              />
            </label>

            <label>
              Level:
              <input
                type="text"
                name="level"
                defaultValue={lang?.level}
                onChange={(e) => handleInputChange(e, "languages", index)}
                required
              />
            </label>

            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveField("languages", index)}
              >
                Remove Language
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddField("languages")}>
          Add Language
        </button>
      </div>

      <div className="section">
        <h2>Skills</h2>
        {formData?.skills.map((skill, index) => (
          <div className="input-group" key={index}>
            <label>
              Skill:
              <input
                type="text"
                name="skill"
                defaultValue={skill?.skill}
                onChange={(e) => handleInputChange(e, "skills", index)}
                required
              />
            </label>

            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveField("skills", index)}
              >
                Remove Skill
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddField("skills")}>
          Add Skill
        </button>
      </div>

      <div className="section">
        <h2>Tech Stack</h2>
        {formData?.TechStacks?.map((TechStack, index) => (
          <div className="input-group" key={index}>
            <label>
              Tech Stack:
              <input
                type="text"
                name="TechStack"
                defaultValue={TechStack?.TechStack}
                onChange={(e) => handleInputChange(e, "TechStacks", index)}
                required
              />
            </label>

            {index > 0 && (
              <button
                type="button"
                onClick={() => handleRemoveField("TechStacks", index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}

        <button type="button" onClick={() => handleAddField("TechStacks")}>
          Add
        </button>
      </div>

      <button type="submit">Generate CV</button>
    </form>
  );
};

export default CVForm;
