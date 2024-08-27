const express = require('express');
const path = require('path');
const workingHoursMiddleware = require('./middleware/workingHours');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to check working hours
app.use(workingHoursMiddleware);

// Serve static files from the views directory
app.use(express.static(path.join(__dirname, 'views')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'services.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contact.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
