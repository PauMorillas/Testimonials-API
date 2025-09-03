import TestimonialRepository from "../repositories/testimonial.repository.js";

const TestimonialService = {
  getAll: () => {
    return TestimonialRepository.findAll();
  },
};

export default TestimonialService;
