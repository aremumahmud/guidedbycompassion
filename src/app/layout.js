import './globals.css';
import '../styles/theme.css';
import '../App.css';

import Providers from '../components/Providers';
import { getAllBlogPosts } from '../libs/getRecord';

// Re-implement helper to transform records server-side
const Record_toObject = (record) => {
    let data = {}
    record.forEach(field => {
        // Parse the JSON data field safely
        try {
            data[field.name] = typeof field.data === 'string' ? JSON.parse(field.data) : field.data;
        } catch (e) {
            console.error(`Error parsing data for ${field.name}:`, e);
            data[field.name] = null;
        }
    })
    return data
}

async function getInitialContent() {
    try {
        const data = await getAllBlogPosts('Home');
        const Records = Record_toObject(data);

        return {
            homeData: Records.Home || null,
            servicesData: Records.Services || null,
            aboutData: Records.About || null,
            schedulingData: Records.Scheduling || null,
            contactData: Records.Contact || null,
            referUsData: Records.Refer || null,
            blogsData: Records.Blogs || null,
            careersData: Records.Careers || null,
            servicesList: Records.ServicesData || null,
            blogsList: Records.BlogsData || null,
        };
    } catch (error) {
        console.error('Failed to fetch initial content:', error);
        return null;
    }
}

export const metadata = {
    title: 'Guided by Compassion - Professional Home Care in Houston, TX',
    description: "Professional home care services in Houston, TX. Guided by Compassion provides compassionate PAS services, specialty care packages for Alzheimer's, dementia, and bedbound patients. Licensed, insured, and trusted by families.",
    keywords: "home care services, Houston TX, senior care, PAS services, personal assistance services, companion care, respite care, Alzheimer's care, dementia care, bedbound care, specialty care packages, Guided by Compassion, Texas home care",
    authors: [{ name: "Guided by Compassion" }],
    robots: "index, follow",
    alternates: {
        canonical: 'https://guidedbycompassion.com/',
    },
    openGraph: {
        type: "website",
        url: "https://guidedbycompassion.com/",
        title: "Guided by Compassion - Professional Home Care in Houston, TX",
        description: "Professional home care services in Houston, TX. Compassionate PAS services, specialty packages for Alzheimer's, dementia, and bedbound care. Licensed, insured, and trusted by families.",
        images: [
            {
                url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png",
                width: 1200,
                height: 630,
            }
        ],
        siteName: "Guided by Compassion",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        url: "https://guidedbycompassion.com/",
        title: "Guided by Compassion - Professional Home Care in Houston, TX",
        description: "Professional home care services in Houston, TX. Compassionate PAS services and specialty care packages.",
        images: ["https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png"],
    },
    other: {
        "geo.region": "US-TX",
        "geo.placename": "Houston",
        "geo.position": "29.7604;-95.3698",
        "ICBM": "29.7604, -95.3698",
        "business:contact_data:street_address": "Houston, TX",
        "business:contact_data:locality": "Houston",
        "business:contact_data:region": "TX",
        "business:contact_data:postal_code": "77001",
        "business:contact_data:country_name": "United States",
        "business:contact_data:phone_number": "713-325-0885",
        "business:contact_data:email": "contact@guidedbycompassion.com",
    },
    icons: {
        icon: [
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "32x32" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "16x16" },
        ],
        apple: [
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "180x180" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "152x152" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "144x144" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "120x120" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "114x114" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "76x76" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "72x72" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "60x60" },
            { url: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png", sizes: "57x57" },
        ],
    },
    manifest: '/manifest.json',
}

export const viewport = {
    themeColor: '#ab516f',
    width: 'device-width',
    initialScale: 1.0,
}

// Default Revalidation (ISR) - 1 hour
export const revalidate = 3600;

export default async function RootLayout({ children }) {
    const initialContent = await getInitialContent();

    const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Guided by Compassion",
        "alternateName": "Guided by Compassion Home Care",
        "url": "https://guidedbycompassion.com",
        "logo": "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png",
        "description": "Professional home care services in Houston, TX. Providing compassionate PAS services and specialty care packages for Alzheimer's, dementia, bedbound patients, and other complex care needs.",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Houston",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77001",
            "addressCountry": "US"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "713-325-0885",
            "contactType": "customer service",
            "email": "contact@guidedbycompassion.com",
            "availableLanguage": "English"
        },
        "sameAs": [
            "https://www.facebook.com/guidedbycompassion",
            "https://www.linkedin.com/company/guided-by-compassion"
        ],
        "foundingDate": "2024",
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 29.7604,
                "longitude": -95.3698
            },
            "geoRadius": "50000"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Home Care Services",
        "description": "Professional home care services for seniors and individuals with disabilities in Houston, TX. Includes PAS services and specialty care packages for Alzheimer's, dementia, bedbound care, and other complex needs.",
        "provider": {
            "@type": "Organization",
            "name": "Guided by Compassion",
            "url": "https://guidedbycompassion.com"
        },
        "areaServed": {
            "@type": "City",
            "name": "Houston",
            "containedInPlace": {
                "@type": "State",
                "name": "Texas"
            }
        },
        "serviceType": "Personal Assistance Services",
        "category": "Health and Wellness",
        "offers": {
            "@type": "Offer",
            "description": "Comprehensive home care services including PAS services and specialty care packages",
            "availability": "https://schema.org/InStock"
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://guidedbycompassion.com/#organization",
        "name": "Guided by Compassion",
        "image": "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png",
        "description": "Professional home care services in Houston, TX",
        "url": "https://guidedbycompassion.com",
        "telephone": "713-325-0885",
        "email": "contact@guidedbycompassion.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Houston",
            "addressLocality": "Houston",
            "addressRegion": "TX",
            "postalCode": "77001",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 29.7604,
            "longitude": -95.3698
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "09:00",
                "closes": "17:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "00:00",
                "closes": "00:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Sunday",
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "priceRange": "$$",
        "paymentAccepted": "Cash, Check, Insurance, Visa, Mastercard, Discover",
        "currenciesAccepted": "USD"
    };

    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Manrope:wght@200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet" />
            </head>
            <body>
                <Providers initialContent={initialContent}>
                    <div className="container">
                        {children}
                    </div>
                </Providers>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
                />
            </body>
        </html>
    )
}
