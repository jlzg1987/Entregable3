const {Router} = require('express');
const { createUser, putUser } = require('../controlers/users.controlers');

const router = Router();

router.post('/api/v1/users',createUser);


module.exports = router;