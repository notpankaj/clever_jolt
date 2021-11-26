function StudentHeader() {
  return (
    <div className="student__header">
      <div className="search__box">
        <input className="search__input" placeholder="Search" type="text" />
        <button className="search__icon">
          <box-icon className="icon" name="search"></box-icon>
        </button>
      </div>
      <button id="button">Join Student</button>
      <div className="student__sort">
        <strong>Filter By:</strong>

        <div className="class">
          <span>class</span>
          <select>
            <option>5th</option>
            <option>8th</option>
            <option>10th</option>
          </select>
        </div>
        <div className="age">
          <span>age</span>
          <select>
            <option>10</option>
            <option>15</option>
            <option>18</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default StudentHeader;
