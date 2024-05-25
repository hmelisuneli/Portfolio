import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header>
            <h1>Мое Портфолио</h1>
            <nav>
                <ul>
                    <li><a href="#home">Главная</a></li>
                    <li><a href="#projects">Проекты</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
