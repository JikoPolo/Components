import React from "react";
import AvatarRounded from "../../elements/avatars/AvatarRounded";

interface SingleTestimonialProps {
  name?: string | undefined;
  job?: string | undefined;
  description?: string | undefined;
}

const SingleTestimonial: React.FC<SingleTestimonialProps> = ({
  name,
  job,
  description = "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
}) => {
  return (
    <section className="mb-6">
      <div className="flex text-center m-auto mt-10 px-4 flex-col items-center justify-center gap-8 sm:px-16 md:gap-12 lg:flex-row lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <div className="flex justify-center">
          {/* the size is 28rem */}
          <AvatarRounded size={28} />
        </div>
        <div className="flex items-center w-3/5 text-center py-8 justify-center gap-8 flex-col lg:items-start lg:text-left lg:w-full">
          <p className="font-bold text-2xl">
            “Simply the best. Better than all the rest. I’d recommend this
            product to beginners and all users.”
          </p>
          <p>{description}</p>
          <h3 className="text-xl capitalize font-bold text-gray-500">
            {name}, {job}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default SingleTestimonial;
