import React from "react";

// to better maintain this accordion, maybe use these
interface AccordionProps {
  //   children: React.ReactNode;
  //   title: string;
  className?: string;
  style?: React.CSSProperties;
}

const Accordion = ({ ...rest }: AccordionProps) => {
  return (
    <div className="m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
      <div className="join join-vertical w-full" {...rest}>
        {/* first */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>Polo</p>
          </div>
        </div>
        {/* second */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>Jiko</p>
          </div>
        </div>
        {/* third */}
        <div className="collapse collapse-arrow join-item border border-base-300">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium">
            Click to open this one and close others
          </div>
          <div className="collapse-content">
            <p>l'homo</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
