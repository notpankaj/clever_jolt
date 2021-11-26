import "./addCrateForm.css";
function AddCrateForm({ setIsAddFormOpen }) {
  const handleClose = (e) => {
    if (e.target.className === "form__container") {
      setIsAddFormOpen((state) => false);
    }
  };
  return (
    <div className="form__container" onClick={handleClose}>
      <form action="" id="add-crate">
        <h1>ADD CRATE</h1>
        <div className="input-box file-input">
          <div>
            <input type="file" className="file" />
          </div>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Title" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="description" />
        </div>
        <div className="input-box">
          <select defaultValue={"DEFAULT"} name="crate" id="cars">
            <option value="DEFAULT" disabled>
              Choose Crate
            </option>
            <option value="one">one</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
        <button className="submit_btn" type="submit">
          ADD NEW CRATE
        </button>
      </form>
    </div>
  );
}

export default AddCrateForm;
