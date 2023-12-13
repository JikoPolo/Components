import React from "react";
import Stars from "../graphics/Stars";
import AvatarRounded from "./avatars/AvatarRounded";

interface CardProps {
  name?: string | undefined;
  job?: string | undefined;
  description?: string | undefined;
  width?: string;
}

const Card: React.FC<CardProps> = ({
  name,
  job,
  description = "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
  width = "w-96",
}) => {
  const cardClass = `card ${width} bg-base-100 shadow-xl`;

  return (
    <div className={cardClass}>
      <div className="card-body">
        {/* stars */}
        <Stars />
        <p>“ {description} ”</p>
        <div className="flex">
          <AvatarRounded name={name} job={job} />
        </div>
      </div>
    </div>
  );
};

export default Card;
