import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignJustify } from "react-icons/fa"
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="VKK" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignJustify />
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
