import React from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import { useSession } from "../SessionContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

const validationSchema = Yup.object().shape({
  exercise: Yup.string().required("Exercise is required"),
  reps: Yup.number()
    .positive("Reps must be a positive number")
    .required("Reps is required"),
  sets: Yup.number()
    .positive("Sets must be a positive number")
    .required("Sets is required"),
  weight: Yup.number()
    .positive("Weight must be a positive number")
    .required("Weight is required"),
  date: Yup.date().required("Date is required"),
});

const ViewSessions = () => {
  const { state, dispatch } = useSession();

  const formik = useFormik({
    initialValues: {
      id: null,
      exercise: "",
      reps: "",
      sets: "",
      weight: "",
      date: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.id) {
        dispatch({
          type: "UPDATE_SESSION",
          payload: { id: values.id, data: values },
        });
      } else {
        dispatch({
          type: "ADD_SESSION",
          payload: { ...values, id: new Date().toISOString() },
        });
      }
      formik.resetForm();
    },
  });

  const handleEdit = (session) => {
    formik.setValues({
      id: session.id,
      exercise: session.exercise || "",
      reps: session.reps || "",
      sets: session.sets || "",
      weight: session.weight || "",
      date: session.date || "",
    });
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
            <div key={session.id} className="row mb-3 justify-content-center">
              <div
                className="card col-12 col-md-6 p-0"
                style={{ maxWidth: "18rem" }}
              >
                <div className="card-header position-relative">
                  {formik.values.id === session.id ? (
                    <>
                      <span>Edit Session</span>
                      <button
                        className="btn btn-success btn-sm position-absolute top-0 end-0 mt-2 me-2"
                        onClick={formik.handleSubmit}
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
                <form onSubmit={formik.handleSubmit}>
                  <ul className="list-group list-group-flush">
                    <li
                      className={`list-group-item p-2`}
                      style={{
                        width: "100%",
                        display:
                          formik.values.id === session.id ? "none" : "block",
                      }}
                    >{`Exercise: ${formik.values.exercise || ""}`}</li>
                    {formik.values.id === session.id && (
                      <li
                        className="list-group-item p-2"
                        style={{ width: "100%" }}
                      >
                        <input
                          type="text"
                          className="form-control"
                          name="exercise"
                          value={formik.values.exercise}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.exercise && formik.errors.exercise && (
                          <div className="text-danger">
                            {formik.errors.exercise}
                          </div>
                        )}
                      </li>
                    )}
                    <li
                      className={`list-group-item p-2`}
                      style={{
                        width: "100%",
                        display:
                          formik.values.id === session.id ? "none" : "block",
                      }}
                    >{`Reps: ${formik.values.reps || ""}`}</li>
                    {formik.values.id === session.id && (
                      <li
                        className="list-group-item p-2"
                        style={{ width: "100%" }}
                      >
                        <input
                          type="number"
                          className="form-control"
                          name="reps"
                          value={formik.values.reps}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.reps && formik.errors.reps && (
                          <div className="text-danger">
                            {formik.errors.reps}
                          </div>
                        )}
                      </li>
                    )}
                    <li
                      className={`list-group-item p-2`}
                      style={{
                        width: "100%",
                        display:
                          formik.values.id === session.id ? "none" : "block",
                      }}
                    >{`Sets: ${formik.values.sets || ""}`}</li>
                    {formik.values.id === session.id && (
                      <li
                        className="list-group-item p-2"
                        style={{ width: "100%" }}
                      >
                        <input
                          type="number"
                          className="form-control"
                          name="sets"
                          value={formik.values.sets}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.sets && formik.errors.sets && (
                          <div className="text-danger">
                            {formik.errors.sets}
                          </div>
                        )}
                      </li>
                    )}
                    <li
                      className={`list-group-item p-2`}
                      style={{
                        width: "100%",
                        display:
                          formik.values.id === session.id ? "none" : "block",
                      }}
                    >{`Weight: ${formik.values.weight || ""}`}</li>
                    {formik.values.id === session.id && (
                      <li
                        className="list-group-item p-2"
                        style={{ width: "100%" }}
                      >
                        <input
                          type="number"
                          className="form-control"
                          name="weight"
                          value={formik.values.weight}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.weight && formik.errors.weight && (
                          <div className="text-danger">
                            {formik.errors.weight}
                          </div>
                        )}
                      </li>
                    )}
                    {formik.values.id === session.id && (
                      <li
                        className={`list-group-item p-2`}
                        style={{ width: "100%" }}
                      >
                        <input
                          type="date"
                          className="form-control"
                          name="date"
                          value={formik.values.date || ""}
                          onChange={formik.handleChange}
                        />

                        {formik.touched.date && formik.errors.date && (
                          <div className="text-danger">
                            {formik.errors.date}
                          </div>
                        )}
                      </li>
                    )}
                  </ul>
                </form>
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
};

export default ViewSessions;
