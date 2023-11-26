import React, { useState } from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
const exerciseOptions = ["bench-press", "chest-press", "bicep-curls"];

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
    console.log("Form submitted:", formikValues);
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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    placeholder="dd/mm/yyyy"
                    name="date"
                    value={formikValues.date}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicExercise">
                  <Form.Label>Exercise</Form.Label>
                  <Form.Control
                    as="select"
                    name="exercise"
                    value={formikValues.exercise}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select an exercise
                    </option>
                    {exerciseOptions.map((exercise) => (
                      <option key={exercise} value={exercise}>
                        {exercise}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicReps">
                  <Form.Label>Reps</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter reps"
                    name="reps"
                    value={formikValues.reps}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSets">
                  <Form.Label>Sets</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter sets"
                    name="sets"
                    value={formikValues.sets}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicWeight">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter weight"
                    name="weight"
                    value={formikValues.weight}
                    onChange={handleInputChange}
                    required
                    min="0"
                  />
                </Form.Group>

                <button type="submit" className="btn btn-success btn-sm mt-2">
                  Save
                </button>
                <Link
                  to="/ViewSessions"
                  className="btn btn-secondary btn-sm mt-2 ms-2"
                >
                  Cancel
                </Link>
              </Form>
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
