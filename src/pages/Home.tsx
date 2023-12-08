import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-8">
      <Link to="/headers">Headers</Link>
      <Link to="/footers">Footers</Link>
      <Link to="/templates">templates</Link>
      <Link to="/testimonials">testimonials</Link>
    </div>
  );
};

export default Home;
