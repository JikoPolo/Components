import Stars from "../graphics/Stars";

const Card = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        {/* stars */}
        <Stars />
        <p>
          “You made it so simple. My new site is so much faster and easier to
          work with than my old site. I just choose the page, make the change.”
        </p>
        <div className="flex w-full pt-4">
          <div className="avatar mr-6">
            <div className="w-12 h-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h2 className="card-title capitalize">Vico l'homo</h2>
            <h3 className="capitalize">freelance react developer</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
