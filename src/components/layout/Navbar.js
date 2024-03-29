function Navbar() {
  return (
    <ul className="bg-gray flex pt-5">
      <li className="flex-1 mr-2 hidden md:block">
        <a className="text-left text-xs px-10" href="#*">
          MailMaker
        </a>
      </li>
      <li className="ms-10 md:flex-none md:mr-2">
        <a className="text-center text-xs px-4" href="#*">
          Solution
        </a>
        <a className="text-center text-xs px-4" href="#*">
          Features
        </a>
        <a className="text-center text-xs px-4" href="#*">
          Pricing
        </a>
        <a className="text-center text-xs px-4" href="#*">
          Support
        </a>
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
