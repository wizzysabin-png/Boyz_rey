import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware configuration
app.use(morgan('dev')); // Logger middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Basic route structure
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
