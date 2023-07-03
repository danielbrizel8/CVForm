// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../Styling/Register.css'

// const Register = () => {
//   const [registers, setRegisters] = useState([]);
//   const [refresh, setRefresh] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/register/fetch")
//       .then(({ data }) => setRegisters(data))
//       .catch((err) => console.log(err.message));
//   }, [refresh]);

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     const { target } = e;
//     const username = target[0].value;
//     const password = target[1].value;
//     console.log(username, password);

//     try {
//       const { data: newRegister } = await axios.post(
//         "http://localhost:5000/register",
//         { username, password }
//       );
//       setRefresh((obj) => obj + 1);
//       navigate("/login");
//     } catch (err) {
//       console.log(err.response.data);
//     }
//   };
//   return (
//     <div className="main-page">
//       <div className="register-container">
//         <form className="form" onSubmit={(e) => handleSubmitForm(e)}>
//           <h1>Register</h1>
//           <input type="text" placeholder="Username" />
//           <input type="text" placeholder="Password" />
//           <button id="reg-btn" type="submit">Register</button>
//         </form>
//         {/* {registers.map((obj, index) => {
//           return (
//             <p
//               key={index}
//             >{`Username: ${obj.username} Password: ${obj.password}`}</p>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default Register;


// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import '../Styling/Register.css';

// const Register = () => {
//   const [registers, setRegisters] = useState([]);
//   const [refresh, setRefresh] = useState(0);
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/register/fetch")
//       .then(({ data }) => setRegisters(data))
//       .catch((err) => console.log(err.message));
//   }, [refresh]);

//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     const { target } = e;
//     const username = target[0].value;
//     const password = target[1].value;
//     console.log(username, password);

//     try {
//       const { data: newRegister } = await axios.post(
//         "http://localhost:5000/register",
//         { username, password }
//       );
//       setRefresh((obj) => obj + 1);
//       navigate("/login");
//     } catch (err) {
//       setErrorMessage(err.response.data); // Set the error message
//     }
//   };

//   return (
//     <div className="main-page">
//       <div className="register-container">
//         <form className="form" onSubmit={(e) => handleSubmitForm(e)}>
//           <h1>Register</h1>
//           <input type="text" placeholder="Username" />
//           <input type="text" placeholder="Password" />
//           {errorMessage && <p className="error-message">{errorMessage}</p>} {"change your username or your password"}
//           <button id="reg-btn" type="submit">Register</button>
//         </form>
//         {/* {registers.map((obj, index) => {
//           return (
//             <p
//               key={index}
//             >{`Username: ${obj.username} Password: ${obj.password}`}</p>
//           );
//         })} */}
//       </div>
//     </div>
//   );
// };

// export default Register;





import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Styling/Register.css';

const Register = () => {
  const [registers, setRegisters] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/register/fetch")
      .then(({ data }) => setRegisters(data))
      .catch((err) => console.log(err.message));
  }, [refresh]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { target } = e;
    const username = target[0].value;
    const password = target[1].value;
    console.log(username, password);

    try {
      const { data: newRegister } = await axios.post(
        "http://localhost:5000/register",
        { username, password }
      );
      setRefresh((obj) => obj + 1);
      navigate("/login");
    } catch (err) {
      setErrorMessage(err.response.data); // Set the error message
    }
  };

  return (
    <div className="main-page">
      <div className="register-container">
        <form className="form" onSubmit={(e) => handleSubmitForm(e)}>
          <h1>Register</h1>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button id="reg-btn" type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
