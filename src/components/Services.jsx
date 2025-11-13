import './Services.css'
import { useContent } from '../contexts/ContentContext'
import homeCopyFallback from '../../copy/home.json'
import { Link } from 'react-router-dom';

function Services() {
    const { homeData } = useContent();
    const homeCopy = homeData || homeCopyFallback;
    const services = homeCopy.services.serviceCards.map((service, index) => ({
        id: index + 1,
        title: service.title,
        image: homeCopy.images.services.serviceImages[index],
        description: service.description,
        stats: service.stats,
        verified: true
    }));

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-header" data-aos="fade-up">
                    <div className="services-badge">{homeCopy.services.badge}</div>
                    <h2 className="services-title">
                        {homeCopy.services.title} <span className="title-highlight">{homeCopy.services.titleHighlight}</span>
                    </h2>
                    <p className="services-subtitle">
                        {homeCopy.services.subtitle}
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div 
                            key={service.id} 
                            className="service-card" 
                            data-aos="fade-up" 
                            data-aos-delay={`${(index + 1) * 100}`}
                        >
                            <img className="service-img" src={service.image} alt={service.title} />
                            
                            <div className="service-content_1">
                                <div className="service-info">
                                    <div className="service-name">
                                        <h3>{service.title}</h3>
                                        {service.verified && (
                                            // <div className="verified-badge">✓</div>
                                            <div className="verified-badge">{homeCopy.images.services.verifiedIcon}</div>
                                        )}
                                    </div>
                                    <p className="service-desc">{service.description}</p>
                                </div>
                                
                                <div className="service-cta">
                                    {/* <div className="service-stats">
                                        <div className="stat-item">
                                            <i className="stat-icon">👥</i>
                                            <span>{service.stats.clients}</span>
                                        </div>
                                        <div className="stat-item">
                                            <i className="stat-icon">⭐</i>
                                            <span>{service.stats.satisfaction}</span>
                                        </div>
                                    </div> */}
                                    
                                    <div className="service-btn">
                                        <span>{homeCopy.services.learnMoreButton}</span>
                                        <i className="btn-icon">→</i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-cta-section" data-aos="fade-up" data-aos-delay="200">
                    <h3 className="cta-title">{homeCopy.services.ctaSection.title}</h3>
                    <p className="cta-description">
                        {homeCopy.services.ctaSection.description}
                    </p>
                    <Link to="/contact" >
                    <button className="cta-button">
                        {homeCopy.services.ctaSection.button}
                    </button></Link>
                </div>
            </div>
        </section>
    )
}

export default Services
