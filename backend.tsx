const express = require('express');
const { google } = require('googleapis');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

const base64Credentials = process.env.GOOGLE_SERVICE_ACCOUNT_KEY_BASE64;

if (!base64Credentials) {
    throw new Error('GOOGLE_SERVICE_ACCOUNT_KEY_BASE64 is not defined in the environment variables.');
}
const credentials = JSON.parse(Buffer.from(base64Credentials, 'base64').toString('utf-8'));

// const credentials = Buffer.from(base64Credentials, 'base64').toString('utf-8');
// const credentialsJSON = JSON.parse(credentials);
// const keyFile = JSON.stringify(credentialsJSON);
// console.log('Parsed credentials:', keyFile);


const sheets = google.sheets('v4');
const auth = new google.auth.GoogleAuth({
    credentials,
    // keyFile: process.env.GOOGLE_SERVICE_ACCOUNT_KEY,
    // keyFile: credentialsJSON,
    // keyFile: JSON.stringify(credentialsJSON),
    // keyFile: 'credentials.json', // Path to your service account key file
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
});

// Your Google Sheets ID and range
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = 'Sheet1!A1:E2'; // Adjust this to match your sheet structure

// API Endpoint to Fetch Data
app.get('/sheet', async (req, res) => {
    try {
        const client = await auth.getClient();
        const response = await sheets.spreadsheets.values.get({
            auth: client,
            spreadsheetId: SPREADSHEET_ID,
            range: RANGE,
        });

        const rows = response.data.values;
        if (rows.length === 0) {
            return res.status(404).send('No data found in the sheet.');
        }

        res.status(200).json(rows);
    } catch (error) {
        console.error('Error fetching data from Google Sheets:', error);
        res.status(500).send('Failed to fetch data.');
    }
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
