import React from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import { useSession } from "../SessionContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewSessions() {
  const { state } = useSession();

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
              {state.sessions.length > 0 ? (
                <>
                  <h2>All Sessions:</h2>
                  {state.sessions.map((session, index) => (
                    <div key={index}>
                      <p>Date: {session.date}</p>
                      <p>Exercise: {session.exercise}</p>
                      <p>Reps: {session.reps}</p>
                      <p>Sets: {session.sets}</p>
                      <p>Weight: {session.weight}</p>
                    </div>
                  ))}
                </>
              ) : (
                <p>No sessions logged yet.</p>
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
