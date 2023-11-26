import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const exerciseOptions = ["bench-press", "chest-press", "bicep-curls"];

const AddSessionForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: "",
    exercise: "",
    reps: "",
    sets: "",
    weight: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      console.log("New Form Data:", newData);
      return newData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted. Sending data:", formData);
    setFormData({
      date: "",
      exercise: "",
      reps: "",
      sets: "",
      weight: "",
    });

    // Use navigate to go to the ViewSessions route with form data as state
    navigate("/ViewSessions", { state: { formData } });
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
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicExercise">
        <Form.Label>Exercise</Form.Label>
        <Form.Control
          as="select"
          name="exercise"
          value={formData.exercise}
          onChange={handleChange}
        >
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
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default function AddSession() {
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
      <Outlet />
    </div>
  );
}
