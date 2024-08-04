const express = require('express');
const router = express.Router();
const { registerUser, loginUser, updatePassword } = require('../controllers/userController');
const auth = require('../middleware/auth');

// Register User
router.post('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Update Password
router.put('/update-password', auth, updatePassword);

module.exports = router;
