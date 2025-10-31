import { fetchWithCache } from '../src/libs/airtable.js';

/**
 * Get services page data from Airtable
 * Returns the same structure as services.json for seamless integration
 */
export async function getServicesData() {
  try {
    const data = await fetchWithCache('Copy_Services', 'services');
    
    if (!data) {
      console.warn('Services data not found in Airtable, using fallback');
      return getServicesDataFallback();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching services data from Airtable:', error);
    return getServicesDataFallback();
  }
}

/**
 * Fallback data in case Airtable is unavailable
 */
function getServicesDataFallback() {
  return {
    images: {
      serviceImages: {
        "personal-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757647571/pexels-kampus-7477691_fbuzpo.jpg",
        "companion-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1747917952/pexels-vlada-karpovich-5790702_1_jsorsb.jpg",
        "respite-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757647660/pexels-jsme-mila-523821574-29372742_btuql4.jpg",
        "in-facility-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757648020/pexels-mike-jones-8805864_tpce8a.jpg",
        "specialized-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757648078/pexels-kampus-7551646_mznizh.jpg",
        "end-of-life-care": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757648473/pexels-liliana-drew-9462344_crre4v.jpg"
      }
    },
    hero: {
      badge: "Our Services",
      title: "Dedicated to providing exceptional",
      titleHighlight: "home care",
      description: "At Guided by Compassion, we offer 13 comprehensive home care services organized into 6 specialized categories—from personal care assistance and homemaking to specialized memory care and 24-hour support—designed to meet your unique needs and enhance your quality of life in the comfort of your own home.",
      stats: [
        { number: "13", label: "Comprehensive Services" },
        { number: "98%", label: "Client Satisfaction" },
        { number: "100%", label: "Licensed & Insured" }
      ]
    },
    serviceDetails: {
      whatWeProvide: "What We Do:",
      keyBenefits: "Why Choose Us:",
      ctaTitle: "Ready to learn more about our services?",
      ctaDescription: "Contact us today at 346-870-2912 or contact@guidedbycompassion.com to schedule your free in-home care consultation. Let us create a personalized care plan for your loved one!",
      ctaButton: "Get Started Today"
    },
    contact: {
      title: "Get a personalized care plan for you or your loved one!",
      contactInfo: [
        {
          icon: "📞",
          title: "Call Us",
          details: "346-870-2912",
          subtitle: "Available during business hours"
        },
        {
          icon: "📧",
          title: "Email Us",
          details: "contact@guidedbycompassion.com",
          subtitle: "We respond within 24 hours"
        },
        {
          icon: "📍",
          title: "Service Area",
          details: "Houston, TX & Surrounding Areas",
          subtitle: "Serving families with excellence across the region."
        }
      ]
    }
  };
}

export default getServicesData;

