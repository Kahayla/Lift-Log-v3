import React from "react";
import NavDropDown from "../components/NavDropDown";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title p-4 text-white">LiftLog</h1>
        <NavDropDown />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <h1 className="mb-4">About Us</h1>
              {/* ... content ... */}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div classNamcoe="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <b>Get started</b> dolor sit amet, consectetur adipiscing elit.
              {/* ... more content ... */}
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <NavigationButtons />
      </div>
      {/* Outlet for nested routes */}
      <Outlet />
    </div>
  );
}
