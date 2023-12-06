import { Link } from "react-router-dom";

const FooterWithColumns = () => {
  return (
    <footer>
      <div>
        {/* number of columns can change, just adapt width values on each */}
        <div className="flex flex-wrap justify-center w-full m-auto flex-col lg:w-4/5 sm:flex-row">
          {/* first column */}
          <div className="w-full px-4 sm:w-1/4">
            <h4 className="text-lg font-semibold capitalize">
              Lets keep in touch !
            </h4>
            <h5 className="mt-6 mb-2 text-lg">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div>
          </div>

          {/* second column */}
          <div className="w-full px-4 sm:w-1/4">
            <h4 className="text-lg font-semibold text-grey-200 capitalize">
              company
            </h4>
            <ul className="mt-6 text-lg lg:mb-0 mb-6">
              <li className="hover:underline">
                <Link to="/">homepage</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">product</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">company</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">business</Link>
              </li>
            </ul>
          </div>

          {/* third column */}
          <div className="w-full px-4 sm:w-1/4">
            <h4 className="text-lg font-semibold text-grey-200 capitalize">
              help
            </h4>
            <ul className="mt-6 text-lg lg:mb-0 mb-6">
              <li className="hover:underline">
                <Link to="/">Customer support</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">Details</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">Terms & conditions</Link>
              </li>
              <li className="hover:underline">
                <Link to="/product">Privacy policy</Link>
              </li>
            </ul>
          </div>

          {/* fourth column */}
          <div className="w-full px-4 sm:w-1/4">
            <h4 className="text-lg font-semibold text-grey-200 capitalize">
              subscribe to newsletter
            </h4>
            <form className="mt-6">
              <div className="flex flex-col">
                <input
                  type="email"
                  className="bg-white w-full focus:outline-none border-0 px-6 py-3 rounded-full"
                  placeholder="Your Email Address"
                />
                <button className="btn btn-primary w-1/3 mt-4" type="button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="divider divider-neutral"></div>
      <p className="text-sm text-center text-gray-200">
        © Copyright 2023, All Rights Reserved by JikoPolo
      </p>
    </footer>
  );
};

export default FooterWithColumns;
