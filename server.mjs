import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import 'dotenv/config'


const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.get('/api/getRankings', async (req, res) => {
    try {
        const api_key = process.env.REACT_APP_API_KEY;
        console.log('API Key:', api_key); 
        const response = await fetch(`https://api.sportradar.com/mma/trial/v2/en/rankings.json?api_key=${api_key}`);
        const data = await response.json();

        res.header('Access-Control-Allow-Origin', '*'); // Adjust the origin as needed
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

        res.json(data);
    } catch (error) {
        console.error('Error fetching rankings:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
