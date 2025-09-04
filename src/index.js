// 1. Importar dependencias y módulos
import express from "express";
import dotenv from "dotenv";
import sequelize from "./Config/db.config.js";
import testimonialRoutes from "./Routes/TestimonialRoutes.js";

// 2. Cargar variables de entorno
dotenv.config();

// 3. Inicializar la aplicación de Express
const app = express();
const PORT = process.env.PORT || 3030;

// 4. Middlewares globales
app.use(express.json()); // Permite a Express leer JSON en el body de las peticiones

// 5. Configurar las rutas de la API
app.use("/api/testimonials", testimonialRoutes);

// 6. Conectar a la base de datos y arrancar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en el puerto ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error al conectar a la base de datos:", err);
  });
