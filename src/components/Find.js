import find from '../assets/find.png'

const Find = () => {
    return(
        <>
            <div class='mt-20'>               
                <div class='text-2xl text-center'>
                    <p>All you need to A</p>
                    <p>single platform</p>
                </div>

                <div class='md:flex md:justify-around mt-14'>
                    <div class=''>
                        <div class='text-base text-center md:text-start mt-14'>
                            <p>Homework to help</p>
                            <p>you take acton.</p>
                        </div>
                        <div class='text-xs text-center md:text-start text-slate-600 mt-4'>
                            <p>
                                to prevent procrastination and help you
                            </p>
                            <p>
                                apply what you learn, you'll get manageable
                            </p>
                            <p>
                                homework broken out.
                            </p>
                        </div>
                        <div class='text-center md:text-left'>
                            <button class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs mt-4">
                                Find Out More
                            </button>
                        </div>
                    </div>

                    <div class='mt-14'>
                        <div class='text-base text-center md:text-start'> 
                            <p>How to write every email</p>
                            <p>you should be sending.</p>
                        </div>
                        <div class='text-xs text-center md:text-start text-slate-600 mt-4'>
                            <p class=''>
                                to prevent procrastination and help you
                            </p>
                            <p>
                                apply what you learn, you'll get manageable
                            </p>
                            <p>
                                homework broken out.
                            </p>
                        </div>
                        <div class='text-center md:text-left' >
                            <button class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs mt-4">
                                Find Out More
                            </button>
                        </div>
                    </div>
                    
                    <div>
                        <img src={find} alt="find" class="h-64 w-72 hidden md:block"/>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Find;