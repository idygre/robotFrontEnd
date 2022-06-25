import React from "react";
import Navbar from "./components/Navbar";
import "./app.css";
import Home from "./pages/Home";
import ImagePortal from "./pages/ImagePortal";
import Results from "./pages/Results";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Livestream from "./pages/Livestream";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const user = true;
  return (
    <BrowserRouter>
      <div>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route
            path="/ImagePortal"
            element={user ? <ImagePortal /> : <Navigate to="/login" />}
          />
          <Route
            path="/Results"
            element={user ? <Results /> : <Navigate to="/login" />}
          />
          <Route
            path="/Livestream"
            element={user ? <Livestream /> : <Navigate to="/login" />}
          />
          <Route
            path="/Register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
