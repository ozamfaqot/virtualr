import { testimonials } from "../constants/index";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="capitalize text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What People are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, index) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md text-base p-6 border border-neutral-800 font-thin">
              <p>{testimonial.text}</p>
              <div className=" flex items-start mt-8">
                <img
                  src={testimonial.image}
                  alt={testimonial.user}
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
