import React from "react";

interface SimpleGalleryProps {
  title: string;
  description: string;
  images: string[];
  style?: React.CSSProperties;
}

const SimpleGallery: React.FC<SimpleGalleryProps> = ({
  title,
  description,
  images,
  ...rest
}) => {
  return (
    <>
      {" "}
      <div className="text-center m-auto mt-10 px-4 sm:px-16 lg:mt-0 lg:py-8 lg:w-full lg:max-w-7xl">
        <h1 className="text-5xl font-bold mb-4"> {title} </h1>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
      <div id="simple-gallery" className="grid" {...rest}>
        {images.map((image, index) => (
          <div
            key={image} // assuming each image URL is unique
            className={`item-${index + 1}`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>
    </>
  );
};

export default SimpleGallery;
