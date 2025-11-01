import { fetchWithCache } from '../src/libs/airtable.js';

/**
 * Get careers page data from Airtable
 * Returns the same structure as careers.json for seamless integration
 */
export async function getCareersData() {
  try {
    const data = await fetchWithCache('Copy_Careers', 'careers');
    
    if (!data) {
      console.warn('Careers data not found in Airtable, using fallback');
      return getCareersDataFallback();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching careers data from Airtable:', error);
    return getCareersDataFallback();
  }
}

/**
 * Fallback data in case Airtable is unavailable
 */
function getCareersDataFallback() {
  return {
    images: {
      jobImages: {
        "personal-care-assistant-full-time": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757651528/istockphoto-2047480956-612x612_ghepml.jpg",
        "personal-care-assistant-part-time": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757651526/istockphoto-2197953344-612x612_aafwiv.jpg",
        "personal-care-assistant-weekend": "https://res.cloudinary.com/dvauarkh6/image/upload/v1757651536/istockphoto-2185020253-612x612_ir8lka.jpg"
      }
    },
    hero: {
      badge: "Careers",
      title: "Join Our",
      titleHighlight: "Care Team",
      description: "Make a meaningful difference in people's lives while building a rewarding career in Personal Assistance Services (PAS). We're looking for compassionate, dedicated caregivers to join our growing team in Houston.",
      stats: []
    },
    jobListings: {
      title: "Current Openings",
      subtitle: "Join our team of dedicated caregivers making a difference in Houston.",
      jobs: [
        {
          id: 1,
          slug: "home-care-assistant-full-time",
          title: "Caregiver",
          type: "Full-time",
          location: "Houston, TX & Surrounding Areas",
          salary: "",
          posted: "Now Hiring",
          description: "Join our compassionate team and make a meaningful difference in the lives of our clients. We're seeking dedicated Caregivers who are passionate about providing exceptional Personal Assistance Services (PAS) to seniors and individuals with disabilities in the comfort of their own homes in Houston."
        },
        {
          id: 2,
          slug: "home-care-assistant-part-time",
          title: "Caregiver",
          type: "Part-time",
          location: "Houston, TX & Surrounding Areas",
          salary: "",
          posted: "Now Hiring",
          description: "We are seeking compassionate Caregivers to provide professional Personal Assistance Services (PAS) in clients' homes in Houston. This position offers the opportunity to build meaningful relationships with clients and their families while delivering high-quality non-medical care services."
        },
        {
          id: 3,
          slug: "home-care-assistant-weekend",
          title: "Caregiver",
          type: "Weekend Shifts",
          location: "Houston, TX & Surrounding Areas",
          salary: "",
          posted: "Now Hiring",
          description: "Looking for weekend Caregivers to join our team. Provide essential Personal Assistance Services (PAS) and companionship to clients during weekend hours."
        }
      ],
      buttons: {
        viewDetails: "View Details",
        applyNow: "Apply Now"
      }
    }
  };
}

export default getCareersData;

