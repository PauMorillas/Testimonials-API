import TestimonialRepository from "../Repository/TestimonialRepository.js";

const TestimonialService = {
  findAll: () => {
    return TestimonialRepository.findAll();
  },
  findAllByUser: (userId) => {
    return TestimonialRepository.findAllByUser(userId);
  },
};

export default TestimonialService;
