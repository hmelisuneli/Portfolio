import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title"></h1>
            <h2 className="home-title">Welcome to My Portfolio</h2>
            <p className="home-description">
            Hello! My name is Maxim Chen and I am passionate about design in three dimensions (3D), two dimensions (2D) and user experience and interface (UX/UI). My work is a symbiosis of creativity, functionality and innovation.

Portfolio:
<p>
 3D Design:

Illustrations: From abstract compositions to realistic models, my 3D illustrations reflect the full range of my imagination and skills.
Animation: Lively scenes and characters brought to life on screen through my animation prowess add extra visual magnetism to projects.
Visualization: Realistic visualizations of architectural designs, products and concepts created using advanced tools and techniques.
</p>

            </p>
            <div className="home-actions">
            </div>
            <div className="home-photo">
                {/* Здесь можно вставить фотографию */}
                <img src="/images/iam.jpg" alt="Profile" />
            </div>
        </div>
    );
}

export default Home;