import React, { useState } from "react";
import CVForm from "./components/CVForm";
import Register from "./components/Register";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Template from "./components/Template";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route index element={<Register />}></Route>
        <Route path="/Login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="/HomePage" element={<HomePage />}></Route>
            <Route path="/CVForm" element={<CVForm />} />
            <Route path="/Template" element={<Template />} />
          </Route>
      </Routes>
    </div>
  );
};

export default App;

{
  /* <Routes>
<Route path="/" element={<Register />} />
<Route path="/Login" element={<Login />} />
<Route path="/CVForm" element={<CVForm />} />
<Route path="/Template" element={<Template/>} />
<Route path="/HomePage" element={<HomePage/>} />
<Route path="/Layout" element={<Layout/>} />
</Routes> */
}
