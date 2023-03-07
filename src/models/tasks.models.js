const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Tasks = db.define("tasks", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    status:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    usernameId: {
        type: DataTypes.INTEGER,
        allowNull: false,
  
      },
    categoriesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
   
      },
},{
    timestamps:true, 
    updatedAt:false
});
module.exports = Tasks;