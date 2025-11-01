import './App.css'
import './styles/theme.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { ContentProvider } from './contexts/ContentContext'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import JobDetail from './pages/JobDetail'
import Application from './pages/Application'
import Scheduling from './pages/Scheduling'
import ReferUs from './pages/ReferUs'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import { useEffect, useState } from 'react'
import { getAllBlogPosts } from './libs/getRecord'

const Record_toObject = (record) => {

  let data = {}
  
  record.forEach(field => {
    data[field.name] = JSON.parse(field.data)
  })

  return data
}

// console.log()

function App() {

  const [homeData, setHomeData] = useState(null)

  const [servicesData, setServicesData] = useState(null)

  const [aboutData, setAboutData] = useState(null)
 
  const [schedulingData, setSchedulingData] = useState(null)

  const [contactData, setContactData] = useState(null)

  const [referUsData, setReferUsData] = useState(null)

  const [blogsData, setBlogsData] = useState(null)

  const [careersData, setCareersData] = useState(null)


  const [servicesList, setServicesList] = useState(null)

  const [blogsList, setBlogsList] = useState(null)


  useEffect(() => {
    getAllBlogPosts('Home').then(data => {
      let Records = Record_toObject(data);
      let RecordIds = {};

      // Store record IDs by name
      data.forEach(record => {
        if (record.name) {
          RecordIds[record.name] = record.id;
        }
      });

      console.log(Records, "BSJ");
      console.log(RecordIds, "Record IDs");

      setHomeData(Records.Home)
      setServicesData(Records.Services)
      setAboutData(Records.About)
      setSchedulingData(Records.Scheduling)
      setContactData(Records.Contact)
      setReferUsData(Records.Refer)
      setBlogsData(Records.Blogs)
      setCareersData(Records.Careers)

      setServicesList(Records.ServicesData)
      setBlogsList(Records.BlogsData)
    }).catch(error => {
      console.error('Error loading data from Airtable:', error);
      // Loader will hide when components use fallback JSON data
      // Set minimal data to allow app to render with fallbacks
      setHomeData({})
    })
  }, [])


  const contentData = {
    homeData,
    servicesData,
    aboutData,
    schedulingData,
    contactData,
    referUsData,
    blogsData,
    careersData,
    servicesList,
    blogsList
  };

  const isLoading = !homeData;

  return (
    <ThemeProvider>
      <ContentProvider contentData={contentData}>
        <Loader isLoading={isLoading} />
        <Router>
          <ScrollToTop />
          {homeData && <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:serviceId" element={<Services />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blogs/:blogId" element={<Blogs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/careers/:jobId" element={<JobDetail />} />
              <Route path="/careers/apply" element={<Application />} />
              <Route path="/scheduling" element={<Scheduling />} />
              <Route path="/refer-us" element={<ReferUs />} />
            </Routes>
          </div>}
        </Router>
      </ContentProvider>
    </ThemeProvider>
  )
}

export default App
