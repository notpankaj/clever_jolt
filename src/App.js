import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import LoginPage from "./pages/loginpage/LoginPage";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Crate from "./app/crate/Crate";
import Student from "./app/student/Student";

function App() {
  const [isSideBarActive, setIsSideBarActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (
      pathname === "/login" ||
      pathname === "/login/" ||
      pathname === "/register" ||
      pathname === "/register/"
    ) {
      setIsSideBarActive(false);
    } else {
      setIsSideBarActive(true);
    }
  }, [pathname, isSideBarActive]);

  return (
    <div className="App">
      {isSideBarActive && <Sidebar />}
      <div className="content">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          {/* with - sidebar */}
          <Route path="/" element={<h1>HOME PAGE</h1>} />
          <Route path="/crate" element={<Crate />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
