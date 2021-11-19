function CrateHeader({ isAddFormOpen, setIsAddFormOpen }) {
  return (
    <div className="crate__header">
      <div class="search__box">
        <input class="search__input" placeholder="Search" type="text" />
        <button class="search__icon">
          <box-icon class="icon" name="search"></box-icon>
        </button>
      </div>
      <button id="button" onClick={() => setIsAddFormOpen((state) => !state)}>
        {isAddFormOpen ? "Cancel" : "Add New Crate"}
      </button>
    </div>
  );
}

export default CrateHeader;
