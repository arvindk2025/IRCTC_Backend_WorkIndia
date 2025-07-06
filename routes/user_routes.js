const express = require('express');
const router = express.Router();
const userController = require('../controllers/user_controllers');
const authController = require('../controllers/auth_controllers');
const authMiddleware = require('../middleware/authMiddleware');



router.get('/availability', userController.getSeatAvailability);
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/book',  authMiddleware, userController.bookSeat);
router.get('/getAllbookings', authMiddleware, userController.getBookingDetails);


module.exports = router;

