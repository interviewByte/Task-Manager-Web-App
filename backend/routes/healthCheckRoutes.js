// routes/healthCheckRoutes.js
const express = require('express');
const router = express.Router();

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).send('Backend is hosted and running successfully');
});

module.exports = router;
