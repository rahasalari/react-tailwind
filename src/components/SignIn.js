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
            <p class='mt-5'>Contact</p>
            <form onSubmit={submitHandler}>
                <div>
                    <label>name</label>
                    <input type="text" name='name' value={contact.name} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>email</label>
                    <input type="text" name='email' value={contact.email} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>phone number</label>
                    <input type="text" name='phoneNumber' value={contact.phoneNumber} onChange={changeHandler} class="border pt-3 px-12  mx-auto placeholder-gray-400 placeholder:text-sm"/>
                    {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
                </div>
                <div class="">
                    <button /*onClick={validationForm}*/ type="submit" class="bg-transparent text-violet-700  py-2 px-6 border border-violet-700 text-xs mt-4">
                        Contact US
                    </button>
                </div>
            </form>
        </div>
    )
}
export default SignIn;