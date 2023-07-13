const Boxes = () => {
    return(
        <>
        <div class=''>

            <div class='mt-16'>
                <h2 class='text-2xl text-center'>
                    Email Marketing
                </h2>
                <h2 class='text-2xl text-center'>
                    Automation Made Simple 
                </h2>
                <p class='text-center mt-3 text-xs text-slate-400'>
                    Email Marketers find sucsess by ignoring best practices and focusing on their customers.
                </p>
            </div>

            <div class='mt-14 sm:flex sm:flex-wrap  sm:justify-center sm:gap-12'>
                <div class="box-content h-56 w-40 p-6 border-none bg-gray-100 mx-auto sm:mx-0">
                    <div class="rounded-full h-10 w-10 bg-violet-700 text-white text-center mt-5 ms-auto me-auto text-sm pt-2">01</div>
                    <p class='text-xs text-center mt-4'>
                        Expanding your business
                    </p>
                    <p class='text-center text-xs text-gray-600 mt-8'>
                        Try out Benchmark for free
                        to discover how simple 
                        effective email marketing can
                        be.
                    </p>
                </div>
                <div class="mt-10 mx-auto box-content h-56 w-40 p-6 border-none bg-gray-100 sm:mt-0 sm:mx-0">
                    <div class="rounded-full h-10 w-10 bg-violet-700 text-white text-center mt-5 ms-auto me-auto text-sm pt-2">02</div>
                    <p class='text-xs text-center mt-4'>Sign up free</p>
                    <p class='text-center text-xs text-gray-600 mt-8'>
                        Try out Benchmark for free
                        to discover how simple 
                        effective email marketing can
                        be.
                    </p>
                </div>
                <div class="mt-10 mx-auto box-content h-56 w-40 p-6 border-none bg-gray-100 sm:mt-0 sm:mx-0">
                    <div class="rounded-full h-10 w-10 bg-violet-700 text-white text-center mt-5 ms-auto me-auto text-sm pt-2">03</div>
                    <p class='text-xs text-center mt-4'>Explore your options</p>
                    <p class='text-center text-xs text-gray-600 mt-8'>
                        Try out Benchmark for free
                        to discover how simple 
                        effective email marketing can
                        be.
                    </p>
                </div>
            </div>

            <div class='mt-10 text-center'>
                <button class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs">
                Start now
                </button>
            </div>

        </div>
        </>
    )
}
export default Boxes;