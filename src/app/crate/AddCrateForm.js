import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./crateForm.css";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCrate } from "./crateSlice/crateSlice";
import Loader from "../../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { reset } from "./crateSlice/crateSlice";
import TextField from "@mui/material/TextField";

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
  const [crateTutorialVideo, setTutorialVideo] = useState(null);
  const [cratePreviewVideo, setPreviewVideo] = useState(null);

  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.crates);

  useEffect(() => {
    (async function () {
      if (status === "failed") {
        toast(error || "failed");
      }
      if (status === "success") {
        toast(error || "Added a new crate");
      }
    })();
    return () => {
      dispatch(reset());
    };
  }, [status, error]);

  const handleClose = (e) => {
    if (e.target.className === "form__container") {
      setIsAddFormOpen((state) => false);
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    dispatch(
      addCrate({
        ...values,
        is_active: isActiveCrate,
        is_single_crate: isSingleCrate,
        crate_image: crateImage,
        crate_preview_video: cratePreviewVideo,
        crate_tutorial_video: crateTutorialVideo,
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
              {/* <div className="input-box file-input-box">
                <label htmlFor="image">Image</label>
                <div>
                  <input
                    id="image"
                    type="file"
                    className="file"
                    onChange={(e) => setCrateImage(e.target.files[0])}
                    accept="image/*"
                  />
                </div>
              </div> */}

              {/* Image */}
              <div className="fileUploadContainer">
                <span>image</span>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => setCrateImage(e.target.files[0])}
                  accept="image/*"
                />
              </div>

              {/* name */}
              <TextField
                style={styles.InputContainer}
                label="Name"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("name")}
                error={formik.touched.name && formik.errors.name}
                helperText={formik.touched.name && formik.errors.name}
              />

              {/* {formik.touched.name && formik.errors.name && (
                <span className="error">{formik.errors.name}</span>
              )} */}
              {/* name
              <div className="input-box">
                <input
                  type="text"
                  placeholder="Title"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name && (
                  <span className="error">{formik.errors.name}</span>
                )}
              </div> */}
              {/* description*/}
              {/* <div className="input-box">
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
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Description"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("crate_description")}
                error={
                  formik.touched.crate_description &&
                  formik.errors.crate_description
                }
                helperText={
                  formik.touched.crate_description &&
                  formik.errors.crate_description
                }
              />

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
              {/* <div className="input-box mui">
                <Checkbox
                  id="isSingleCrate"
                  inputProps={{ "aria-label": "controlled" }}
                  checked={isSingleCrate}
                  onChange={(e) => setIsSingleCrate(e.target.checked)}
                />
                <label htmlFor="isSingleCrate">Single Crate</label>
              </div> */}

              <div style={styles.CheckboxContainer}>
                <FormControlLabel
                  fullWidth
                  control={
                    <Checkbox
                      checked={isSingleCrate}
                      onChange={(e) => setIsSingleCrate(e.target.checked)}
                    />
                  }
                  label="Single Crate"
                />
              </div>

              {/* contents */}
              {/* <div className="input-box">
                <input
                  type="text"
                  placeholder="Contents"
                  {...formik.getFieldProps("contents")}
                />
                {formik.touched.contents && formik.errors.contents && (
                  <span className="error">{formik.errors.contents}</span>
                )}
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Contents"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("contents")}
                error={formik.touched.contents && formik.errors.contents}
                helperText={formik.touched.contents && formik.errors.contents}
              />

              {/* category */}
              {/* <div className="input-box">
                <input
                  type="text"
                  placeholder="Category"
                  {...formik.getFieldProps("category")}
                />
                {formik.touched.category && formik.errors.category && (
                  <span className="error">{formik.errors.category}</span>
                )}
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Category"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("category")}
                error={formik.touched.category && formik.errors.category}
                helperText={formik.touched.category && formik.errors.category}
              />

              {/* price 100 */}
              {/* <div className="input-box">
                <input
                  type="text"
                  placeholder="Price"
                  {...formik.getFieldProps("price")}
                />
                {formik.touched.price && formik.errors.price && (
                  <span className="error">{formik.errors.price}</span>
                )}
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Price"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("price")}
                error={formik.touched.price && formik.errors.price}
                helperText={formik.touched.price && formik.errors.price}
              />

              {/* cost_tier 1 */}
              {/* <div className="input-box">
                <input
                  type="text"
                  placeholder="Tier"
                  {...formik.getFieldProps("cost_tier")}
                />
                {formik.touched.cost_tier && formik.errors.cost_tier && (
                  <span className="error">{formik.errors.cost_tier}</span>
                )}
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Tier"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("cost_tier")}
                error={formik.touched.cost_tier && formik.errors.cost_tier}
                helperText={formik.touched.cost_tier && formik.errors.cost_tier}
              />

              {/* age_range 12 */}
              {/* <div className="input-box">
                <input
                  type="text"
                  placeholder="Age"
                  {...formik.getFieldProps("age_range")}
                />
                {formik.touched.age_range && formik.errors.age_range && (
                  <span className="error">{formik.errors.age_range}</span>
                )}
              </div> */}

              <TextField
                style={styles.InputContainer}
                label="Age"
                // variant="filled"
                fullWidth
                {...formik.getFieldProps("age_range")}
                error={formik.touched.age_range && formik.errors.age_range}
                helperText={formik.touched.age_range && formik.errors.age_range}
              />

              {/* is_active true */}
              {/* <div className="input-box mui">
                <Checkbox
                  id="isActiveCrate"
                  inputProps={{ "aria-label": "controlled" }}
                  checked={isActiveCrate}
                  onChange={(e) => setIsActiveCrate(e.target.checked)}
                />
                <label htmlFor="isActiveCrate">Active Crate</label>
              </div> */}

              <div style={styles.CheckboxContainer}>
                <FormControlLabel
                  fullWidth
                  control={
                    <Checkbox
                      checked={isActiveCrate}
                      onChange={(e) => setIsActiveCrate(e.target.checked)}
                    />
                  }
                  label="Active Crate"
                />
              </div>

              {/* short  vido*/}
              {/* <div className="input-box file-input-box">
                <label htmlFor="TutorialVideo">Tutorial Video</label>
                <div>
                  <input
                    id="TutorialVideo"
                    type="file"
                    className="file"
                    onChange={(e) => setTutorialVideo(e.target.files[0])}
                    accept="video/mp4,video/x-m4v,video/*"
                  />
                </div>
              </div> */}

              <div className="fileUploadContainer">
                <span>Tutorial Video</span>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => setTutorialVideo(e.target.files[0])}
                  accept="video/mp4,video/x-m4v,video/*"
                />
              </div>

              {/* full video*/}
              {/* <div className="input-box file-input-box">
                <label htmlFor="PreviewVideo">Preview Video</label>
                <div>
                  <input
                    id="PreviewVideo"
                    type="file"
                    className="file"
                    onChange={(e) => setPreviewVideo(e.target.files[0])}
                    accept="video/mp4,video/x-m4v,video/*"
                  />
                </div>
              </div> */}

              <div className="fileUploadContainer">
                <span>Preview Video</span>
                <TextField
                  fullWidth
                  type="file"
                  onChange={(e) => setPreviewVideo(e.target.files[0])}
                  accept="video/mp4,video/x-m4v,video/*"
                />
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

const styles = {
  CheckboxContainer: {
    padding: "0 10px",
    width: "100%",
    margin: "5px 0",
    border: "1px solid #00000038",
    borderRadius: "5px",
    padding: "6px 10px",
  },
  InputContainer: { margin: "10px 0" },
};
