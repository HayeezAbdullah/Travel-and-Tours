import { useState } from "react";
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
          <a href="/" className="text-2xl font-bold text-blue-600">
            TravelX
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a
              href="/"
              className="hover:text-blue-500 transition"
              onClick={triggerHome}
            >
              Home
            </a>
            <a
              href="/about"
              className="hover:text-blue-500 transition"
              onClick={triggerabt}
            >
              About
            </a>
            <a
              href="/tour-packages"
              className="hover:text-blue-500 transition"
              onClick={triggerTourpac}
            >
              Tour Packages
            </a>
            <a href="/guide-vehicle" className="hover:text-blue-500 transition">
              Guide & Vehicle
            </a>
            <a
              href="/contact"
              className="hover:text-blue-500 transition"
              onClick={triggerContact}
            >
              Contact
            </a>
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
              <a
                href="/"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerHome();
                  setIsOpen(false);
                }}
              >
                Home
              </a>
              <a
                href="/about"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerabt();
                  setIsOpen(false);
                }}
              >
                About
              </a>
              <a
                href="/tour-packages"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Tour Packages
              </a>
              <a
                href="/guide-vehicle"
                className="hover:text-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Guide & Vehicle
              </a>
              <a
                href="/contact"
                className="hover:text-blue-500"
                onClick={() => {
                  triggerContact();
                  setIsOpen(false);
                }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
