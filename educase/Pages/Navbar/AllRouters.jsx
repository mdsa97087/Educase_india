import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

function AllRouters() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default AllRouters;
