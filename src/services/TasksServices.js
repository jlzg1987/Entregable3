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

static async update(newData, id) {
        try {
            const result =await Tasks.update(newData, {
                where:{id}
            });
            return result;
        } catch (error) {
            throw error;
        }
    }

static async delete(id) {
        try {
          const result = Tasks.destroy({
            where: { id },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }

}

module.exports = TasksServices;