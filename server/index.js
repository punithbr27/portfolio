require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors()); // Allow requests from our frontend
app.use(express.json()); // Allow our server to accept JSON data

// A test route
app.get('/', (req, res) => {
    res.send('<h1>Portfolio Server is Running!</h1>');
});

// TODO: We will add the /api/contact route here later for Formspree.

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});