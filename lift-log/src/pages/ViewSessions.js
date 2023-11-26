import React from "react";
import NavBar from "../components/NavBar";
import NavigationButtons from "../components/NavigationButtons";
import { Outlet } from "react-router-dom";
import { useSession } from "../SessionContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

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

  return (
    <div className="App">
      <div className="main-container">
        <h1 className="title p-4 text-white text-center display-4 display-md-1">
          LiftLog
        </h1>
        <NavBar />
      </div>
      <div className="container">
        {state.sessions.length > 0 ? (
          state.sessions.map((session) => (
            <div key={session.id} className="row mb-3 justify-content-center">
              <div
                className="card col-12 col-md-6 p-0"
                style={{ maxWidth: "18rem", marginTop: "3rem" }}
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
                      <Link
                        to={`/EditSession/${session.id}`}
                        className="btn btn-primary btn-sm position-absolute top-0 end-0 mt-2 me-2"
                      >
                        Edit
                      </Link>
                    </>
                  )}
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <ul className="list-group list-group-flush">
                    {/* Use session data directly */}
                    <li className={`list-group-item p-2`}>{`Exercise: ${
                      session.exercise || ""
                    }`}</li>
                    <li className={`list-group-item p-2`}>{`Reps: ${
                      session.reps || ""
                    }`}</li>
                    <li className={`list-group-item p-2`}>{`Sets: ${
                      session.sets || ""
                    }`}</li>
                    <li className={`list-group-item p-2`}>{`Weight: ${
                      session.weight || ""
                    }`}</li>
                    <li className={`list-group-item p-2`}>{`Date: ${
                      session.date || ""
                    }`}</li>
                  </ul>
                </form>
              </div>
            </div>
          ))
        ) : (
          <div className="row d-flex justify-content-center">
            <div className="col-md-8 text-center">
              <p style={{ marginTop: "3rem" }}>No sessions logged yet.</p>
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
