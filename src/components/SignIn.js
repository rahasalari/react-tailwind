import { useState, useEffect } from "react";
import { Validate } from "./Validate";

function SignIn () {
    
    //states
    const [ contact, setContact ] = useState({
        name : '',
        email : '',
        phoneNumber : '',
    });

    const [ errors, setErrors ] = useState({});

    useEffect(() => {
        setErrors(Validate(contact))
        console.log(errors)
    }, [contact]);

    const changeHandler = (e) => {
        setContact({...contact, [e.target.name] : e.target.value })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(contact);
        // setErrors(validationForm(contact));
    }

    return(
        <div class='mt-20 ms-20'>
            <p class=''>Contact Us</p>
            <form onSubmit={submitHandler} class=''>
                <div class='mt-5'>
                    <label class='text-sm'>name</label>
                    <input type="text" name='name' value={contact.name} onChange={changeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"/>
                    <br></br>
                    {errors.name && <span class='text-red-500 text-lg ms-14'>{errors.name}</span>}
                </div>
                <div class='mt-6'>
                    <label class='text-sm'>email</label>
                    <input type="text" name='email' value={contact.email} onChange={changeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"/>
                    <br></br>
                    {errors.email && <span class='text-red-500 text-lg ms-14'>{errors.email}</span>}
                </div>
                <div class='mt-6'>
                    <label class='text-sm'>phone</label>
                    <input type="text" name='phoneNumber' value={contact.phoneNumber} onChange={changeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-3"/>
                    <br></br>
                    {errors.phoneNumber && <span class='text-red-500 text-lg ms-14'>{errors.phoneNumber}</span>}
                </div>
                <div class="">
                    <button /*onClick={validationForm}*/ type="submit" class="bg-transparent text-black-700  py-2 px-6 border  text-xs mt-4 ms-32">
                        Contact US
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;