import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';
import { HashLink } from "react-router-hash-link";

function NavBar() {
    const [expendNavBar, setExpendNavBar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpendNavBar(false)
    }, [location]);

    return (
        <div className='navbar' id={expendNavBar ? "open" : "close"}>
            <div className='toggleButton'>
                <button onClick={() => {
                    setExpendNavBar((prev) => !prev);
                }}>
                    <ReorderIcon />
                </button>
            </div>
            <div className='links'>
                <Link to="/"> Home </Link>
                <Link to="/about"> About </Link>
                <HashLink to="/#skills" smooth> Skills </HashLink>
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    )
}

export default NavBar