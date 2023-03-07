const Category = require("../models/categories.models");
const Tasks = require("../models/tasks.models");
const Users = require("../models/users.models");

class UsersServices {
    static async create(newUser) {
      try {
        const userCreated = await Users.create(newUser);
        return userCreated;
      } catch (error) {
        throw error;
      }
    }
    static async getAll () {
        try {
            const result =await Users.findAll({
                include:[
                    {
                        model: Tasks,
                      
                    },
                    {
                        model: Category,
                        attributes: ["name"]
                    }
                ]
            });
            return result;

        } catch (error) {
            throw error;
        }

    }
}

module.exports = UsersServices;