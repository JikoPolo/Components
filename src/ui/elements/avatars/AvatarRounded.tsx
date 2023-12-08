import React from "react";

interface AvatarRoundedProps {
  name?: string | undefined;
  job?: string | undefined;
  size?: number | undefined;
}

// default values are set in case no props are passed
const AvatarRounded: React.FC<AvatarRoundedProps> = ({
  name,
  job,
  size = 3,
}) => {
  return (
    // care to have a container in the parent component with flex
    <>
      <div className="avatar mr-6">
        {/* to edit the style of the avatar, just edit this rounded-value property. The size is in rem */}
        <div
          className="rounded-full"
          style={{ width: `${size}rem`, height: `${size}rem` }}
        >
          {/* make this image editable easily */}
          <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <h2 className="card-title capitalize"> {name} </h2>
        <h3 className="capitalize"> {job} </h3>
      </div>
    </>
  );
};

export default AvatarRounded;
