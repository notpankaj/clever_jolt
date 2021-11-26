import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./loginpage.css";
import { useNavigate } from "react-router-dom";
import { Hidden } from "@mui/material";
const initialValues = {
  fullName: "",
  password: "",
};
const validationSchema = Yup.object({
  fullName: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(5, "Name must be minimum 5 characters")
    .required("Required"),
  password: Yup.string()
    .max(20, "Must be 20 characters or less")
    .min(5, "password must be minimum 5 characters")
    .required("Required"),
});

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      navigate("/");
      setSubmitting(false);
    }, 400);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "90vh",
      }}
    >
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <h3>Clever jolt</h3>
          </div>
          <div className="header__links">
            <span className="header__link">SignUp</span>
            <span className="header__link">Login</span>
          </div>
        </div>
      </header>
      <main>
        <div className="login__container">
          <div className="login__text">
            <h3>Clever jolt</h3>
          </div>
          <div className="login__from__container">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <form onSubmit={formik.handleSubmit} id="login_form">
                  <div className="input__box">
                    <label htmlFor="">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter Name"
                      {...formik.getFieldProps("fullName")}
                    />
                    {formik.touched.fullName && formik.errors.fullName ? (
                      <span className="error">{formik.errors.fullName}</span>
                    ) : null}
                  </div>
                  <div className="input__box">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      placeholder="Enter Password"
                      {...formik.getFieldProps("password")}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <span className="error">{formik.errors.password}</span>
                    ) : null}
                  </div>
                  <div className="login__action">
                    <input type="checkbox" placeholder="Enter Password" />
                    <label htmlFor="">Remember me</label>
                    <span className="forgetpass">Forget Password?</span>
                  </div>
                  <button type="submit" className="login__submit-btn">
                    Login
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
