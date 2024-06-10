import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import CardsPage from "./pages/CardsPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard/home" element={<HomePage />} />
      <Route path="/dashboard/cards" element={<CardsPage />} />
    </Routes>
  );
}

export default App;
