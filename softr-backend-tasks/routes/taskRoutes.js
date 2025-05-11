const express = require('express');
const router = express.Router();
const { getTasks, createTask } = require('../controllers/taskController');
const authenticate = require('../middleware/authMiddleware');

router.get('/', authenticate, getTasks);
router.post('/', authenticate, createTask);

module.exports = router;
