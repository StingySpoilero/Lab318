import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Route for the index page
app.get('/', (req, res) => {
    res.render('index');
});

// Route for the about page
app.get('/about', (req, res) => {
    res.render('about');
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
    console.log(req.body.data); // Log the submitted data
    res.send('Success');
});

// GET route to download the image
app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'public/image.jpg');
    res.download(file); // Sends the image file for download
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});