import React, { useState, useEffect } from 'react';
import { FaHome, FaEnvelope, FaProjectDiagram, FaSearchMinus } from 'react-icons/fa';
import './Navbar.css';

const Navbar1 = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="nav-brand">
                <span className="brand-text">Rajat Amate</span>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="#home" className="nav-link">
                        <FaHome className="nav-icon" />
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a href="#contact" className="nav-link">
                        <FaEnvelope className="nav-icon" />
                        <span>Contact</span>
                    </a>
                </li>
                <li>
                    <a href="#projects" className="nav-link">
                        <FaProjectDiagram className="nav-icon" />
                        <span>Projects</span>
                    </a>
                </li>
                <li>
                    <a href="#findme" className="nav-link">
                        <FaSearchMinus className="nav-icon" />
                        <span>Find Me</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar1;
