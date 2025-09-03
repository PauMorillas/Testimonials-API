import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config(); // Carga variables de entorno

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT,
    logging: true,
    define: {
      timestamps: true, // Añade las columnas createdAt y updatedAt
      freezeTableName: true, // Previene que Sequelize haga los nombres de las tablas en plural
    },
  }
);

// Exportamos la configuracion instanciada asi podemos importarla en otros ficheros (EJ: TestimonialModel)
export default sequelize;
