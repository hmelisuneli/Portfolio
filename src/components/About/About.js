// About.js
import React, { useState } from 'react';
import './About.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const experiences = [
    {
        title: "Welcome Center",
        description: "UX/UI design",
        company: "Narxoz",
        date: "January 2024 - May 2024"
    },
    {
        title: "Office registration",
        description: "Office work",
        company: "Narxoz",
        date: "January 2024 - May 2024"
    },
    // Добавьте другие опыты работы по мере необходимости
];

// Навыки, которые будут представлены в виде иконок
const skills = [
    { name: "HTML5", icon: faHtml5 },
    { name: "CSS3", icon: faCss3 },
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact }
    // Добавьте другие навыки и их иконки по мере необходимости
];

const About = () => {
    const [activeTab, setActiveTab] = useState('experience');

    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>
            <div className="tabs">
                <button className={activeTab === 'experience' ? 'active' : ''} onClick={() => setActiveTab('experience')}>Experience</button>
                <button className={activeTab === 'skills' ? 'active' : ''} onClick={() => setActiveTab('skills')}>Skills</button>
                {/* Добавьте другие вкладки по мере необходимости */}
            </div>
            <div className="content">
                {activeTab === 'experience' && (
                    <div className="experiences">
                        {experiences.map((experience, index) => (
                            <div key={index} className="experience">
                                <h2>{experience.title}</h2>
                                <h3>{experience.company}</h3>
                                <p>{experience.date}</p>
                                <p>{experience.description}</p>
                            </div>
                        ))}
                    </div>
                )}
                {activeTab === 'skills' && (
                    <div className="skills">
                        <ul>
                            {skills.map((skill, index) => (
                                <li key={index}>
                                    <FontAwesomeIcon icon={skill.icon} />
                                    <span>{skill.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {/* Добавьте другие разделы информации для других вкладок */}
            </div>
        </div>
    );
}

export default About;
