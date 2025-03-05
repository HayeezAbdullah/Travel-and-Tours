import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = ({
  triggerabt,
  triggerHome,
  triggerContact,
  triggerTourpac,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            TravelX
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="hover:text-blue-500 transition"
              onClick={triggerHome}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500 transition"
              onClick={triggerabt}
            >
              About
            </Link>
            <Link
              to="/tour-packages"
              className="hover:text-blue-500 transition"
              onClick={triggerTourpac}
            >
              Tour Packages
            </Link>
            <Link
              to="/guide-vehicle"
              className="hover:text-blue-500 transition"
            >
              Guide & Vehicle
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 transition"
              onClick={triggerContact}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg">
            <div className="flex flex-col space-y-4 p-4">
              <Link
                to="/"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerHome();
                  setIsOpen(false);
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerabt();
                  setIsOpen(false);
                }}
              >
                About
              </Link>
              <Link
                to="/tour-packages"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Tour Packages
              </Link>
              <Link
                to="/guide-vehicle"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Guide & Vehicle
              </Link>
              <Link
                to="/contact"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerContact();
                  setIsOpen(false);
                }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
