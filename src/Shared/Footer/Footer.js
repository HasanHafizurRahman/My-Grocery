import './Footer.css'
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className="footer">
            <div className="copyright">
                <footer>
                    <small>Copyright © My Grocery.com {year}.</small>
                </footer>
            </div>
            <div className="social-links">
                <small>Follow us on:
                    <Link className='link' to='www.facebook.com'><FaFacebook /></Link>
                    <Link className='link' to='www.instagram.com'><FaInstagram /></Link>
                    <Link className='link' to='www.linkedin.com'><FaLinkedin /></Link>
                    <Link className='link' to='www.twitter.com'><FaTwitter /></Link>
                </small>
            </div>
        </div>
    );
};

export default Footer;