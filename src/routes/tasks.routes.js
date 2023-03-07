const {Router} = require('express');
const { createUser } = require('../controlers/users.controlers');

const router = Router();

router.post('/api/v1/tasks',createUser);


module.exports = router;