import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contacts from './components/Contacts/Contacts';
import About from './components/About/About'; 
import './App.css';

function App() {
    useEffect(() => {
        const start = performance.now();
        window.addEventListener('load', () => {
            const end = performance.now();
            console.log(`Page load time: ${end - start} milliseconds`);
        });
    }, []);

    useEffect(() => {
        const start = performance.now();
        document.getElementById('home').addEventListener('load', () => {
            const end = performance.now();
            console.log(`Home section load time: ${end - start} milliseconds`);
        });
    }, []);

    useEffect(() => {
        const start = performance.now();
        document.getElementById('projects').addEventListener('load', () => {
            const end = performance.now();
            console.log(`Projects section load time: ${end - start} milliseconds`);
        });
    }, []);

    useEffect(() => {
        const start = performance.now();
        document.getElementById('contacts').addEventListener('load', () => {
            const end = performance.now();
            console.log(`Contacts section load time: ${end - start} milliseconds`);
        });
    }, []);

    return (
        <div className="app">
            <Navbar />
            <section id="home"><Home /></section>
            <section id="about"><About /></section>
            <section id="projects"><Projects /></section>
            <section id="contacts"><Contacts /></section>
        </div>
    );
}

export default App;
