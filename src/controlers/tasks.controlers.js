const TasksServices = require("../services/users.services");
const createtasks = async (req, res) => {

    try {
      const newUser = req.body;

      const result = await TasksServices.create(newUser);

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }

  };
  const updateTasks = async(req,res)=>{
    try {
        const {id}=req.params
        const newData = req.body
      await TasksServices.update(newData, id)
       
        res.status(204).send()
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteTasks = async (req, res) => {
    try {
      const { id } = req.params;
      await TasksServices.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  };

  module.exports = {
    createtasks,updateTasks,deleteTasks,

  };