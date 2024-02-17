import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
              // element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              // element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              // element={!user ? <Signup /> : <Navigate to="/" />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
