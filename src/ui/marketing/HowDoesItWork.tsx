import Icon from "../elements/icons/Icon";

const HowDoesItWork = () => {
  return (
    // mb-24 is section common margin bottom
    <section className="mb-24">
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <h1 className="text-5xl font-bold mb-4">How does it work?</h1>
        <p className="text-gray-400 text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit with a longer
          text.{" "}
        </p>
      </div>
      <div className="flex justify-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <ul className="flex flex-col w-96 gap-8 justify-center items-center sm:w-full sm:flex-row">
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Icon />
            <h3 className="font-bold">Create a free account</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Icon />
            <h3 className="font-bold">Build your website</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
          <li className="flex flex-col justify-center items-center text-center gap-2">
            <Icon />
            <h3 className="font-bold">Release & Launch</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HowDoesItWork;
