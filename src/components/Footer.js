import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='socialMedia'>
                <InstagramIcon />
                <FacebookIcon />
                <TwitterIcon />
                <GitHubIcon />
            </div>
            <p> &copy; 2022-08 </p>
        </div>
    )
}

export default Footer