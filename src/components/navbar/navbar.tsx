import { useState } from "react";
import "./navBar.css"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <div className="logo-icon">ST</div>
                <span className="logo-text">SniperThink</span>
            </div>

            <div className={`nav-links ${isOpen ? "open" : ""}`}>
                <a href="#about">About Us</a>
                <a href="#services">Our Services</a>
                <a href="#resources">Resources</a>
                <a href="#contact">Contact Us</a>
                <a href="#faqs">FAQs</a>
                <button className="demo-btn">Get Instant Demo</button>
            </div>

            <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "✖" : String.fromCharCode(9776)}
            </button>
        </nav>
    );
};
