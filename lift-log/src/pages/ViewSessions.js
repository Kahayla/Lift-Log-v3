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
        <h1 className="title p-4 text-white text-center display-4 display-md-1">
          LiftLog
        </h1>
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
                <div className="d-flex flex-wrap justify-content-start">
                  {state.sessions.map((session) => (
                    <div
                      key={session.date}
                      className="card m-3"
                      style={{ width: "18rem" }}
                    >
                      <div className="card-header">{`Session Date: ${session.date}`}</div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">{`Exercise: ${session.exercise}`}</li>
                        <li className="list-group-item">{`Reps: ${session.reps}`}</li>
                        <li className="list-group-item">{`Sets: ${session.sets}`}</li>
                        <li className="list-group-item">{`Weight: ${session.weight}`}</li>
                      </ul>
                    </div>
                  ))}
                </div>
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
