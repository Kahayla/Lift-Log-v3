import React from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewSessions() {
  // Access form data passed from AddSession component
  const location = useLocation();
  const formData = location.state && location.state.formData;

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title p-4 text-white">LiftLog</h1>
        <NavBar />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <h1 className="mb-4">View Sessions</h1>
              <p>
                Some text goes here
                hfdklshfjkldshkjgbdjkabgjhdebljgbadljgbjkdasbgjkl
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              {formData ? (
                <>
                  <h2>Form Data from AddSession:</h2>
                  <p>Date: {formData.date}</p>
                  <p>Exercise: {formData.exercise}</p>
                  <p>Reps: {formData.reps}</p>
                  <p>Sets: {formData.sets}</p>
                  <p>Weight: {formData.weight}</p>
                </>
              ) : (
                <p>No form data available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <b>Get started</b> dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <NavigationButtons />
      </div>
      <Outlet />
    </div>
  );
}
