import { fetchWithCache } from '../src/libs/airtable.js';

/**
 * Get about page data from Airtable
 * Returns the same structure as about.json for seamless integration
 */
export async function getAboutData() {
  try {
    const data = await fetchWithCache('Copy_About', 'about');
    
    if (!data) {
      console.warn('About data not found in Airtable, using fallback');
      return getAboutDataFallback();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching about data from Airtable:', error);
    return getAboutDataFallback();
  }
}

/**
 * Fallback data in case Airtable is unavailable
 * This maintains the same structure as the original about.json
 */
function getAboutDataFallback() {
  return {
    images: {
      hero: {
        main: "/assets/pic.jpg",
        gallery: [
          "/assets/p1.jpg",
          "https://res.cloudinary.com/dvauarkh6/image/upload/v1757651536/istockphoto-2185020253-612x612_ir8lka.jpg",
          "https://res.cloudinary.com/dvauarkh6/image/upload/v1753007261/pexels-kampus-7551617_2_rilfqn.jpg"
        ]
      },
      founder: {
        profile: "/assets/test1.jpg"
      }
    },
    hero: {
      badge: "About Guided by Compassion",
      title: "Providing Reliable Care",
      titleHighlight: "for Your Peace of Mind",
      description: "At Guided by Compassion, we believe that everyone deserves to age gracefully and comfortably in the place they call home. We provide compassionate, professional home care services to families throughout the Houston, Texas area.",
      stats: [
        { number: "300+", label: "Houston Families Served" },
        { number: "3+", label: "Years Serving Houston" },
        { number: "35+", label: "Certified Caregivers" },
        { number: "98%", label: "Client Satisfaction Rate" }
      ]
    },
    mission: {
      title: "Our Mission",
      statement: "At Guided by Compassion, our mission is simple: to provide reliable, personalized care that allows our clients to live safely, comfortably, and with dignity in the place they call home. We are committed to building trusted relationships with our clients and their families, delivering exceptional care that honors each person's unique needs, preferences, and life story.",
      values: "We believe that home is where care feels most meaningful, and we're dedicated to ensuring that our clients can continue their journey of life surrounded by the familiar comforts, memories, and love that make a house a home. Through our comprehensive home care services, we proudly serve families in Houston, ensuring that everyone receives the care and respect they deserve."
    },
    story: {
      title: "Our Story",
      paragraphs: [
        "Guided by Compassion was born from a simple yet profound realization: that the best care happens when people can remain in the place they love most - their home. Our team witnessed firsthand the challenges families face when trying to provide quality care for their loved ones while maintaining their independence and dignity.",
        "What started as a personal mission to help families in Houston has grown into a comprehensive home care provider that has touched the lives of hundreds of families. We've built our reputation on trust, reliability, and genuine care - values that guide every interaction we have with our clients and their families.",
        "Today, we're proud to be a trusted provider of home care services in Houston and surrounding areas, known for our professional approach and compassionate care for individuals with diverse needs and abilities."
      ]
    },
    values: {
      title: "Our Core Values",
      subtitle: "These principles guide everything we do and shape the way we care for our clients and their families.",
      valuesList: [
        {
          icon: "❤️",
          title: "Compassionate Care",
          description: "We believe every person deserves home care services that honor their dignity, respect their choices, and nurture their wellbeing with genuine compassion."
        },
        {
          icon: "🤝",
          title: "Trust & Reliability",
          description: "Building lasting relationships through consistent, dependable home care services that Houston families can count on, day after day."
        },
        {
          icon: "🌟",
          title: "Professional Excellence",
          description: "We strive for the highest standards in everything we do, from caregiver training to care delivery, always seeking to exceed expectations."
        },
        {
          icon: "🏠",
          title: "Home-Centered Care",
          description: "We believe there's no place like home, and we're committed to helping people maintain their independence and comfort in familiar surroundings through our home care services."
        },
        {
          icon: "👥",
          title: "Family Partnership",
          description: "We work closely with Houston families, providing support, communication, and peace of mind throughout the care journey."
        },
        {
          icon: "🌈",
          title: "Inclusive Care",
          description: "We celebrate diversity and provide specialized home care services for all abilities, ensuring everyone receives the care and respect they deserve."
        }
      ]
    },
    commitment: {
      title: "Our Commitment to Excellence in Home Care Services",
      points: [
        {
          title: "Licensed & Insured",
          description: "All our home care caregivers are thoroughly vetted, licensed, and insured for your peace of mind in Houston."
        },
        {
          title: "Ongoing Training",
          description: "We invest in continuous education to ensure our team stays current with home care best practices and regulations."
        },
        {
          title: "Flexible Support",
          description: "We're available during business hours and provide on-call support when needed for our home care clients."
        },
        {
          title: "Personalized Care",
          description: "Every care plan is tailored to meet the unique needs and preferences of each Houston client."
        }
      ]
    },
    cta: {
      title: "Ready to Start Your Home Care Journey?",
      description: "Let Guided by Compassion help you or your loved one maintain independence and dignity at home in Houston. Contact us today for a free consultation and discover how our home care services can support your family.",
      buttons: {
        primary: "Schedule Consultation",
        secondary: "Contact Us"
      }
    }
  };
}

export default getAboutData;

