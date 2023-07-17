import { useState } from "react";

function SignIn () {

    const [ contact, setContact ] = useState({
        name:'',
        email:'',
        phoneNumber:''
    });

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(contact)
    }

    return(
        <div>
            <p>Contact</p>
            <form onSubmit={submitHandler}>
                <div>
                    <label>name</label>
                    <input type="text" name='name' value={contact.name} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                </div>
                <div>
                    <label>email</label>
                    <input type="text" name='email' value={contact.email} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                </div>
                <div>
                    <label>phone number</label>
                    <input type="text" name='phoneNumber' value={contact.phoneNumber} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                </div>
                <div class="">
                    <button class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs mt-4">
                        Let's Talk
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;