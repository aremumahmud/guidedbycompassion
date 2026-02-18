'use client';
import './City.css';
import { useEffect } from 'react';
import { useParams } from 'next/navigation';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Refer from '../components/Refer';
import Contact from '../components/Contact';
import Link from 'next/link';
import { useContent } from '../contexts/ContentContext';
import contactCopyFallback from '../../copy/contact.json';

// ─── City Data ────────────────────────────────────────────────────────────────

const cityGeoData = {
    'sugar-land':    { county: 'Fort Bend County',    zips: ['77478','77479','77496','77498'] },
    'houston':       { county: 'Harris County',        zips: ['77002','77004','77006','77008','77009'] },
    'friendswood':   { county: 'Galveston County',     zips: ['77546'] },
    'alvin':         { county: 'Brazoria County',      zips: ['77511','77512'] },
    'pearland':      { county: 'Brazoria County',      zips: ['77581','77584','77588'] },
    'webster':       { county: 'Harris County',        zips: ['77598'] },
    'league-city':   { county: 'Galveston County',     zips: ['77573','77574'] },
    'clear-lake':    { county: 'Harris County',        zips: ['77058','77059','77062'] },
    'deer-park':     { county: 'Harris County',        zips: ['77536'] },
    'pasadena':      { county: 'Harris County',        zips: ['77502','77504','77505','77506'] },
    'seabrook':      { county: 'Harris County',        zips: ['77586'] },
    'dickinson':     { county: 'Galveston County',     zips: ['77539'] },
    'santa-fe':      { county: 'Galveston County',     zips: ['77510','77517'] },
    'missouri-city': { county: 'Fort Bend County',    zips: ['77459','77489'] },
    'texas-city':    { county: 'Galveston County',     zips: ['77590','77591'] },
};

const cityDisplayNames = {
    'sugar-land':    'Sugar Land',
    'houston':       'Houston',
    'friendswood':   'Friendswood',
    'alvin':         'Alvin',
    'pearland':      'Pearland',
    'webster':       'Webster',
    'league-city':   'League City',
    'clear-lake':    'Clear Lake',
    'deer-park':     'Deer Park',
    'pasadena':      'Pasadena',
    'seabrook':      'Seabrook',
    'dickinson':     'Dickinson',
    'santa-fe':      'Santa Fe',
    'missouri-city': 'Missouri City',
    'texas-city':    'Texas City',
};

const cityCoordinates = {
    'sugar-land':    { lat: 29.6197, lng: -95.6350 },
    'houston':       { lat: 29.7604, lng: -95.3698 },
    'friendswood':   { lat: 29.5294, lng: -95.2010 },
    'alvin':         { lat: 29.4238, lng: -95.2441 },
    'pearland':      { lat: 29.5636, lng: -95.2860 },
    'webster':       { lat: 29.5377, lng: -95.1183 },
    'league-city':   { lat: 29.5075, lng: -95.0949 },
    'clear-lake':    { lat: 29.5636, lng: -95.1183 },
    'deer-park':     { lat: 29.7052, lng: -95.1238 },
    'pasadena':      { lat: 29.6911, lng: -95.2091 },
    'seabrook':      { lat: 29.5639, lng: -95.0255 },
    'dickinson':     { lat: 29.4608, lng: -95.0513 },
    'santa-fe':      { lat: 29.3780, lng: -95.1058 },
    'missouri-city': { lat: 29.6186, lng: -95.5377 },
    'texas-city':    { lat: 29.3838, lng: -94.9027 },
};

const allCities = [
    { slug: 'houston',       name: 'Houston' },
    { slug: 'sugar-land',    name: 'Sugar Land' },
    { slug: 'pearland',      name: 'Pearland' },
    { slug: 'league-city',   name: 'League City' },
    { slug: 'friendswood',   name: 'Friendswood' },
    { slug: 'clear-lake',    name: 'Clear Lake' },
    { slug: 'deer-park',     name: 'Deer Park' },
    { slug: 'pasadena',      name: 'Pasadena' },
    { slug: 'webster',       name: 'Webster' },
    { slug: 'seabrook',      name: 'Seabrook' },
    { slug: 'dickinson',     name: 'Dickinson' },
    { slug: 'alvin',         name: 'Alvin' },
    { slug: 'missouri-city', name: 'Missouri City' },
    { slug: 'texas-city',    name: 'Texas City' },
    { slug: 'santa-fe',      name: 'Santa Fe' },
];

