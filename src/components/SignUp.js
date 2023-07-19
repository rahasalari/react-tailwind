//redux toolkit
import { useState, useEffect } from "react";
import { Validate } from "./Validate";
//import redux
import { useSelector, useDispatch } from "react-redux";
import { setName } from '../features/name/nameSlice';
import { setPhone } from '../features/phone/phoneSlice';
import { setEmail } from '../features/email/emailSlice';

const SignUp = () => {
    
    //selectors
    const name = useSelector((store) => store.user.nameValue);
    const email = useSelector((store) => store.email.emailValue);
    const phone = useSelector((store) => store.phone.phoneValue);
    const contact = {name, email, phone};

    //dispatch
    const dispatch = useDispatch();
    const nameChangeHandler = (e) => {
        dispatch(setName(e.target.value))
    };
    const emailChangeHandler = (e) => {
        dispatch(setEmail(e.target.value))
    };
    const phoneChangeHandler = (e) => {
        dispatch(setPhone(e.target.value))
    };

    //save data
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(contact);
        // setErrors(validationForm(contact));
    };

    //validation
    const [ errors, setErrors ] = useState({});
    // useEffect(() => {
    //     setErrors(Validate(contact))
    //     console.log(errors)
    // }, [contact]);

    return(
        <div class=' ms-20'>
            <p class=''>Sign Up</p>
            <form onSubmit={submitHandler} class=''>
                <div class='mt-5'>
                    <label class='text-sm'>name</label>
                    <input type="text" name='name' value={name} onChange={nameChangeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"/>
                    <br></br>
                    {errors.name && <span class='text-red-500 text-lg ms-14'>{errors.name}</span>}
                </div>
                <div class='mt-6'>
                    <label class='text-sm'>email</label>
                    <input type="text" name='email' value={email} onChange={emailChangeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"/>
                    <br></br>
                    {errors.email && <span class='text-red-500 text-lg ms-14'>{errors.email}</span>}
                </div>
                <div class='mt-6'>
                    <label class='text-sm'>phone</label>
                    <input type="text" name='phoneNumber' value={phone} onChange={phoneChangeHandler} class="border pt-2 px-10  mx-auto placeholder-gray-400 placeholder:text-sm ms-3"/>
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
export default SignUp;