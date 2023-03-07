const Tasks = require("../models/tasks.models");

class TasksServices {
    static async create(newUser) {
      try {
        const tasksCreated = await Tasks.create(newUser);
        return tasksCreated;
      } catch (error) {
        throw error;
      }
    }
}

module.exports = TasksServices;