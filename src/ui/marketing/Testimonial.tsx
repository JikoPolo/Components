import Card from "../elements/Card";

const Testimonial = () => {
  return (
    // mb-24 is section common margin bottom
    <section className="mb-6">
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <h1 className="text-5xl font-bold mb-4">
          Our happy clients say about us
        </h1>
        <p className="text-gray-400 text-lg">
          2,157 people have said how good JikoPolo is
        </p>
      </div>
      <div className="flex flex-col items-center gap-8 m-auto mt-10 px-4 sm:px-16 lg:flex-row lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        {/* first card */}
        <Card />

        {/* second card */}
        <Card />

        {/* third card */}
        <Card />
      </div>
    </section>
  );
};

export default Testimonial;
