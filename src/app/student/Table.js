import "./table.css";

const tableFiledMap = {
  sNo: "S.No",
  name: "Name",
  class: "Class",
  age: "Age",
  mobile: "Mobile Number",
  addess: "Address",
  package: "Package",
};

const data = [
  {
    number: 1,
    name: "rohan",
    class: "4th",
    age: "11 years",
    MobileNumber: 9876543210,
    address: "Street no 369, california, 94104",
    package: "6 months",
  },
  {
    number: 1,
    name: "rohan",
    class: "4th",
    age: "11 years",
    MobileNumber: 9876543210,
    address: "Street no 369, california, 94104",
    package: "6 months",
  },
  {
    number: 1,
    name: "rohan",
    class: "4th",
    age: "11 years",
    MobileNumber: 9876543210,
    address: "Street no 369, california, 94104",
    package: "6 months",
  },
  {
    number: 1,
    name: "rohan",
    class: "4th",
    age: "11 years",
    MobileNumber: 9876543210,
    address: "Street no 369, california, 94104",
    package: "6 months",
  },
  {
    number: 1,
    name: "rohan",
    class: "4th",
    age: "11 years",
    MobileNumber: 9876543210,
    address: "Street no 369, california, 94104",
    package: "6 months",
  },
];

function Table() {
  return (
    <div
      style={{
        maxHeight: "70vh",
        overflowY: "scroll",
      }}
    >
      <table className="student_table">
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
          {data &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}
          {data &&
            data.map((item, idx) => (
              <tr key={`${item}${idx}`}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}
          {data &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}
          {data &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}
          {data &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}
          {data &&
            data.map((item, idx) => (
              <tr key={idx}>
                <td data-label={tableFiledMap.sNo}>{idx + 1}</td>
                <td data-label={tableFiledMap.name}>{item.name}</td>
                <td data-label={tableFiledMap.class}>{item.class}</td>
                <td data-label={tableFiledMap.age}>{item.age}</td>
                <td data-label={tableFiledMap.mobile}>{item.MobileNumber}</td>
                <td data-label={tableFiledMap.addess}>{item.address}</td>
                <td data-label={tableFiledMap.package}>{item.package}</td>
              </tr>
            ))}

          {/* <tr>
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
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
