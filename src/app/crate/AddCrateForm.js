import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./addCrateForm.css";
import { Checkbox } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCrate } from "./crateSlice/crateSlice";
import Loader from "../../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  name: "",
  crate_description: "",
  image: "",
  contents: "",
  category: "",
  is_single_crate: "",
  price: "",
  cost_tier: "",
  age_range: "",
  is_active: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  crate_description: Yup.string()
    .max(25, "Must be 25 characters or less")
    .required("Required"),
  contents: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  price: Yup.number().required("Required"),
  cost_tier: Yup.number().required("Required"),
  age_range: Yup.number().required("Required"),
});

function AddCrateForm({ setIsAddFormOpen }) {
  const [isSingleCrate, setIsSingleCrate] = useState(false);
  const [isActiveCrate, setIsActiveCrate] = useState(false);
  const [crateImage, setCrateImage] = useState(null);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.crates);

  console.log(status, "STATUS");
  console.log(error, "Error");

  useEffect(() => {
    (async function () {
      if (status === "failed") {
        toast(error || "failed");
      }
      if (status === "success") {
        toast(error || "Added a new crate");
      }
    })();
  }, [status]);

  const handleClose = (e) => {
    if (e.target.className === "form__container") {
      setIsAddFormOpen((state) => false);
    }
  };

  if (error) {
    console.log(error);
  }
  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      addCrate({
        ...values,
        is_active: isActiveCrate,
        is_single_crate: isSingleCrate,
        crate_image: crateImage,
      })
    );
  };
  return (
    <>
      {status === "loading" && <Loader />}
      <ToastContainer />
      <div className="form__container" onClick={handleClose}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <form
              id="add-crate"
              onSubmit={formik.handleSubmit}
              autoComplete="off"
            >
              <h1>ADD CRATE</h1>
              {/* image*/}
              <div className="input-box file-input-box">
                <div>
                  <input
                    type="file"
                    className="file"
                    onChange={(e) => setCrateImage(e.target.files[0])}
                    accept="image/*"
                  />
                </div>
              </div>
              {/* name*/}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Title"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <span className="error">{formik.errors.name}</span>
                )}
              </div>
              {/* description*/}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="description"
                  {...formik.getFieldProps("crate_description")}
                />

                {formik.touched.crate_description &&
                  formik.errors.crate_description && (
                    <span className="error">
                      {formik.errors.crate_description}
                    </span>
                  )}
              </div>
              {/* <div className="input-box">
              <select defaultValue={"DEFAULT"} name="crate" id="cars">
                <option value="DEFAULT" disabled>
                  Choose Crate
                </option>
                <option value="one">one</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
              </select>
            </div> */}

              {/* isSingleCrate */}
              <div className="input-box mui">
                <Checkbox
                  id="isSingleCrate"
                  inputProps={{ "aria-label": "controlled" }}
                  checked={isSingleCrate}
                  onChange={(e) => setIsSingleCrate(e.target.checked)}
                />
                <label htmlFor="isSingleCrate">Single Crate</label>
              </div>

              {/* contents */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Contents"
                  {...formik.getFieldProps("contents")}
                />
                {formik.touched.contents && formik.errors.contents && (
                  <span className="error">{formik.errors.contents}</span>
                )}
              </div>

              {/* category */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Category"
                  {...formik.getFieldProps("category")}
                />
                {formik.touched.category && formik.errors.category && (
                  <span className="error">{formik.errors.category}</span>
                )}
              </div>
              {/* price 100 */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Price"
                  {...formik.getFieldProps("price")}
                />
                {formik.touched.price && formik.errors.price && (
                  <span className="error">{formik.errors.price}</span>
                )}
              </div>
              {/* cost_tier 1 */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Tier"
                  {...formik.getFieldProps("cost_tier")}
                />
                {formik.touched.cost_tier && formik.errors.cost_tier && (
                  <span className="error">{formik.errors.cost_tier}</span>
                )}
              </div>
              {/* age_range 12 */}
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Age"
                  {...formik.getFieldProps("age_range")}
                />
                {formik.touched.age_range && formik.errors.age_range && (
                  <span className="error">{formik.errors.age_range}</span>
                )}
              </div>
              {/* is_active true */}
              <div className="input-box mui">
                <Checkbox
                  id="isActiveCrate"
                  inputProps={{ "aria-label": "controlled" }}
                  checked={isActiveCrate}
                  onChange={(e) => setIsActiveCrate(e.target.checked)}
                />
                <label htmlFor="isActiveCrate">Active Crate</label>
              </div>

              <button className="submit_btn" type="submit">
                ADD NEW CRATE
              </button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default AddCrateForm;
