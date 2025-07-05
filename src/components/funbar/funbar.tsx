import './funbar.css';
import { FaChartBar, FaBolt, FaBullseye, FaCogs, FaChartLine, FaDatabase } from 'react-icons/fa';

const services = [
    { icon: <FaChartBar />, label: 'Data Analytics' },
    { icon: <FaBolt />, label: 'Automation' },
    { icon: <FaBullseye />, label: 'Optimization' },
    { icon: <FaCogs />, label: 'Integration' },
    { icon: <FaChartLine />, label: 'Growth' },
    { icon: <FaDatabase />, label: 'Management' },
];

export default function Funbar() {
    return (
        <div className="funbar-container">
            <div className="funbar-logo">ST</div>
            <div className="funbar-services">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="icon-wrapper">{service.icon}</div>
                        <p>{service.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
