import { fetchWithCache } from '../src/libs/airtable.js';

/**
 * Get contact page data from Airtable
 * Returns the same structure as contact.json for seamless integration
 */
export async function getContactData() {
  try {
    const data = await fetchWithCache('Copy_Contact', 'contact');
    
    if (!data) {
      console.warn('Contact data not found in Airtable, using fallback');
      return getContactDataFallback();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching contact data from Airtable:', error);
    return getContactDataFallback();
  }
}

/**
 * Fallback data in case Airtable is unavailable
 */
function getContactDataFallback() {
  return {
    images: {
      hero: {
        main: "/assets/p1.jpg"
      }
    },
    hero: {
      badge: "Contact Us",
      title: "Let's Start Your",
      titleHighlight: "Home Care Journey",
      description: "Ready to provide the best home care services for you or your loved one? Contact Guided by Compassion today for a free consultation. We're here to answer your questions and help you find the perfect home care solution in Houston.",
      stats: [
        { number: "98%", label: "Client Satisfaction" },
        { number: "Free", label: "Initial Consultation" },
        { number: "Same Day", label: "Response Time" }
      ]
    },
    contactInfo: {
      title: "Get in Touch",
      subtitle: "We're here to help you navigate your home care options. Reach out to us through any of these channels.",
      contactItems: [
        {
          icon: "📞",
          title: "Call Us",
          details: "713-325-0885",
          subtext: "Available during business hours",
          link: "tel:+17133250885"
        },
        {
          icon: "📧",
          title: "Email Us",
          details: "contact@guidedbycompassion.com",
          subtext: "We respond within 24 hours",
          link: "mailto:contact@guidedbycompassion.com"
        },
        {
          icon: "📍",
          title: "Service Area",
          details: "Houston, TX & Surrounding Areas",
          subtext: "Serving Houston and surrounding communities",
          link: null
        },
        {
          icon: "🕐",
          title: "Business Hours",
          details: "Mon-Fri: 9AM-5PM, Sat: Closed, Sun: On Call",
          subtext: "On call support available on Sundays",
          link: null
        }
      ],
      emergencyNotice: {
        title: "Emergency Situations",
        text: "For immediate home care needs or emergencies, please call 911"
      }
    },
    contactForm: {
      title: "Send Us a Message",
      subtitle: "Fill out the form below and we'll get back to you as soon as possible.",
      successMessage: {
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll contact you within 24 hours."
      },
      fields: {
        name: {
          label: "Full Name *",
          placeholder: "Enter your full name"
        },
        email: {
          label: "Email Address *",
          placeholder: "Enter your email"
        },
        phone: {
          label: "Phone Number",
          placeholder: "Enter your phone number"
        },
        urgency: {
          label: "Timeline *",
          placeholder: "Select timeline"
        },
        service: {
          label: "Service of Interest",
          placeholder: "Select a service (optional)"
        },
        message: {
          label: "Message *",
          placeholder: "Tell us about your home care needs, questions, or any specific requirements..."
        }
      },
      options: {
        services: [
          { value: "personal-care", label: "Personal Assistance Services (PAS)" },
          { value: "companion-care", label: "Companionship & Emotional Support" },
          { value: "respite-care", label: "Respite & Family Relief Care" },
          { value: "in-facility-care", label: "In-Facility Care" },
          { value: "specialized-care", label: "Specialty Service Packages" },
          { value: "end-of-life-care", label: "End-of-Life Care" },
          { value: "consultation", label: "Free Consultation" },
          { value: "other", label: "Other" }
        ],
        urgency: [
          { value: "immediate", label: "Immediate (Within 24 hours)" },
          { value: "urgent", label: "Urgent (Within 3 days)" },
          { value: "soon", label: "Soon (Within a week)" },
          { value: "planning", label: "Planning ahead" }
        ]
      },
      submitButton: "Send Message",
      submittingButton: "Sending Message...",
      privacyNote: "By submitting this form, you agree to our privacy policy. We will never share your personal information with third parties."
    }
  };
}

export default getContactData;

