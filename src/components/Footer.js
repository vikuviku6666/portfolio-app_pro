import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
         <SocialLinks styleClass="footer-links"></SocialLinks>
        </div>
        <h4>
          copyright&copy;{new Date().getFullYear()}
          <span>VKK</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
