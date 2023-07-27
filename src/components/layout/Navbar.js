import { Link } from "react-router-dom";

function Navbar() {
  return (
    <ul className="bg-gray flex pt-5">
      <li className="flex-1 mr-2 hidden md:block">
        <Link className="text-left text-xs px-10" to="/">
          MailMaker
        </Link>
      </li>
      <li className="ms-10 md:flex-none md:mr-2">
        <Link className="text-center text-xs px-4" to="solution">
          Solution
        </Link>
        <Link className="text-center text-xs px-4" to="features">
          Features
        </Link>
        <Link className="text-center text-xs px-4" to="pricing">
          Pricing
        </Link>
        <Link className="text-center text-xs px-4" to="support">
          Support
        </Link>
      </li>
      <li className="text-right flex-1 me-10">
        <a className="text-xs px-4" href="#*">
          Log in
        </a>
        <button className="bg-gray-100 hover:bg-gray-100 text-gray-900 d py-1 px-4 border border-gray-300 shadow text-xs">
          Signup
        </button>
      </li>
    </ul>
  );
}
export default Navbar;
