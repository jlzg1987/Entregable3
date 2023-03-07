const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Users = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING(30),
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(60),
        unique: true,
        allowNull: false,
        validate: { isEmail: true }
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    timestamps:true, 
    updatedAt:false
});
module.exports = Users;