import React from "react";
import {
    FaComments,
    FaRegLightbulb,
    FaTools,
    FaChartLine,
    FaHandsHelping,
} from "react-icons/fa";

import "./workProcess.css";

interface Step {
    icon: React.ReactNode;
    title: string;
    desc: string;
}

const steps: Step[] = [
    {
        icon: <FaComments />,
        title: "Consultation",
        desc: "Understanding client goals and challenges through discovery calls.",
    },
    {
        icon: <FaRegLightbulb />,
        title: "Planning",
        desc: "Crafting tailored strategies based on data needs and automation goals.",
    },
    {
        icon: <FaTools />,
        title: "Implementation",
        desc: "Building and deploying the right tools and integrations.",
    },
    {
        icon: <FaChartLine />,
        title: "Optimization",
        desc: "Fine-tuning performance and ensuring efficiency at scale.",
    },
    {
        icon: <FaHandsHelping />,
        title: "Support",
        desc: "Ongoing monitoring, reporting, and proactive support.",
    },
];

const WorkProcess: React.FC = () => {
    return (
        <section className="process-section">
            <p className="process-subheading">How We Work</p>
            <h2 className="process-heading">Our 5-Step Work Process</h2>

            <div className="process-steps">
                {steps.map((step, index) => (
                    <div key={index} className="step-inline">
                        <div className="step-icon">{step.icon}</div>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkProcess;
