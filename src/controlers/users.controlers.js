const UsersServices = require("../services/users.services");
const createUser = async (req, res) => {

    try {
      const newUser = req.body;
      const result = await UsersServices.create(newUser);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error);
    }
    
  };

  const getAlltasks = async(req,res)=>{
    try {
        const userTasksAll= await UsersServices.getAll()
        res.json(userTasksAll)
    } catch (error) {
        res.status(400).json(error)
    }
}

  module.exports = {
    createUser,getAlltasks,

  };