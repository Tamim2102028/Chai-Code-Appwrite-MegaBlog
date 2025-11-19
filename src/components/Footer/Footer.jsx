import {
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <FaRegEdit className="text-2xl" aria-hidden="true" />
            <span className="text-lg font-semibold">MegaBlog</span>
          </div>

          <ul className="flex gap-4">
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <AiOutlineHome className="inline" aria-hidden="true" />
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <AiOutlineInfoCircle className="inline" aria-hidden="true" />
                <span>About</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
              >
                <AiOutlineMail className="inline" aria-hidden="true" />
                <span>Contact</span>
              </a>
            </li>
          </ul>

          <p className="text-xs text-gray-400 sm:text-right">
            &copy; 2024 MegaBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
