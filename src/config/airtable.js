import Airtable from 'airtable';

// Airtable configuration
const AIRTABLE_TOKEN = import.meta.env.VITE_AIRTABLE_TOKEN || 'your-token-here';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || 'appvM2lDe6RRvDjl0';
const AIRTABLE_TABLE_NAME = 'GDC_Table';

// Debug logging
console.log('Airtable Configuration:');
console.log('Token:', AIRTABLE_TOKEN ? `${AIRTABLE_TOKEN.substring(0, 10)}...` : 'NOT SET');
console.log('Base ID:', AIRTABLE_BASE_ID);
console.log('Table Name:', AIRTABLE_TABLE_NAME);

// Configure Airtable with custom settings
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_TOKEN
});

// Initialize base and table
const base = Airtable.base(AIRTABLE_BASE_ID);
console.log('Base:', base);
const table = base(AIRTABLE_TABLE_NAME);
console.log('Table:', table);

// Field mappings from our app to Airtable schema
const FIELD_MAPPINGS = {
  data: 'Data',
  name: 'Name' // This could be used for slug or identifier
};



export { base, table, FIELD_MAPPINGS };
