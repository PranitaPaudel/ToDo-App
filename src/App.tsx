import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "./components/register";
import Login from "./components/Login";
import Logintw from "./components/Logintw";
import Registertw from "./components/Registertw";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/logintw" element={<Logintw />} />
      <Route path="/registertw" element={<Registertw />} />
    </Routes>
  );
}

export default App;
