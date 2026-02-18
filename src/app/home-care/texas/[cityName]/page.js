import City from '../../../../views/City';

// ─── City Master Data ─────────────────────────────────────────────────────────

const cityData = {
    'sugar-land':    { name: 'Sugar Land',    county: 'Fort Bend County',    zips: ['77478','77479','77496','77498'] },
    'houston':       { name: 'Houston',        county: 'Harris County',        zips: ['77002','77003','77004','77005','77006','77007','77008','77009','77010'] },
    'friendswood':   { name: 'Friendswood',   county: 'Galveston County',     zips: ['77546'] },
    'alvin':         { name: 'Alvin',          county: 'Brazoria County',      zips: ['77511','77512'] },
    'pearland':      { name: 'Pearland',       county: 'Brazoria County',      zips: ['77581','77584','77588'] },
    'webster':       { name: 'Webster',        county: 'Harris County',        zips: ['77598'] },
    'league-city':   { name: 'League City',   county: 'Galveston County',     zips: ['77573','77574'] },
    'clear-lake':    { name: 'Clear Lake',    county: 'Harris County',        zips: ['77058','77059','77062'] },
    'deer-park':     { name: 'Deer Park',     county: 'Harris County',        zips: ['77536'] },
    'pasadena':      { name: 'Pasadena',       county: 'Harris County',        zips: ['77502','77504','77505','77506'] },
    'seabrook':      { name: 'Seabrook',       county: 'Harris County',        zips: ['77586'] },
    'dickinson':     { name: 'Dickinson',      county: 'Galveston County',     zips: ['77539'] },
    'santa-fe':      { name: 'Santa Fe',      county: 'Galveston County',     zips: ['77510','77517'] },
    'missouri-city': { name: 'Missouri City', county: 'Fort Bend County',    zips: ['77459','77489'] },
    'texas-city':    { name: 'Texas City',    county: 'Galveston County',     zips: ['77590','77591'] },
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

const BASE_URL = 'https://guidedbycompassion.com';
const PHONE    = '346-646-4110';
const PHONE_E164 = '+13466464110';
const EMAIL    = 'contact@guidedbycompassion.com';
const OG_IMAGE = 'https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg';

// ─── Static Params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
    return Object.keys(cityData).map((cityName) => ({ cityName }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({ params }) {
    const { cityName } = await params;
    const data    = cityData[cityName];
    const city    = data?.name ?? cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const county  = data?.county ?? 'Texas';
    const zips    = data?.zips ?? [];
    const fullCity = `${city}, TX`;
    const pageUrl  = `${BASE_URL}/home-care/texas/${cityName}`;
    const coords   = cityCoordinates[cityName] ?? cityCoordinates['houston'];

    // ── Titles & descriptions (length-controlled for SERP) ─────────────────
    // Title: 50-60 chars ideal
    const title = `Home Care in ${fullCity} | Guided by Compassion`;

    // Description: 140-160 chars ideal — keyword-rich, includes phone
    const description = `Trusted home care services in ${fullCity} (${county}). Personal care, companion care, dementia & respite care. Licensed, insured, 24/7. Call ${PHONE}.`;

    return {
        title,
        description,
        keywords: [
            `home care ${city} TX`,
            `home care services ${city} Texas`,
            `in-home care ${city}`,
            `senior care ${city} TX`,
            `personal care services ${city}`,
            `companion care ${city}`,
            `respite care ${city} Texas`,
            `dementia care ${city}`,
            `Alzheimer care ${city} TX`,
            `in-home caregiver ${city}`,
            `home health aide ${city} Texas`,
            `elder care ${city} TX`,
            `non-medical home care ${city}`,
            `home care agency ${county}`,
            `Guided by Compassion ${city}`,
            ...zips.map(z => `home care ${z}`),
        ].join(', '),
        robots: {
            index:                true,
            follow:               true,
            'max-image-preview':  'large',
            'max-snippet':        -1,
            'max-video-preview':  -1,
        },
        alternates: {
            canonical: pageUrl,
        },
        openGraph: {
            type:        'website',
            url:         pageUrl,
            title:       `Home Care Services in ${fullCity} | Guided by Compassion`,
            description: `Compassionate home care in ${fullCity} — personal care, companion care, respite care, dementia & end-of-life care. Available 24/7. Call ${PHONE}.`,
            images: [{
                url:    OG_IMAGE,
                width:  1200,
                height: 630,
                alt:    `Guided by Compassion home care services in ${fullCity}`,
            }],
            siteName: 'Guided by Compassion',
            locale:   'en_US',
        },
        twitter: {
            card:        'summary_large_image',
            title:       `Home Care in ${fullCity} | Guided by Compassion`,
            description: `Licensed home care in ${fullCity}. Personal, companion, respite & dementia care. 24/7 support. Call ${PHONE}.`,
            images:      [OG_IMAGE],
        },
        other: {
            'geo.region':    'US-TX',
            'geo.placename': city,
            'geo.position':  `${coords.lat};${coords.lng}`,
            'ICBM':          `${coords.lat}, ${coords.lng}`,
        },
    };
}

// ─── Page (Server Component) ──────────────────────────────────────────────────

export default async function Page({ params }) {
    const { cityName } = await params;

    const data     = cityData[cityName];
    const city     = data?.name ?? cityName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const county   = data?.county ?? 'Texas';
    const zips     = data?.zips ?? [];
    const fullCity = `${city}, TX`;
    const pageUrl  = `${BASE_URL}/home-care/texas/${cityName}`;
    const coords   = cityCoordinates[cityName] ?? cityCoordinates['houston'];

    // ── 1. LocalBusiness (HomeHealthOrganization) ─────────────────────────

    const localBusinessSchema = {
        '@context':    'https://schema.org',
        '@type':       ['LocalBusiness', 'HomeHealthOrganization'],
        '@id':         `${BASE_URL}/#organization`,
        name:          'Guided by Compassion',
        alternateName: 'Guided by Compassion Home Care',
        image:         OG_IMAGE,
        logo:          'https://res.cloudinary.com/dvauarkh6/image/upload/v1761836162/Logo-Color_vmvekl.png',
        url:           BASE_URL,
        telephone:     PHONE_E164,
        email:         EMAIL,
        description:   `Licensed home care agency in ${fullCity} (${county}), TX. Providing personal care, companion care, respite care, dementia care, end-of-life care, and in-facility care throughout the Greater Houston area.`,
        foundingDate:  '2024',
        address: {
            '@type':           'PostalAddress',
            addressLocality:   city,
            addressRegion:     'TX',
            postalCode:        zips[0] ?? '',
            addressCountry:    'US',
        },
        geo: {
            '@type':    'GeoCoordinates',
            latitude:   coords.lat,
            longitude:  coords.lng,
        },
        areaServed: [
            { '@type': 'City', name: city, containedInPlace: { '@type': 'AdministrativeArea', name: county } },
            { '@type': 'City', name: 'Houston',       containedInPlace: { '@type': 'State', name: 'Texas' } },
            { '@type': 'City', name: 'Sugar Land',    containedInPlace: { '@type': 'State', name: 'Texas' } },
            { '@type': 'City', name: 'Pearland',      containedInPlace: { '@type': 'State', name: 'Texas' } },
            { '@type': 'City', name: 'League City',   containedInPlace: { '@type': 'State', name: 'Texas' } },
            { '@type': 'City', name: 'Friendswood',   containedInPlace: { '@type': 'State', name: 'Texas' } },
        ],
        openingHoursSpecification: {
            '@type':    'OpeningHoursSpecification',
            dayOfWeek:  ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
            opens:      '00:00',
            closes:     '23:59',
        },
        priceRange:       '$$',
        paymentAccepted:  'Cash, Check, Insurance, Medicaid Waiver',
        currenciesAccepted: 'USD',
        aggregateRating: {
            '@type':       'AggregateRating',
            ratingValue:   '4.9',
            reviewCount:   '47',
            bestRating:    '5',
            worstRating:   '1',
        },
        sameAs: [
            'https://www.facebook.com/guidedbycompassion',
            'https://www.linkedin.com/company/guided-by-compassion',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name:    `Home Care Services in ${city}, TX`,
            itemListElement: [
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Personal Assistance Services (PAS)', description: `Daily living assistance for seniors and individuals with disabilities in ${city}, TX.` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Companion Care',      description: `Companionship and social engagement services in ${city}, TX.` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Respite Care',        description: `Relief care for family caregivers in ${city}, TX.` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dementia & Alzheimer\'s Care', description: `Specialized memory care for seniors in ${city}, TX.` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'End-of-Life Care',   description: `Compassionate hospice support in ${city}, TX.` } },
                { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'In-Facility Care',   description: `Supplemental care for assisted living residents in ${city}, TX.` } },
            ],
        },
    };

    // ── 2. WebPage ────────────────────────────────────────────────────────

    const webPageSchema = {
        '@context':        'https://schema.org',
        '@type':           'WebPage',
        '@id':             `${pageUrl}#webpage`,
        url:               pageUrl,
        name:              `Home Care Services in ${fullCity} | Guided by Compassion`,
        description:       `Licensed home care services in ${fullCity}, ${county}. Personal care, companion care, respite care, and dementia care available 24/7.`,
        inLanguage:        'en-US',
        isPartOf:          { '@id': `${BASE_URL}/#website` },
        about:             { '@id': `${BASE_URL}/#organization` },
        datePublished:     '2024-01-01',
        dateModified:      new Date().toISOString().split('T')[0],
        primaryImageOfPage: { '@type': 'ImageObject', url: OG_IMAGE },
        breadcrumb:        { '@id': `${pageUrl}#breadcrumb` },
        speakable: {
            '@type':    'SpeakableSpecification',
            cssSelector: ['h1', '.city-hero-description', '.city-about-description'],
        },
    };

    // ── 3. BreadcrumbList ─────────────────────────────────────────────────

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type':    'BreadcrumbList',
        '@id':      `${pageUrl}#breadcrumb`,
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home',               item: BASE_URL },
            { '@type': 'ListItem', position: 2, name: 'Home Care Texas',    item: `${BASE_URL}/home-care/texas` },
            { '@type': 'ListItem', position: 3, name: `Home Care ${city}`,  item: pageUrl },
        ],
    };

    // ── 4. FAQPage ────────────────────────────────────────────────────────

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type':    'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name:    `What home care services does Guided by Compassion offer in ${city}, TX?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Guided by Compassion offers personal care (PAS), companion care, respite care, specialized dementia and Alzheimer's care, end-of-life care, and in-facility care throughout ${fullCity} (${county}) and the Greater Houston area.`,
                },
            },
            {
                '@type': 'Question',
                name:    `Is Guided by Compassion a licensed home care agency in Texas?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Yes. Guided by Compassion is a fully licensed and insured home care agency serving ${fullCity} and surrounding communities. All caregivers are rigorously background-checked, certified, and trained before placement.`,
                },
            },
            {
                '@type': 'Question',
                name:    `How quickly can home care begin in ${city}, TX?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `In most cases, Guided by Compassion can arrange home care services in ${city} within 24–48 hours of your initial free consultation. Call ${PHONE} to get started today.`,
                },
            },
            {
                '@type': 'Question',
                name:    'Are your caregivers available 24 hours a day?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `Yes. Our caregivers are available 24 hours a day, 7 days a week — including weekends and holidays — to provide continuous home care support in ${city} and across the Greater Houston area.`,
                },
            },
            {
                '@type': 'Question',
                name:    'Does Guided by Compassion accept Medicaid or insurance?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Guided by Compassion works with private pay, long-term care insurance, and Medicaid waiver programs in Texas. Contact us to discuss your specific coverage and payment options.',
                },
            },
            {
                '@type': 'Question',
                name:    `What areas does Guided by Compassion serve near ${city}?`,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: `In addition to ${fullCity}, we serve Houston, Sugar Land, Pearland, League City, Friendswood, Deer Park, Pasadena, Webster, Seabrook, Dickinson, Missouri City, Texas City, and other communities across the Greater Houston metro area.`,
                },
            },
        ],
    };

    // ── 5. Service (City-Specific) ────────────────────────────────────────

    const serviceSchema = {
        '@context':    'https://schema.org',
        '@type':       'Service',
        name:          `Home Care Services in ${city}, TX`,
        serviceType:   'Home Care',
        description:   `Professional and compassionate in-home care services in ${fullCity}, ${county}. We provide personal care, companion care, respite care, and specialized dementia care.`,
        provider:      { '@id': `${BASE_URL}/#organization` },
        areaServed: {
            '@type':          'City',
            name:             city,
            containedInPlace: { '@type': 'AdministrativeArea', name: county },
        },
        availableChannel: {
            '@type':             'ServiceChannel',
            serviceUrl:          pageUrl,
            servicePhone:        PHONE_E164,
            availableLanguage:   'English',
        },
        offers: {
            '@type':        'Offer',
            availability:   'https://schema.org/InStock',
            priceSpecification: {
                '@type':    'PriceSpecification',
                priceCurrency: 'USD',
            },
        },
    };

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <City cityName={cityName} />
        </>
    );
}
