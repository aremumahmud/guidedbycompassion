import { fetchWithCache } from '../src/libs/airtable.js';

/**
 * Get blogs page data from Airtable
 * Returns the same structure as blogs.json for seamless integration
 */
export async function getBlogsData() {
  try {
    const data = await fetchWithCache('Copy_Blogs', 'blogs');
    
    if (!data) {
      console.warn('Blogs data not found in Airtable, using fallback');
      return getBlogsDataFallback();
    }
    
    return data;
  } catch (error) {
    console.error('Error fetching blogs data from Airtable:', error);
    return getBlogsDataFallback();
  }
}

/**
 * Fallback data in case Airtable is unavailable
 */
function getBlogsDataFallback() {
  return {
    images: {
      hero: {
        main: "/assets/pic.jpg"
      },
      articles: {
        featured: "/assets/p1.jpg",
        gallery: [
          "/assets/p1.jpg",
          "/assets/p2.jpg",
          "/assets/p3.jpg",
          "/assets/test1.jpg",
          "/assets/test2.jpg"
        ]
      }
    },
    hero: {
      badge: "Our Blog",
      title: "Home Care Tips &",
      titleHighlight: "Insights",
      description: "Stay informed with our latest articles on home care services, health tips, family support strategies, and industry insights to help you provide the best care for your loved ones in Houston.",
      stats: [
        { number: "6", label: "Expert Articles" },
        { number: "6", label: "Categories" },
        { number: "Weekly", label: "New Content" }
      ]
    },
    searchAndFilter: {
      searchPlaceholder: "Search articles...",
      categories: ["All", "Home Care", "Health", "Companionship", "Specialty Packages", "Safety", "Nutrition"]
    },
    featuredArticle: {
      badge: "Featured Article",
      readFullArticle: "Read Full Article"
    },
    blogGrid: {
      noResults: {
        title: "No articles found",
        description: "Try adjusting your search or filter criteria."
      },
      readMore: "Read more",
      loadMore: "Load More Articles"
    },
    newsletter: {
      title: "Stay Updated",
      description: "Get the latest care tips and insights delivered to your inbox weekly.",
      emailPlaceholder: "Enter your email address",
      subscribeButton: "Subscribe",
      privacyText: "We respect your privacy. Unsubscribe at any time."
    },
    articleView: {
      backToBlogs: "← Back to All Blogs",
      cta: {
        title: "Ready to Get Started?",
        description: "Contact Guided by Compassion today to learn more about our home care services in Houston.",
        button: "Schedule Free Consultation"
      }
    }
  };
}

export default getBlogsData;

