//redux toolkit
import { useState } from "react";
//import redux
import { useSelector, useDispatch } from "react-redux";
import { setName } from "../features/name/nameSlice";
import { setPhone } from "../features/phone/phoneSlice";
import { setEmail } from "../features/email/emailSlice";

const SignUp = () => {
  //states
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const errors = [nameError, emailError, phoneError];

  //selectors
  const name = useSelector((store) => store.user.nameValue);
  const email = useSelector((store) => store.email.emailValue);
  const phone = useSelector((store) => store.phone.phoneValue);

  const contact = { name, email, phone };

  //dispatch
  const dispatch = useDispatch();
  const nameChangeHandler = (e) => {
    dispatch(setName(e.target.value));
  };
  const emailChangeHandler = (e) => {
    dispatch(setEmail(e.target.value));
  };
  const phoneChangeHandler = (e) => {
    dispatch(setPhone(e.target.value));
  };

  //validation and submit
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contact);

    //name validation
    if (!name) {
      setNameError("username required");
    } else if (!/^[A-Za-z]+$/.test(name)) {
      setNameError("just alphabets");
    } else {
      setNameError("");
    }

    // email validation
    if (!email) {
      setEmailError("email required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("email format is invalid");
    } else {
      setEmailError("");
    }

    // phone number validation
    if (!phone) {
      setPhoneError("phone required");
    } else if (!/^[0-9]+$/.test(phone)) {
      setPhoneError("just numbers");
    } else {
      setPhoneError(false);
    }

    if (
      !nameError.length > 0 &&
      !emailError.length > 0 &&
      !phoneError.length > 0
    ) {
      console.log({ name: name, email: email, phone: phone });
    }
  };

  return (
    <div className="ms-20">
      <p className="text-center ms-6">Sign Up</p>
      <form onSubmit={submitHandler} class="">
        <div class="mt-5">
          <label className="text-sm">name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={nameChangeHandler}
            className={`${
              nameError
                ? "border-red-500 border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
        </div>
        <div className="mt-6">
          <label className="text-sm">email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={emailChangeHandler}
            className={`${
              emailError
                ? "border-red-500 border-2 h-9 w-60  mx-auto placeholder-gray-400 placeholder:text-sm ms-4"
                : "border h-8 w-60  mx-auto placeholder-gray-400 ms-4"
            }`}
          />
          <br></br>
        </div>
        <div className="mt-6">
          <label className="text-sm">phone</label>
          <input
            type="text"
            name="phoneNumber"
            value={phone}
            onChange={phoneChangeHandler}
            className={`${
              phoneError
                ? "border-red-500 border-2 h-9 w-60 mx-auto placeholder-gray-400 placeholder:text-sm ms-3"
                : "border h-8 w-60 mx-auto placeholder-gray-400 ms-3"
            }`}
          />
          <br></br>
        </div>
        <div>
          <button
            type="submit"
            className="bg-transparent text-black-700 py-2 px-6 border text-xs mt-4 ms-32"
          >
            Contact US
          </button>
          <div>
            {errors && (
              <ol>
                {errors.map(
                  (err) =>
                    err.length > 0 && (
                      <li
                        style={{ listStyle: "square" }}
                        className="text-sm mt-3 bg-red-500 w-64 ms-12 pb-1 pt-1"
                      >
                        {err}
                      </li>
                    )
                )}
              </ol>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};
export default SignUp;

// {
//    <div
// className={`${
//   errors.map((err) => err.length > 0) &&
//   "border-red-500 border-2 text-center h-24 w-64 mt-4 ms-12"
// }`}
// >
// {errors && (
//   <ol>
//     {errors.map(
//       (err) =>
//         err.length > 0 && (
//           <li style={{ listStyle: "square" }} className="text-sm mt-2">
//             {err}
//           </li>
//         )
//     )}
//   </ol>
// )}
// </div>
// }

// {errors.map((err) => err.length > 0) && (
//   <div className="border-red-500 border-2 text-center h-24 w-64 mt-4 ms-12"></div>
// )}
