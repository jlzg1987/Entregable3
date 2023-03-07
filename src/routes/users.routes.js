const {Router} = require('express');
const { createUser, getAlltasks } = require('../controlers/users.controlers');

const router = Router();

router.post('/api/v1/users',createUser);
router.get('/api/v1/users/tasks', getAlltasks)

module.exports = router;