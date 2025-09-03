import { DataTypes } from "sequelize";
import sequelize from "../config/db.config.js";

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

export default User;
