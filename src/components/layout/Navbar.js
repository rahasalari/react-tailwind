function Navbar () {
    return (
        <ul class="bg-gray-100 flex pt-5">
            <li class="flex-1 mr-2 hidden md:block">
                <a class="text-left text-xs px-10" href="#*">MailMaker</a>
            </li>
            <li class=" ms-10 md:flex-none md:mr-2">
                <a class="text-center text-xs px-4" href="#*">Solution</a>
                <a class="text-center text-xs px-4" href="#*">Features</a>
                <a class="text-center text-xs px-4" href="#*">Pricing</a>
                <a class="text-center text-xs px-4" href="#*">Support</a>
            </li>
            <li class="text-right flex-1 me-10">
                <a class="text-xs px-4" href="#*">Log in</a>
                <button class="bg-gray-100 hover:bg-gray-100 text-gray-900 d py-1 px-4 border border-gray-300 shadow text-xs">
                    Signup
                </button>
            </li>
        </ul>
    )
}
export default Navbar;
