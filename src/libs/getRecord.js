import { table, FIELD_MAPPINGS } from "../config/airtable";

const recordToData = (record) => {
  try {
    return {
      id: record.id || '',
      name: record.get(FIELD_MAPPINGS.name) || '',
      data: record.get(FIELD_MAPPINGS.data) || {},
      createdAt: record._rawJson?.createdTime || new Date().toISOString(),
    };
  } catch (error) {
    console.error('Error processing record:', error);
    return {
      id: record.id || '',
      name: '',
      data: {},
      createdAt: new Date().toISOString(),
    };
  }
};

export const getAllBlogPosts = async (view = "Home") => {
  return new Promise((resolve, reject) => {
    try {
      // Validate table is initialized
      if (!table) {
        reject(new Error('Airtable table is not initialized. Please check your configuration.'));
        return;
      }

      console.log('Fetching all blog posts...');
      const allRecords = [];
      
      // Build query options
      const queryOptions = {};
      if (view) {
        queryOptions.view = view;
      }
      
      // Select records with proper error handling
      const query = table.select(queryOptions);
      
      if (!query) {
        reject(new Error('Failed to create Airtable query. Table may not exist.'));
        return;
      }

      query.eachPage(
        function page(records, fetchNextPage) {
          try {
            // This function (`page`) will get called for each page of records.
            console.log(`Processing ${records.length} records...`);
            
            if (records && records.length > 0) {
              records.forEach(function(record) {
                try {
                  console.log('Retrieved record:', record.id, record._rawJson?.createdTime);
                  allRecords.push(recordToData(record));
                } catch (recordError) {
                  console.error('Error processing individual record:', recordError);
                }
              });
            }

            // To fetch the next page of records, call `fetchNextPage`.
            // If there are more records, `page` will get called again.
            // If there are no more records, `done` will get called.
            if (fetchNextPage && typeof fetchNextPage === 'function') {
              fetchNextPage();
            }
          } catch (pageError) {
            console.error('Error in page callback:', pageError);
            reject(pageError);
          }
        },
        function done(err) {
          try {
            if (err) {
              console.error('Error fetching blog posts:', err);
              console.error('Error details:', {
                statusCode: err.statusCode,
                error: err.error,
                message: err.message,
                type: err.type
              });
              
              // Provide more specific error messages
              if (err.statusCode === 404) {
                reject(new Error('Table or base not found. Please check your Base ID and table name.'));
              } else if (err.statusCode === 401) {
                reject(new Error('Authentication failed. Please check your token.'));
              } else if (err.statusCode === 403) {
                reject(new Error('Access denied. Please check your token permissions.'));
              } else {
                reject(new Error(`Failed to fetch blog posts: ${err.message || 'Unknown error'}`));
              }
              return;
            }
            
            console.log(`✅ Successfully fetched ${allRecords.length} records`);
            console.log(allRecords);
            
            // Sort by creation date, newest first
            const sortedRecords = allRecords.sort((a, b) => {
              try {
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
              } catch (sortError) {
                console.error('Error sorting records:', sortError);
                return 0;
              }
            });
            
            resolve(sortedRecords);
          } catch (doneError) {
            console.error('Error in done callback:', doneError);
            reject(doneError);
          }
        }
      );
      
    } catch (error) {
      console.error('Error in getAllBlogPosts:', error);
      reject(error);
    }
  });
};