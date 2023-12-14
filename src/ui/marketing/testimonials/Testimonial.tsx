import React from "react";

interface TestimonialProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Testimonial: React.FC<TestimonialProps> = ({
  title = "Our happy clients say about us",
  description,
  children,
}) => {
  return (
    // mb-24 is section common margin bottom
    <section className="my-24">
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
      {/* items-center to align cards from the top so different heights are ok. lg:items-start is used to center this */}
      <div className="flex flex-col items-center gap-8 m-auto mt-10 px-4 sm:px-16 lg:flex-row lg:items-start lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        {/* first card */}
        {children}
      </div>
    </section>
  );
};

export default Testimonial;
