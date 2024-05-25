import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <p>© 2024 My Portfolio. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