const processSteps = [
    {
        number: '01',
        title: 'Free Consultation',
        description: "Call us or schedule online. We'll learn about your loved one's needs, preferences, and schedule at no cost.",
    },
    {
        number: '02',
        title: 'Custom Care Plan',
        description: 'Our care coordinator designs a personalized plan covering all aspects of daily care, tailored specifically to your family.',
    },
    {
        number: '03',
        title: 'Caregiver Match',
        description: 'We carefully match your loved one with a trained, background-checked caregiver who fits their personality and needs.',
    },
    {
        number: '04',
        title: 'Care Begins',
        description: 'Services start as quickly as 24–48 hours. We stay in close contact and adjust the plan as needs evolve.',
    },
];

const faqs = (city) => [
    {
        q: `What home care services does Guided by Compassion offer in ${city}?`,
        a: `We provide a full range of in-home care services in ${city}, TX — including personal care, companion care, respite care, specialized care for Alzheimer's and dementia, end-of-life care, and in-facility care. Every plan is built around your loved one's unique situation.`,
    },
    {
        q: 'Is Guided by Compassion licensed and insured in Texas?',
        a: 'Yes. We are a fully licensed and insured home care agency operating throughout Texas. Every caregiver passes rigorous background checks, skills training, and certification before providing care.',
    },
    {
        q: `How quickly can home care services start in ${city}?`,
        a: `In most cases we can begin care within 24–48 hours of your initial consultation. Contact us today and we'll work around your schedule to get started as soon as possible.`,
    },
    {
        q: 'Are your caregivers available 24/7?',
        a: 'Yes. We provide around-the-clock home care and are available 24 hours a day, 7 days a week — including weekends and holidays — so your loved one always has the support they need.',
    },
    {
        q: 'Do you accept insurance or Medicaid for home care services?',
        a: "We work with private pay, long-term care insurance, and Medicaid waiver programs. Contact our team and we will help identify the right payment option for your family's situation.",
    },
    {
        q: `How do I get started with home care in ${city}?`,
        a: `Call us at 346-646-4110 or schedule a free consultation online. Our care coordinator will assess your needs and create a personalized care plan for your loved one in ${city}, TX.`,
    },
];

// ─── Component ────────────────────────────────────────────────────────────────

