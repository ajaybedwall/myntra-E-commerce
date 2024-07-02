import { FaTwitter, FaFacebookSquare, FaDribbble, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-black pt-8 pb-6 realtive top-14 Class Properties z-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-blueGray-200">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-400">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-black text-lightBlue-400 shadow-lg font-normal text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaTwitter />
              </button>
              <button
                className="bg-black text-lightBlue-600 shadow-lg font-normal text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaFacebookSquare />
              </button>
              <button
                className="bg-black text-pink-400 shadow-lg font-normal h-10 text-3xl w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaDribbble />
              </button>
              <button
                className="bg-black text-blueGray-800 shadow-lg font-normal text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <FaGithub />
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-400 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-unstyled">
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">About Us</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Blog</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Github</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Free Products</span>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-blueGray-400 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-unstyled">
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">MIT License</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Terms & Conditions</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Privacy Policy</span>
                  </li>
                  <li>
                    <span className="text-blueGray-300 font-semibold block pb-2 text-sm">Contact Us</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-400 font-semibold py-1">
              Copyright © <span id="get-current-year">2024</span> Ajay Meena
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
