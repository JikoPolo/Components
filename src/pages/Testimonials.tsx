import Testimonial from "../ui/marketing/testimonials/Testimonial";
import SingleTestimonial from "../ui/marketing/testimonials/SingleTestimonial";

const TestimonialsPage = () => {
  return (
    <>
      <h1 className="text-4xl">TestimonialsPage</h1>
      <ul className="flex gap-12 w-full flex-wrap ">
        <li className="w-full">
          <Testimonial />
        </li>
        <li className="w-full">
          <SingleTestimonial name="viko l'homo" job="dark pornstar" />
        </li>
      </ul>
    </>
  );
};

export default TestimonialsPage;
