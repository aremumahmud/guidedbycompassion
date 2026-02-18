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

// ─── Unique Per-City Content (prevents duplicate content penalty) ─────────────
// Each city gets its own intro and about paragraph — different angle, different
// local landmarks, different tone — so Google sees 15 genuinely distinct pages.

const cityContent = {
    'sugar-land': {
        hero: `Sugar Land families trust Guided by Compassion for professional, licensed home care delivered with warmth and dignity. From the established neighborhoods of First Colony and Sugar Creek to newer communities in Riverstone, our background-checked caregivers provide personalized in-home support — so your loved one can age comfortably in the home they love, surrounded by everything familiar.`,
        about: `Sugar Land is one of Fort Bend County's most sought-after communities — known for its master-planned neighborhoods, excellent amenities, and a strong sense of belonging. Families here set a high bar for every service, and home care is no exception. At Guided by Compassion, we meet that standard by carefully pairing each client with a caregiver who is not just trained and vetted, but genuinely committed to their well-being and daily quality of life.`,
    },
    'houston': {
        hero: `Houston is one of the most diverse cities in the nation — and the families who call it home have equally diverse care needs. Guided by Compassion provides licensed, professional in-home care across Houston's many neighborhoods, from the Medical Center and Midtown to Memorial, the Heights, and beyond. Whatever level of support your loved one needs, we build a care plan around their life.`,
        about: `As home to the Texas Medical Center — the largest medical complex in the world — Houston has unparalleled healthcare resources, yet navigating long-term in-home care can still feel overwhelming. Guided by Compassion bridges that gap by providing reliable, compassionate home care that works alongside your loved one's existing medical team. We serve Harris County families throughout the city, adapting to the unique rhythm and needs of each Houston household.`,
    },
    'friendswood': {
        hero: `Friendswood is a close-knit Galveston County community where neighbors genuinely look out for one another — and so do we. Guided by Compassion provides licensed home care services to Friendswood seniors and individuals with disabilities, offering personal care, companionship, and specialized support that allows your loved one to remain safely and comfortably in their own home.`,
        about: `Originally settled by Quakers, Friendswood has always held community care and mutual support as core values — principles that run through everything we do at Guided by Compassion. Serving families along Clear Creek and throughout the Friendswood area, we understand this community's quiet, residential character and the importance of matching clients with caregivers who share its values of respect, discretion, and genuine kindness.`,
    },
    'alvin': {
        hero: `Alvin may be a smaller Brazoria County community, but the care needs of its residents are just as important. Guided by Compassion provides licensed, in-home care to Alvin seniors and families — giving aging adults the personal assistance, companionship, and specialized support they deserve to remain safe and independent at home, without having to leave the town they've called home for decades.`,
        about: `Alvin is a proud Brazoria County community with deep agricultural roots and a strong local identity. For seniors who have spent their lives here, relocating to a care facility is rarely the preferred option — and with Guided by Compassion, it doesn't have to be. We bring professional in-home care directly to Alvin residents, providing the personal attention and consistent presence that institutional settings simply cannot replicate.`,
    },
    'pearland': {
        hero: `Pearland is one of the fastest-growing cities in Texas — and the demand for quality in-home care has grown right alongside it. Guided by Compassion provides professional, licensed home care to Pearland families, offering personal care, companion care, dementia support, and more. Our trained caregivers serve residents across Pearland's master-planned communities and established neighborhoods throughout Brazoria County.`,
        about: `As Pearland has expanded from a small suburb into a thriving city, so has the complexity of caring for aging residents and loved ones with disabilities. Many Pearland families are balancing demanding careers, children, and the responsibility of supporting an aging parent — often without a local support network. Guided by Compassion steps in as a reliable partner, offering flexible care plans that meet families exactly where they are, whether that means a few hours of weekly help or full-time support.`,
    },
    'webster': {
        hero: `Webster sits at the gateway to NASA's Johnson Space Center — a Harris County community built on precision and reliability. Guided by Compassion brings that same standard to home care for Webster seniors. Our licensed, background-checked caregivers provide personalized in-home support across Webster and the Clear Lake corridor, ensuring your loved one receives expert care without leaving the community they love.`,
        about: `Webster is a compact but strategically located Harris County city, close to both HCA Houston Healthcare Clear Lake and the NASA/JSC campus. Families here often manage complex schedules and depend on service providers who are genuinely dependable. At Guided by Compassion, reliability is not a marketing phrase — it is built into every care plan, every caregiver placement, and every check-in call we make to the families we serve.`,
    },
    'league-city': {
        hero: `League City is one of Galveston County's most vibrant waterfront communities — a place where retirees and growing families thrive side by side along the shores of Clear Lake. Guided by Compassion provides licensed home care services to League City seniors, delivering personalized in-home support that preserves independence and dignity for your loved one.`,
        about: `League City's scenic waterfront neighborhoods, active adult community, and rapid growth make it a distinctive environment for home care. Many League City seniors live full, active lives and need supplemental support rather than institutional care. Guided by Compassion specializes in precisely this: flexible, non-intrusive care that wraps around your loved one's existing lifestyle and routines, providing just the right level of help at exactly the right times.`,
    },
    'clear-lake': {
        hero: `Clear Lake is a unique Houston community shaped by the nearby Johnson Space Center and the calm waters of its namesake lake. Guided by Compassion serves Clear Lake families with licensed, compassionate home care — providing personal assistance, companion care, and specialized services so your loved one can stay comfortably and safely in their own home.`,
        about: `The Clear Lake area has long been home to engineers, scientists, and their families — people who value precision, careful planning, and high standards. Those same qualities define how Guided by Compassion operates. From the rigor of our caregiver vetting process to the detail of our care plans and the consistency of our family communication, we hold ourselves to the standard that Clear Lake families expect and deserve.`,
    },
    'deer-park': {
        hero: `Deer Park is an established Harris County community with strong neighborhood pride and a multigenerational character. Guided by Compassion is proud to serve Deer Park seniors and families with licensed, professional in-home care — including personal care, companion care, and specialized support — so your loved one can remain safely at home, close to the neighbors and neighborhood they know.`,
        about: `Deer Park has been home to generations of Harris County families, and many of its long-term residents have no interest in leaving the neighborhoods they have lived in for decades. For seniors who want to age in place, Guided by Compassion provides the in-home care infrastructure that makes it achievable — from daily personal assistance and medication reminders to overnight care and specialized dementia support, all delivered by caregivers who respect the dignity and routines of each client.`,
    },
    'pasadena': {
        hero: `Pasadena is the second-largest city in Harris County — a vibrant, diverse community with a rich history and a strong sense of local identity. Guided by Compassion provides professional home care services to Pasadena seniors and families, offering personal care, companion care, respite support, and specialized dementia care throughout this culturally rich community.`,
        about: `Pasadena's diverse and multigenerational population means that home care needs here are as varied as its residents. Many Pasadena families are caring for aging parents while managing work, children, and other responsibilities — and they need a care agency that offers genuine cultural sensitivity and scheduling flexibility. Guided by Compassion works with every family individually to create a care plan that fits their circumstances, preferences, and values.`,
    },
    'seabrook': {
        hero: `Seabrook is a charming waterfront city on the shores of Clear Lake where community bonds run deep and residents take pride in their quality of life. Guided by Compassion is honored to serve Seabrook seniors with licensed, compassionate home care — providing the in-home support your loved one needs to remain safe, comfortable, and connected to the community they cherish.`,
        about: `Seabrook's small-city character and active waterfront lifestyle make it a desirable place to grow older — and Guided by Compassion helps make aging in place possible. We know that Seabrook residents value personal relationships and trust, which is why we take our caregiver matching process seriously. Every caregiver placed in a Seabrook home is not just vetted and trained, but thoughtfully selected to suit the client's personality, daily routine, and individual preferences.`,
    },
    'dickinson': {
        hero: `Dickinson is a growing Galveston County community between League City and the Gulf Coast, where long-time residents and newer families are building their lives together. Guided by Compassion provides licensed, professional home care to Dickinson seniors — offering personal care, companion care, and specialized support so your loved one can continue living on their own terms, in their own home.`,
        about: `Dickinson is at an interesting inflection point — growing rapidly while retaining the community character that makes it home for so many Galveston County families. For Dickinson seniors who want to age in place rather than transition to a facility, Guided by Compassion provides the comprehensive in-home care infrastructure that makes it possible. Our coordinators meet directly with families to assess needs, build a care plan, and match clients with caregivers who are the right fit — not just available.`,
    },
    'santa-fe': {
        hero: `Santa Fe is a small Galveston County community with a quiet, rural character — where seniors often prefer the comfort of familiar surroundings over the disruption of a care facility. Guided by Compassion proudly serves Santa Fe families with licensed, personalized home care, bringing professional caregiver support directly to your loved one's door, no matter how remote.`,
        about: `In a community as intimate as Santa Fe, independence and privacy carry special weight. Many seniors here have lived in the same homes for decades, surrounded by neighbors they know and a pace of life they value deeply. Guided by Compassion approaches every Santa Fe care plan with that in mind — providing in-home support that is as unobtrusive as it is effective, reinforcing independence rather than replacing it.`,
    },
    'missouri-city': {
        hero: `Missouri City is a thriving Fort Bend County community known for its diverse, master-planned neighborhoods and exceptional quality of life. Guided by Compassion provides professional, licensed home care to Missouri City seniors and families — offering personalized in-home support that keeps your loved one comfortable, safe, and connected to the community they call home.`,
        about: `Missouri City's diverse and growing population includes many multigenerational families navigating the challenges of caring for aging relatives while managing demanding lives. Guided by Compassion is a trusted partner for these families — offering flexible schedules, customized care plans, and a team of thoroughly vetted caregivers who bring consistency and warmth to every visit. Whether you are in Quail Valley, Sienna, or anywhere across Missouri City, we are ready to help.`,
    },
    'texas-city': {
        hero: `Texas City is a resilient Gulf Coast community with a proud history and a tight-knit spirit that spans generations. Guided by Compassion is honored to serve Texas City seniors with licensed, compassionate home care — providing personal care, companion care, and specialized support so your loved one can remain in the home and community they have always loved.`,
        about: `Texas City's long-established waterfront community has a distinctive identity shaped by decades of shared history. Many Texas City seniors are lifelong residents who have built everything they have here — and Guided by Compassion helps protect that by bringing professional, compassionate care directly to their homes. We match every client with a caregiver based on personality and care needs, not just scheduling convenience, because we believe the relationship is as important as the task.`,
    },
};

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
                                {cityContent[cityName]?.hero ??
                                    `Guided by Compassion provides professional, licensed home care services to seniors and individuals with disabilities throughout ${fullCity}${county ? `, ${county}` : ''}. Our background-checked caregivers deliver dignified, compassionate in-home support — right in the comfort of your own home.`
                                }
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
                                {cityContent[cityName]?.about ??
                                    `At Guided by Compassion, we believe every person deserves dignified, personalized care in the comfort of their own home. Serving families across ${fullCity} and the Greater Houston area, our mission is to provide the highest standard of in-home care — always with warmth, professionalism, and a deep respect for each individual's unique needs.`
                                }
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
