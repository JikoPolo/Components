import ScrollIndicator from "../elements/ScrollIndicator";

const Waves = () => {
  return (
    //  wave with base color, check getwaves.io
    <div className="relative">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#191e24"
          fillOpacity="1"
          d="M0,160L48,165.3C96,171,192,181,288,170.7C384,160,480,128,576,106.7C672,85,768,75,864,74.7C960,75,1056,85,1152,112C1248,139,1344,181,1392,202.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
      {/* element to indicate the scroll down the transform properties are there to center prefectly */}
      <ScrollIndicator />
    </div>
  );
};

export default Waves;
