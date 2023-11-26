import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import { useSession } from "../SessionContext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ViewSessions() {
  const { state } = useSession();
  const [editMode, setEditMode] = useState(false);
  const [editedSession, setEditedSession] = useState(null);

  const handleEdit = (session) => {
    setEditedSession(session);
    setEditMode(true);
  };

  const handleSave = () => {
    // Implement your save logic here
    setEditMode(false);
    setEditedSession(null);
  };

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
                <div className="card-header position-relative">
                  {editMode && editedSession === session ? (
                    <>
                      <span>Edit Session</span>
                      <button
                        className="btn btn-success btn-sm position-absolute top-0 end-0 mt-2 me-2"
                        onClick={handleSave}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      {`Session Date: ${session.date}`}
                      <button
                        className="btn btn-primary btn-sm position-absolute top-0 end-0 mt-2 me-2"
                        onClick={() => handleEdit(session)}
                      >
                        Edit
                      </button>
                    </>
                  )}
                </div>
                <ul className="list-group list-group-flush">
                  <li
                    className={`list-group-item p-2`}
                    style={{
                      width: "100%",
                      display:
                        editMode && editedSession === session
                          ? "none"
                          : "block",
                    }}
                  >{`Exercise: ${session.exercise}`}</li>
                  {editMode && editedSession === session && (
                    <li
                      className="list-group-item p-2"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        value={editedSession.exercise}
                        onChange={(e) =>
                          setEditedSession({
                            ...editedSession,
                            exercise: e.target.value,
                          })
                        }
                      />
                    </li>
                  )}
                  <li
                    className={`list-group-item p-2`}
                    style={{
                      width: "100%",
                      display:
                        editMode && editedSession === session
                          ? "none"
                          : "block",
                    }}
                  >{`Reps: ${session.reps}`}</li>
                  {editMode && editedSession === session && (
                    <li
                      className="list-group-item p-2"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        value={editedSession.reps}
                        onChange={(e) =>
                          setEditedSession({
                            ...editedSession,
                            reps: e.target.value,
                          })
                        }
                      />
                    </li>
                  )}
                  <li
                    className={`list-group-item p-2`}
                    style={{
                      width: "100%",
                      display:
                        editMode && editedSession === session
                          ? "none"
                          : "block",
                    }}
                  >{`Sets: ${session.sets}`}</li>
                  {editMode && editedSession === session && (
                    <li
                      className="list-group-item p-2"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        value={editedSession.sets}
                        onChange={(e) =>
                          setEditedSession({
                            ...editedSession,
                            sets: e.target.value,
                          })
                        }
                      />
                    </li>
                  )}
                  <li
                    className={`list-group-item p-2`}
                    style={{
                      width: "100%",
                      display:
                        editMode && editedSession === session
                          ? "none"
                          : "block",
                    }}
                  >{`Weight: ${session.weight}`}</li>
                  {editMode && editedSession === session && (
                    <li
                      className="list-group-item p-2"
                      style={{ width: "100%" }}
                    >
                      <input
                        type="text"
                        className="form-control"
                        value={editedSession.weight}
                        onChange={(e) =>
                          setEditedSession({
                            ...editedSession,
                            weight: e.target.value,
                          })
                        }
                      />
                    </li>
                  )}
                  {editMode && editedSession === session && (
                    <li
                      className={`list-group-item p-2`}
                      style={{ width: "100%" }}
                    >
                      <input
                        type="date"
                        className="form-control"
                        value={editedSession.date}
                        onChange={(e) =>
                          setEditedSession({
                            ...editedSession,
                            date: e.target.value,
                          })
                        }
                      />
                    </li>
                  )}
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
