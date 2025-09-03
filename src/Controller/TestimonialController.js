import TestimonialService from "../services/testimonial.service.js";

const TestimonialController = {
  getAll: async (req, res) => {
    try {
      const testimonials = await TestimonialService.getAll();
      res.status(200).json(testimonials);
    } catch (error) {
      res
        .status(500)
        .json({
          message: "Error al obtener los testimonios.",
          error: error.message,
        });
    }
  },
};

export default TestimonialController;
