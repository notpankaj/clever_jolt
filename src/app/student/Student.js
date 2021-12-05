import React, { useState } from "react";
import "./student.css";
import StudentHeader from "./StudentHeader";
import Table from "./Table";
import StudentGraphicalData from "./StudentGraphicalData";

function Student() {
  const [tableTab, setTableTab] = useState(true);

  return (
    <>
      <div className="student__container">
        <StudentHeader setTableTab={setTableTab} />
        <div id="row">
          <strong onClick={() => setTableTab(true)}>All Student</strong>
          <span onClick={() => setTableTab(false)}>Non Subscribed ones</span>
        </div>
        {tableTab ? <Table /> : <StudentGraphicalData />}
      </div>
    </>
  );
}

export default Student;
