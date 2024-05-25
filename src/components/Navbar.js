// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext'; // Убедитесь, что путь правильный

function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
            <div className="navbar-logo">chen</div>
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                <a href="#home">Главная</a>
                <a href="#projects">Проекты</a>
                <a href="#contacts">Контакты</a>
                <button onClick={toggleTheme} className="theme-toggle-button">
                    {theme === 'dark' ? (
                        <i className="bi bi-sun"></i> // Иконка для светлой темы
                    ) : (
                        <i className="bi bi-moon"></i> // Иконка для тёмной темы
                    )}
                </button>
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;
