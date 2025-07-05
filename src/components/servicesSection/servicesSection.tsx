import './servicesSection.css';

type Service = {
    img: string;
    title: string;
    desc: string;
};

const services: Service[] = [
    {
        img: '/service1.jpg',
        title: 'Data Analytics',
        desc: 'Turn raw data into powerful business insights using real-time analytics tools.',
    },
    {
        img: '/service2.jpg',
        title: 'Automation',
        desc: 'Automate repetitive tasks and streamline workflows to boost productivity.',
    },
    {
        img: '/service3.jpg',
        title: 'Optimization',
        desc: 'Improve performance with data-driven strategies tailored to your operations.',
    },
    {
        img: '/service4.jpg',
        title: 'Integration',
        desc: 'Seamlessly connect tools and platforms for unified operations.',
    },
    {
        img: '/service5.jpg',
        title: 'Growth Solutions',
        desc: 'Empower your business with strategies designed for sustainable scaling.',
    },
    {
        img: '/service6.jpg',
        title: 'Data Management',
        desc: 'Organize, secure, and access your data efficiently across your teams.',
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section className="services-section">
            <h2 className="services-heading">Services We Provide</h2>
            <p className="services-subheading">
                Explore how we help you automate, analyze, and accelerate your business.
            </p>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <img
                            src={service.img}
                            alt={service.title}
                            className="service-img"
                            loading="lazy"
                        />
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>

            <div className="services-cta">
                <button className="services-button">Explore All Solutions →</button>
            </div>
        </section>
    );
};

export default ServicesSection;
