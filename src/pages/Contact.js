import Email from '@mui/icons-material/Email';
import React from 'react';
import "../styles/Contact.css";

function Contact() {
  return (
    <div className='contact'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1>Get started!</h1>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4'>Contact infos</div>
                <div className='col-md-8'>
                    <form>
                        <div className='row'>
                            <div className='col-md-6'>
                                <input type={Text} className="name" placeholder='your name'></input>
                            </div>
                            <div className='col-md-6'>
                                <input type={Email} className="email" placeholder='your email'></input>
                            </div>
                            <div className='col-md-12'>
                                <input type={Text} className="subject" placeholder='your subject'></input>
                            </div>
                            <div className='col-md-12'>
                                <textarea className='message' row="5" placeholder='your message'></textarea>
                            </div>
                        </div>
                        <button className='btn-check'>Start</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact