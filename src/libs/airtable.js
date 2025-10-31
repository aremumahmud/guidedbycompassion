import Airtable from 'airtable';

// Airtable configuration
const AIRTABLE_TOKEN = process.env.NEXT_PUBLIC_AIRTABLE_TOKEN || process.env.AIRTABLE_TOKEN || 'your-token-here';
const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID || process.env.AIRTABLE_BASE_ID || 'appvM2lDe6RRvDjl0';

// Configure Airtable
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_TOKEN
});

// Initialize base
const base = Airtable.base(AIRTABLE_BASE_ID);

/**
 * Helper function to unflatten object from Airtable storage
 */
function unflattenObject(flattened) {
  const result = {};
  
  for (const key in flattened) {
    // Skip Airtable metadata fields
    if (key === 'id' || key === 'lastUpdated') continue;
    
    const keys = key.split('.');
    let current = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      if (!current[keys[i]]) {
        current[keys[i]] = {};
      }
      current = current[keys[i]];
    }
    
    const lastKey = keys[keys.length - 1];
    const value = flattened[key];
    
    // Try to parse JSON strings back to arrays/objects
    if (typeof value === 'string' && (value.startsWith('[') || value.startsWith('{'))) {
      try {
        current[lastKey] = JSON.parse(value);
      } catch (e) {
        current[lastKey] = value;
      }
    } else {
      current[lastKey] = value;
    }
  }
  
  return result;
}

/**
 * Fetch data from an Airtable table by ID
 * @param {string} tableName - Name of the Airtable table
 * @param {string} recordId - ID to filter by
 * @returns {Promise<Object>} - Unflattened data object
 */
async function fetchFromAirtable(tableName, recordId) {
  try {
    const records = await base(tableName).select({
      filterByFormula: `{id} = '${recordId}'`,
      maxRecords: 1
    }).firstPage();
    
    if (records.length === 0) {
      console.warn(`No record found in ${tableName} with id: ${recordId}`);
      return null;
    }
    
    const record = records[0];
    const unflattened = unflattenObject(record.fields);
    
    return unflattened;
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error.message);
    throw error;
  }
}

/**
 * Cache for storing fetched data
 */
const dataCache = new Map();

/**
 * Fetch data with caching (5 minutes cache)
 * @param {string} tableName - Name of the Airtable table
 * @param {string} recordId - ID to filter by
 * @returns {Promise<Object>} - Unflattened data object
 */
async function fetchWithCache(tableName, recordId) {
  const cacheKey = `${tableName}_${recordId}`;
  const cached = dataCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < 5 * 60 * 1000) {
    return cached.data;
  }
  
  const data = await fetchFromAirtable(tableName, recordId);
  dataCache.set(cacheKey, { data, timestamp: Date.now() });
  
  return data;
}

export { base, fetchFromAirtable, fetchWithCache, unflattenObject };