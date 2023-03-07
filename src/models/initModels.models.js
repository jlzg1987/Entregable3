const Users = require('./users.models')
const Tasks =require('./tasks.models')
const Categories =require('./categories.models')

const initModels=()=>{

    Users.hasMany(Tasks,{
        foreignKey: 'username_id'
    })
    Tasks.belongsTo(Users)

    Categories.hasMany(Tasks,{
        foreignKey: 'categories_id'
    })
    Tasks.belongsTo(Categories)
    
}
module.exports = initModels;