import React, { useEffect, useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import "../styles/NavBar.css";
import ReorderIcon from '@mui/icons-material/Reorder';

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
                <Link to="/projects"> Projects </Link>
                <Link to="/experience"> Experience </Link>
            </div>
        </div>
    )
}

export default NavBar