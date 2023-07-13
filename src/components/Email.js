import { useState } from "react";

const Email = () => {

    const[search, setSearch] = useState("");

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
        <div class="bg-gray-100 pb-14 pt-14">

            <div class="mt-5">
                <h2 class="text-2xl sm:text-4xl text-center">
                    SMS Marketing and <span class="text-violet-700">Email</span>
                </h2>
                <h3 class="text-2xl sm:text-4xl text-center">
                    <span class="text-violet-700">Marketing</span> Made Easy.
                </h3>
            </div>

            <div>
                <p class="mt-3 text-xs text-center text-slate-400">
                    You can get started with your marketing automation in a few minutes 
                </p>
            </div>
            <div class="mt-12 text-center sm:flex justify-center">
                <div class="">
                    <input type="text" value={search} onChange={searchHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                </div>
                <div class="">
                    <button class="bg-black text-white  py-2 px-8 border text-sm mt-3 sm:ms-3 sm:mt-0">
                        Let's Talk
                    </button>
                </div>
            </div>
        </div>
        </>
    )
};
export default Email;