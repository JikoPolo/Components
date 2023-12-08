import React from "react";
import Stars from "../graphics/Stars";
import AvatarRounded from "./avatars/AvatarRounded";

interface CardProps {
  name?: string | undefined;
  job?: string | undefined;
  description?: string | undefined;
}

const Card: React.FC<CardProps> = ({
  name,
  job,
  description = "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change.",
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
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
