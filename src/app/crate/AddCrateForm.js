import "./addCrateForm.css";
function AddCrateForm() {
  return (
    <div>
      <form action="" id="add-crate">
        <h1>ADD CRATE</h1>
        <div class="input-box file-input">
          <div>
            <input type="file" class="file" />
          </div>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Title" />
        </div>
        <div class="input-box">
          <input type="text" placeholder="description" />
        </div>
        <div class="input-box">
          <select name="crate" id="cars">
            <option selected disabled>
              Choose Crate
            </option>
            <option value="one">one</option>
            <option value="two">Two</option>
            <option value="three">Three</option>
          </select>
        </div>
        <button class="submit_btn" type="submit">
          ADD NEW CRATE
        </button>
      </form>
    </div>
  );
}

export default AddCrateForm;
