import React from 'react'
import "./Navbar.css";

import navProfile from "../../assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className='navbar'>
        {/* <img src={navlogo} className='nav-logo' alt="" /> */}
        <h3>Oville Creations</h3>
        <img src={navProfile} alt="" className='nav-profile' />
    </div>
  )
}

export default Navbar