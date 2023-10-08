const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON data
app.use(express.json());

// Import API routes
const apiRoutes = require('./routes/api');

// Use API routes
app.use('/', apiRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
