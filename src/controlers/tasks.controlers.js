const TasksServices = require("../services/users.services");
const createtasks = async (req, res) => {

    try {
      const newUser = req.body;

      const result = await UsersServices.create(newUser);

      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }

  };
  module.exports = {
    createtasks,

  };