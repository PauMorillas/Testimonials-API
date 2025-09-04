import sequelize from "./src/Config/db.config.js";
// Importa los modelos
import User from "./src/Repository/Model/UserModel.js";
import Testimonial from "./src/Repository/Model/TestimonialModel.js";

// Establece la relación entre los modelos
User.hasMany(Testimonial);
Testimonial.belongsTo(User);

const initDb = async () => {
  try {
    // Sincroniza todos los modelos con la base de datos.
    // Usamos force: true para eliminar las tablas si ya existen y recrearlas.
    // TODO: Esto es útil en desarrollo, pero no en producción.
    await sequelize.sync({ force: true });

    // Crea un usuario de prueba
    const user1 = await User.create({
      username: "cliente_uno",
      email: "cliente.uno@ejemplo.com",
      pass: "passwordSegura123",
    });
    console.log(`Usuario creado con ID: ${user1.id}`);

    // Crea otro usuario para demostrar la diferencia
    const user2 = await User.create({
      username: "cliente_dos",
      email: "cliente.dos@ejemplo.com",
      pass: "passwordSecreta456",
    });
    console.log(`Usuario creado con ID: ${user2.id}`);

    // Crea testimonios asociados al primer usuario (UserId: 1)
    await Testimonial.bulkCreate([
      {
        author: "Juan Pérez",
        occupation: "Gerente de Proyectos",
        content:
          "El servicio superó nuestras expectativas, la atención es inmejorable. ¡Muy recomendado!",
        review: 5,
        UserId: user1.id,
      },
      {
        author: "Ana García",
        occupation: "Diseñadora UX",
        content:
          "Herramienta intuitiva y fácil de usar. La interfaz de usuario es impecable.",
        review: 4,
        UserId: user1.id,
      },
    ]);
    console.log("Testimonios del usuario 1 creados.");

    // Crea un testimonio para el segundo usuario (UserId: 2)
    await Testimonial.create({
      author: "Carlos Ruiz",
      occupation: "Desarrollador Full-Stack",
      content:
        "Me ayudaron a integrar el widget de testimonios en tiempo récord. El equipo técnico es muy eficiente.",
      review: 5,
      UserId: user2.id,
    });
    console.log("Testimonio del usuario 2 creado.");
    console.log(
      "Base de datos inicializada: tablas creadas y relaciones establecidas."
    );
  } catch (error) {
    console.error("Error al inicializar la base de datos:", error);
  } finally {
    await sequelize.close();
  }
};

initDb();