function City({ cityName: propCityName }) {
    const params = useParams();
    const cityName = propCityName || params?.cityName;

    const { contactData } = useContent();
    const contactCopy = contactData || contactCopyFallback;

    const city = cityDisplayNames[cityName]
        ?? cityName?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
        ?? 'Your City';
    const fullCity  = `${city}, TX`;
    const coords    = cityCoordinates[cityName] ?? cityCoordinates['houston'];
    const mapUrl    = `https://maps.google.com/maps?q=${coords.lat},${coords.lng}&hl=en&z=13&output=embed`;
    const cityFaqs  = faqs(city);
    const geo       = cityGeoData[cityName];
    const county    = geo?.county ?? 'Texas';
    const zips      = geo?.zips ?? [];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [cityName]);

    return (
        <div className="city-page">
            <Header />

            <main id="main-content">

            {/* ── Breadcrumb ───────────────────────────────────────────────── */}
            <nav className="city-breadcrumb" aria-label="Breadcrumb">
                <div className="city-breadcrumb-container">
                    <ol className="breadcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li aria-hidden="true" className="breadcrumb-sep">/</li>
                        <li><Link href="/home-care/texas">Home Care Texas</Link></li>
                        <li aria-hidden="true" className="breadcrumb-sep">/</li>
                        <li aria-current="page">{fullCity}</li>
                    </ol>
                </div>
            </nav>

            {/* ── Hero ─────────────────────────────────────────────────────── */}
            <section className="city-hero" aria-labelledby="city-hero-heading">
                <div className="city-hero-container">
                    <div className="city-hero-content">
                        <div className="city-hero-text" data-aos="fade-right">
                            <span className="city-badge">Serving {county}</span>
                            <h1 id="city-hero-heading" className="city-hero-title">
                                Home Care Services in <span className="highlight1">{fullCity}</span>
                            </h1>
                            <p className="city-hero-description">
                                Guided by Compassion provides professional, licensed home care services to seniors
                                and individuals with disabilities throughout {fullCity}{county ? `, ${county}` : ''}. Our
                                background-checked caregivers deliver dignified, compassionate in-home support — right
                                in the comfort of your own home.
                            </p>
                            <div className="city-cta-buttons">
                                <Link href="/scheduling" className="cta-btn primary">
                                    Schedule a Free Consultation
                                </Link>
                                <Link href="/contact" className="cta-btn secondary-outline">
                                    Contact Us
                                </Link>
                            </div>
                            <div className="city-hero-contact">
                                <span className="city-hero-contact-label">Available 24/7 — Call Now:</span>
                                <a href="tel:346-646-4110" className="city-phone-link">
                                    (346) 646-4110
                                </a>
                            </div>
                            <div className="city-trust-row">
                                <span className="city-trust-badge">✓ Licensed &amp; Insured</span>
                                <span className="city-trust-badge">✓ Background-Checked</span>
                                <span className="city-trust-badge">✓ 24/7 Support</span>
                            </div>
                        </div>
                        <div className="city-hero-image" data-aos="fade-left">
                            <img
                                src="https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg"
                                alt={`Licensed home care services in ${fullCity} — Guided by Compassion caregiver with senior client`}
                                className="hero-image"
                                width="600"
                                height="500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Stats Bar ────────────────────────────────────────────────── */}
            {/* <section className="city-stats-bar" aria-label="Key statistics">
                
            </section> */}

            {/* ── About Section (City-Specific) ─────────────────────────────── */}
            <section className="city-about-section" aria-labelledby="city-about-heading">
                <div className="city-about-container">
                    <div className="city-about-content">
                        <div className="city-about-image" data-aos="fade-right">
                            <img
                                src="https://res.cloudinary.com/dvauarkh6/image/upload/v1757651526/istockphoto-2197953344-612x612_aafwiv.jpg"
                                alt={`Guided by Compassion home care agency serving ${fullCity}, ${county}`}
                                className="city-about-img"
                            />
                            {/* <div className="city-about-badge-float" aria-hidden="true">
                                <span className="badge-float-number">5+</span>
                                <span className="badge-float-text">Years Serving Greater Houston</span>
                            </div> */}
                        </div>
                        <div className="city-about-text" data-aos="fade-left" data-aos-delay="100">
                            <span className="city-section-badge">About Us</span>
                            <h2 id="city-about-heading" className="city-about-title">
                                Trusted Home Care in {city} — <span className="highlight1">Guided by Compassion</span>
                            </h2>
                            <p className="city-about-description">
                                At Guided by Compassion, we believe every person deserves dignified, personalized care
                                in the comfort of their own home. Serving families across {fullCity} and the Greater
                                Houston area, our mission is to provide the highest standard of in-home care — always
                                with warmth, professionalism, and a deep respect for each individual's unique needs.
                            </p>
                            <p className="city-about-description">
                                We are a fully licensed and insured Texas home care agency. Every one of our caregivers
                                is thoroughly background-checked, trained, and matched carefully to each client. Whether
                                your loved one needs occasional assistance or full-time support, we build a care plan
                                that fits their life.
                            </p>
                            {(county || zips.length > 0) && (
                                <p className="city-about-description city-geo-note">
                                    We proudly serve families throughout {fullCity}
                                    {county ? `, ${county}` : ''}
                                    {zips.length > 0 ? `, including zip codes ${zips.join(', ')}` : ''}
                                    {' '}and surrounding communities in the Greater Houston area.
                                </p>
                            )}
                            <div className="city-about-values">
                                {[
                                    { icon: '🏠', label: 'Care in the Comfort of Home' },
                                    { icon: '🤝', label: 'Family-Centered Partnership' },
                                    { icon: '❤️', label: 'Compassion in Every Interaction' },
                                    { icon: '🛡️', label: 'Licensed, Insured & Accountable' },
                                ].map((v) => (
                                    <div key={v.label} className="city-about-value">
                                        <span className="city-about-value-icon" aria-hidden="true">{v.icon}</span>
                                        <span className="city-about-value-label">{v.label}</span>
                                    </div>
                                ))}
                            </div>
                            <Link href="/about" className="city-about-link">
                                Learn More About Us <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Services (Homepage Component) ────────────────────────────── */}
            <div className="city-services-wrapper">
                <Services cityName={city} />
            </div>

            {/* ── How It Works (Process) ───────────────────────────────────── */}
            <section className="city-process-section" aria-labelledby="city-process-heading">
                <div className="city-process-container">
                    <div className="city-process-header" data-aos="fade-up">
                        <span className="city-section-badge">Getting Started</span>
                        <h2 id="city-process-heading" className="city-process-title">
                            How Home Care Works in {city}
                        </h2>
                        <p className="city-process-subtitle">
                            Starting care for your loved one in {fullCity} is simple. Here's what to expect.
                        </p>
                    </div>
                    <div className="city-process-grid">
                        {processSteps.map((step, i) => (
                            <div
                                key={step.number}
                                className="city-process-card"
                                data-aos="fade-up"
                                data-aos-delay={`${i * 100}`}
                            >
                                <div className="city-process-number" aria-hidden="true">{step.number}</div>
                                <h3 className="city-process-card-title">{step.title}</h3>
                                <p className="city-process-card-desc">{step.description}</p>
                            </div>
                        ))}
                    </div>
                    <div className="city-process-cta" data-aos="fade-up">
                        <Link href="/scheduling" className="cta-btn primary">
                            Start with a Free Consultation
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Why Choose Us ─────────────────────────────────────────────── */}
            <section className="city-why-section" aria-labelledby="city-why-heading">
                <div className="city-why-container">
                    <div className="city-why-content">
                        <div className="city-why-text" data-aos="fade-right">
                            <span className="city-section-badge">Why Choose Us</span>
                            <h2 id="city-why-heading" className="city-why-title">
                                Why Families in {city} Choose Guided by Compassion
                            </h2>
                            <div className="city-why-points">
                                {[
                                    {
                                        title: 'Local Knowledge, Community Roots',
                                        body: `We understand the neighborhoods, resources, and unique needs of families in ${fullCity} and the Greater Houston area. Our team is part of this community.`,
                                    },
                                    {
                                        title: 'Thoroughly Vetted Caregivers',
                                        body: 'Every caregiver passes comprehensive background checks, professional training, and skills certification before they ever meet a client.',
                                    },
                                    {
                                        title: 'Personalized Care Plans',
                                        body: "We don't use a one-size-fits-all approach. Your loved one's care plan is built around their specific needs, daily routine, and personal preferences.",
                                    },
                                    {
                                        title: '24/7 Availability & Rapid Response',
                                        body: "Our team is reachable around the clock. Whether you need overnight care, weekend support, or emergency scheduling, we're here.",
                                    },
                                    {
                                        title: 'Transparent, Family-Centered Communication',
                                        body: 'We keep families informed with regular updates and are always available to answer questions or adjust care as needs change.',
                                    },
                                ].map((pt) => (
                                    <div key={pt.title} className="why-point">
                                        <span className="point-icon" aria-hidden="true">✓</span>
                                        <div className="point-content">
                                            <h4>{pt.title}</h4>
                                            <p>{pt.body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="city-why-image" data-aos="fade-left" data-aos-delay="150">
                            <img
                                src="https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790808_nopxnn.jpg"
                                alt={`Home care caregiver providing personal care to senior in ${fullCity}, ${county}`}
                                className="city-why-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Testimonials (Homepage Component) ───────────────────────── */}
            <div className="city-testimonials-wrapper">
                <Testimonials cityName={city} />
            </div>

            {/* ── Refer Section (Homepage Component) ──────────────────────── */}
            <Refer cityName={city} />

            {/* ── Contact Form (Homepage Component) ───────────────────────── */}
            <div className="city-contact-wrapper">
                <Contact cityName={city} />
            </div>

            {/* ── FAQ ──────────────────────────────────────────────────────── */}
            <section className="city-faq-section" aria-labelledby="city-faq-heading">
                <div className="city-faq-container">
                    <div className="city-faq-header" data-aos="fade-up">
                        <span className="city-section-badge">FAQ</span>
                        <h2 id="city-faq-heading" className="city-faq-title">
                            Home Care FAQs for {city}, TX
                        </h2>
                        <p className="city-faq-subtitle">
                            Common questions from families considering home care in {fullCity}.
                        </p>
                    </div>
                    <div className="city-faq-list">
                        {cityFaqs.map((faq, i) => (
                            <details
                                key={i}
                                className="city-faq-item"
                                data-aos="fade-up"
                                data-aos-delay={`${i * 60}`}
                            >
                                <summary className="city-faq-question">{faq.q}</summary>
                                <p className="city-faq-answer">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Service Area ─────────────────────────────────────────────── */}
            <section className="city-area-section" aria-labelledby="city-area-heading">
                <div className="city-area-container">
                    <div className="city-area-content" data-aos="fade-up">
                        <span className="city-section-badge">Service Area</span>
                        <h2 id="city-area-heading" className="city-area-title">
                            Home Care Across Greater Houston, TX
                        </h2>
                        <p className="city-area-description">
                            In addition to {fullCity}, Guided by Compassion serves families throughout the
                            Greater Houston metro area. Select a city to learn about our services near you.
                        </p>
                        <ul className="city-area-list" aria-label="Cities we serve">
                            {allCities.map((c) => (
                                <li key={c.slug}>
                                    {c.slug === cityName ? (
                                        <span className="area-item area-item--current" aria-current="location">
                                            ✓ {c.name}, TX
                                        </span>
                                    ) : (
                                        <Link
                                            href={`/home-care/texas/${c.slug}`}
                                            className="area-item area-item--link"
                                        >
                                            {c.name}, TX
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* ── Map ──────────────────────────────────────────────────────── */}
            <section className="city-map-section" aria-labelledby="city-map-heading">
                <div className="city-map-container">
                    <div className="city-map-content" data-aos="fade-up">
                        <h2 id="city-map-heading" className="city-map-title">
                            Our Service Area in {city}
                        </h2>
                        <p className="city-map-description">
                            We provide home care throughout {fullCity} and surrounding communities.
                        </p>
                        <div className="city-map-wrapper">
                            <iframe
                                src={mapUrl}
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Guided by Compassion home care service area in ${fullCity}`}
                                className="city-map-iframe"
                            />
                        </div>
                        <div className="city-map-actions">
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=Guided+by+Compassion+${encodeURIComponent(fullCity)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="map-link-btn"
                            >
                                View on Google Maps
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginLeft: '8px' }}>
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15 3 21 3 21 9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Final CTA ─────────────────────────────────────────────────── */}
            <section className="city-cta-section" aria-labelledby="city-cta-heading">
                <div className="city-cta-container">
                    <div className="city-cta-content" data-aos="fade-up">
                        <h2 id="city-cta-heading" className="cta-title">
                            Ready to Get Started? We're Here for Your Family in {city}.
                        </h2>
                        <p className="cta-description1">
                            Contact Guided by Compassion today. We'll build a personalized care plan around your
                            loved one's needs and get care started quickly — with no pressure and no obligation.
                        </p>
                        <div className="cta-buttons">
                            <Link href="/scheduling" className="cta-btn primary">
                                Schedule a Free Consultation
                            </Link>
                            <Link href="/contact" className="cta-btn secondary">
                                Contact Our Team
                            </Link>
                        </div>
                        <div className="cta-contact-info">
                            <p>
                                Call{' '}
                                <a href={contactCopy?.contactDetails?.phoneLink ?? 'tel:346-646-4110'}>
                                    {contactCopy?.contactDetails?.phone ?? '346-646-4110'}
                                </a>
                                {' '}or email{' '}
                                <a href={contactCopy?.contactDetails?.emailLink ?? 'mailto:contact@guidedbycompassion.com'}>
                                    {contactCopy?.contactDetails?.email ?? 'contact@guidedbycompassion.com'}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            </main>

            <Footer />
        </div>
    );
}

export default City;
