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
        {state.sessions.length > 0 ? (
          state.sessions.map((session) => (
            <div key={session.date} className="row mb-3 justify-content-center">
              <div
                className="card col-12 col-md-6 p-0"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header">{`Session Date: ${session.date}`}</div>
                <ul className="list-group list-group-flush">
                  <li
                    className="list-group-item p-2"
                    style={{ width: "100%" }}
                  >{`Exercise: ${session.exercise}`}</li>
                  <li
                    className="list-group-item p-2"
                    style={{ width: "100%" }}
                  >{`Reps: ${session.reps}`}</li>
                  <li
                    className="list-group-item p-2"
                    style={{ width: "100%" }}
                  >{`Sets: ${session.sets}`}</li>
                  <li
                    className="list-group-item p-2"
                    style={{ width: "100%" }}
                  >{`Weight: ${session.weight}`}</li>
                </ul>
              </div>
            </div>
          ))
        ) : (
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <p>No sessions logged yet.</p>
            </div>
          </div>
        )}
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
