import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Homepage";
import Login from "./components/Login";
import SignUp from "./components/signUp";
import { useState, useEffect } from "react";
import Docdata from "./components/Docdata";
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
import Form from "./components/Form"
import Engi from "./components/Engi"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/docdata" element={<Docdata />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Form" element={<Form/>} />
        <Route path="/engi" element={<Engi/>} />
      </Routes>
    </Router>
  );
}

export default App;
