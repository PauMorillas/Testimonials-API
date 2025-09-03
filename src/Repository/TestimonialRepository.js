import Testimonial from "./Model/TestimonialModel.js";

const TestimonialRepository = {
  findAll: () => {
    return Testimonial.findAll();
  },
};

export default TestimonialRepository;
