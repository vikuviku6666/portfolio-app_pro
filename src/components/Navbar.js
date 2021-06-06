import React from "react"
import logo from "../assets/images/logo.png"
import { FaAlignRight } from "react-icons/fa"
import pageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="VKK" />
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight/>
          </button>
        </div>
      <pageLinks styleClass="nav-links"></pageLinks>
      </div>
    </nav>
  )
}

export default Navbar
