import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/subscriptions" element={<Subscription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
