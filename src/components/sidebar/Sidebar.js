import React from "react";
import "./sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const [mobileNavItems, setMobileNavItems] = React.useState("none");

  const closeMobileNav = () => {
    setMobileNavItems("none");
  };

  const handleMobileNavToggle = () => {
    if (mobileNavItems === "none") {
      setMobileNavItems("flex");
    } else {
      closeMobileNav();
    }
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <>
      <nav className="sidebar">
        <div className="sidebar__header">
          <h4>Clever jolt</h4>
        </div>
        <ul className="sidebar__items">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <li className="sidebar__item">
              <div className="sidebar__icon">
                <box-icon name="home"></box-icon>
              </div>
              Home
            </li>
          </NavLink>

          <NavLink to="/crate">
            <li className="sidebar__item ">
              <div className="sidebar__icon">
                <box-icon name="edit-alt"></box-icon>
              </div>
              Crate
            </li>
          </NavLink>
          <NavLink to="/student">
            <li className="sidebar__item ">
              <div className="sidebar__icon">
                <box-icon name="book-reader"></box-icon>
              </div>
              Student
            </li>
          </NavLink>
          <li className="sidebar__item" onClick={handleLogout}>
            <div className="sidebar__icon">
              <box-icon name="exit"></box-icon>
            </div>
            Logout
          </li>
        </ul>
      </nav>
      {/* mobilenav */}
      <div className="mobile-nav">
        <h4>Clever jolt</h4>
        <div className="mobile-nav__toggle" onClick={handleMobileNavToggle}>
          <box-icon name="menu-alt-right"></box-icon>
        </div>

        <ul
          className="sidebar__items"
          style={{ display: mobileNavItems }}
          onMouseLeave={closeMobileNav}
        >
          <NavLink to="/">
            <li className="sidebar__item" onClick={closeMobileNav}>
              <div className="sidebar__icon">
                <box-icon name="home"></box-icon>
              </div>
              Home
            </li>
          </NavLink>
          <NavLink to="/crate">
            <li className="sidebar__item" onClick={closeMobileNav}>
              <div className="sidebar__icon">
                <box-icon name="edit-alt"></box-icon>
              </div>
              Crate
            </li>
          </NavLink>
          <NavLink to="/student">
            <li className="sidebar__item" onClick={closeMobileNav}>
              <div className="sidebar__icon">
                <box-icon name="book-reader"></box-icon>
              </div>
              Student
            </li>
          </NavLink>
          <li className="sidebar__item" onClick={handleLogout}>
            <div className="sidebar__icon">
              <box-icon name="exit"></box-icon>
            </div>
            Logout
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
