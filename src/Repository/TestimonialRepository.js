import Testimonial from "./Model/TestimonialModel.js";

const TestimonialRepository = {
  findAll: () => {
    return Testimonial.findAll();
  },
  findAllByUser: (userId) => {
    return Testimonial.findAll({ where: { UserId: userId } });
  },
};

export default TestimonialRepository;
