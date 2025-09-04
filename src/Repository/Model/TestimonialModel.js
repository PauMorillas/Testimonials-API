import { DataTypes } from "sequelize";
import sequelize from "../../Config/db.config.js";

const Testimonial = sequelize.define("Testimonial", {
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  occupation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  review: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
});

export default Testimonial;
