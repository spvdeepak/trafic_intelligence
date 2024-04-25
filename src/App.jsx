import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "@/pages/Login/Login";
import Dashboard from "@/pages/Dashboard/Dashboard";

const App = () => {
  return (
    <div className="overflow-hidden">
      <Routes>
        {/* Internship Page */}
        <Route path="/" exact element={<Login />} />
        <Route path="/dashboard" exact element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
