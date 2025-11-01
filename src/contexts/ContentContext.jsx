import React, { createContext, useContext } from 'react';

const ContentContext = createContext();

export const useContent = () => {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider');
  }
  return context;
};

export const ContentProvider = ({ children, contentData }) => {
  const value = {
    homeData: contentData?.homeData || null,
    servicesData: contentData?.servicesData || null,
    aboutData: contentData?.aboutData || null,
    schedulingData: contentData?.schedulingData || null,
    contactData: contentData?.contactData || null,
    referUsData: contentData?.referUsData || null,
    blogsData: contentData?.blogsData || null,
    careersData: contentData?.careersData || null,
    servicesList: contentData?.servicesList || null,
    blogsList: contentData?.blogsList || null,
  };

  return (
    <ContentContext.Provider value={value}>
      {children}
    </ContentContext.Provider>
  );
};

export default ContentContext;

