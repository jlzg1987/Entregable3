const {Router} = require('express');
const { createtasks } = require('../controlers/tasks.controlers');

const router = Router();

router.post('/api/v1/tasks',createtasks);


module.exports = router;