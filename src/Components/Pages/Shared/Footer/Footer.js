

import { faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { faBlenderPhone, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer>
            <div className='row'>
                <div className='col'>
                    <h6 className='logo'>Open Every Day:</h6>
                    <p className='web-desc'>
                    Monday-Friday:6am - 5pm<br></br>
                    Weekends:7am - 4pm
                    </p>

                </div>
                <div className='col'>
                <h6 className='logo'>Visit Us</h6>
                    <p className='web-desc'>
                   Email: myhome@gmail.com<br></br>
                    facebook:myhome123page
                    
                    </p>
                </div>
                <div className='col'>
                <h6 className='logo'>Get In Touch</h6>
                    <div className='font'>
                       <FontAwesomeIcon className='m-2' icon={faMailBulk}></FontAwesomeIcon>
                       <FontAwesomeIcon  className='m-2'  icon={faAddressBook}></FontAwesomeIcon>
                       <FontAwesomeIcon  className='m-2'  icon={faBlenderPhone}></FontAwesomeIcon>
                    </div>
                </div>
                <div className='col'>
                    <button className='button'>Order now</button>

                </div>
            </div>
        </footer>
    );
};

export default Footer;