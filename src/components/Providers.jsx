'use client';

import { ThemeProvider } from '../contexts/ThemeContext';
import { ContentProvider } from '../contexts/ContentContext';
import Loader from './Loader';
// import ScrollToTop from './ScrollToTop'; // Next.js handles scoll
import { useEffect, useState } from 'react';
import { getAllBlogPosts } from '../libs/getRecord';

const Record_toObject = (record) => {
    let data = {}
    record.forEach(field => {
        data[field.name] = JSON.parse(field.data)
    })
    return data
}

export default function Providers({ children, initialContent }) {
    // If initialContent is provided (SSR), use it. Otherwise null.
    const [homeData, setHomeData] = useState(initialContent?.homeData || null)
    const [servicesData, setServicesData] = useState(initialContent?.servicesData || null)
    const [aboutData, setAboutData] = useState(initialContent?.aboutData || null)
    const [schedulingData, setSchedulingData] = useState(initialContent?.schedulingData || null)
    const [contactData, setContactData] = useState(initialContent?.contactData || null)
    const [referUsData, setReferUsData] = useState(initialContent?.referUsData || null)
    const [blogsData, setBlogsData] = useState(initialContent?.blogsData || null)
    const [careersData, setCareersData] = useState(initialContent?.careersData || null)
    const [servicesList, setServicesList] = useState(initialContent?.servicesList || null)
    const [blogsList, setBlogsList] = useState(initialContent?.blogsList || null)

    useEffect(() => {
        // If we already have homeData (from SSR), don't fetch again client-side
        if (homeData) return;

        getAllBlogPosts('Home').then(data => {
            let Records = Record_toObject(data);

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
            setHomeData({})
        })
    }, [homeData])

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
                {/* Loader only shows if isLoading is true. If fetched on server, isLoading will be false. */}
                <Loader isLoading={isLoading} />
                {children}
            </ContentProvider>
        </ThemeProvider>
    );
}
