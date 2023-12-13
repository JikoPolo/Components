import React from "react";

interface Props {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const HowDoesItWork: React.FC<Props> = ({
  title,
  description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit with a longer",
  children,
}) => {
  return (
    // mb-24 is section common margin bottom
    <section className="mb-24">
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <h1 className="text-5xl font-bold mb-4"> {title} </h1>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
      <div className="flex justify-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        {children}
      </div>
    </section>
  );
};

export default HowDoesItWork;
