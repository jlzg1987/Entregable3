const {Router} = require('express');
const { createtasks, updateTasks, deleteTasks } = require('../controlers/tasks.controlers');

const router = Router();

router.post('/api/v1/tasks',createtasks);
router.put('/api/v1/tasks/:id', updateTasks)
router.delete("/api/v1/tasks/:id", deleteTasks);

module.exports = router;