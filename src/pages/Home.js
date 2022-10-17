import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Home.css";
import BackToTopButton from './BackToTopButton';

function Home() {
    return (
        <div className='home'>
            <div className='about'>
                <h2>Lorem Ipsum</h2>
                <div className='prompt'>
                    <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...</p>
                    <LinkedInIcon />
                    <GitHubIcon />
                    <EmailIcon />
                </div>
            </div>
            <div className='skills'>
                <h1>Skills</h1>
                <ul className='list'>
                    <li className='item'>
                        <h2>Front-End</h2>
                        <span>
                            ReactJS, BootStrap, ...
                        </span>
                    </li>
                    <li className='item'>
                        <h2>Languages</h2>
                        <span>
                            HTML, CSS, JavaScript, C, C++, C#, Java, ...
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home


