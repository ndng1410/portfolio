import React, { useState } from 'react';
import {
    FaTh,
    FaUserAlt,
    FaCodepen,
    FaElementor,
    FaSearchengin,
    FaViber,
    FaBars,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Contact from '../pages/Contact';
import "../styles/SideBar.css";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/home",
            name: "Home",
            icon: <FaTh />,
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />,
        },
        {
            path: "/skills",
            name: "Skills",
            icon: <FaCodepen />,
        },
        {
            path: "/projects",
            name: "Projects",
            icon: <FaElementor />,
        },
        {
            path: "/experience",
            name: "Experience",
            icon: <FaSearchengin />,
        },
        {
            path: "/contact",
            name: "Contact",
            icon: <FaViber />,
        },

    ]

  return (
    <div className='container' style={{width: isOpen ? "300px" : "50px"}}>
        <div style={{width: isOpen ? "300px" : "50px"}} className='sidebar'>
            <div className='top_section'>
                <h1 style={{display: isOpen ? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0"}} className='bars'>
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link" activeClassName="active">
                        <div className='icon'>{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}}>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    </div>
  )
}

export default SideBar