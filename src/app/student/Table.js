import "./table.css";

function Table() {
  return (
    <div>
      <table class="student_table">
        <thead>
          <tr>
            <th scope="col">S.No</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Age</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Address</th>
            <th scope="col">Package</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="S.No">Visa - 3412</td>
            <td data-label="Name">04/01/2016</td>
            <td data-label="Class">$1,190</td>
            <td data-label="Age">03/01/2016 - 03/31/2016</td>
            <td data-label="Mobile Number">03/01/2016 - 03/31/2016</td>
            <td data-label="Address">03/01/2016 - 03/31/2016</td>
            <td data-label="Package">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td data-label="S.No">Visa - 3412</td>
            <td data-label="Name">04/01/2016</td>
            <td data-label="Class">$1,190</td>
            <td data-label="Age">03/01/2016 - 03/31/2016</td>
            <td data-label="Mobile Number">03/01/2016 - 03/31/2016</td>
            <td data-label="Address">03/01/2016 - 03/31/2016</td>
            <td data-label="Package">03/01/2016 - 03/31/2016</td>
          </tr>
          <tr>
            <td data-label="S.No">Visa - 3412</td>
            <td data-label="Name">04/01/2016</td>
            <td data-label="Class">$1,190</td>
            <td data-label="Age">03/01/2016 - 03/31/2016</td>
            <td data-label="Mobile Number">03/01/2016 - 03/31/2016</td>
            <td data-label="Address">03/01/2016 - 03/31/2016</td>
            <td data-label="Package">03/01/2016 - 03/31/2016</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
