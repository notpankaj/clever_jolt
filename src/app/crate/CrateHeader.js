function CrateHeader({ isAddFormOpen, setIsAddFormOpen }) {
  return (
    <div className="crate__header">
      <div className="search__box">
        <input className="search__input" placeholder="Search" type="text" />
        <button className="search__icon">
          <box-icon className="icon" name="search"></box-icon>
        </button>
      </div>
      <button id="button" onClick={() => setIsAddFormOpen((state) => !state)}>
        {isAddFormOpen ? "Cancel" : "Add New Crate"}
      </button>
    </div>
  );
}

export default CrateHeader;
