import { DataTypes } from "sequelize";
import TestimonialRepository from "../Repository/TestimonialRepository.js";
import TestimonialService from "../Service/TestimonialService.js";
import Testimonial from "../Repository/Model/TestimonialModel.js";

const TestimonialController = {
  getAll: async (req, res) => {
    try {
      const testimonials = await TestimonialService.findAll();
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los testimonios.",
        error: error.message,
      });
    }
  },

  getAllByUser: async (req, res) => {
    try {
      const { userId } = req.params; // Obtiene el userId de la url
      let testimonials;

      if (!userId || userId < 0 || isNaN(Number(userId))) {
        return res
          .status(400)
          .json({ message: "Se requiere un ID de usuario válido." });
      }

      testimonials = await TestimonialService.findAllByUser(userId);
      res.status(200).json(testimonials);
    } catch (error) {
      res.status(500).json({
        message: "Error al obtener los testimonios.",
        error: error.message,
      });
    }
  },
};

export default TestimonialController;
