// 1. Importar dependencias y módulos
import express from "express";
import dotenv from "dotenv";
import sequelize from "./Config/db.config.js";
import testimonialRoutes from "./Routes/testimonial.routes.js";
// Importa los modelos
import User from "./models/user.model.js";
import Testimonial from "./models/testimonial.model.js";

// 2. Cargar variables de entorno
dotenv.config();

// 3. Inicializar la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3030;

// 4. Middlewares globales
app.use(express.json()); // Permite a Express leer JSON en el body de las peticiones
// 5. Definir Relaciones
// Define la relación uno a muchos(1-N) un Usuario tiene muchos Testimonios
User.hasMany(Testimonial);
// Un testimonio pertenece a un solo usuario
Testimonial.belongsTo(User);

// 6. Configurar las rutas de la API
app.use("/api/testimonials", testimonialRoutes);

// 7. Conectar a la base de datos y arrancar el servidor
sequelize
  .sync({ alter: true }) // para que Sequelize añada la clave foránea
  .then(() => {
    console.log("Base de datos conectada y sincronizada.");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });
