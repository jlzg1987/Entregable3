const db = require("../utils/database");
const { DataTypes } = require("sequelize");


const Category = db.define("categories", {
    
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
},{
    timestamps:true, 
    updatedAt:false
});
module.exports = Category;