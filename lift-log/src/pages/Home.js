import React from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Home.css";

export default function Home() {
  return (
    <div className="App">
      <div className="main-container">
        <h1 class="title p-4 text-white text-center display-1 font-weight-bold">
          LiftLog
        </h1>
        <NavBar />
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <h1 className="mb-4">
                <b>About Us</b>
              </h1>
              <p>
                Say goodbye to manual note-taking and hello to seamless progress
                tracking. With LiftLog, you can easily log your weightlifting
                sessions, including the exercise, reps, sets, weight, and date.
                It's simple, efficient, and tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 text-center">
            <div className="blurb py-4">
              <b>
                Get started by adding a session and keep track of your session
                in your view history
              </b>
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
