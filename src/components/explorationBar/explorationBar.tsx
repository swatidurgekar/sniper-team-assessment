import './explorationBar.css';
import { FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function ExplorationBar() {
    return (
        <div className="exploration-bar">
            <div className="left">
                <span>📞 +1 (555) 123-4567</span>
                <span>📧 hello@sniperthink.com</span>
            </div>
            <div className="center">
            </div>
            <div className="right">
                <span className="follow">Follow Us:</span>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}