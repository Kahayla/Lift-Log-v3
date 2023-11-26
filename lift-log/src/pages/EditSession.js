import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";

const EditSession = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const session = location.state?.session;

  const [formikValues, setFormikValues] = useState({
    id: session?.id || null,
    exercise: session?.exercise || "",
    reps: session?.reps || "",
    sets: session?.sets || "",
    weight: session?.weight || "",
    date: session?.date || "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormikValues({
      ...formikValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    // For example, you can dispatch an action to update the session
    console.log("Form submitted:", formikValues);
    // After submission, you can navigate back to the ViewSessions page
    navigate("/ViewSessions");
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
              <h1 className="mb-4">Edit Session</h1>
              <form onSubmit={handleSubmit}>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item p-2">{`Exercise: ${
                    formikValues.exercise || ""
                  }`}</li>
                  <li className="list-group-item p-2">
                    <input
                      type="text"
                      className="form-control"
                      name="exercise"
                      value={formikValues.exercise}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="list-group-item p-2">{`Reps: ${
                    formikValues.reps || ""
                  }`}</li>
                  <li className="list-group-item p-2">
                    <input
                      type="number"
                      className="form-control"
                      name="reps"
                      value={formikValues.reps}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="list-group-item p-2">{`Sets: ${
                    formikValues.sets || ""
                  }`}</li>
                  <li className="list-group-item p-2">
                    <input
                      type="number"
                      className="form-control"
                      name="sets"
                      value={formikValues.sets}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="list-group-item p-2">{`Weight: ${
                    formikValues.weight || ""
                  }`}</li>
                  <li className="list-group-item p-2">
                    <input
                      type="number"
                      className="form-control"
                      name="weight"
                      value={formikValues.weight}
                      onChange={handleInputChange}
                    />
                  </li>
                  <li className="list-group-item p-2">{`Date: ${
                    formikValues.date || ""
                  }`}</li>
                  <li className="list-group-item p-2">
                    <input
                      type="date"
                      className="form-control"
                      name="date"
                      value={formikValues.date}
                      onChange={handleInputChange}
                    />
                  </li>
                </ul>
                <button type="submit" className="btn btn-success btn-sm mt-2">
                  Save
                </button>
                <Link
                  to="/ViewSessions"
                  className="btn btn-secondary btn-sm mt-2 ms-2"
                >
                  Cancel
                </Link>
              </form>
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
};

export default EditSession;
