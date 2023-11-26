import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSession } from "../SessionContext";
import NavBar from "../components/NavBar";
import { Outlet, useNavigate } from "react-router-dom";
// import NavigationButtons from "../components/NavigationButtons";
import { v4 as uuidv4 } from "uuid";

const exerciseOptions = ["bench-press", "chest-press", "bicep-curls"];

const AddSessionForm = () => {
  const { dispatch } = useSession();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: null,
    date: "",
    exercise: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.date ||
      !formData.exercise ||
      !formData.reps ||
      !formData.sets ||
      !formData.weight
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newSession = { ...formData, id: uuidv4() };
    console.log(newSession);
    dispatch({ type: "ADD_SESSION", payload: newSession });
    setFormData({
      id: null,
      date: "",
      exercise: "",
      reps: "",
      sets: "",
      weight: "",
    });
    navigate("/ViewSessions");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="dd/mm/yyyy"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicExercise">
        <Form.Label>Exercise</Form.Label>
        <Form.Control
          as="select"
          name="exercise"
          value={formData.exercise}
          onChange={handleChange}
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
          value={formData.reps}
          onChange={handleChange}
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
          value={formData.sets}
          onChange={handleChange}
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
          value={formData.weight}
          onChange={handleChange}
          required
          min="0"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Create Session
      </Button>
    </Form>
  );
};

export default function AddSession() {
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
              <h1 className="mb-4">About Us</h1>
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
              <AddSessionForm />
            </div>
          </div>
        </div>
      </div>
      <div className="text-center"></div>
      {/* <NavigationButtons /> */}
      <Outlet />
    </div>
  );
}
