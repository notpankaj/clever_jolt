import "./student.css";
import StudentHeader from "./StudentHeader";
import Table from "./Table";
function Student() {
  return (
    <>
      <div className="student__container">
        <StudentHeader />
        <div id="row">
          <strong>All Student</strong>
          <span>Non Subscribed ones</span>
        </div>
        <Table />
      </div>
    </>
  );
}

export default Student;
