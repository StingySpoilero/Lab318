const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

// POST route with logging
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Success');
});

// Route parameter example
app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    next();
});

app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'public/images/example.jpg');
    res.download(file); // This will trigger the download
});