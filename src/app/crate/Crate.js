import AddCrateForm from "./AddCrateForm";
import CrateTable from "./CrateTable";
import "./crate.css";
import CrateHeader from "./CrateHeader";
import { useState } from "react";

function Crate() {
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

  return (
    <>
      <div className="crate__container">
        <CrateHeader
          isAddFormOpen={isAddFormOpen}
          setIsAddFormOpen={setIsAddFormOpen}
        />
        {isAddFormOpen && (
          <AddCrateForm
            isAddFormOpen={isAddFormOpen}
            setIsAddFormOpen={setIsAddFormOpen}
          />
        )}

        <CrateTable />
      </div>
    </>
  );
}

export default Crate;
