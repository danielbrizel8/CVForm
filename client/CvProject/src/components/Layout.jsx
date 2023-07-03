import React, { useState, useRef, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styling/Layout.css";
import axios from "axios";

function Layout() {
  const [user, setUser] = useState([]);
  //   const [openNav, setOpenNav] = useState(false)
  useEffect(() => {
    axios
      .post("http://localhost:5000/register/fetchuser", {
        token: localStorage.getItem("loggedUser"),
      })
      .then(({ data }) => setUser(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(user);
  return (
    <div className="layout-container">
      <div>
        <nav className="nav-bar">
          <div className="user-name-log">
            <div id="hello-user">
              <div>{`Hello, ${user?.username}`}</div>
            <Link to={"/"}>
              <img
                id="exit"
                width="5px"
                height="5px"
                src="https://img.icons8.com/ios/50/exit--v1.png"
                alt="exit--v1"
              />
            </Link>
            </div>
          </div>
          <Link id="Home-page" className="link" to={"/HomePage"}>
            Home-page
          </Link>
          <Link id="CVForm" className="link" to={"/CVForm"}>
            Create CV
          </Link>
          <Link id="Template" className="link" to={"/Template"}>
            My CV
          </Link>
        </nav>
      </div>
      <div>
        <Outlet />
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Layout;
