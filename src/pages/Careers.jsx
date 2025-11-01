import './Careers.css'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContent } from '../contexts/ContentContext'
import careersCopyFallback from '../../copy/careers.json'

function Careers() {
    const { careersData } = useContent();
    const careersCopy = careersData || careersCopyFallback;
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const handleApplyClick = (position) => {
        const subject = encodeURIComponent(`Application for ${position}`);
        const body = encodeURIComponent(`Dear Hiring Manager,

I am writing to express my interest in the ${position} position.

PERSONAL INFORMATION:
- First Name: [Please provide]
- Last Name: [Please provide]
- Email: [Please provide]
- Mobile Phone: [Please provide]
- Address: [Please provide]
- City, State, Postal Code: [Please provide]
- Date of Birth: [Please provide]
- Location: [Please provide]
- Hours wanted weekly: [Please provide]

EDUCATION & TRAINING:
- High School: [Yes/No]
- College: [Yes/No]
- School: [Please provide]
- Degree Received: [Please provide]

EMPLOYMENT HISTORY:
- Previous Employer: [Please provide]
- Supervisor: [Please provide]
- Phone Number: [Please provide]
- Dates of Employment: [Please provide]

PROFESSIONAL REFERENCES:
- Name: [Please provide]
- Phone Number: [Please provide]

ADDITIONAL INFORMATION:
- Availability (Days & Times): [Please specify your availability]
- Trainings or Certifications: [Please list any trainings or certifications that apply to this position, e.g., CNA certification, First Aid/CPR, Dementia Care Training, etc.]
- Have you ever been convicted of a felony in the last (5) years?: [Please explain]
- Are you legally eligible for employment in the United States?: [Please confirm]

I have attached my resume and CV. I am excited about the opportunity to make a meaningful difference in the lives of clients while building a rewarding career in caregiving.

Thank you for considering my application. I look forward to hearing from you soon.

How did you hear about our company?: [Please provide]

Best regards,
[Your Full Name]
[Your Phone Number]
[Your Email Address]`);
        
        window.location.href = `mailto:${import.meta.env.VITE_ADMIN_EMAIL || 'info@example.com'}?subject=${subject}&body=${body}`;
    };

    const jobListings = careersCopy.jobListings.jobs.map((job, index) => ({
        ...job,
        image: careersCopy.images.jobImages[job.slug] || careersCopy.images.jobImages['personal-care-assistant-full-time']
    }));



    return (
        <div className="careers-page">
            <Header />
            
            {/* Hero Section */}
            <section className="careers-hero">
                <div className="careers-hero-container">
                    <div className="careers-hero-content">
                        <div className="careers-hero-text" data-aos="fade-up">
                            <div className="careers-badge">{careersCopy.hero.badge}</div>
                            <h1 className="careers-hero-title">
                                {careersCopy.hero.title}<br />
                                <span className="highlight1">{careersCopy.hero.titleHighlight}</span>
                            </h1>
                            <p className="careers-hero-description">
                                {careersCopy.hero.description}
                            </p>
                            <div className="careers-stats" data-aos="fade-up" data-aos-delay="200">
                                {careersCopy.hero.stats.map((stat, index) => (
                                    <div key={index} className="stat">
                                        <span className="stat-number">{stat.number}</span>
                                        <span className="stat-label">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Job Listings Section */}
            <section className="job-listings-section">
                <div className="job-listings-container">
                    <div className="job-listings-header" >
                        <h2 className="listings-title">{careersCopy.jobListings.title}</h2>
                        <p className="listings-subtitle">
                            {careersCopy.jobListings.subtitle}
                        </p>
                    </div>

                    <div className="job-cards-grid">
                        {jobListings.map((job, index) => (
                            <div key={job.id} className="job-card" data-aos="fade-up" data-aos-delay={index * 200}>
                                <div className="job-card-image">
                                    <img src={job.image} alt={job.title} />
                                    <div className="job-card-overlay">
                                        <span className="job-status">{job.posted}</span>
                                    </div>
                                </div>
                                
                                <div className="job-card-content">
                                    <div className="job-card-header">
                                        <h3 className="job-card-title">{job.title}</h3>
                                        <div className="job-card-meta">
                                            <span className="job-type">{job.type}</span>
                                            <span className="job-salary">{job.salary}</span>
                                        </div>
                                        <div className="job-card-location">
                                            <span className="location-icon">📍</span>
                                            <span>{job.location}</span>
                                        </div>
                                    </div>

                                    <p className="job-card-description">{job.description}</p>

                                    <div className="job-card-actions">
                                        <Link 
                                            to={`/careers/${job.slug}`}
                                            className="view-details-btn"
                                        >
                                            {careersCopy.jobListings.buttons.viewDetails}
                                            <span className="">→</span>
                                        </Link>
                                        {/* <button 
                                            className="apply-btn"
                                            onClick={() => handleApplyClick(job.title)}
                                        >
                                            {careersCopy.jobListings.buttons.applyNow}
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Careers
