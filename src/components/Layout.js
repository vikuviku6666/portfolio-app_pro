import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

import "normalize.css"
import "../assets/css/main.css"
const Layout = ({children}) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
      
    </React.Fragment>
  )
}

export default Layout
