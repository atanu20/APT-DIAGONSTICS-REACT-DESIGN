import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="header">
            <div className="headerbox">
                <div className="logo">
                    <h3 className="text-white">Logo</h3>
                </div>
                <div className="navlinks">
                   <p className="navlink">Home</p>
                   <p className="navlink">About</p>
                   <p className="navlink">Contact</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar
