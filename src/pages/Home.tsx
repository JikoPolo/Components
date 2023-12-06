import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/headers">Headers</Link>
      <Link to="/footers">Footers</Link>
    </div>
  );
};

export default Home;
