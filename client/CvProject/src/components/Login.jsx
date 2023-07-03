// import "../App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../Styling/Login.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [errorMessage, setErrorMessage] = useState("");
//   const handleSubmitForm = async (e) => {
//     e.preventDefault();
//     const { target } = e;
//     const username = target[0].value;
//     const password = target[1].value;

//     try {
//       const newuser = await axios.post(
//         "http://localhost:5000/register/login",
//         { username, password }
//       );
//       console.log(newuser);
//       localStorage.setItem("loggedUser", newuser.data);
//       localStorage.setItem("Username", newuser)
//       navigate("/HomePage");
//     } catch (err) {
//       setErrorMessage(err.response.data);
//     }
//   };
//   return (
//     <div className="main-page-login">
//       <div className="login-container">
//         <form className="login-form" onSubmit={(e) => handleSubmitForm(e)}>
//           <h1>Login</h1>
//           <input type="text" placeholder="Username" />
//           <input type="text" placeholder="Password" />
//           {errorMessage && <p className="error-message">{errorMessage}</p>} {"username or your password is uncorrect"}
//           <button id="log-btn" type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import "../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styling/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [errorMessage1, setErrorMessage1] = useState("");
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { target } = e;
    const username = target[0].value;
    const password = target[1].value;

    try {
      const newuser = await axios.post(
        "http://localhost:5000/register/login",
        { username, password }
      );
      console.log(newuser);
      localStorage.setItem("loggedUser", newuser.data);
      localStorage.setItem("Username", newuser)
      navigate("/HomePage");
    } catch (err) {
      setErrorMessage1("Incorrect username or password");
    }
  };

  return (
    <div className="main-page-login">
      <div className="login-container">
        <form className="login-form" onSubmit={(e) => handleSubmitForm(e)}>
          <h1>Login</h1>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          {errorMessage1 && <p className="error-message">{errorMessage1}</p>}
          <button id="log-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
