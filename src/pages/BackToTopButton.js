import React, { useEffect, useState } from 'react'
import "../styles/BackToTopButton.css"
import { FaArrowAltCircleUp } from "react-icons/fa";

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        //button display after scrolling for x pixels
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        })
    }, []);
       
    return (
    <div className='backtotopbtn'>
        {isVisible && (
            <button onClick = {scrollUp}>
                <FaArrowAltCircleUp classname='btnicon'/>
            </button>
        )}
    </div>
  )
}

export default BackToTopButton