import { useState } from 'react';

import mail from '../../assets/mail.jpeg';

const Footer = () => {

    const[search, setSearch] = useState("");

    const searchHandler = (e) => {
        setSearch(e.target.value)
    }

    return(
        <>
            <div class='mt-20 flex justify-around '>
                <div>
                    <div class='flex w-10 h-5 '>
                        <img src={mail} alt='mail'/>
                        <p class='font-bold ms-3'>MailMaker</p>
                    </div>
                    <p class='mt-10 text-slate-500 text-sm'>subscribe to keep up with the</p>
                    <p class='text-slate-500 text-sm'>latest news</p>
                    <p class='text-sm mt-10'>GET IN TOUCH</p>
                    <div>
                        {/* icons */}
                    </div>
                </div>

                <div class=''>
                    <p class='font-bold'>Learn</p>
                    <p class='mt-3 text-slate-500 text-sm'>Our Product</p>
                    <p class='text-slate-500 text-sm'>Tutorials</p>
                    <p class='text-slate-500 text-sm'>Our Service</p>
                    <p class='text-slate-500 text-sm'>Best Features</p>
                </div>

                <div>
                    <p class='font-bold'>Company</p>
                    <p class='mt-3 text-slate-500 text-sm'>About us</p>
                    <p class='text-slate-500 text-sm'>Careers</p>
                    <p class='text-slate-500 text-sm'>Contact us</p>
                    <p class='text-slate-500 text-sm'>News & Blog</p>
                </div>

                <div class='hidden md:block'>
                    <p class='text-slate-500 text-sm'>Count to popular bi, Lorem Ipsum is</p>
                    <p class='text-slate-500 text-sm'>not simply random text. it has roots.</p>
                    <div class="mt-6 flex">
                        <input type="text" value={search} onChange={searchHandler} class="border pt-3 px-4 placeholder-gray-300 mx-auto"/>
                        <button class="bg-violet-700 text-white  py-2 px-5 border border-violet-700 text-xs">
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;